let plain;
let grid;

function preload() {
  plain = loadFont("Plain Bold.otf");
}

function setup() {
  createCanvas(843, 1192);
  background(20);

  grid = new textGrid(
    4,
    6,
    50,
    "I     like  bread",
    plain,
    120,
    0,
    -22,
    color(200, 150, 40),
    "VERTICAL"
  );
  grid.createGrid();
  grid.display();
}

