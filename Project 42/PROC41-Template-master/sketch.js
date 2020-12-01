const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var batman;
var drops = [];
var maxDrops = 400;
var l1, l2, l3, l4;


function preload(){
    l1 = loadImage("Images/1.png");
    l2 = loadImage("Images/2.png");
    l3 = loadImage("Images/3.png");
    l4 = loadImage("Images/4.png");  
}

function setup(){
   createCanvas(470, 600);
   engine = Engine.create();
   world = engine.world;

   batman = new Umbrella(235, 475, 130);

   for(var i=0; i<maxDrops; i++){
   		drops.push(new Drop(random(0, 470), random(0, 400)))
   }

   Engine.run(engine);
    
}

function draw(){
    background("black");
    spawnThunder();
    batman.display()
 	
 	for(var j = 0; j < drops.length; j++){
 		drops[j].display();
 		drops[j].update();
 	}

  drawSprites();
}

function spawnThunder(){
  if(frameCount % 30 == 0){
    var thunder = createSprite(280, 100);

    var rand = Math.round(random(1, 4));
    switch(rand) {
      case 1: thunder.addImage(l1);
              break;
      case 2: thunder.addImage(l2);
              break;
      case 3: thunder.addImage(l3);
              break;
      case 4: thunder.addImage(l4);
              break;
      default: break;
    }

    thunder.scale = 0.6;
    thunder.lifetime = 10;  
  }
}   

