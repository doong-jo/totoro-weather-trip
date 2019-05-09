const CONSTANT = new CONST();

class Drop {
    constructor(props) {
        this.initX = function() {
            this.x = random() * width;
        };
        this.initY = function() {
            this.y = -random() * height / 3; // Initialise rain somewhat off the screen
        };

        this.initX();
        this.y = random() * height;

        this.length = random() * 10;
        this.speed = random();

        this.drawAndDrop = function() {
            this.draw();
            this.drop();
        };

        this.draw = function() {
            stroke(CONSTANT.COLOR.rain);
            strokeWeight(2);
            line(this.x, this.y, this.x, this.y + this.length);
        };

        this.drop = function() {
            if (this.y < height) {
                this.y += this.speed;
                this.speed += CONSTANT.VALUE.acceleration;
            } else {
                this.speed = random();
                this.initY();
                this.initX();
            }
        };
    }
}

class Rain {
    constructor(props) {
        this.drops = [];
    }

    init() {
        for (var i = 0; i < CONSTANT.VALUE.rain_num; i++) {
            this.drops.push(new Drop());
        }
    }

    draw() {
        this.drops.forEach(function(d) {
            d.drawAndDrop();
        });
    }
}
