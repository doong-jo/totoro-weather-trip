let snowflakes = [];

class SnowFlake {
    constructor(props) {
        this.posX = 0;
        this.posY = random(-50, 0);
        this.initialangle = random(0, 2 * PI);
        this.size = random(2, 5);

        this.radius = sqrt(random(pow(width / 2, 2)));

        this.update = function(time) {
            let w = 0.6; // angular speed
            let angle = w * time + this.initialangle;
            this.posX = width / 2 + this.radius * sin(angle);

            this.posY += pow(this.size, 0.5);

            if (this.posY > height) {
                let index = snowflakes.indexOf(this);
                snowflakes.splice(index, 1);
            }
        };

        this.display = function() {
            ellipse(this.posX, this.posY, this.size);
        };
    }
}

class Snow {
    constructor(props) { this.snow_num = 0; }

    init() { }

    setAmount(amount) {
        this.snow_num = int(amount * 10);
    }

    draw() {
        fill(240);
        noStroke();
        let t = frameCount / 60;

        if( frameCount % 150 == 0 ) {
            for (var i = 0; i < this.snow_num; i++) {
                snowflakes.push(new SnowFlake());
            }
        }

        for (let flake of snowflakes) {
            flake.update(t);
            flake.display();
        }
    }
}
