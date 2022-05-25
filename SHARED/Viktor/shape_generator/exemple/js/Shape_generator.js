//Ce script doit être chargé entre easing.js et sketch.js dans index.html
//Il permet de générer des formes aléatoires sur une grille modulable et d'animer ces formes entre elles
//Si il y a une erreur "Maximum callsize" c'est soit car nbPoints est trop grand, soit parceque nbColumns et nbRows sont trop petits, soit parceque minDistBetweenPoints est trop grand
let shape_1;

function setup() {
  createCanvas(620, 877);
  shape_1 = new Shape(
    620,                  //Largeur du canvas
    877,                  //Hauteur du canvas
    3,                    //Nombre de colonnes
    4,                    //Nombre de lignes
    20,                   //Taille de la marge sur les côtés (en pixels)
    12,                   //Nombre de points que notre forme va avoir(dépend aussi de la taille de la grille)
    3,                    //Nombre de variations de formes
    20,                   //Distance minimale entre les points, fonctionne bien avec une grande grille (en pixels)
    true,                 // True = positif, false = négatif
    1.5,                  // Rythme auquel les formes s'updatent (En secondes)
    1.5,                  //Vitesse à laquelle les formes s'updatent (En secondes)
    color(238, 28, 37)    //Couleur de la forme au format p5 -> color(255,0,0)
  );
}

function draw() {
  background(20);
  shape_1.display();
}

class Shape {
  constructor(
    w, //Largeur du canvas
    h, //Hauteur du canvas
    nbColumns, //Nombre de colonnes
    nbRows, //Nombre de lignes
    margin, //Taille de la marge sur les côtés (en pixels)
    nbPoints, //Nombre de points que notre forme va avoir(dépend aussi de la taille de la grille)
    nbVariations, //Nombre de variations de formes
    minDistBetweenPoints, //Distance minimale entre les points, fonctionne bien avec une grande grille (en pixels)
    shapeMode, // True = positif, false = négatif
    cadence, // Rythme auquel les formes s'updatent
    moveSpeed, //Vitesse à laquelle les formes s'updatent
    color //COuleur de la forme au format p5 -> color(255,0,0)
  ) {
    //Paramètres
    this.w = w;
    this.h = h;
    this.nbColumns = nbColumns;
    this.nbRows = nbRows;
    this.margin = margin;
    this.nbPoints = nbPoints;
    this.nbVariations = nbVariations;
    this.shapeMode = shapeMode;
    this.cadence = cadence;
    this.moveSpeed = moveSpeed;
    this.minDistBetweenPoints = minDistBetweenPoints;
    this.color = color;

    //Autres variables globales
    this.allPoints = []; //Contient tous les points de la grille
    this.variations = []; //Contient toutes les variations de forme
    this.displayedShape = undefined;
    this.vIndex = 0;
    this.currentNbVariations = 0;
    this.canMove = false;
    this.pg = createGraphics(this.w, this.h);
    this.cellSizeX = (this.w - 2 * this.margin) / this.nbColumns;
    this.cellSizeY = (this.h - 2 * this.margin) / this.nbRows;

    //On crée tous les points
    for (let i = 0; i <= this.nbColumns; i++) {
      for (let j = 0; j <= this.nbRows; j++) {
        let x = this.cellSizeX * i + this.margin;
        let y = this.cellSizeY * j + this.margin;

        this.allPoints.push(
          new Point(
            x,
            y,
            this.w,
            this.h,
            this.minDistBetweenPoints,
            this.moveSpeed
          )
        );
      }
    }
    this.createShape();

    setInterval(this.updateVariation.bind(this), this.cadence * 1000);
  }

