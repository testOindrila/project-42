var issImg , bg , space1 , space2 , space3 , space4;
var iss , spaceCraft ;
var hasDocked = false;

function preload()
{
  issImg = loadImage("images/iss.png");
  bg = loadImage("images/spacebg.jpg");
  space1 = loadImage("images/spacecraft1.png");
  space2 = loadImage("images/spacecraft2.png");
  space3 = loadImage("images/spacecraft3.png");
  space4 = loadImage("images/spacecraft4.png");
}

function setup() {
  createCanvas(800,500);

  iss = createSprite(330, 130);
  iss.addImage(issImg);
  iss.scale = 0.8;

  spaceCraft = createSprite(285 , 240);
  spaceCraft.addImage(space1);
  spaceCraft.scale = 0.2;
}

function draw() {
  background(bg);  

  if(!hasDocked)
  {
    spaceCraft.x = spaceCraft.x + random(-1 , 1);

    if(keyDown(UP_ARROW))
    {
      spaceCraft.y = spaceCraft.y - 1;
    }

    if(keyDown(LEFT_ARROW))
    {
      spaceCraft.addImage(space4)
      spaceCraft.x = spaceCraft.x - 1;
    }

    if(keyDown(RIGHT_ARROW))
    {
      spaceCraft.addImage(space3);
      spaceCraft.x = spaceCraft.x + 1;
    }

    if(keyDown(DOWN_ARROW))
    {
      spaceCraft.addImage(space2);
    }
  }
    if(spaceCraft.y <= (iss.y + 70) &&  spaceCraft.x <= (iss.x - 10))
    {
      hasDocked = true;
      fill("white");
      textSize(25);
      text("DOCKING SUCCESSFUL" , 200 , 300);
    }
    
  


  drawSprites();
}