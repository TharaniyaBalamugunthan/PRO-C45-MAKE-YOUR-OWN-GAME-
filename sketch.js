var backgroundImg; 
var blueFireBallsImg;
var greenGhostImg;
var purpleGhostImg;
var backgroundSound;
var greenGhost;
var purpleGhost;
var blueFireBalls;
var database,playerCount;


function preload(){
  backgroundImg = loadImage("Background Img.jpg");
  blueFireBallsImg = loadImage("Blue FireBalls.png");
  greenGhostImg = loadImage("Green Ghost.png");
  purpleGhostImg = loadImage("Purple Ghost.png");
  backgroundSound = loadSound("Background Sound.mp3")

}

function setup() {
  database = firebase.database();
  createCanvas(1500,800);
  greenGhost = createSprite(1400, 700, 50, 50);
  greenGhost.addImage("greenGhost",greenGhostImg);
  purpleGhost = createSprite(100,700,50,50);
  purpleGhost.addImage("purpleGhost",purpleGhostImg);
  
}

function draw() {
  background(backgroundImg);  
  drawSprites();
}