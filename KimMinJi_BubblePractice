var x;
var y;
var radius;


function setup() {
  createCanvas(900, 600);//I changed the size of the canvas to have a larger view
  x = random(width);
  y = random(height);
  //radius =50;
}

function draw() {
  background(255);
  stroke('blue');//I put the stroke colour as 'red' when the ellipse is hovered
  strokeWeight('5');//I added stroke weight

  if (dist(mouseX, mouseY, x, y) < radius) {
    if (mouseIsPressed) {
      x = random(width);
      y = random(height);
    }
    fill('#FFC0CB');//I changed the colour that fills inside the ellipse
    strokeWeight('10');//I changed the font weight to 10 when it is hovered.
    rect(30, 20, 55, 55);
    
    //When ellipse is hovered, I wanted to change into only square, but its rather standing on the corner.
  }
  else {
    fill(0,255,0)	;//I changed the colour that fills inside the ellipse
    stroke('yellow');//I chose to put red stroke as a basic stroke colour.
    radius=50;
  }

  ellipse(x, y, radius * 2);
  x += random(-2, 2);
  y += random(-2, 2);

}
