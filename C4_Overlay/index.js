let grid;
let font;
let drawables = [];
let imgHH, imgDeg;
// P5JS preload
function preload() {
    font = loadFont('assets/Graphik-Bold.otf');
    imgHH = loadImage("assets/hh.png");
    imgDeg = loadImage("assets/deg.png");
}
// user input
function mousePressed() {
    grid.toggleVisibility();
}
// P5JS setup
function setup() {
    createCanvas(windowWidth, windowHeight, P2D);
    pixelDensity(1);
    grid = new Grid(11, 11, width, height);

    let tempUpLeft = grid.getCornerA(1, 1);
    let tempBottomRight = grid.getCornerA(10, 5);
    let tempMaze = new Maze(imgHH, tempUpLeft, tempBottomRight, 20, 20, 0);
    drawables.push(tempMaze);

    tempUpLeft = grid.getCornerA(1, 6);
    tempBottomRight = grid.getCornerA(10, 10);
    tempMaze = new Maze(imgDeg, tempUpLeft, tempBottomRight, 20, 20, 1);
    drawables.push(tempMaze);
}
// P5JS draw
function draw() {
    background(255);
    //
    drawables.forEach((d)=>{
        d.draw();
    });
    //
    grid.draw();
}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
