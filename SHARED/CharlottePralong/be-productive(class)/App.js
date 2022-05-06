// quand tu dois répéter du code, il y a une meilleure solution !
// Il faut définir des variables ici (pour ton tableau d'images, et pour ton objet "effectA" dérivé de ta class effect)
let productive = []; // créer un tableau au lieu de 26 variables.
let effectA;
let grid;
//
function preload() {
    for(let i=1; i<=26; i++) {
        let num = nf(i, 2);
        let name = "assets/be-productive-"+num+".png";
        let tempImage = loadImage(name);
        productive.push(tempImage);
    }

    // img = loadImage("assets/be-productive-01.png");
    // img2 = loadImage("assets/be-productive-02.png");
    // img3 = loadImage("assets/be-productive-03.png");
    // img4 = loadImage("assets/be-productive-04.png");
    // img5 = loadImage("assets/be-productive-05.png");
    // img6 = loadImage("assets/be-productive-06.png");
    // img7 = loadImage("assets/be-productive-07.png");
    // img8 = loadImage("assets/be-productive-08.png");
    // img9 = loadImage("assets/be-productive-09.png");
    // img10 = loadImage("assets/be-productive-10.png");
    // img11 = loadImage("assets/be-productive-11.png");
    // img12 = loadImage("assets/be-productive-12.png");
    // img13 = loadImage("assets/be-productive-13.png");
    // img14 = loadImage("assets/be-productive-14.png");
    // img15 = loadImage("assets/be-productive-15.png");
    // img16 = loadImage("assets/be-productive-16.png");
    // img17 = loadImage("assets/be-productive-17.png");
    // img18 = loadImage("assets/be-productive-18.png");
    // img19 = loadImage("assets/be-productive-19.png");
    // img20 = loadImage("assets/be-productive-20.png");
    // img21 = loadImage("assets/be-productive-21.png");
    // img22 = loadImage("assets/be-productive-22.png");
    // img23 = loadImage("assets/be-productive-23.png");
    // img24 = loadImage("assets/be-productive-24.png");
    // img25 = loadImage("assets/be-productive-25.png");
    // img26 = loadImage("assets/be-productive-26.png");
}

function setup() {
    //frameRate(1);
    createCanvas(1000, 1415);
    background(255);
    // colorMode(HSB, height, height, height);
    noStroke();
    grid = new Grid(10, 10);
    grid.toggleVisibility();
    // il faut créer ton object dans ton setup, sinon tu le recréer à chaque fois que p5 redessine le canvas
    console.log(productive);
    effectA = new Effect(productive, grid.getCornerA(0, 0), grid.getCornerA(4, 4));
}

function draw() {
    background(255);
    stroke(0);
    grid.draw();
    // Ici tu peux appeler la fonction pour dessiner ton effectA
    effectA.draw();
    // ca c'était le début de la bonne idée, tout mettre en liste !
    // du coup, maintenant on l'a déjà
    // let productive = [
    //     img,
    //     img2,
    //     img3,
    //     img4,
    //     img5,
    //     img6,
    //     img7,
    //     img8,
    //     img9,
    //     img10,
    //     img11,
    //     img12,
    //     img13,
    //     img14,
    //     img15,
    //     img16,
    //     img17,
    //     img18,
    //     img19,
    //     img20,
    //     img21,
    //     img22,
    //     img23,
    //     img24,
    //     img25,
    //     img26,
    // ];

}
