var x;
var y;
var radius;


function setup() {
  createCanvas(900, 600);//I changed the size of the canvas to have a larger view
  x = random(width);
  y = random(height);
  radius =100;
}

function draw() {
  background(255);
  stroke('black');//I put the stroke colour as 'red' when the ellipse is hovered

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill(100,149,237);//I changed the colour that fills inside the ellipse
  }
  else {
    fill(0,255,0)	;//I changed the colour that fills inside the ellipse
    stroke('red');//I chose to put red stroke as a basic stroke colour.
  }

  ellipse(x, y, radius * 2);
  x += random(-5, 5);
  y += random(-5, 5);
}
