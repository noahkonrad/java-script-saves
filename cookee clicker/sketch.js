let background1;
let clicker



async function setup() {
  createCanvas(2000, 2000);
  background1 = await loadImage("backround (3).png");
  clicker = await loadImage("main_locomotive.png)
}

function draw() {
  background(220);

  if (background1) {
    image(background1, 0, 0, 2000, 2000);
  }
}

function mousePressed() {
  console.log("X: " + mouseX + " | Y: " + mouseY);
}