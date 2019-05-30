class timeBackground{

  constructor(ratio){
    this.ratio = ratio;
  }

  init(){

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

  getCityHours(tzOffset) { // 24시간제
    var now = new Date();
    var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
    now.setTime(tz);

    var s = now.getHours() + now.getMinutes() / 60;

    this.hours = s;
  }

timeByTint(tzOffset){

  this.getCityHours(tzOffset);

  var alpha;

  if(this.hours <= 5){
    alpha = map(this.hours, 0, 5, 80, 200);
  } else if(this.hours > 5 && this.hours <= 12 ){
    alpha = map(this.hours, 5, 12, 200, 255);
  }else if(this.hours > 12 && this.hours <= 16){
    alpha = map(this.hours, 12, 16, 255, 200);
  }else if(this.hours > 16 && this.hours <= 20){
    alpha = map(this.hours, 16, 20, 200, 100);
  }else if(this.hours > 20 && this.hours <= 24){
    alpha = map(this.hours, 20, 24, 100, 80);
  }

  tint(alpha);
}

  calculateByTimeToSky(tzOffset){

    this.getCityHours(tzOffset);

    this.color1 = CONSTANT.COLOR.blue;
    this.color2 = CONSTANT.COLOR.bright_yellow;
    this.color3 = CONSTANT.COLOR.bright_blue;
    this.color4 = CONSTANT.COLOR.white;

    this.drawGradient(12, 16, this.color1, this.color2, this.color3, this.color4, this.hours);

    // if(this.hours <= 5){
    //
    //   this.color1 = CONSTANT.COLOR.black;
    //   this.color2 = CONSTANT.COLOR.bright_indigo;
    //   this.color3 = CONSTANT.COLOR.dark_indigo;
    //   this.color4 = CONSTANT.COLOR.bright_purple;
    //
    //   this.drawGradient(0, 5, this.color1, this.color2, this.color3, this.color4, this.hours);
    //
    // } else if(this.hours > 5 && this.hours <= 12 ){
    //
    //   this.color1 = CONSTANT.COLOR.dark_indigo;
    //   this.color2 = CONSTANT.COLOR.bright_purple;
    //   this.color3 = CONSTANT.COLOR.blue;
    //   this.color4 = CONSTANT.COLOR.bright_yellow;
    //
    //   this.drawGradient(5, 12, this.color1, this.color2, this.color3, this.color4, this.hours);
    //
    // }else if(this.hours > 12 && this.hours <= 16){
    //
    //   this.color1 = CONSTANT.COLOR.blue;
    //   this.color2 = CONSTANT.COLOR.bright_yellow;
    //   this.color3 = CONSTANT.COLOR.bright_blue;
    //   this.color4 = CONSTANT.COLOR.white;
    //
    //    this.drawGradient(12, 16, this.color1, this.color2, this.color3, this.color4, this.hours);
    //
    // }else if(this.hours > 16 && this.hours <= 20){
    //
    //   this.color1 = CONSTANT.COLOR.bright_blue;
    //   this.color2 = CONSTANT.COLOR.white;
    //   this.color3 = CONSTANT.COLOR.dark_purple;
    //   this.color4 = CONSTANT.COLOR.dark_orange;
    //
    //   this.drawGradient(16, 20, this.color1, this.color2, this.color3, this.color4, this.hours);
    //
    // }else if(this.hours > 20 && this.hours <= 24){
    //
    //   this.color1 = CONSTANT.COLOR.dark_purple;
    //   this.color2 = CONSTANT.COLOR.dark_orange;
    //   this.color3 = CONSTANT.COLOR.black;
    //   this.color4 = CONSTANT.COLOR.bright_indigo;
    //
    //   this.drawGradient(20, 24, this.color1, this.color2, this.color3, this.color4, this.hours);
    // }
}

  setGradient(x, y, w, h, c1, c2) {

    noFill();

      for (var i = y; i <= y+h; i++) {
        var inter = map(i, y, y+h, 0, this.ratio);
        var c = lerpColor(c1, c2, inter);
        stroke(c);
        line(x, i, x+w, i);
      }
  }

  drawGradient(start, end, color1, color2, color3, color4, hours){

    this.r1 = map(hours, start, end, color1.r, color2.r);
    this.g1 = map(hours, start, end, color1.g, color2.g);
    this.b1 = map(hours, start, end, color1.b, color2.b);

    this.r2 = map(hours, start, end, color3.r, color4.r);
    this.g2 = map(hours, start, end, color3.g, color4.g);
    this.b2 = map(hours, start, end, color3.b, color4.b);

  }

  drawSky(){
      this.setGradient(0, 0, CONSTANT.DIMEN.width, CONSTANT.DIMEN.height, color(this.r1, this.g1, this.b1), color(this.r2, this.g2, this.b2) );
  }

}
