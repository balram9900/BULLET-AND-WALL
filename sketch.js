
var bullet,wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,331);
  weight=random(30,52);
  thickness =random (22,83);
  wall=createSprite(1500, 200,thickness , height/2);
  bullet=createSprite(50, 200, 50, 20);
  bullet.velocityX=speed;
}


function draw() {
  background(255,255,255);  
  
if (hascollided(bullet,wall))
  {
bullet.velocityX=0;

var damage = 0.5*weight*speed*speed/ (thickness*thickness*thickness);

if (damage>10)
{

wall.shapeColor = "green";

}

if  (damage<10)
{

wall.shapeColor = "red";
}
  

  }

 

  drawSprites()
}

function hascollided(bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge = wall.x;

if(bulletRightEdge >= wallLeftEdge)
{
return true
}
return false
}

