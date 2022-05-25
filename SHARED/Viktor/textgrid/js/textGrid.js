let showGrid = true;

class textGrid {
  constructor(
    nbCol, //Nombre de colonnes
    nbRow, //Nombres de lignes
    marginSize, //Taille de la marge sur les cotés
    text, //Texte à écrire -> "montexte"
    font, //Font à utiliser -> "mafont.otf" La font doit être preloadé avant
    textSize, //Taille du texte
    textHorizontalOffset, //Décalage horizontal des lettres, utiliser pour aligner correctement les lettres des fois
    textVerticalOffset, //Décalage vertical des lettres, utiliser pour aligner correctement les lettres des fois
    textColor, //Couleur des lettres -> color(25,60,70)
    displayMode //Comment les lettres vont se placer dans la grille : "BASIC","VERTICAL","RANDOM","RANDOM_2"
  ) {
    //Paramètres
    this.nbCol = nbCol;
    this.nbRow = nbRow;
    this.marginSize = marginSize;
    this.text = text;
    this.font = font;
    this.textSize = textSize;
    this.textHorizontalOffset = textHorizontalOffset;
    this.textVerticalOffset = textVerticalOffset;
    this.textColor = textColor;
    this.displayMode = displayMode;
    this.indexOffset = 0;

    //Taille des boxes à l'intérieur des marges
    this.boxWidth = (width - 2 * this.marginSize) / this.nbCol;
    this.boxHeight = (height - 2 * this.marginSize) / this.nbRow;

    //Array de boxes, contient toutes les cases de la grille
    this.boxes = [];

    //On crée un array qui contient les caractères séparés
    this.splitText = this.text.split("");

    //Et un array qui contiendra les caractères triès selon le displayMode
    this.sortedText = [];

    //Création du Pgraphics

    this.pg = createGraphics(width, height);
    this.createGrid();
  }

  createGrid() {
    //Création de la grille
    //this.pg.background(30);

    for (let i = 0; i < this.nbCol; i++) {
      for (let j = 0; j < this.nbRow; j++) {
        //
        //On choppe les coordonnées exactes en prenant la marge en compte
        let x = i * this.boxWidth + this.marginSize;
        let y = j * this.boxHeight + this.marginSize;

        // On crée l'ordre en fonction du displayMode
        let index;

        switch (this.displayMode) {
          case "BASIC":
            index = i + j * this.nbCol;
            break;
          case "VERTICAL":
            index = j + i * this.nbRow;
            break;
          case "RANDOM":
            index = floor(random(0, this.splitText.length));
            break;
          case "SQUARE":
            index = j + i;
            break;
          case "ANIMATION":
            index = i + j * this.nbCol - this.indexOffset;
            break;
        }

        //On tri les caractères en fonction de l'ordre établi
        this.sortedText[index] = this.splitText[index];

        //Pour chaque case, on crée une box et on la range dans l'ordre défini par index dans un array
        this.boxes[index] = new Box(
          this.pg,
          x,
          y,
          this.boxWidth,
          this.boxHeight,
          this.sortedText[index],
          this.font,
          this.textSize,
          this.textHorizontalOffset,
          this.textVerticalOffset,
          this.textColor
        );

        // On affiche toutes les boxes
        this.boxes[index].display();
      }
    }
    if (this.indexOffset > this.boxes.length) {
      this.indexOffset = -this.splitText.length;
    }
    this.indexOffset++;
  }

  display() {
    //Affichage du PGraphics sur le canvas principal
    image(this.pg, 0, 0);
  }
}

class Box {
  //La box affiche une lettre, elle représente une case. Une lettre lui est attribuée
  constructor(pg, x, y, w, h, char, font, size, xOffset, yOffset, color) {
    this.pg = pg;
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.char = char;
    this.font = font;
    this.size = size;
    this.xOffset = xOffset;
    this.yOffset = yOffset;
    this.color = color;
  }

  display() {
    this.pg.fill(this.color);
    this.pg.textSize(this.size);
    this.pg.textAlign(CENTER, CENTER);
    this.pg.textFont(this.font);
    this.pg.text(
      this.char,
      this.xOffset + this.x + this.w / 2,
      this.yOffset + this.y + this.h / 2
    );

      this.pg.noFill();
      this.pg.stroke(this.color);
      this.pg.rect(this.x, this.y, this.w, this.h);
  }
}
