var START = 1;
var PLAY = 2;
var END = 0;

var birchScore = 0, ashleyScore = 0; 

//var gameState = START;

var dodgeball, dodgeball2;
var dodgeballImg, dodgeball2Img;
var birch, ashley;
var birchImg, ashleyImg;
var edges;

function preload() {
  dodgeballImg = loadImage("images/screenshot.png");
  dodgeball2Img = loadImage("images/green.png");
  boxImg = loadImage("images/box.png");
}

function setup() {
  createCanvas(1000,500);


  dodgeball = createSprite(150,200);
  dodgeball.addImage(dodgeballImg);
  dodgeball.scale = 0.07;

  dodgeball2 = createSprite(800,200);
  dodgeball2.addImage (dodgeball2Img);
  dodgeball2.scale = 0.2;


  birch = createSprite(900,200,40,50);
 
  ashley = createSprite(50,200,40,50);
}

function draw() {  
 // if (gameState===START){
   // background("pink");

    //line(150, 400, 800, 400); 
    //line(150, 150, 800, 150); 
  
    /*push();
    fill("black");
    textSize(15);
    text("Welcome to Dodgeball!", 390, 100);
    pop();

    fill("red");
    text("Here are the ruels:", 140, 180);

  }
if (gameState===PLAY)
{*/
  background("pink");

  push();
  fill("black");
  text(ashleyScore,50,20);
   text(birchScore,900,20);
  edges = createEdgeSprites();
  pop();

  for (var i = 0; i < 600; i=i+20) {
    line(490,i,490,i+10);
  }

  if (keyDown("space"))
  {
    serve();
  }

  if (keyDown("q"))
  {
    serve2();
  }

  if (keyDown("up"))
  {
   // birch.velocityY = birch.velocityY - 1;
   birch.y = birch.y -4;
  }

  if (keyDown("down"))
  {
    //birch.velocityY = birch.velocityY + 1;
    birch.y = birch.y +4;
  }

  if (keyDown("w"))
  {
    //ashley.velocityY = ashley.velocityY + 2;
    ashley.y = ashley.y -4;
  }

  if (keyDown("s"))
  {
    //ashley.velocityY = ashley.velocityY + 2;
    ashley.y = ashley.y +4;
  }

  //Here I tried to make the balls stop but it dosen't work for some reason
  if (keyDown("right"))
  {
    dodgeball.velocityX = 0;
    dodgeball.velocityY = 0;
  }

  if (keyDown("e"))
  {
    dodgeball2.velocityX = 0;
    dodgeball2.velocityY = 0;
  }

  dodgeball.bounceOff(edges[0]);
  dodgeball.bounceOff(edges[1]);
  dodgeball.bounceOff(edges[2]);
  dodgeball.bounceOff(edges[3]);
  dodgeball2.bounceOff(edges[0]);
  dodgeball2.bounceOff(edges[1]);  
  dodgeball2.bounceOff(edges[2]);
  dodgeball2.bounceOff(edges[3]);  

  birch.bounceOff(edges[2]);
  birch.bounceOff(edges[3]);  
  ashley.bounceOff(edges[2]);
  ashley.bounceOff(edges[3]);  

  if(dodgeball.isTouching(birch) || dodgeball2.isTouching(birch))
  {
    //dodgeball.bounceOff(birch)
    //dodgeball2.bounceOff(birch)
    reset();
    ashleyScore = ashleyScore + 1; 

  }

  if(dodgeball.isTouching(ashley) || dodgeball2.isTouching(ashley))
  {
    //dodgeball.bounceOff(ashley)
    //dodgeball2.bounceOff(ashley)
    reset();
    birchScore = birchScore + 1;

  }

  drawSprites()
}
//}

function serve()
{
  dodgeball.velocityX = 8;
  dodgeball.velocityY = 7;
}

function serve2()
{
  dodgeball2.velocityX = 8;
  dodgeball2.velocityY = 7;
}

function reset()
{
  birch.x = 900;
  birch.y = 200;

  ashley.x = 50;
  ashley.y = 200;

  dodgeball.x = 150;
  dodgeball.y = 200;

  dodgeball2.x = 800;
  dodgeball2.y = 200;

  dodgeball.velocityX = 0;
  dodgeball.velocityY = 0;
  dodgeball2.velocityX = 0;
  dodgeball2.velocityY = 0;
}