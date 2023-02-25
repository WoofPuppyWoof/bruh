var offset;

function setup() {
  createCanvas(windowWidth, windowHeight);
  offset = windowWidth / 5;
}

function draw() {
  background(255, 213, 128);
  translate(width/2 - offset, height/2);
  textSize(offset);
  text('Bruh', 0, 0);
}
