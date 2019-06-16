class Totoro {
    constructor() { }

    init(x, y, scale) {
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.totoro = new Array();

        this.loadTotoroFromJson('totoro.json');
    }

    loadTotoroFromJson(jsonFile){
        const self = this;

        $.getJSON(jsonFile, function(json) {
            console.log("TotoroJson get Data success");

            const setTotoroParts = [ json.totoro_body, json.totoro_left_ear, json.totoro_right_ear, json.totoro_head_leaf, json.totoro_leaf_head,
            json.totoro_left_Beard_01, json.totoro_left_Beard_02, json.totoro_left_Beard_03, json.totoro_right_Beard_01, json.totoro_right_Beard_02,
        json.totoro_right_Beard_03, json.totoro_nose, json.totoro_stomach, json.totoro_stomach_shape, json.totoro_stomach_shape_01, json.totoro_stomach_shape_02,
     json.totoro_stomach_shape_03, json.totoro_stomach_shape_04, json.totoro_stomach_shape_05, json.totoro_stomach_shape_06];

            for(var i = 0; i < setTotoroParts.length; i++){
                self.totoro.push(setTotoroParts[i]);
            }
        });
    }
        drawTotoroParts(totoroPart) {

            if(totoroPart.bStroke == true) {
                strokeWeight(2);
                stroke(0);
            }else noStroke();

            beginShape();
            fill(totoroPart.color);
            for(var a = 0; a < totoroPart.points.length; a++){
                curveVertex(this.x + totoroPart.points[a].x * this.scale, this.y + totoroPart.points[a].y * this.scale);
            }
            endShape(CLOSE);
        }

        draw(){

            for(var i = 0; i < this.totoro.length; i++){
                this.drawTotoroParts(this.totoro[i]);
            }

            this.drawTotoroEye();
        }

        drawTotoroEye() {
            //totoro_left_eyes
            noStroke();
            fill(255);
            ellipse(this.x + 94,  this.y + 100, 23, 23);
            fill(0);
            ellipse(this.x + 94, this.y + 100, 13, 13);
            fill(255);
            ellipse(this.x + 89, this.y + 96, 3, 3);

            //totoro_right_eyes
            noStroke();
            fill(255);
            ellipse(this.x + 172, this.y + 100, 23, 23);
            fill(0);
            ellipse(this.x + 172, this.y + 100, 13, 13);
            fill(255);
            ellipse(this.x + 168, this.y + 96, 3, 3);
        }
}
