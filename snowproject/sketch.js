var cloudX;
var cloud2;

function setup() {
  createCanvas(800, 800);
  // Help blind or low-vision users understand your sketch
  describe("A 800 by 800 pixel gray canvas.");
  cloudX = 400;
  cloud2 = 0;
}

function draw() {
  background(138, 202, 255);
  
  // Sun
  fill(255, 255, 0);
  noStroke();
  circle(1, 1, 150);

  // Clouds
  fill(255);
  circle(cloudX, 150, 70);
  circle(cloudX + 40, 140, 85);
  circle(cloudX + 80, 150, 70);

  circle(cloud2, 150, 70);
  circle(cloud2 + 40, 140, 85);
  circle(cloud2 + 80, 150, 70);

  // Tree
  fill(165, 42, 42);
  rect(600, 700, 50, 200);
  fill(20, 153, 33);
  triangle(550, 750, 625, 650, 700, 750);

  // House square
  fill(230, 220, 200);
  rect(300, 600, 200, 200);

  // Roof
  fill(180, 60, 50);
  triangle(300, 600, 400, 500, 500, 600);

  // Door
  fill(120, 65, 30);
  rect(375, 700, 50, 100);

  // Snow on the ground
  fill(255);
  rect(0, 785, 800, 15);

  // Static snowflakes
  randomSeed(1);
  for (var i = 0; i < 100; i++) {
    circle(random(800), random(800), 6);
  }

  cloudX += 1;
  cloud2 += 1;

  if (cloudX > 800) {
    cloudX = 0;
  }

  if (cloud2 > 800) {
    cloud2 = 0;
  }
}