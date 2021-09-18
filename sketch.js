var box

function setup() {
  createCanvas(600,300);
  box = createSprite(100,200,100,100)
}

function draw() 
{
  background("red");
  if(keyIsDown(RIGHT_ARROW)) {
    box.position.x = box.position.x + 5
  }
  if(keyIsDown(LEFT_ARROW)) {
    box.position.x = box.position.x - 5
  }
  drawSprites()
}




