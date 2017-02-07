
var pg;
var radius = 200;

var x = 0;
var speed = 3;

function setup(){
createCanvas(windowWidth, windowHeight);
  pg = createGraphics(400, 250);
}

function draw(){
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 60, 60);

  pg.background(51);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}





var x = 0;
var speed = 3;
function setup() {
 createCanvas(windowWidth, windowHeight);
}

function draw() {


     //ellipse 1
  stroke(255);
  strokeWeight(4);
  noFill();
   if (mouseX > 300 && mouseX < 400) {
    fill(255, 0, 200);
   }
  ellipse(x, 200, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;
  
  
   //ellipse 2
  stroke(255);
  strokeWeight(4);
  noFill();
   if (mouseX > 300 && mouseX < 400) {
    fill(255, 0, 50);
   }
  ellipse(x, 50, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;
  
  
  
  //ellipse 3
   stroke(255);
  strokeWeight(4);
  noFill();
   if (mouseX > 350 && mouseX < 400) {
    fill(255, 0, 300);
   }
  ellipse(x, 350, 100, 100);
  
  if (x > width || x < 0) {
    speed = speed * -1;
  }
  
  x = x + speed;


}
