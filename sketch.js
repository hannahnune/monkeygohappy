
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving",monkey_running);
  monkey.scale=0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
  FoodGroup = new Group();
  obstacleGroup = new Group();

  score = 0;
}


function draw() {
  background("white");
    
  if(ground.x<0){
     ground.x=ground.width/2;
     }

  if(keyDown("space")){
     monkey.velocityY = -10;   
     }
  
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
  spwanFood();
  spwanObstacles();
  
  if(obstacleGroup.isTouching(monkey)){
     ground.velocityX = 0;
     monkey.velocityY = 0;
    
     obstacleGroup.setVelocityXEach(0);
     FoodGroup.setVelocityXEach(0);
    
     obstacleGroup.setLifetimeEach(-1);
     FoodGroup.setLifetimeEach(-1);  
    
    stroke("black");
    fill("yellow");
    textSize(30);
    text("Game Over", 150,250)
     }
  
  textSize(20);
  stroke('black');
  fill('black');
  survivalTime = Math.round(frameCount/frameRate());
  text("Survival Time: "+ survivalTime,225,50);
  
  drawSprites();
}

function spwanObstacles(){
  
   if(frameCount%300 === 0){
      obstacle = createSprite(600,310,20,30);
      obstacle.velocityX = -5;
      obstacle.addImage(obstaceImage);
      obstacle.scale=0.2;
      obstacle.lifeTime = 300;
      
      obstacleGroup.add(obstacle);
      }
  
}

function spwanFood(){
  
  if(frameCount%80 === 0 ){
     banana = createSprite(600,250,30,10);
     banana.addImage(bananaImage);
     banana.scale=0.09;
     banana.velocityX=-3;
     banana.y = random(120,200);
     banana.lifeTime = 300;
    
     monkey.depth = banana.depth+1;
     
     FoodGroup.add(banana);
     
     }
  
}






