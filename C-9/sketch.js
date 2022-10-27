
var box;

function setup() {
  createCanvas(400,400);

  box=createSprite(200,200,30,30);
}

function draw() 
{
  background(30);

  if(keyDown("RIGHT")){
    box.x=box.x+2;
  }

  if(keyDown("LEFT")){
    box.x=box.x -2;
  }

  drawSprites();
}




