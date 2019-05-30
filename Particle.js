"use strict";

var coRestitution = 0.018;
var coFriction = 0.01;

class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(random(-10, 10), random(-10, 10));
    this.acc = createVector(0, 0);
    this.rad = 2; //random(2, 3.5);

    this.targetPos = createVector(width / 6, height * 1 / 2);
    this.lerpSpeed = random(0.05, 0.1);

    this.chance = random(0, 1);
    this.life = random(50, 80);
    this.transform = false;

    this.offset = createVector();
    this.offsetFreq = 0;
    this.offsetFreqInc = random(0.2, 0.4);

    this.origialSize = random(0.7, 1.3);
    this.size = 1.0;
    this.seedColor = 0;
  }

  init() {
    //
  }

  moveWithLerp() {
    this.vel.mult(0.1);
    this.pos = p5.Vector.lerp(this.pos, this.targetPos, this.lerpSpeed);
  }

  applyForce(f) {
    this.acc.add(f)
  }

  update() {
    this.vel.add(this.acc);
    this.pos.add(this.vel);
    this.acc.mult(0);
  }

  wind() {
    var x = sin(frameCount * 0.02) * 0.005 + 0.005;
    var y = cos(frameCount * 0.1) * -0.01 - 0.001;
    var windForce = createVector(x, y);
    this.applyForce(windForce);
    this.update();
  }

  display(branchColor) {

    this.seedColor = branchColor;

    push();
    var center = createVector(width / 6, height * 1 / 2);
    var vector = p5.Vector.sub(center, this.pos);
    var angle = vector.heading();
    var vel_angle = this.vel.heading();
    translate(this.pos.x + this.offset.x, this.pos.y + this.offset.y);

    scale(this.origialSize);
    scale(this.size);

    noStroke();
    fill(255, 200);

    if (params.displayMode) {
      rotate(angle - PI / 2);
      this.seedShape();
    } else if (params.windMode) {
      if (this.pos.x > width * 0.3) {
        if (this.life > 0) {
          this.life -= random(0.9,1.4);
        } else {
          this.life = 0;
        }
      }

      if (this.life == 0 && this.transform == false) {
        this.size -= 0.04;
        if (this.size < 0) {
          this.transform = true;
          this.size = 0.0;
        }
      }

      if (this.transform) {
        this.size = lerp(this.size, 1.0, 0.03);
        rotate(vel_angle + noise(-PI / 3, PI / 3));
        if (this.chance < 0.8) {
          this.musicShape();
        } else {
          this.offset.x = 0;
          this.offset.y = sin(this.offsetFreq) * 3;
          this.offsetFreq += this.offsetFreqInc;
          //acc
          var force = createVector(-0.001, -0.005);
          this.applyForce(force);
          this.birdShape();
        }
      } else {
        rotate(angle - PI / 2);
        this.seedShape();
      }
    }
    pop();
  }

  birdShape() {
    noStroke()
    beginShape();
    curveVertex(-12, -6);
    curveVertex(-12, -6);
    curveVertex(0, 0);
    curveVertex(6, -10);
    curveVertex(5, 0);
    curveVertex(5, 2);
    curveVertex(10, 2);
    curveVertex(5, 4);
    curveVertex(0, 12);
    curveVertex(-8, 16);
    curveVertex(-1.5, 8);
    curveVertex(-2, 4);
    curveVertex(-5, 1);
    curveVertex(-12, -6);
    curveVertex(-12, -6);
    endShape();
  }

  seedShape() {

    strokeWeight(1);
    stroke("#7A5241");
    line(0, 0, 0, -15);
    line(0, -15, -10, -20);
    line(0, -15, -5, -20);
    line(0, -15, 10, -20);
    line(0, -15, 5, -20);

    strokeWeight(5);
    stroke(this.seedColor, 100);
    line(0, 0, 0, -15);
    line(0, -15, -10, -20);
    line(0, -15, -5, -20);
    line(0, -15, 10, -20);
    line(0, -15, 5, -20);


  }

  musicShape() {
    if (this.chance < 0.2) {
      this.node1();
    } else if (this.chance < 0.4) {
      this.node2();
    } else if (this.chance < 0.6) {
      this.node3();
    } else if (this.chance < 0.8) {
      this.node4();
    } else {
      this.node5();
    }
  }

  node1() {
    strokeWeight(1);
    stroke(this.seedColor, 100);
    line(this.rad, 0, this.rad, -15);
    line(this.rad, -15, this.rad + 10, -18);
    line(this.rad + 10, -18, this.rad + 10, -3);
    ellipse(10, -3, this.rad * 2.3, this.rad * 2);
    ellipse(0, 0, this.rad * 2.3, this.rad * 2);
  }
  node2() {
    strokeWeight(1);
    stroke(this.seedColor, 100);
    line(this.rad, 0, this.rad, -15);
    ellipse(0, 0, this.rad * 2.3, this.rad * 2);
    beginShape();
    curveVertex(this.rad + 1, -15);
    curveVertex(this.rad + 1, -12);
    curveVertex(this.rad + 5, -10);
    curveVertex(this.rad + 6, -9);
    curveVertex(this.rad + 8, -9);
    endShape();
  }
  node3() {
    strokeWeight(1);
    stroke(this.seedColor, 100);
    noFill();
    line(this.rad, 0, this.rad, -15);
    ellipse(this.rad + 4, -15, 3 * this.rad, 2.5 * this.rad);
    pop();
  }
  node4() {
    stroke(this.seedColor, 100);
    noFill();
    line(this.rad, 0, this.rad, -15);
    line(this.rad + 5, -2, this.rad + 5, -17);
    strokeWeight(2);
    line(this.rad - 1, -4, this.rad + 7, -7);
    line(this.rad - 1, -10, this.rad + 7, -13);
  }
  node5() {
    strokeWeight(1);
    stroke(this.seedColor, 100);
    line(this.rad, 0, this.rad, -15);
    ellipse(this.rad + 4, -1, 3 * this.rad, 2.5 * this.rad);
  }
}
