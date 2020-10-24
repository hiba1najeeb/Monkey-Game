var PLAY=1;
var END=0;
var gameState = PLAY;

var monkey , monkey_running
var groud,groudImage;
var FoodGroup, obstacleGroup,o1,o2;
var score
var invisibleGround;
var jumpSound;

function preload(){
  

    monkey_running =    loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png",
                                                             "sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png",
"sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
   groundImage =loadImage("2122.jpg");
  jumpSound =loadSound("jump.mp3");
  
  o1 =loadImage("wood.png")
  o2 =loadImage("stone.png")

}



function setup() {
  createCanvas(450,300)
ground =createSprite(0,0,10,10);
  ground.addImage("g1",groundImage);
  ground.x =ground.width/2;
  ground.scale =2;
  ground.velocityX=-4;
  
    FoodGroup = createGroup();
  obstacleGroup = createGroup();
  
  monkey=createSprite(50,260,10,10);
  monkey.addAnimation("m1",monkey_running);
  monkey.scale = 0.11;
  
  score =0;
  
  
  invisibleGround=createSprite(70,260,800,5);
  invisibleGround.visible =false;
}





function draw() {
background("white");
  
  banana();
  obstacle();
  monkey.collide(invisibleGround);
  
  if(ground.x<0){
    ground.x =ground.width/2
}
  
  if(keyDown("space")&& monkey.y>215 )   {
    monkey.velocityY=-13;
    jumpSound.play();
  }
  
   monkey.velocityY = monkey.velocityY + 0.5
  
  
  
  drawSprites();
  textSize(20);
  fill("white");
  score =Math.round(frameCount/5 )
  text("Survival Time : "+ score,20 ,30)
  
  
  
  
  
  
}

function banana (){
  if(frameCount%80 ===0){
  var banana = createSprite (400,200,10,10);
    banana.addImage ("b1",bananaImage);
    banana.scale =0.020;
    banana.y=Math.round(random(120,180))
    banana.velocityX=-4;
    banana.lifetime =100;
    FoodGroup.add(banana);
}
  
  
}

function obstacle(){
  if(frameCount%300 === 0){
    var obstacle =createSprite(400,240,10,10)
    r=Math.round(random(1,2))
    if(r==1){
       obstacle.addImage("o1",o1)
      obstacle.scale =0.1;
       }else if (r ==2){
         obstacle.addImage("o2",o2)
         obstacle.scale =0.2;
       }
    obstacle.velocityX =-4;
    obstacle.lifetime = 100;
    obstacleGroup.add(obstacle);
  }
  
  
}


