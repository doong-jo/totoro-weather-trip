class Sky{

    constructor() { }

    init(ratio) {
        this.ratio = ratio;

        this.timeOfDay = [
            [0, 5],
            [6, 12],
            [12, 18],
            [18, 20],
            [20, 24],
        ];

        this.colorOfDay = [
            [CON.COLOR.black, CON.COLOR.dark_black, CON.COLOR.dark_indigo, CON.COLOR.bright_purple],
            [CON.COLOR.bright_yellow, CON.COLOR.dark_blue, CON.COLOR.dark_blue, CON.COLOR.bright_blue],
            [CON.COLOR.blue, CON.COLOR.bright_yellow, CON.COLOR.dark_blue, CON.COLOR.bright_blue],
            [CON.COLOR.bright_blue, CON.COLOR.white, CON.COLOR.dark_blue, CON.COLOR.dark_orange],
            [CON.COLOR.dark_indigo, CON.COLOR.bright_purple, CON.COLOR.dark_black, CON.COLOR.black],
        ];

        this.r1 = 0;
        this.g1 = 0;
        this.b1 = 0;
        this.r2 = 0;
        this.g2 = 0;
        this.b2 = 0;
    }

    calculateByTimeToSky(hours) {
        for(let i = 0; i < this.timeOfDay.length; i++) {
            if( hours >= this.timeOfDay[i][0] && hours <= this.timeOfDay[i][1] ) {
                this.drawGradient(this.timeOfDay[i][0] - 1,
                    this.timeOfDay[i][1],
                    this.colorOfDay[i],
                    hours);
				break;
            }
        }
    }

    setGradient(x, y, w, h, c1, c2) {
        noFill();

        for (var i = y; i <= y+h; i++) {
            var inter = map(i, y, y+h, 0, this.ratio);
            var c = lerpColor(c2, c1, inter);
            stroke(c);
            line(x, i, x+w, i);
        }
    }

    drawGradient(start, end, colors, hours) {
        this.r1 = map(hours, start, end, colors[0].r, colors[1].r);
        this.g1 = map(hours, start, end, colors[0].g, colors[1].g);
        this.b1 = map(hours, start, end, colors[0].b, colors[1].b);

        this.r2 = map(hours, start, end, colors[2].r, colors[3].r);
        this.g2 = map(hours, start, end, colors[2].g, colors[3].g);
        this.b2 = map(hours, start, end, colors[2].b, colors[3].b);
    }

    draw() {
        this.setGradient(0, 0, CON.DIMEN.width, CON.DIMEN.height, color(this.r1, this.g1, this.b1), color(this.r2, this.g2, this.b2) );
    }
}
