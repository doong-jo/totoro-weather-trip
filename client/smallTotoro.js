class SmallTotoro{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.small_totoro = new Array();

        this.loadSmallTotoroFromJson('smallTotoroArray.json');
    }

    loadSmallTotoroFromJson(jsonFile){
        const self = this;

        $.getJSON(jsonFile, function(json) {
            console.log("smallTotoroJson get Data success");

            const setSmallTotoroParts = [ json.smalltotoroStomach, json.smalltotoroArm, json.smalltotoroTail, json.smalltotoroBody,
            json.smalltotoroLeftEye, json.smalltotoroRightEye, json.smalltotoroLeftChest, json.smalltotoroMiddleChest, json.smalltotoroRightChest ];

            for(var i = 0; i < setSmallTotoroParts.length; i++){
                self.small_totoro.push(setSmallTotoroParts[i]);
            }

        });
    }

    drawTotoroParts(smallTotoroPart) {
        //noStroke();
        stroke(0);
        strokeWeight(1.5);
        beginShape();
        fill(smallTotoroPart.color);
        for(var a = 0; a < smallTotoroPart.points.length; a++){
            curveVertex(this.x + smallTotoroPart.points[a].x * this.scale, this.y + smallTotoroPart.points[a].y * this.scale);
        }
        endShape(CLOSE);
    }

    draw(){

        for(var i = 0; i < this.small_totoro.length; i++){
            this.drawTotoroParts(this.small_totoro[i]);
        }

        //Nose
        fill(0, 0, 0);
        ellipse(this.x + 336 * this.scale, this.y + 239 * this.scale, 12 * this.scale, 5 * this.scale);
        //LeftEye
        ellipse(this.x + 304 * this.scale, this.y + 225 * this.scale, 6 * this.scale, 10 * this.scale)
        //RightEye
        ellipse(this.x + 393 * this.scale, this.y + 225 * this.scale, 9 * this.scale, 12 * this.scale)

    }
}
