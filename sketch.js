var Rectangulo_estatico, Rectangulo_movimiento;

function setup()
{
  createCanvas(800,400);

  Rectangulo_estatico = createSprite(400, 200, 50, 80);
  Rectangulo_estatico.shapeColor = "red";
  Rectangulo_movimiento = createSprite(800, 200, 80, 50);
  Rectangulo_movimiento.shapeColor = "#1789df";
}

function draw()
{
  background(0,0,0);

  Rectangulo_movimiento.x = World.mouseX;
  Rectangulo_movimiento.y = World.mouseY;

  if(Rectangulo_movimiento.x - Rectangulo_estatico.x < Rectangulo_estatico.width/2 +
    Rectangulo_movimiento.width/2 && Rectangulo_estatico.x - Rectangulo_movimiento.x <
    Rectangulo_estatico.width/2 + Rectangulo_movimiento.width/2 && Rectangulo_movimiento.y -
    Rectangulo_estatico.y < Rectangulo_estatico.height/2 + Rectangulo_movimiento.height/2 &&
    Rectangulo_estatico.y - Rectangulo_movimiento.y < Rectangulo_estatico.height/2 +
    Rectangulo_movimiento.height/2)
  {
    Rectangulo_movimiento.shapeColor = "yellow";
    Rectangulo_estatico.shapeColor = "yellow";
  }

  else
  {
    Rectangulo_movimiento.shapeColor = "#1789df";
    Rectangulo_estatico.shapeColor = "red";
  }

  //console.log(Rectangulo_movimiento.x - Rectangulo_estatico.x);

  drawSprites();
}