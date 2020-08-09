var bullet, wall
var speed, weight,thickness


function setup() {
  createCanvas(1600,400);
  

  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)

  bullet=createSprite(50,150,30,15)
  wall=createSprite(1200,150,thickness,height/2)
  wall.shapeColor=(80,80,80);
  
}

function draw() {
  background(0,0,0); 

  bullet.velocityX= speed;
if(wall.x-bullet.x < (bullet.width+wall.width)/2){
  bullet.velocityX=0;
  var deformation=0.5 * weight * speed* speed/22509;
  if(deformation>180){
    bullet.shapeColor=color(255,0,0);
  }

  if(deformation<100){
    bullet.shapeColor=color(0,255,0);
  }
wall.shapeColor(80,80,80);
 
}

if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  var damage=0.5 * weight * speed* speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor(255,0,0)
  }
}

if(damage<10){
  wall.shapeColor(0,255,0)
}

  drawSprites();
}

function hasCollided(lwall,lbullet){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}

