const barWidth = 20;
let lastBar = -1;
let imagechosen = 0;

function preload() {
  img = loadImage("assets/be-productive-01.png");
  img2 = loadImage("assets/be-productive-02.png");
  img3 = loadImage("assets/be-productive-03.png");
  img4 = loadImage("assets/be-productive-04.png");
  img5 = loadImage("assets/be-productive-05.png");
  img6 = loadImage("assets/be-productive-06.png");
  img7 = loadImage("assets/be-productive-07.png");
  img8 = loadImage("assets/be-productive-08.png");
  img9 = loadImage("assets/be-productive-09.png");
  img10 = loadImage("assets/be-productive-10.png");
  img11 = loadImage("assets/be-productive-11.png");
  img12 = loadImage("assets/be-productive-12.png");
  img13 = loadImage("assets/be-productive-13.png");
  img14 = loadImage("assets/be-productive-14.png");
  img15 = loadImage("assets/be-productive-15.png");
  img16 = loadImage("assets/be-productive-16.png");
  img17 = loadImage("assets/be-productive-17.png");
  img18 = loadImage("assets/be-productive-18.png");
  img19 = loadImage("assets/be-productive-19.png");
  img20 = loadImage("assets/be-productive-20.png");
  img21 = loadImage("assets/be-productive-21.png");
  img22 = loadImage("assets/be-productive-22.png");
  img23 = loadImage("assets/be-productive-23.png");
  img24 = loadImage("assets/be-productive-24.png");
  img25 = loadImage("assets/be-productive-25.png");
  img26 = loadImage("assets/be-productive-26.png");
}

function setup() {
  //frameRate(1);
  createCanvas(1000, 1415);
  background(200);
  colorMode(HSB, height, height, height);
  noStroke();
}

function draw() {
  //clear();
  let productive = [
    img,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
    img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
  ];
  let whichBar = mouseX / barWidth;
  if (whichBar !== lastBar) {
    let barX = whichBar * barWidth;
    fill(mouseY, height, height);
    rect(barX, 0, barWidth, height);
    lastBar = whichBar;
  }

  //var imagechosen = random(productive);
  imagechosen++;
  if (imagechosen >= productive.length) {
    imagechosen = 0;
  }
  let seledctedImage = productive[imagechosen];
  image(seledctedImage, 0, height / 2);

  //image(imagechosen, 0, height / 2);
  console.log(imagechosen);
}
