

var COINS ;

var player,player_running,playerImage;

var obstacle,obstacleImage;

var jungle, jungleImage;


var ground;

var obstacleGroup;




function preload(){

  jungleImage=loadImage("jungle.png")
  
  obstacleImage = loadImage("obstacle.PNG");
  
  
  playerImage =  loadImage("player.png");

  
  
  
}

function setup() {
 createCanvas(600,600);
  
  jungle=createSprite(200,400,600,600);
  jungle.addImage("jungle",jungleImage);
  jungle.scale=1.0;
  jungle.velocityX  = -5;
  
  player = createSprite(100,350,20,20);
  player.addImage("player",playerImage);
  player.scale=0.3;
 player.setCollider("circle",0,0,40);
  player.debug=false;
  
  
  ground = createSprite(500,450,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2
  console.log(ground.x);
  ground.visible=false;
  
  obstacleGroup=new Group();      
}


function draw() {
  
 background(0);
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
   if(jungle.x<100){
    jungle.x=jungle.width/2;
  }
  
  if(keyDown("space")&& player.y >= 100) {
        player.velocityY = -12;
  }
  player.velocityY=player.velocityY+0.8;
  

   if(obstacleGroup.isTouching(player)){
  jungle.velocityX = 0;
        player.velocityY = 0;
        obstacleGroup.setVelocityXEach(0);
       
        obstacleGroup.setLifetimeEach(-1);
        
    
   }

  player.collide(ground);
  drawSprites ();
  
  spawnobstacle();
  
  
}

function spawnobstacle () {
   if (frameCount % 80 === 0){
   obstacle = createSprite(300,450,100,100);

   obstacle.addImage(obstacleImage);
   obstacle.scale=0.10;
   obstacle.velocityX=-5;
  obstacle.lifetime = 300;
  player.depth = obstacle.depth;
      player.depth = player.depth + 1;
    obstacleGroup.add(obstacle);
   }
}