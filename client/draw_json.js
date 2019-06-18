class DrawJSON{
    constructor() { }
    init() {}

    loadDataFromJson(jsonFile, saveJsonArray, jsonNameArray){

        $.getJSON(jsonFile, function(json) {
            for(var i = 0; i < jsonNameArray.length; i++){
                saveJsonArray.push(json[jsonNameArray[i]]);
            }
        });
    }

    drawParts(drawArrayPart, x, y, scale, shape_color, text_color) {
        if(drawArrayPart.bStroke == true) {
            strokeWeight(1.5);
            stroke(0);
        }else noStroke();

        beginShape();

        if(shape_color == undefined) fill(drawArrayPart.color);
        else {
            fill(shape_color);
        }

        if(text_color != undefined) stroke(text_color);

        for(var a = 0; a < drawArrayPart.points.length; a++){
            curveVertex(x + drawArrayPart.points[a].x * scale, y + drawArrayPart.points[a].y * scale);
        }
        endShape(CLOSE);
    }

    draw(drawArray, x, y, scale, shape_color, text_color){

        for(var i = 0; i < drawArray.length; i++){
            this.drawParts(drawArray[i], x, y, scale, shape_color, text_color);
        }
    }
}
