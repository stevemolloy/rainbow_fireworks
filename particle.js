class Particle {
  constructor(x, y) {
    this.pos = createVector(x, y, random(127, 255));
    this.vel = createVector(0, 0, 0);
    this.accel = createVector(0, 0, 0);

    this.xsize = random(100) * 8 / 100;
    this.ysize = random(100) * 16 / 100;
  }

  show() {
    fill(127, this.pos.z);
    noStroke();
    ellipse(this.pos.x, this.pos.y, this.xsize, this.ysize);
  }

  update() {
    this.vel.add(this.accel);
    this.pos.add(this.vel);
    this.accel.mult(0);
  }

  applyForce(F) {
    this.accel.add(F);
  }
}
