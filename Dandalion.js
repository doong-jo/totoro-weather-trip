var params = {
  displayMode: true,
  debugMode: false,
  windMode: false,
  rainMode: false,
  snowMode: false,
  n: 4.5,
  d: 12.3,
  t: 20,
  s: 80,
  c: 0,
  angle: 0,
  step: 2,
  p: 20,
  test: 12
};

var gui = new dat.gui.GUI();
gui.add(params, "displayMode");
gui.add(params, "debugMode");
gui.add(params, "windMode");
gui.add(params, "snowMode");
gui.add(params, "rainMode");
gui.add(params, "s").min(20).max(350).step(1);
gui.add(params, "angle").min(-5).max(5).step(0.01);
gui.add(params, "t").min(40).max(400).step(1);
gui.add(params, "test").min(1).max(15).step(0.1);


/*var particles = [];
var alpha_value = 0;
var centerBranch;
var blowArea = 0;
var blowStrength = 0;*/

let img;

class Dandalion {
  constructor(x, y){
    this.canvas_x = x;
    this.canvas_y = y;
    this.particles = [];
    this.alpha_value = 0;
    this.centerBranch;
    this.blowArea = 0;
    this.blowStrength = 0;
    this.hours = 0;
    this.branchColor;
  }

  init(){
    textSize(12);
    for (var i = 0; i < 50; i++) {
      this.particles.push(new Particle(random(this.canvas_x), random(this.canvas_y)));
    }
    this.centerBranch = createVector(this.canvas_x / 6, this.canvas_y * 1 / 2);

    // setTimeout(function(){
    //   params.displayMode = true;
    //   params.windowMode = true;
    // }, 5000);
  }

  getDandalionHours(tzOffset) { // 24시간제
    var now = new Date();
    var tz = now.getTime() + (now.getTimezoneOffset() * 60000) + (tzOffset * 3600000);
    now.setTime(tz);

    var s = now.getHours() + now.getMinutes() / 60;

    this.hours = s;
  }

  getBranchColor(tzOffset){

    this.getDandalionHours(tzOffset);

    if(this.hours <= 5){
      this.branchColor = map(this.hours, 0, 5, 80, 200);
    } else if(this.hours > 5 && this.hours <= 12 ){
      this.branchColor = map(this.hours, 5, 12, 200, 255);
    }else if(this.hours > 12 && this.hours <= 16){
      this.branchColor = map(this.hours, 12, 16, 255, 200);
    }else if(this.hours > 16 && this.hours <= 20){
      this.branchColor = map(this.hours, 16, 20, 200, 100);
    }else if(this.hours > 20 && this.hours <= 24){
      this.branchColor = map(this.hours, 20, 24, 100, 80);
    }
  }

  Dandaliondraw(){

    if (params.displayMode || params.windMode) {
      push();
      strokeWeight(3);
      stroke(this.branchColor, 100);
      line(this.centerBranch.x, this.canvas_y - 15, this.centerBranch.x, this.centerBranch.y);

      strokeWeight(1);
      stroke("#7A5241");
      line(this.centerBranch.x, this.canvas_y - 15, this.centerBranch.x, this.centerBranch.y);

      pop();
    }

    for (var i = 0; i < this.particles.length; i++) {
      if (params.displayMode) {
        this.particles[i].moveWithLerp();
      } else if (params.windMode) {
        if (this.blowArea < params.s + 20 / params.test) {
          this.blowArea += 0.001;
        }
        var distance = this.particles[i].pos.dist(this.centerBranch);
        if (distance > params.s - this.blowArea + 20) {
          this.particles[i].wind();
        }
      } else {
        // particles[i].checkBoundaries();
      }
      this.particles[i].update();
      this.particles[i].display(this.branchColor);
    }

    push();
    translate(this.centerBranch.x, this.centerBranch.y);
    var count = 0;
    for (var a = 0; a < TWO_PI * params.t; a += params.step) {
      //clock shape
      noStroke();
      // if (params.debugMode) {
      //   alpha_value = 0;
      // } else {
      //   alpha_value = 0;
      // }
      fill(255, this.alpha_value);
      var k = params.n / params.d;
      var r = params.s * cos(k * a) + params.c;
      var x = r * cos(a) + (r / params.p) * cos(params.angle);
      var y = r * sin(a) + (r / params.p) * sin(params.angle);
      ellipse(x, y, 3, 3);
      //match
      if (count < this.particles.length) {
        this.particles[count].targetPos = createVector(x + this.centerBranch.x, y + this.centerBranch.y);
      }
      count++;
    }
    //count adjustment
    if (count < this.particles.length) {
      this.particles.pop();
    } else if (count > this.particles.length) {
      this.particles.push(new Particle(this.centerBranch.x, this.centerBranch.y));
    }
    pop();
    if (params.debugMode) {
      // text display
      fill(255);
      text("frameRate:" + round(frameRate()), 15, 30);
      text("count:" + count, 15, 50);
      text("# of particles:" + this.particles.length, 15, 70);
      //text("r = s * cos(n / d * theta) + c", 15, 90);
      //text("x = r * cos(theta) + r / p * cos(angle)", 15, 110);
      //text("y = r * sin(theta) + r / p * sin(angle)", 15, 130);
      stroke(255);
      noFill();
      //ellipse(centerBranch.x, centerBranch.y, 2 * params.s + params.c, 2 * params.s + params.c);
      ellipse(this.centerBranch.x, this.centerBranch.y, this.blowArea, this.blowArea);
    }
  }

  getRainMode() {
      return params.rainMode;
  }

  getSnowMode() {
      return params.snowMode;
  }
}
