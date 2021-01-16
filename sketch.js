var monkey,monkeyAnimation,stone,stoneImage,banana,bananaImage;

var ground,scene,groundImage,sceneImage;

var survivalTime;


function preload(){
  monkeyAnimation=loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png");
  
  stoneImage=loadImage("stone.png");
  
  bananaImage=loadImage("banana.png");
  
  sceneImage=loadImage("jungle.jpg");
  
}

function setup() {
  createCanvas(800, 400);
  
  monkey=createSprite(40,350,10,10);
  monkey.scale=0.1;
  monkey.addAnimation("player",monkeyAnimation);
  
  ground=createSprite(200,380,800,10);
  ground.shapeColor="black";
  ground.x=ground.width/2;
  
  scene=createSprite(400,100,800,400);
  //scene.scale=0.9;
  scene.addImage("background",sceneImage)
  
  survivalTime=0;
  
}

function draw() {
  background(220);
 
 text("survivalTime"+survivalTime,600,200)
  
  if(ground.x<0){
    ground.x=ground.width/2;
  }
  
  if(keyDown("space") && monkey.y>=345){
    monkey.velocityY=-12;
  }
  monkey.velocityY=monkey.velocityY+0.8;
  
  spawnBanana();
  
  
  monkey.depth=scene.depth+1;
  survivalTime.depth=scene.depth+1;
  
   monkey.collide(ground);
  
  drawSprites();
}
function spawnBanana(){
  if(World.frameCount%60===0){
    banana=createSprite(400,300,10,40);
    
    
    
    
  }
}

function spawnObstacles(){
  
  
  
  
  
  
  
}