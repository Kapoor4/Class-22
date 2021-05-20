const engine = Matter.Engine;
const world = Matter.World;
const Bodies = Matter.Bodies;

var myEngine, myWorld;
var ground, ball;


function setup() {

  createCanvas(800,400);

  myEngine = engine.create();
  myWorld = myEngine.world;

  var ground_obj = {
    isStatic: true
  }


  ground = Bodies.rectangle(400,390,40,40, ground_obj);
  world.add(myWorld, ground);


  var ball_obj = {
    restitution: 1.0
  }

  ball = Bodies.circle(200,30,10, ball_obj);
  world.add(myWorld, ball);

  console.log(ground)

}

function draw() {

  background(0); 
  
  engine.update(myEngine);

  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, width,20);

  ellipseMode(RADIUS);
  ellipse(ball.position.x, ball.position.y, 20,20);
  
}