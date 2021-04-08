var canvas;
var block1,block2,block3;
var ball,edges;
var music;

function preload(){
    music = loadSound("music.mp3");
}



function setup(){
    canvas = createCanvas(800,600);

//create 4 different surfaces
block1 = createSprite(100,500,360,30);
block1.shapeColor = rgb(0,0,225);

block2 = createSprite(200,500,200,30);
block2.shapeColor = rgb(225,150,0);

block3 = createSprite(400,500,200,30);
block3.shapeColor = rgb(150,20,70);




    //create box sprite and give velocity


    
 ball = createSprite(random(20,750),100,40,40);
 ball.shapeColor =rgb(250,250,250);
 ball.velocityX = 4;
 ball.velocityY = 10;

}

function draw() {
    background(rgb(169,169,169));
 edges = createEdgeSprites();
 ball.bounceOff(edges);

    //create edgeSprite
 
  if(block1.isTouching(ball) && ball.bounceOff(block1)){
   ball.shapeColor = rgb(0,0,225);
   music.play();
  
 }



 if(block2.isTouching(ball)){
    ball.shapeColor = rgb(225,128,0);
    ball.velocityX = 0;
    ball.velocityY = 0;
    music.stop();
    
  }
 


  if(block3.isTouching(ball) && ball.bounceOff(block3)){
    ball.shapeColor = rgb(150,250,70);
    music.play();
  }
 

  

//add condition to check if box touching surface and make it box

drawSprites();


}