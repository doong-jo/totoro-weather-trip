
var ratio;

var r1;
var g1;
var b1;

var r2;
var g2;
var b2;

var color1;
var color2;
var color3;
var color4;

function setGradient(x, y, w, h, c1, c2) {

  noFill();

    for (var i = y; i <= y+h; i++) {
      var inter = map(i, y, y+h, 0, 0.8);
      var c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x+w, i);
    }
}

function drawGradient(start, end, color1, color2, color3, color4, hours){

  r1 = map(hours, start, end, color1.r, color2.r);
  g1 = map(hours, start, end, color1.g, color2.g);
  b1 = map(hours, start, end, color1.b, color2.b);

  r2 = map(hours, start, end, color3.r, color4.r);
  g2 = map(hours, start, end, color3.g, color4.g);
  b2 = map(hours, start, end, color3.b, color4.b);

  setGradient(0, 0, width, height, color(r1, g1, b1), color(r2, g2, b2) );
}

function drawSky(tzOffset, width, height){

  var hours = getCityHours(tzOffset);

  if(hours <= 5){

    color1 = CONSTANT.COLOR.black;
    color2 = CONSTANT.COLOR.bright_indigo;
    color3 = CONSTANT.COLOR.dark_indigo;
    color4 = CONSTANT.COLOR.bright_purple;

    drawGradient(0, 5, color1, color2, color3, color4, hours);

  } else if(hours > 5 && hours <= 12 ){

    color1 = CONSTANT.COLOR.dark_indigo;
    color2 = CONSTANT.COLOR.bright_purple;
    color3 = CONSTANT.COLOR.blue;
    color4 = CONSTANT.COLOR.bright_yellow;

    drawGradient(5, 12, color1, color2, color3, color4, hours);

  }else if(hours > 12 && hours <= 16){

    color1 = CONSTANT.COLOR.blue;
    color2 = CONSTANT.COLOR.bright_yellow;
    color3 = CONSTANT.COLOR.bright_blue;
    color4 = CONSTANT.COLOR.white;

     drawGradient(12, 16, color1, color2, color3, color4, hours);

  }else if(hours > 16 && hours <= 20){

    color1 = CONSTANT.CONSTANT.COLOR.bright_blue;
    color2 = CONSTANT.CONSTANT.COLOR.white;
    color3 = CONSTANT.CONSTANT.COLOR.dark_purple;
    color4 = CONSTANT.CONSTANT.COLOR.dark_orange;

    drawGradient(16, 20, color1, color2, color3, color4, hours);

  }else if(hours > 20 && hours <= 24){

    color1 = CONSTANT.COLOR.dark_purple;
    color2 = CONSTANT.COLOR.dark_orange;
    color3 = CONSTANT.COLOR.black;
    color4 = CONSTANT.COLOR.bright_indigo;

    drawGradient(20, 24, color1, color2, color3, color4, hours);

  }

}


function getCityHours(tzOffset) { // 24시간제
  var now = new Date();
  var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
  now.setTime(tz);

  var s = now.getHours() + now.getMinutes() / 60;

  return s;
}


function leadingZeros(n, digits) {
  var zero = '';
  n = n.toString();

  if (n.length < digits) {
    for (i = 0; i < digits - n.length; i++)
      zero += '0';
  }
  return zero + n;
}
