const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground;
var box1;
var bird;
var world, engine;
var mConstraint;
var slingshot;
var T;
var box;
var ball;
var platform;

var gameState = "onSling";

function preload() {
  dotImg = loadImage("images/bied.png");
  boxImg = loadImage("images/tansk1.jpg");
  bkgImg = loadImage("images/background.png");
  woodImg = loadImage("images/wood1.png");
  woodImg1 = loadImage("images/wood1.png");
  sling1Img = loadImage("images/sling1.png");
  box1Img = loadImage("images/pig.png");
  ballImg = loadImage("images/BALL.png");

  }

function setup() {
  var canvas = createCanvas(1450, 620);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width / 2, height - 10, width, 20);

  wood1 = new Log(650,200,70,70);
  wood3 = new Log(650,200,70,70);
  wood4 = new Log(650,200,70,70);
  wood5 = new Log(650,200,70,70);
  wood6 = new Log(650,200,70,70);
  wood8 = new Log(1080,200,70,70);
  wood9 = new Log(1080,200,70,70);
  wood10 = new Log(1080,200,70,70);
  wood11 = new Log(1080,200,70,70);
  wood12 = new Log(1080,200,70,70);
  wood13 = new Log(760,200,70,70);
  wood14 = new Log(760,200,70,70);
  wood15 = new Log(760,200,70,70);
  wood16 = new Log(880,50,500,30);
  wood17 = new Log(1005,120,70,70);
  wood18 = new Log(1005,120,70,70);
  wood19 = new Log(1005,120,70,70);
  wood20 = new Log(890,60,290,20);
  platform = new Ground(200,500,250,200);

  box = new Box(900,55, 80,80);
  box1 = new Box(900,95,80,80);
  box2 = new Box(900,30, 80,80);
  bird = new Bird(100,0, 23);

  slingshot = new SlingShot(bird.body,{x:200, y:235});
  }
  
  function mouseDragged(){
    if (gameState!=="launched"){
        Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
    }
}

  function keyPressed(enter){
    World.remove(world, bird.body);
    bird = new Bird(170, 300, 20);
    slingshot.attach(bird.body);
}

  function mouseReleased(){
    slingshot.fly();
    gameState = "launched";
}

function draw() {
  background(bkgImg);
  Engine.update(engine);

 // text("press enter to bring back the bird",100,100);
  text("dragg the mouse by preesing on the bird and Release the mouse ",100,130);

  platform.display();
  box.display();
  box1.display();
  box2.display();
  slingshot.display();

  bird.display();
  ground.display();

  wood1.display();
  wood3.display();
  wood4.display();
  wood5.display();
  wood6.display();
  wood8.display();
  wood9.display();
  wood10.display();
  wood11.display();
  wood12.display();
  wood13.display();
  wood14.display(); 
  wood15.display(); 
  wood16.display();
  wood17.display();
  wood18.display();
  wood19.display();
  wood20.display();

}
