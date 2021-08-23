const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let world, engine

var ball, blower, mouth, button
function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
  
  blower = new Blower(400,200,100,100)
  mouth = new Blower(325,240,50,20)
  ball = new Ball(305,200,30)

  button = createButton("click to blow")
  button.position(width/2, height - 100)
  button.class("blowButton")
  button.mousePressed(blow)
}

function draw() {
  background(200); 
  Engine.update(engine) 
  drawSprites();
  blower.display()
  mouth.display()
  ball.display()
} 

function blow() {
  Body.applyForce(ball.body, {x:0,y:0}, {x:0.1, y: -0.1});
  console.log("hi")
}