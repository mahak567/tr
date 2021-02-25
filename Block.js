class Block{
    constructor(x, y, width, height) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density': 20,
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var pos = this.body.angle;
        var pos =this.body.position;
        push();
        translate(this.body.position.x, this.body.position.y);
        rectMode(CENTER);
      
        strokeWeight(2);
        stroke("black");
        fill("red")
        rect(0, 0, this.width, this.height);
        pop();
      }
}