let grid;
let font;
let dyingSquares = [];
let dyingTexts = [];
let zik;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    track = loadSound('assets/08.Mountains.mp3');
    // track = loadSound('assets/04 - Tame Impala - Elephant (Official Video).mp3');
    // track = loadSound('assets/Autechre_-_Gantz_Graf.mp3');
}
// user input
function mousePressed() {
    grid.toggleVisibility();
    zik.toggleDebug();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    //
    grid = new Grid(10, 40, width, height);

    //
    zik = new Zik(track, 8); // 4-10
    // zik.addListener("bass", ()=>{addSquare(500)});
    // zik.addListener("lowMid", ()=>{addSquare(200)});
    // zik.addListener("mid", ()=>{addSquare(100)});
    // zik.addListener("highMid", ()=>{addSquare(50)});
    // zik.addListener("trebble", ()=>{addSquare(10)});
    //
    zik.addListener("mid", ()=>{addText("00000")});
    // zik.addListener("mid", ()=>{addText("----------")});
    // zik.addListener("treble", ()=>{addText("XXX")});
    // zik.addListener("lowMid", ()=>{addText("+")});
    // zik.addListener("highMid", ()=>{addText("%%%%%%%%%%%%%%%")});
}

function addText(text) {
    let rx = floor(random(0, 2))*5;
    let ry = floor(random(0, 39));
    let cornerA = grid.getCornerA(rx, ry);
    rx += 5;
    ry += 1;
    let cornerB = grid.getCornerA(rx, ry);
    let tempText = new AnimatedText(text, cornerA, cornerB, 0);
    dyingTexts.push(tempText);
}
function addSquare(size) {
    let rx = floor(random(0, 10));
    let ry = floor(random(0, 19));
    let tempDyingSquare = new DyingSquare(grid.getCornerA(rx, ry), size);
    dyingSquares.push(tempDyingSquare);
}
// P5JS draw
function draw() {
    background(255);
    stroke(0);
    grid.draw();
    zik.listen();
    // let s = zik.getLevel("bass");
    // ellipse(width/2, height/2, s, s);
    // Manage all squares
    dyingSquares = dyingSquares.filter((square) => {
        return square.alive;
    });
    dyingSquares.forEach((square) => {
        square.draw();
    });
    // Manage all squares
    dyingTexts = dyingTexts.filter((t) => {
        return t.alive;
    });
    dyingTexts.forEach((t) => {
        t.draw();
    });
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
