var fixedRect, movingRect;

function setup() {


  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 80, 50);
  movingRect = createSprite(400,200,30,80);

  fixedRect.shapeColor = "pink";
  fixedRect.debug = true;

  movingRect.shapeColor = "pink";
  movingRect.debug = true;
}

function draw() {
  background(255,255,255); 
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(movingRect.x-fixedRect.x < fixedRect.width/2 + movingRect.width/2
    && fixedRect.x-movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y-fixedRect.y < fixedRect.height/2 + movingRect.height/2
      && fixedRect.y-movingRect.y < fixedRect.height/2 + movingRect.height/2){
   movingRect.shapeColor = "orange";
   fixedRect.shapeColor = "orange";
  }
  else{
   movingRect.shapeColor = "pink";
   fixedRect.shapeColor = "pink";
  }

  
  drawSprites();
}