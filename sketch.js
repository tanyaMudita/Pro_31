const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops =100;
var man, thunder;
var thunderCreatedFrame=0;
var drop=[];

function preload(){

  th1=loadImage("1.png");  
  th2=loadImage("2.png");  
  th3=loadImage("3.png");  
  th4=loadImage("4.png");  
    
}

function setup(){
    createCanvas(600,780);

    engine = Engine.create();
	world = engine.world;
    Engine.run(engine);
    
    if(frameCount%50===0){

        for(var i=0; i<maxDrops; i++){
   
           drop.push(new Drops (random(0,600),random(0,600),10));
       
        }}
            

    man=new Umb();

    
}

function draw(){
    background(0);

    console.log(frameCount);

   
    

    var rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder= createSprite(random(10,490),random(7,20),10,10);
        switch(rand){
            case 1:thunder.addImage(th1);
            break;
            case 2:thunder.addImage(th2);
            break;
            case 3:thunder.addImage(th3);
            break;
            case 4:thunder.addImage(th4);
            break;
            default:break;
        }

        thunder.scale=random(0.3,0.6);

    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }


    for (var i=0;i<maxDrops;i++){
        drop[i].display();
        drop[i].updateY();
    }
    
   
    man.display();
   drawSprites();
   
}   

