class Leaf{
    constructor() { }

    init(x, y, scale){
        this.x = x;
        this.y = y;
        this.scale = scale;

        this.totoro_leaf = new Array();

        this.loadLeafFromJson('leaf.json');
    }

    loadLeafFromJson(jsonFile){
        const self = this;

        $.getJSON(jsonFile, function(json) {
            console.log("leaf data get Data success");

            const setLeafParts = [ json.leafSmallBody, json.leafbody, json.leafShadow, json.leafTail ];

            for(var i = 0; i < setLeafParts.length; i++){
                self.totoro_leaf.push(setLeafParts[i]);
            }

        });
    }

    drawLeafParts(leafPart) {
        noStroke();
        beginShape();
        fill(leafPart.color);
        for(var a = 0; a < leafPart.points.length; a++){
            curveVertex(this.x + leafPart.points[a].x * this.scale, this.y + leafPart.points[a].y * this.scale);
        }
        endShape(CLOSE);
    }

    draw(){

        for(var i = 0; i < this.totoro_leaf.length; i++){
            this.drawLeafParts(this.totoro_leaf[i]);
        }
    }
}
