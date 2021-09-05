class Stone {
  constructor(x, y) {  
    var options = {
      restitution: 0.8,
      isStatic: false
  }
  this.r = 40
  this.body = Bodies.circle(x, y, this.r/2, options);
  World.add(world, this.body);
 };
 display() {
  var angle = this.body.angle;
  var pos = this.body.position;
  push();
  translate (pos.x, pos.y)
  rotate (angle)
  ellipseMode(CENTER);
  stroke(255);
  fill(127);
  ellipse(0,0, this.r);
  pop();
 }
} 