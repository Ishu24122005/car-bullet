var car1,wall;

function setup() {
  createCanvas(800,400);
car1=createSprite(50, 200, 50, 50);
car1.velocityX=10
wall=createSprite(750,100,20,height/2)
}

function draw() {
  background(255,255,255);  
  drawSprites();
}



