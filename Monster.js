class Monster {
    constructor(x,y,width,height,options) {
      var options = {
          isStatic:true,
          restitution:0.5,
          friction:1.0
      }
      this.x=x;
      this.y=y;
      
      this.image=loadImage("images/Monster-01.png")
      this.body = Bodies.rectangle(x,y,width,height,options);
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
