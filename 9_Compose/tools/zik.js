class Zik {
    constructor(track, sensitivity) {
        this.debug = false;
        this.sensitivity = sensitivity;
        this.track = track;
        // this.mic = new p5.AudioIn();
        this.analyzer = new p5.Amplitude();
        this.analyzer.setInput(this.track);
        this.fft = new p5.FFT();
        this.fft.setInput(this.track);
        //
        this.level;
        this.freqs = [];
        this.previousFreqs = [];
        this.accels = [];
        this.freqNames = ["bass", "lowMid", "mid", "highMid", "treble"];
        this.rectWidth = width / this.freqNames.length;
        //
        this.listeners = {};
    }
    click() {
        this.track.loop();
    }
    addListener(name, callback) {
        if (this.listeners[name]) {
            this.listeners[name].push(callback);
        } else {
            this.listeners[name] = [];
            this.listeners[name].push(callback);
        }
    }
    getLevel(name) {
        let v = -1;
        this.freqNames.forEach((n, i)=>{
            if(n == name) {
                v = i;
            }
        });
        if(v<0) {
            return -1;
        }
        return this.freqs[v];
    }
    listen() {
        this.level = this.analyzer.getLevel();
        let spectrum = this.fft.analyze();
        //
        this.freqs.forEach((freq, i) => {
            this.previousFreqs[i] = freq;
        });
        //
        this.freqNames.forEach((name, i) => {
            this.freqs[i] = this.fft.getEnergy(name);
        });
        //
        this.freqs.forEach((freq, i) => {
            this.accels[i] = this.freqs[i] - this.previousFreqs[i];
        });
        this.freqNames.forEach((name, i) => {
            if (this.accels[i] > this.sensitivity) {
                if (this.listeners[name]) {
                    this.listeners[name].forEach(function(f) {
                        f();
                    });
                }
                if (this.debug) {
                    fill(255, 0, 0);
                }
            } else {
                if (this.debug) {
                    fill(0);
                }
            }
            if (this.debug) {
                rect(i * this.rectWidth, 0, this.rectWidth, this.freqs[i]);
            }
        });
    }
    toggleDebug() {
        this.debug = !this.debug;
    }
}
