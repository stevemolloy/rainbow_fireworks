var firework;
var gravity;

function setup() {
  createCanvas(windowWidth-10, windowHeight-10);
  gravity = createVector(0, 0.2);
  firework = new Particle(width / 2, height, createVector(1, -15));
}

function draw() {
  background(0);
  firework.applyForce(gravity);
  firework.update();
  firework.show();

  if (firework.vel.y > 0) {
    firework.explode();
  }

  if (offScreen(firework.pos)) {
    firework = new Particle(width / 2 + random(-250,250), height, createVector(random(-6,6), random(-19,-10)));
  }
}
