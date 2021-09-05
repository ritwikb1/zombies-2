class Base {
    constructor(x, y, w, h){
        var options = {
            isStatic: true
        }
        this.w = w
        this.h = h
        this.body = Bodies.rectangle(x, y, this.w, this.h, options)
        World.add(world, this.body)
    }
    show() {
        var pos = this.body.position;
        push();
        translate (pos.x, pos.y)
        rotate(this.body.angle)
        rectMode(CENTER);
        stroke(255);
        fill(127);
        rect(0, 0, this.w, this.h);
        pop();
      }
    
  }
  


    
