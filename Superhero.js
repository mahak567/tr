class Superhero {
    constructor(x,y,width,height) {
      var options = {
          density:1,
          frictionAir:1
      }
      this.x=x;
      this.y=y;
      
      this.image=loadImage("images/Superhero-01.png")
      this.body = Bodies.rectangle(x,y,width,height);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
    }
    display(){
     var pos = this.body.angle;
      var pos =this.body.position;
      push();
      imageMode(CENTER);
      fill("brown");
      image(this.image,pos.x, pos.y, this.width, this.height);
      pop();
    }
  };
