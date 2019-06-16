class Sky{

    constructor() { }

    init(ratio) {
        this.ratio = ratio;
        this.hours = 0;

        //Use background image color change
        this.r = 0;
        this.g = 0;
        this.b = 0;

        //Use Sky gradient color change
        this.r1 = 0;
        this.g1 = 0;
        this.b1 = 0;
        this.r2 = 0;
        this.g2 = 0;
        this.b2 = 0;
        this.color1 = {};
        this.color2 = {};
        this.color3 = {};
        this.color4 = {};

    }

    calculateByTimeToSky(hours) {
        this.hours = hour;

        if(this.hours <= 5) {
            this.drawGradient(0, 5,
                CON.COLOR.black, CON.COLOR.dark_black,
                CON.COLOR.dark_indigo, CON.COLOR.bright_purple,
                this.hours);
        } else if(this.hours > 5 && this.hours <= 12 ){

            this.drawGradient(5, 12,
                CON.COLOR.bright_yellow, CON.COLOR.dark_blue,
                CON.COLOR.dark_blue, CON.COLOR.bright_blue,
                this.hours);

        } else if(this.hours > 12 && this.hours <= 16){

            this.drawGradient(12, 16,
                CON.COLOR.blue, CON.COLOR.bright_yellow,
                CON.COLOR.bright_blue, CON.COLOR.dark_blue,
                this.hours);

        } else if(this.hours > 16 && this.hours <= 20){

            this.drawGradient(16, 20,
                CON.COLOR.bright_blue, CON.COLOR.white,
                CON.COLOR.dark_purple, CON.COLOR.dark_orange,
                this.hours);
        } else if(this.hours > 20 && this.hours <= 24){
            this.drawGradient(20, 24,
                CON.COLOR.dark_indigo, CON.COLOR.bright_purple,
                CON.COLOR.dark_black, CON.COLOR.black,
                this.hours);
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

    drawGradient(start, end, color1, color2, color3, color4, hours) {
        this.r1 = map(hours, start, end, color1.r, color2.r);
        this.g1 = map(hours, start, end, color1.g, color2.g);
        this.b1 = map(hours, start, end, color1.b, color2.b);

        this.r2 = map(hours, start, end, color3.r, color4.r);
        this.g2 = map(hours, start, end, color3.g, color4.g);
        this.b2 = map(hours, start, end, color3.b, color4.b);
    }

    draw() {
        this.setGradient(0, 0, CON.DIMEN.width, CON.DIMEN.height, color(this.r1, this.g1, this.b1), color(this.r2, this.g2, this.b2) );
    }
}
