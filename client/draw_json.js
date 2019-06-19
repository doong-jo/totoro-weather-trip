class DrawJSON{
    constructor() { }
    init() {}

    loadDataFromJson(jsonFile, saveJsonArray, jsonNameArray){

        $.getJSON(jsonFile, function(json) {
            console.log(jsonFile);
            if( jsonFile === 'bird.json') console.log('jsonNameArray.length', jsonNameArray.length);
            for(var i = 0; i < jsonNameArray.length; i++){
                saveJsonArray.push(json[jsonNameArray[i]]);
            }
        });
    }

    drawParts(drawArrayPart, x, y, scale, shape_color, text_color, sat) {
        if(drawArrayPart.bStroke == true) {
            strokeWeight(1.5);
            stroke(0);
        }else noStroke();

        beginShape();

        if(shape_color == undefined) {
            if( sat == undefined ) { fill(drawArrayPart.color); }
            else {
                let alphaColor = color(drawArrayPart.color);
                alphaColor.levels[0] -= sat;
                alphaColor.levels[1] -= sat;
                alphaColor.levels[2] -= sat;
                fill(alphaColor);
            }
        }
        else { fill(shape_color); }
        if(text_color != undefined) stroke(text_color);

        for(var a = 0; a < drawArrayPart.points.length; a++) {
            curveVertex(x + drawArrayPart.points[a].x * scale, y + drawArrayPart.points[a].y * scale);
        }
        endShape(CLOSE);
    }

    draw(drawArray, x, y, scale, shape_color, text_color, sat){

        for(var i = 0; i < drawArray.length; i++){
            this.drawParts(drawArray[i], x, y, scale, shape_color, text_color, sat);
        }
    }
}
