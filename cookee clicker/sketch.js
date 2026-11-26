
let background1;
let clicker;
let partsshopbuy;
let paintshopbuy;
let bodyshopbuy;
let wheelshopbuy;
let cuplershopbuy;

a
async function setup() {
  createCanvas(2000, 2000);

  console.log("Starting image loading...");

  background1 = await loadImage("backround (3)-1.png");
  console.log("Background loaded");

  clicker = await loadImage("main_locomotive.png");
  console.log("Locomotive loaded");

  partsshopbuy = await loadImage("1.png");
  console.log("Parts shop loaded");

  paintshopbuy = await loadImage("3.png");
  console.log("Paint shop loaded");

  bodyshopbuy = await loadImage("2.png");
  console.log("Body shop loaded");

  wheelshopbuy = await loadImage("4.png");
  console.log("Wheel shop loaded");

  cuplershopbuy = await loadImage("5.png");
  console.log("Coupler shop loaded");
}

function draw() {
  background(220);

  if (background1) {
    image(background1, 0, 0, 2000, 2000);
  }

  if (clicker) image(clicker, 0, 751, 612, 611);
  if (partsshopbuy) image(partsshopbuy, 1564, 247, 397, 365);
  if (paintshopbuy) image(paintshopbuy, 1564, 649, 396, 363);
  if (bodyshopbuy) image(bodyshopbuy, 1566, 1035, 376, 303);
  if (wheelshopbuy) image(wheelshopbuy, 1563, 1358, 375, 284);
  if (cuplershopbuy) image(cuplershopbuy, 1563, 1685, 372, 284);
}

function mousePressed() {
  console.log("X: " + mouseX + " | Y: " + mouseY);
}
