
var circleX= 0;

function setup() {
	createCanvas(640, 480);


	// Your sketch code
}

function draw() {

   background(100,100,0);
   ellipseMode(CENTER);
   rectMode(CENTER);

    // Body
    fill (255, 0, 0);
    rect (240, 145, 20, 100);

    //Head
    fill(0, 0, 225, 100);
    ellipse(mouseX, mouseY, 115, 60, 60);

    // Eyes 
    fill(0, 255, 0);
    ellipse(221, 115, 16, 32);
    ellipse(230, 115, 16, 32);

    //Legs
    line(230, 195, 220, 205);
    line(250, 195, 260, 205);

    circleX = circleX + 8;


	// Your sketch code
}

function mousePressed() {
	  background(200,200,200);



}