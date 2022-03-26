
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var world;
var engine;
var ball ;
var groundObj;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1450, 800);


	engine = Engine.create();
	world = engine.world;


    groundObj=new ground(width/2,670,width,20);
    leftSide=new ground(1100,600,20,120);
    rightSide=new ground(1350,600,20,120);


var ball_options ={

   isStatic:false,
   restitution:0.3,
   friction:0,
   density:1.2

}


	//Create the Bodies Here.
     ball = Bodies.circle(150,30,25,ball_options);
     World.add(world,ball);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  groundObj.display();
  leftSide.display();
  rightSide.display();

  ellipse(ball.position.x,ball.position.y,25);
  Engine.update(engine);



  drawSprites();
 
}

function keyPressed(){

 if (keyCode === UP_ARROW){

Matter.Body.applyForce(ball,ball.position,{x:85,y:-85})

 }

}

