class Dandalion {
    constructor() {
        this.particles = [];
        this.centerBranch;
        this.blowArea = 0;
        this.blowAreaMax = 0;
        this.step = 2;
        this.constRadius = 2;

        this.cosN = 4.5;
        this.cosD = 12.3;
        this.radiusDiv = 20;

        this.num = 50;
        this.interval = 30;
    }

    init(x, y){
        this.canvas_x = x;
        this.canvas_y = y;

        for (let i = 0; i < 50; i++) {
            this.particles.push(new Particle(random(this.canvas_x), random(this.canvas_y)));
        }
        this.centerBranch = createVector(this.canvas_x / 6, this.canvas_y * 1 / 2);
    }

    blow(wind) {
        this.blowAreaMax += wind / 3;
        
        if( this.blowAreaMax > 75 ) {
            this.refresh(20);
        }
    }

    refresh(sec) {
        setTimeout(()=> {
            datGuiParams.displayMode = true;
            this.blowAreaMax = 0;
            this.blowArea = 0;
            for (let i = 0; i < this.particles.length; i++) {
                this.particles[i].refresh();
            }
        }, CON.TIME.sec * sec);

        setTimeout(()=> { datGuiParams.displayMode = false; }, CON.TIME.sec * 25);
    }

    draw(){
        if (datGuiParams.displayMode || datGuiParams.windMode) {
            push();
                strokeWeight(CON.VALUE.dandalion_stem_weight);
                stroke(CON.COLOR.dandalion_stem);
                line(this.centerBranch.x, this.canvas_y, this.centerBranch.x, this.centerBranch.y);
            pop();

            push();
                strokeWeight(CON.VALUE.dandalion_center_radius);
                stroke(CON.COLOR.dandalion_center);
                ellipse(this.centerBranch.x, this.centerBranch.y, CON.VALUE.dandalion_center_radius, CON.VALUE.dandalion_center_radius);
            pop();
        }

        for (let i = 0; i < this.particles.length; i++) {
            if (datGuiParams.displayMode) {
                this.particles[i].moveWithLerp();
            } else if (datGuiParams.windMode) {
                if (this.blowArea < this.blowAreaMax ) {
                    this.blowArea += 0.003;
                }
                const distance = this.particles[i].pos.dist(this.centerBranch);
                if (distance > this.num - this.blowArea + 20) {
                    this.particles[i].wind();
                }
            }

            this.particles[i].update();
            this.particles[i].display(CON.COLOR.dandalion);
        }

        push();
            translate(this.centerBranch.x, this.centerBranch.y);
            let count = 0;
            for (let a = 0; a < TWO_PI * this.interval; a += this.step) {
                const k = this.cosN / this.cosD;
                const r = this.num * cos(k * a) + this.constRadius;
                const x = r * cos(a) + (r / this.radiusDiv) * cos(0);
                const y = r * sin(a) + (r / this.radiusDiv) * sin(0);

                if (count < this.particles.length) {
                    this.particles[count].targetPos = createVector(x + this.centerBranch.x, y + this.centerBranch.y);
                }
                count++;
            }

            if (count < this.particles.length) {
                this.particles.pop();
            } else if (count > this.particles.length) {
                this.particles.push(new Particle(this.centerBranch.x, this.centerBranch.y));
            }
        pop();

        if (datGuiParams.debugMode) {
            fill(255);
            text("frameRate:" + round(frameRate()), 95, 30);

            stroke(255);
            noFill();
            ellipse(this.centerBranch.x, this.centerBranch.y, this.blowArea, this.blowArea);
        }
    }
}
