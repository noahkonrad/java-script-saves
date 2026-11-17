function setup() {
  createCanvas(800, 800);
  // Help blind or low-vision users understand your sketch
  describe("A 800 by 800 pixel gray canvas.");
}

function draw() {
  background(138, 202, 255);
  fill(255, 255, 0)
  noStroke() 
  circle(1,1,150)
  fill(165, 42, 42)
  rect(600,700,50,200)
  triangle(750, 750, 600, 600, 700, 600)
  
}