  createShape() {
    let s = [];

    // Choix
    for (let i = 0; i < this.nbPoints; i++) {
      let randomIndexPos = floor(random(this.allPoints.length));
      s[i] = this.allPoints[randomIndexPos];
    }

    // Check distance
    let foundShape = true;

    //On check
    for (let i = 0; i < this.nbPoints; i++) {
      for (let j = 0; j < this.nbPoints; j++) {
        if (i != j && s[i].intersects(s[j])) {
          foundShape = false;
        } else if (i != j && s[i].sameAngle(s[j])) {
          foundShape = false;
        }
      }
    }

    //Si on trouve une forme
    if (foundShape) {
      //On tri
      s = s.sort((a, b) => a.angle - b.angle);

      //Puis on enregistre dans variations
      this.variations[this.currentNbVariations] = s;

      //Ensuite on passe à l'itération suivante si on les a pas toutes
      if (this.currentNbVariations < this.nbVariations - 1) {
        this.currentNbVariations++;
        this.createShape();
      } else {
        //Quand on a tout
        console.log("Found " + (this.currentNbVariations + 1) + " variations");
        this.displayedShape = this.variations[0];
      }
    } else {
      //Sinon on recommence
      this.pg.clear();
      this.createShape();
    }
  }

  updateVariation() {
    //Navigation à travers les variations de forme
    if (this.vIndex < this.nbVariations - 1) {
      this.vIndex++;
    } else {
      this.vIndex = 0;
    }

    //Update la position des points
    for (let i = 0; i < this.nbPoints; i++) {
      let v = this.variations[this.vIndex][i];
      let d = this.displayedShape[i];

      d.P0 = d.P1;
      d.scale = 0;
      d.P1 = createVector(v.x, v.y);
    }
    this.canMove = true;
  }

  movePoints() {
    //Appelé 60x par seconde, déplace les points vers leur nouvel emplacement
    for (let i = 0; i < this.nbPoints; i++) {
      this.displayedShape[i].movePoints(this.canMove);
    }
  }

  display() {
    this.pg.clear();

    //On fait bouger les points
    this.movePoints();

    //Style de la forme
    this.pg.fill(this.color);
    this.pg.noStroke();

    //Construction de la forme
    this.pg.beginShape();

    //Mode contour, la forme est en négatif
    if (this.shapeMode) {
      for (let i = 0; i < this.nbPoints; i++) {
        let d = this.displayedShape[i].pos;
        this.pg.vertex(d.x, d.y);
      }
    } else {
      //Mode normal, la forme est en positif
      this.pg.vertex(0, 0);
      this.pg.vertex(this.w, 0);
      this.pg.vertex(this.w, this.h);
      this.pg.vertex(0, this.h);

      //Masque
      this.pg.beginContour();
      //Sens contraire des aiguilles
      for (let i = this.nbPoints - 1; i >= 0; i--) {
        let d = this.displayedShape[i].pos;
        this.pg.vertex(d.x, d.y);
      }
      this.pg.endContour();
    }
    this.pg.endShape(CLOSE);

    //On affiche le pg
    image(this.pg, 0, 0);
  }
}

class Point {
  constructor(x, y, w, h, minDistBetweenPoints, moveSpeed) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.minDistBetweenPoints = minDistBetweenPoints;
    this.moveSpeed = moveSpeed;

    //Pour le mouvement
    this.pos = createVector(this.x, this.y);
    this.P0 = this.pos;
    this.P1 = this.P0;

    //Calcul de l'angle
    this.v0 = createVector(this.w / 2, this.h / 2);
    this.v1 = createVector(this.w / 2, 0);
    this.v2 = createVector(this.x - this.w / 2, this.y - this.h / 2);
    this.angleBetween = this.v1.angleBetween(this.v2);
    this.angle = degrees(this.angleBetween).toFixed(1);
  }

  movePoints(canMove) {
    if (canMove) {
      let targetScale = 1;
      let speed = this.moveSpeed / 100;

      let easedScale = map2(this.scale, 0, targetScale, 0, 1, 6, BOTH);

      this.scale += speed;
      let V_dist = p5.Vector.sub(this.P1, this.P0).mult(easedScale);
      this.pos = p5.Vector.add(this.P0, V_dist);
    }
  }
  intersects(other) {
    //On check la distance avec les autres points
    let d = dist(this.x, this.y, other.x, other.y);
    //Si y'a deux points au même endroit
    if (d == 0) return true;

    if (d <= this.minDistBetweenPoints) {
      return true;
    } else {
      return false;
    }
  }
  sameAngle(other) {
    if (this.angle == other.angle) {
      return true;
    } else {
      return false;
    }
  }
}
