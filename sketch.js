var movingRect,fixedRect;
var gameObject1,gameObject2,gameObject3,gameObject4;
function setup() {
  createCanvas(1200,800);
  fixedRect  = createSprite(400, 100, 50, 80);
  movingRect = createSprite(400,800,80,30);
  fixedRect.debug = true
  movingRect.debug = true
  
  
  gameObject1=createSprite(100,100,50,50);
  gameObject1.shapeColor="green";
  gameObject2=createSprite(200,100,50,50);
  gameObject2.shapeColor="green";
  gameObject3=createSprite(300,100,50,50);
  gameObject3.shapeColor="green";
  gameObject4=createSprite(400,100,50,50);
  gameObject4.shapeColor="green";
  gameObject3.velocityX = -5
  gameObject2.velocityX= 5
}

function draw() {
  movingRect.x=World.mouseX;
  movingRect.y=World.mouseY;
 
  bounceOff(gameObject2,gameObject3)

if(isTouching(movingRect,gameObject1))
{
  movingRect.shapeColor="blue";
    gameObject1.shapeColor="blue";

}
else
{
  movingRect.shapeColor="green";
  gameObject1.shapeColor="green";
}
  background(0);  
  drawSprites();
}

