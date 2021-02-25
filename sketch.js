const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var ground;
var superhero;
var block1,block2,block3,block4,block5,block6,block7;
var block8,block9,block10,block11,block12,block13,block14;
var block20,block19,block10,block15,block16,block17,block18,block21;
var block22,block23,block24,block25,block26,block27;
var monster;
var rope;
var backgroundImage;
function preload() {
//preload the images here
backgroundImage = loadImage("images/GamingBackground.png")
}

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
    world = engine.world;
  // create sprites here
  ground = new Ground(600,500,1000,10);
  superhero = new Superhero(400,300,150,150)
  rope = new Fly(superhero.body,{x:400,y:100} )
  monster = new Monster(980,300,200,200)
  block1 = new Block(650,475,30,40);
  block2 = new Block(650,435,30,40);
  block3 = new Block(650,395,30,40);
  block4 = new Block(650,355,30,40);
  block5 = new Block(650,315,30,40);
  block6 = new Block(650,275,30,40);
  block7 = new Block(650,240,30,40);

  block8 = new Block(700,475,30,40);
  block9 = new Block(700,435,30,40);
  block10 = new Block(700,395,30,40);
  block11 = new Block(700,355,30,40);
  block12 = new Block(700,315,30,40);

  block13 = new Block(750,475,30,40);
  block14 = new Block(750,440,30,40);
  block15 = new Block(750,400,30,40);
  block16 = new Block(750,360,30,40);
  block17 = new Block(750,320,30,40);
  block18 = new Block(750,280,30,40);
  block19 = new Block(750,240,30,40);
  block20 = new Block(750,200,30,40);
  block21 = new Block(750,160,30,40);

  block22 = new Block(800,475,30,40);
  block23 = new Block(800,435,30,40);
  block24 = new Block(800,395,30,40);
  block25 = new Block(800,355,30,40);
  block26 = new Block(800,315,30,40);
  block27 = new Block(800,275,30,40);

}

function draw() {
  background(backgroundImage);
ground.display();
block1.display();
block2.display();
block3.display();
block4.display();
block5.display();
block6.display();
block7.display();

block8.display();
block9.display();
block10.display();
block11.display();
block12.display();
block13.display();
block14.display();
block15.display();
block16.display();
block17.display();
block18.display();
block19.display();
block20.display();
block21.display();
block22.display();
block23.display();
block24.display();
block25.display();
block26.display();
block27.display();
rope.display();


superhero.display();
monster.display();
}


function mouseDragged(){
	//rope.pointB={x:mouseX,y:mouseY}
	Matter.Body.setPosition(superhero.body,{x:mouseX,y:mouseY});
}