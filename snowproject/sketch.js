var cloudX;
var cloud2;
var cloudspeed;
function setup() {
  createCanvas(800, 800);
  // Help blind or low-vision users understand your sketch
  describe("A 800 by 800 pixel gray canvas.");
  cloudX = 400;
  cloud2 = 0;
  cloudspeed =1
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
  fill(255,0,0);
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

  // Simple dog beside the house
  fill(150, 95, 50);
  rect(180, 745, 45, 30); // body
  rect(180, 770, 10, 15); // back leg
  rect(215, 770, 10, 15); // front leg
  triangle(180, 748, 168, 735, 180, 758); // tail
  circle(225, 738, 30); // head

  fill(95, 55, 25);
  triangle(213, 728, 223, 728, 210, 745); // ear

  fill(0);
  circle(230, 735, 4); // eye
  circle(240, 740, 5); // nose

  // person
  fill(255, 220, 180);
  circle(100, 690, 35); // head
  rect(70, 712, 15, 8); // arm
  rect(115, 712, 15, 8); // other arm
  fill(0, 0, 255);
  rect(85, 708, 30, 45); // shirt
  fill(0);
  rect(87, 753, 10, 32); // leg
  rect(103, 753, 10, 32); // other leg

  // snowman
  fill(255);
  circle(730, 760, 55);
  circle(730, 720, 40);
  circle(730, 690, 28);
  fill(0);
  fill(255, 165, 0);
  fill(100, 50, 0);

  // snowflakes
  fill(255);
  randomSeed(1);
  for (var i = 0; i < 100; i++) {
    circle(random(800), random(800), 6);
  }

  cloudX += cloudspeed;
  cloud2 += cloudspeed;

  if (cloudX > 800) {
    cloudX = 0;
  }

  if (cloud2 > 800) {
    cloud2 = 0;
  }

  console.log("cloudX: " + cloudX);
  console.log("cloud2: " + cloud2);
  console.log("cloudspeed: "+ cloudspeed)
}