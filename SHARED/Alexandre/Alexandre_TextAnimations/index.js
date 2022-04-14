let font;
let animatedTexts = [];
let song, amp;

function preload() {
    /* font = loadFont('assets/Graphik-Bold.otf'); */
    font = loadFont('assets/Nouveau_IBM.ttf');
    song = loadSound('assets/music.mp3'); 
}
function setup() {
    angleMode(DEGREES);
    frameRate(30);
    textFont(font);
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    rectMode(CENTER);
    song.play();  
    amp = new p5.Amplitude();
}

function draw() {

    let vol = amp.getLevel(); //Pour chopper l'amplitude du son
    
//--------------------------------------------------------------------------------

    //Création d'un noise pour le Dripping Effect en bas
    let greyScale;
    for (let x = 0; x < windowWidth; x++) {
        for (let y = 0; y < windowHeight; y++) {
           greyScale = 255*noise(x*0.01, y*0.01, frameCount*0.01)
        }
    }

//--------------------------------------------------------------------------------

    //Création de l'objet dans le draw pour animer la vitesse;

    //                      gridX, gridY, vitesse, tailleDeTexte, Noise
    animatedTexts = new AnimatedText(5,6,vol*100,150,greyScale)

    background(255);

    //Selectionner un des modes:
    //animatedTexts.drawSentenceCenter();
    
    //animatedTexts.drawWordsOnGrid();

    animatedTexts.drawWordsDrippingEffect();

    //animatedTexts.drawLeftToRight();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
