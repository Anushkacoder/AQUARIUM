var Engine = Matter.Engine;
var World = Matter.World;
var Bodies = Matter.Bodies;
var engine22, world22, fisha, fishaIMG, fishbIMG, fishaIMG2, fishbIMG2;
var border1, border2, border3, border4;
var stonea, stoneb, stonec, stoned, stonee, stonef;
var stoneaIMG, stonebIMG, stonecIMG, stonedIMG, stoneeIMG, stonefIMG;
var backgroundIMG, background1;
var  foodcan, foodbox;
var fooda, foodb;

function preload(){
    fishaIMG = loadAnimation("fish1.png");
    fishbIMG = loadAnimation("fish2.jpg");
    fishaIMG2 = loadAnimation("fish1a.png");
    fishbIMG2 = loadAnimation("fish2a.jpg");
    stoneaIMG = loadImage("stone1.jpg");
    stonebIMG = loadImage("stone2.jpg");
    stonecIMG = loadImage("stone3.jpg");
    stonedIMG = loadImage("stone4.jpg");
    stoneeIMG = loadImage("stone5.jpg");
    stonefIMG = loadImage("stone6.jpg");
    backgroundIMG = loadImage("background.jpg");
    foodbox = loadImage("food.jpg");
    fishfood = loadImage("food1.jpg");
}
function setup(){
    createCanvas(800,500);
    engine22 = Engine.create();
    world22 = engine22.world;

    background1 = createSprite(400,250,800,500);
    background1.addImage(backgroundIMG);
    background1.scale = 1.9;

    fooda = createSprite(40,-40,30,30);
    fooda.addImage(fishfood);
    fooda.scale = 0.1;
   // fooda.velocityY = 2;
    foodb = createSprite(550,-40,30,30);
    foodb.addImage(fishfood);
    foodb.scale = 0.1;
  // foodb.velocityY = 2.5;

    fisha = createSprite(450,350,30,30);
    fisha.addAnimation('f1',fishaIMG);
    fisha.velocityX = -3;
    fisha.scale = 0.2;
    
    fishb = createSprite(400,180,30,30);
    fishb.addAnimation('f2',fishbIMG);
    fishb.velocityX = 3;
    fishb.scale = 0.2;

    border1 = createSprite(-10,250,10,500);
    border2 = createSprite(810,250,10,500);
    border3 = createSprite(400,-10,800,10);
    border4 = createSprite(400,510,800,10);

    stonea = createSprite(40,-10,10,500);
    stonea.addImage(stoneaIMG);
    stonea.velocityY = 3;
    stonea.scale = 0.2;
    stoneb = createSprite(200,-10,10,500);
    stoneb.addImage(stonebIMG);
    stoneb.velocityY = 3.5;
    stoneb.scale = 0.2;
    stonec = createSprite(380,-10,800,10);
    stonec.addImage(stonecIMG);
    stonec.velocityY = 4;
    stonec.scale = 0.2;
    stoned = createSprite(500,-10,800,10);
    stoned.addImage(stonedIMG);
    stoned.velocityY = 3;
    stoned.scale = 0.2;
    stonee = createSprite(650,-10,800,10);
    stonee.addImage(stoneeIMG);
    stonee.velocityY = 4;
    stonee.scale = 0.2;
    stonef = createSprite(780,-10,800,10);
    stonef.addImage(stonefIMG);
    stonef.velocityY = 2;
    stonef.scale = 0.2;

    foodcan = createSprite(750,60,20,20);
    foodcan.addImage(foodbox);
    foodcan.scale = 0.2;
    
}
function draw(){
    background("blue");
    Engine.update(engine22);

    if(mousePressedOver(foodcan)){
        fisha.x = fooda.x 
        fishb.x = foodb.x
        fooda.velocityY = 2;
        foodb.velocityY = 2.5;
      }

    if(fisha.isTouching(fooda)){
        fooda.destroy();
    }
    if(fisha.isTouching(foodb)){
        foodb.destroy();
    }
    if(fishb.isTouching(fooda)){
        fooda.destroy();
    }
    if(fishb.isTouching(foodb)){
        foodb.destroy();
    }
    fisha.bounceOff(border1);
    fisha.bounceOff(border2);

    fishb.bounceOff(border1);
    fishb.bounceOff(border2);

    stonea.collide(border4);
    stoneb.collide(border4);
    stonec.collide(border4);
    stoned.collide(border4);
    stonee.collide(border4);
    stonef.collide(border4);

    drawSprites();
    textSize(30);
    textFont("Algerian");
    fill("black");
    text("WELCOME TO THE FISH AQUARIUM :)",10,40);
    text("KINDLY FEED YOUR FISHES :D",10,70);
}