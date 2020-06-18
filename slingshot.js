class SlingShot{
  constructor(bodyA, pointB){
      var options = {
          bodyA: bodyA,
          pointB: pointB,
          stiffness: 0.04,
          length:40
      }
      this.sling = Constraint.create(options);
      this.sling1 = loadImage('images/sling1.png');
      this.sling2 = loadImage('images/sling2.png');
      this.sling3 = loadImage('images/sling3.png');
      this.pointB = pointB;
     
      World.add(world, this.sling);
  }
  attach(body){
      this.sling.bodyA = body;
  }
  
  fly(){
      this.sling.bodyA = null;
  }

  display(){
      image(this.sling1,210,205);
      image(this.sling2,180,205);
      if(this.sling.bodyA){
          var pointA = this.sling.bodyA.position;
          var pointB = this.pointB;
          push();
          
          stroke(48,22,8);
          if(pointA.x > 2) {
              strokeWeight(7);
              line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
              line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
              image(this.sling3,pointA.x -30, pointA.y -10,15,30);
          }
         pop();
      }
  }
  
}