var fr,move_rec;
var c;
var ran;

function setup() {
  createCanvas(800,400);
  fr = createSprite(400, 200, 50, 50);
  mr = createSprite(460,200,50,50);
}

function draw() {
  background(255,255,255);  
  mr.x = World.mouseX;
  mr.y = World.mouseY;
  if(mr.x - fr.x < fr.width/2 + mr.width/2 
    && fr.x - mr.x < fr.width/2 + mr.width/2 
    && mr.y - fr.y < fr.width/2 + mr.width/2
    && fr.y - mr.y < fr.width/2 + mr.width/2){
    ran = Math.round(random(1,5));
    switch(ran){
      case 1:
        c = "red";
      case 2:
        c = "yellow";
      case 3:
        c = "lime";
      case 4:
        c = "black";
      case 5:
        c = "grey";
    }   
    fr.shapeColor = c;
  }

  else{
    fr.shapeColor = "cyan";
    mr.shapeColor = "lightgreen";
  }
  drawSprites();
}