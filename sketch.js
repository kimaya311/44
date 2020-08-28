
var Boy;
var Girl;
var farmboy,farmgirl;
var game;
var form;
function preload(){
  farmboy = loadImage("BoyFarm.png");
  farmgirl = loadImage("GirlFarm.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
 // createSprite(400, 200, 50, 50);

  game = new Game();
}
function draw() {
  background(255,255,255); 
  game.Start(); 
  drawSprites();
}