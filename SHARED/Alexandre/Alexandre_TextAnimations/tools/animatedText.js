class AnimatedText {
    constructor(qttX,qttY,defilSpeed,textSize,greyScale) {
        //Phrase de base dans laquelle on vient écrire
        this.sentenceBase = "brrr";
        //1ere qui va être modifiée
        this.sentenceFr = "brrr";
        //2eme phrase qui va modifier la 1ere
        this.sentenceOther = "бррр";

        this.defilSpeed = defilSpeed;
        this.textSize = textSize;
        this.alignCenterX = windowWidth/2-((this.sentenceBase.length*this.textSize)/4);
        this.alignCenterY = windowHeight/2;

        this.greyScale = greyScale;

        this.arrayBase = this.sentenceBase.split("");
        this.arrayFrench = this.sentenceFr.split("");
        this.arrayRussian = this.sentenceOther.split("");

        this.position = floor(map(this.defilSpeed*10,0,500,0,5))//floor(map(sin(this.defilSpeed),-1,1,0,this.sentenceFr.length));

        this.arrayBase[this.position] = this.arrayRussian[this.position];

        //GRID
        this.qttX = qttX;
        this.qttY = qttY;
        this.visible = false;
    }
    //GRID
    getW() {
        return width / this.qttX;
    }
    getH() {
        return height / this.qttY;
    }
    getXfrom01(x) {
        return floor(x*this.qttX);
    }
    getYfrom01(y) {
        return floor(y*this.qttY);
    }
    getCornerA(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector(x * this.getW(), y * this.getH());
    }
    getCornerB(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+1) * this.getW(), y * this.getH());
    }
    getCornerC(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+1) * this.getW(), (y+1) * this.getH());
    }
    getCornerD(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector(x * this.getW(), (y+1) * this.getH());
    }
    getMiddle(x, y) {
        x = floor(x);
        y = floor(y);
        return createVector((x+0.5) * this.getW(), (y+0.5) * this.getH());
    }
    getCornersAC(x, y) {
        x = floor(x);
        y = floor(y);
        return {
            a: getCornerA(x, y),
            c: getCornerC(x, y),
        }
    }
    getCornersABCD(x, y) {
        x = floor(x);
        y = floor(y);
        return {
            a: getCornerA(x, y),
            b: getCornerB(x, y),
            c: getCornerC(x, y),
            d: getCornerD(x, y),
        }
    }
    drawSentenceCenter(){
        textSize(this.textSize);
        text(this.arrayBase.join("").toUpperCase(),this.alignCenterX,this.alignCenterY);
    }
    drawWordsOnGrid() {
        textSize(this.textSize);

        //let position = floor(map(this.greyScale,0,255,0,5));

        //this.arrayBase[this.position] = this.arrayRussian[this.position];
        console.log(this.position)
        for (let a = 0; a < this.qttX + 1; a++) {
            for (let b = 0; b < this.qttY + 1; b++) {
                text(this.arrayBase.join("").toUpperCase(),a*(this.getW())+((this.getW()/2)-(this.arrayBase.length*this.textSize)/4),b*this.getH()-((this.getH()/2)-this.textSize/2));
            }    
        }
    }
    drawWordsDrippingEffect() {
        textSize(this.textSize);
        
        let arrayBase2 = this.sentenceBase.split("");
        let arrayFrench2 = this.sentenceFr.split("");
        let arrayRussian2 = this.sentenceOther.split("");


        let position = floor(map(this.greyScale,0,255,0,5));

        for (let a = 0; a < this.qttX + 1; a++) {
            for (let b = 0; b < this.qttY + 1; b++) {
                let position = floor(map(this.greyScale,0,255,0,random(0,6)));
                let randomPos = floor(random(0,arrayBase2.length));
                arrayBase2[position+a] = arrayRussian2[position+b];
                text(arrayBase2.join("").toUpperCase(),a*(this.getW())+((this.getW()/2)-(this.arrayBase.length*this.textSize)/4),b*this.getH()-((this.getH()/2)-this.textSize/2));
            }    
        }
    }
    drawLeftToRight() {
        textSize(this.textSize);
        
        let arrayBase2 = this.sentenceBase.split("");
        let arrayFrench2 = this.sentenceFr.split("");
        let arrayRussian2 = this.sentenceOther.split("");


        let position = floor(map(this.greyScale,0,255,0,5));

        for (let a = 0; a < this.qttX + 1; a++) {
            let randomPos = floor(random(0,arrayBase2.length));
                arrayBase2[randomPos] = arrayRussian2[randomPos];
            for (let b = 0; b < this.qttY + 1; b++) {
                
                text(arrayBase2.join("").toUpperCase(),a*(this.getW())+((this.getW()/2)-(this.arrayBase.length*this.textSize)/4),b*this.getH()-((this.getH()/2)-this.textSize/2));
            }    
        }
    }
}
