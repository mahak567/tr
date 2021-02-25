class Fly{
    constructor(body1, pointB)
    {
  
      
     var options={
       bodyA: body1,
       
       pointB:pointB,
       stiffness:0.4,
       length:250
     }
     
     this.fly = Constraint.create(options);
     World.add(world, this.fly);
   }
  display(){
   var pointA = this.fly.bodyA.position;
   var pointB = this.fly.pointB;
   
   strokeWeight(5);
   stroke("white");
   line(pointA.x,pointA.y,pointB.x,pointB.y)
   console.log(pointA.x+","+pointA.y+","+pointB.x+","+pointB.y)
  }
  
  }
  