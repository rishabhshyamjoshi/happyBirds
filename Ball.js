class Ball {
    constructor(x, y, r) {
      const options = {
        'restitution':1.5,
        'friction':0.1
      };
      this.body = Matter.Bodies.circle(x, y, r, options);
      Matter.Body.setMass(this.body, this.body.mass * 4);
      Matter.World.add(world, this.body);
      this.r = r;
     // this.smokeImage = loadImage("sprites/smoke.png");
      //this.trajectory =[];
  
    }
  
    display() {
      const pos = this.body.position;
      const angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      imageMode(CENTER);
      image(ballImg,0,0, this.r * 3,this.r*3);
  
      pop();
      
    }
  }
  