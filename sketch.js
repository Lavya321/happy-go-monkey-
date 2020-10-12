
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var survivalTime=0 

function preload(){
  
  
  monkey_running =
  loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  
// stroke("white");
 // textSize(20);
 // fill("white");
  //text("Score:"+score,500,50);
  
 
 
}



function setup() {
//creating monkey  
monkey=createSprite(80,315,20,20);
monkey.addAnimation("moving",monkey_running);
monkey.scale=0.1
  
ground=createSprite(400,350,900,10);
ground.velocityX=-1;
ground.x=ground.width/2;
console.log(ground.x);  

  foodGroup=new Group();
  obstacleGroup=new Group();
  
}

function draw() {
background(255);
  
 stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+survivalTime,100,50); 
  
if(ground.x<0){
  ground.x=ground.width/2;
} 
  
if(keyDown("space")) {
 monkey.velocityY=-12; 
} 
monkey.velocityY=monkey.velocityY+0.8;
  
  monkey.collide(ground);
   
  
 banana(); 
 obstacle(); 
 if(obstacleGroup.isTouching(monkey)){
 ground.velocityX=0;
 monkey.velocityY=0;
 obstacleGroup.setVelocityXEach(0);
 foodGroup.setVelocityXEach(0);
 obstacleGroup.setLifetimeEach(-1);
 foodGroup.setLifetimeEach(-1);  
   
   
 } 
 drawSprites() ;
}
function banana(){
 if(frameCount%80===0){
   
  
 var banana=createSprite(300,100,10,10); 
 banana.addImage(bananaImage);
  banana.velocityX=-5;
  banana.y=random(120,200);
  monkey.depth=banana.depth=+1; 
   banana.lifetime=800
  banana.scale=0.1;
  foodGroup.add(banana) ;
 }
}
function obstacle(){
 if(frameCount%200===0){ 
 var obstacle=createSprite(300,310,10,10); 
 obstacle.addImage(obstacleImage);
  obstacle.velocityX=-5;
   obstacle.lifetime=800
  obstacle.scale=0.2;
obstacleGroup.add(obstacle);
  
}
}