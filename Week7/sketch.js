var bubbles = [];

function setup() {
  createCanvas(600, 400);
}

function mousePressed() {
  bubbles.push(new Bubble(mouseX, mouseY))
}

function draw() {
  background(0);
  for (var i = 0; i < bubbles.length; i++) {
    bubbles[i].display();
    bubbles[i].move();
  }
}
  
function Bubble(x, y) {

  var speed = mouseY/10;
  this.x = x;
  this.y = y;

  this.display = function(){
    stroke(255);
    fill(255,0,150,50);
    ellipse(this.x, this.y, 24, 24);
  }
  
  this.move = function() {
      this.x = this.x + speed;
    if (this.x >= width || this.x < 0) {
      speed = -speed;
    }
  }
  
}
     








