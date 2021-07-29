var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

function preload(){
  bg=loadImage("snow2.jpg")
}


function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  
  falling=new Snow();

 
 
}

function draw() {
 background(bg);  
 Engine.update(engine);
 
 falling.display();
 
  drawSprites();
}