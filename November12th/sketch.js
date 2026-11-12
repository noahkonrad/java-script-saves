function setup() {
  createCanvas(400, 400);
  // Help blind or low-vision users understand your sketch
  describe("A 400 by 400 pixel not gray canvas.");
}

function draw() {
  background(255, 0, 230);//RGB-red-green-blue


  noStroke(1)
  fill(225,0,0)
  rect(100,100,200,300)
  
  stroke(1)
  fill(0,0,0)
  ellipse(275,250,10,10)

  triangle(100,400,200,400,100)
   noStroke(1)
  fill(225,0,0)
  rect(250,260,100,100)

  
  rect(1,2,44,44)
  fill(50.50,50)
  ellipse(200,170,100,100)
  
  
}//End of draw function
