var fixedRect, movingRect;
var gameObject1, gameObject2, gameObject3, gameObject4;

function setup() {
  createCanvas(800, 400);
  fixedRect = createSprite(200, 
    200, 50, 80);
  fixedRect.shapeColor = 'green';
  movingRect = createSprite(800, 400, 80, 30);
  movingRect.shapeColor = 'green';
  // movingRect.debug = true;
  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  // fixedRect.debug = true;
}

function draw() {
  background(0, 0, 0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;
  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = 'green';
  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = 'green';
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = 'green';
  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = 'green';
  if (isTouching(movingRect, fixedRect)) {
    movingRect.shapeColor = 'blue';
    fixedRect.shapeColor = 'blue';
    bounceOff(movingRect, fixedRect);
  } else {
    movingRect.shapeColor = 'green';
    fixedRect.shapeColor = 'green';
  }
  drawSprites();
}

function isTouching(object1, object2) {
  if (object1.x - object2.x < object1.width / 2 + object2.width / 2
    && object2.x - object1.x < object1.width / 2 + object2.width / 2
    && object1.y - object2.y < object1.height / 2 + object2.height / 2 
    && object2.y - object1.y < object1.height / 2 + object2.height / 2) {
     return true;
  } else {
  return false;

  }
}

function bounceOff(object1, object2) {
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2) {
    object1.velocityX = object1.velocityX * (-1);
    object2.velocityX = object2.velocityX * (-1);
  }
  if (object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
      object1.velocityY = movingRect.velocityY * (-1);
      object2.velocityY = fixedRect.velocityY * (-1);
  }
}
