class Effect {
    constructor(listeimages, cornerA, cornerB) {
        // j'ai repris le code de clipped text pour créer un "sous-canvas", propre à ton futur objet
        this.listeimages = listeimages;
        this.cornerA = cornerA;
        this.cornerB = cornerB;
        this.w = this.cornerB.x - this.cornerA.x;
        this.h = this.cornerB.y - this.cornerA.y;
        this.surface = createGraphics(this.w, this.h);
        this.surface.textAlign(CENTER, CENTER);
        this.surface.textSize(this.h);
        // Tu dois effectivement définir tes variables ici (c'est comme le setup, mais local à ton futur objet)
        this.barWidth = 20;
        this.lastBar = -1;
        this.imagechosen = 0;
        this.whichBar = mouseX / this.barWidth;
    }

    draw() {
        // on peut choisir de "reset" ce sous canvas ou pas (si tu veux l'enlever, commen la ligne suivante
        this.surface.clear();
        this.surface.background(200);
        //
        if (this.whichBar !== this.lastBar) {
            let barX = this.whichBar * this.barWidth;
            fill(mouseY, this.surface.height, this.surface.height);
            rect(barX, 0, this.barWidth, this.surface.height);
            this.lastBar = this.whichBar;
        }

        //var imagechosen = random(listeimages);
        this.imagechosen++;
        if (this.imagechosen >= this.listeimages.length) {
            this.imagechosen = 0;
            let seledctedImage = this.listeimages[this.imagechosen];

            this.surface.image(seledctedImage, 0, 0, this.surface.width, this.surface.height);
        }
        image(this.surface, this.cornerA.x, this.cornerA.y);
    }
}
