let mirrorThing = [];

let verticalSpacing = 150
let columnsNumber = 15
function setup() {
    angleMode(DEGREES);
    frameRate(30);
    createCanvas(windowWidth, windowHeight);
    pixelDensity(1);
    rectMode(CENTER);
    // Tu créais dans le draw, donc normal au bout d'un moment il y a avait 60000 de canvas...
    let tempMirrorThing = new MirrorThing(frameCount,4,"a");
    mirrorThing.push(tempMirrorThing);
}

function draw() {
    background(255);
    // let verticalTranslator
    translate(0,-300);
    // for(let x = 0; x < columnsNumber;x++){
    //     translate(0,verticalSpacing)
    //     mirrorThing.drawTheThing();
    // }
    mirrorThing.forEach((mt)=>{
        translate(0,verticalSpacing)
        mt.drawTheThing();
    });
/*     mirrorThing.drawTheThing();
    push();
    translate(0,150);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,300);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,450);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,600);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,750);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,900);
    mirrorThing.drawTheThing();
    pop();
    push();
    translate(0,1050);
    mirrorThing.drawTheThing();
    pop();
 */}
// P5JS windowResized
function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
