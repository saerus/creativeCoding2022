let shape_1;

function setup() {
  createCanvas(620, 877);
  shape_1 = new Shape(
    620,
    877,
    3,
    4,
    20,
    12,
    3,
    20,
    true,
    1.5,
    1.5,
    color(238, 28, 37)
  );
}

function draw() {
  background(20);
  shape_1.display();
}