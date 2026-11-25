let background1;

function preload() {
  // p5 will wait for this to finish before calling setup()
  background1 = loadImage("backround (3).png"); 
}

function setup() {
  createCanvas(2000, 2000);
}

function draw() {
  background(220);
  if (background1) {
    image(background1, 0, 0, 2000, 2000);
  }
}