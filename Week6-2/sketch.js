var pg;
var x = 0;
var speed = 3;
function setup() {
  createCanvas(windowWidth, windowHeight);
  pg = createGraphics(400, 250);
  }

function draw() {
  background(0);
  //strokeWeight(4);
  //stroke(255);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);
  
  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);
  
  
  

  //Draw the offscreen buffer to the screen with image()
  //image(pg, 150, 75);
  

  
  for (var x = 0; x <= mouseX; x += 50){
    for (var y = 0; y <= mouseY; y += 50) {
    fill(random(255), 0, random(200));
    ellipse(x, y, 25, 25);
    
    
     if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;
    
  }
  }
}