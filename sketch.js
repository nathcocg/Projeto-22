const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerBase, playerArcher;
var baseImage, playerImage;

function preload() {
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  playerBase = Bodies.rectangle(200,350,180,150,options);
  World.add(world,playerBase);

  player = Bodies.rectangle(250, playerBase.postion.y,160,50,180,options);
  World.add(world,player);


}

function draw() {
  background(backgroundImg);

  image(baseImage,playerBase.positio.x,playerBase.position.y,180,150);
  image(playerImage,player.postion.x,player.position.y,50,180);


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
