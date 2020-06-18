class Ground extends Box {
  constructor(x, y, w, h) {
    super(x, y, w, h);
    this.body.isStatic = true;

    World.add(world,this.body);
  }

  display() {
    const pos = this.body.position;
    const angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    noStroke();
    rectMode(CENTER);
    fill("brown")
    rect(0, 0, this.w, this.h);
    pop();
  }
}
