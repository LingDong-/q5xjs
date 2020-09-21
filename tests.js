/*~~~ https://p5js.org/reference/#/p5/alpha ~~~*/

noStroke();
let c = color(0, 126, 255, 102);
fill(c);
rect(15, 15, 35, 70);
let value = alpha(c); // Sets 'value' to 102
fill(value);
rect(50, 15, 35, 70);

/*~~~ https://p5js.org/reference/#/p5/blue ~~~*/

let c = color(175, 100, 220);
fill(c);
rect(15, 20, 35, 60); // Draw left rectangle
let blueValue = blue(c);
fill(0, 0, blueValue);
rect(50, 20, 35, 60); // Draw right rectangle

/*~~~ https://p5js.org/reference/#/p5/brightness ~~~*/

noStroke();
colorMode(HSB);
let c = color(0, 50, 100);
fill(c);
rect(15, 20, 35, 60);
let value = brightness(c);
fill(value);
rect(50, 20, 35, 60);


/*~~~ https://p5js.org/reference/#/p5/color ~~~*/

let c = color(255, 204, 0);
fill(c);
noStroke();
rect(30, 20, 55, 55);

/*~~~ https://p5js.org/reference/#/p5/color ~~~*/

let c = color(255, 204, 0);
fill(c);
noStroke();
ellipse(25, 25, 80, 80); // Draw left circle
// Using only one value generates a grayscale value.
c = color(65);
fill(c);
ellipse(75, 75, 80, 80);

/*~~~ https://p5js.org/reference/#/p5/color ~~~*/

noStroke();
let c = color(50, 55, 100);
fill(c);
rect(0, 10, 45, 80); // Draw left rect
colorMode(HSB);
c = color(50*3.6, 55, 100);
fill(c);
rect(55, 10, 45, 80);

/*~~~ https://p5js.org/reference/#/p5/green ~~~*/

let c = color(20, 75, 200); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
rect(15, 20, 35, 60); // Draw left rectangle

let greenValue = green(c); // Get green in 'c'
print(greenValue); // Print "75.0"
fill(0, greenValue, 0); // Use 'greenValue' in new fill
rect(50, 20, 35, 60); // Draw right rectangle


/*~~~ https://p5js.org/reference/#/p5/hue ~~~*/

noStroke();
colorMode(HSB);
let c = color(0, 50, 100);
fill(c);
rect(15, 20, 35, 60);
let value = hue(c); // Sets 'value' to "0"
fill(value);
rect(50, 20, 35, 60);

/*~~~ https://p5js.org/reference/#/p5/lerpColor ~~~*/

colorMode(RGB);
stroke(255);
background(51);
let from = color(218, 165, 32);
let to = color(72, 61, 139);
colorMode(RGB); // Try changing to HSB.
let interA = lerpColor(from, to, 0.33);
let interB = lerpColor(from, to, 0.66);
fill(from);
rect(10, 20, 20, 60);
fill(interA);
rect(30, 20, 20, 60);
fill(interB);
rect(50, 20, 20, 60);
fill(to);
rect(70, 20, 20, 60);


/*~~~ https://p5js.org/reference/#/p5/red ~~~*/

let c = color(255, 204, 0); // Define color 'c'
fill(c); // Use color variable 'c' as fill color
rect(15, 20, 35, 60); // Draw left rectangle

let redValue = red(c); // Get red in 'c'
print(redValue); // Print "255.0"
fill(redValue, 0, 0); // Use 'redValue' in new fill
rect(50, 20, 35, 60); // Draw right rectangle

/*~~~ https://p5js.org/reference/#/p5/saturation ~~~*/

noStroke();
colorMode(HSB);
let c = color(0, 50, 100);
fill(c);
rect(15, 20, 35, 60);
let value = saturation(c); // Sets 'value' to 50
fill(value);
rect(50, 20, 35, 60);

/*~~~ https://p5js.org/reference/#/p5.Color/setRed ~~~*/

let backgroundColor;

function setup() {
  backgroundColor = color(100, 50, 150);
}

function draw() {
  backgroundColor.setRed(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
}

/*~~~ https://p5js.org/reference/#/p5.Color/setGreen ~~~*/

let backgroundColor = color(100, 50, 150);
function draw() {
  backgroundColor.setGreen(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
}

/*~~~ https://p5js.org/reference/#/p5.Color/setBlue ~~~*/

let backgroundColor = color(100, 50, 150);
function draw() {
  backgroundColor.setBlue(128 + 128 * sin(millis() / 1000));
  background(backgroundColor);
}

/*~~~ https://p5js.org/reference/#/p5.Color/setAlpha ~~~*/

function draw() {
  clear();
  background(200);
  squareColor = color(100, 50, 100);
  squareColor.setAlpha(128 + 128 * sin(millis() / 1000));
  fill(squareColor);
  rect(13, 13, width - 26, height - 26);
}

/*~~~ https://p5js.org/reference/#/p5/background ~~~*/

background(51);

/*~~~ https://p5js.org/reference/#/p5/clear ~~~*/

// Clear the screen on mouse press.
function draw() {
  ellipse(mouseX, mouseY, 20, 20);
}
function mousePressed() {
  clear();
  background(128);
}

/*~~~ https://p5js.org/reference/#/p5/colorMode ~~~*/

noStroke();
colorMode(RGB);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    stroke(i*2.5, j*2.5, 0);
    point(i, j);
  }
}

/*~~~ https://p5js.org/reference/#/p5/colorMode ~~~*/

noStroke();
colorMode(HSB);
for (let i = 0; i < 100; i++) {
  for (let j = 0; j < 100; j++) {
    stroke(i*3.6, j, 100);
    point(i, j);
  }
}

/*~~~ https://p5js.org/reference/#/p5/fill ~~~*/

// R, G & B integer values
fill(255, 204, 0);
rect(20, 20, 60, 60);


/*~~~ https://p5js.org/reference/#/p5/noFill ~~~*/

rect(15, 10, 55, 55);
noFill();
rect(20, 20, 60, 60);

/*~~~ https://p5js.org/reference/#/p5/noStroke ~~~*/

noStroke();
rect(20, 20, 60, 60);

/*~~~ https://p5js.org/reference/#/p5/stroke ~~~*/

// Grayscale integer value
strokeWeight(4);
stroke(51);
rect(20, 20, 60, 60);

/*~~~ https://p5js.org/reference/#/p5/stroke ~~~*/

// R, G & B integer values
stroke(255, 204, 0);
strokeWeight(4);
rect(20, 20, 60, 60);

/*~~~ https://p5js.org/reference/#/p5/arc ~~~*/

arc(50, 50, 80, 80, 0, PI + QUARTER_PI, OPEN);

/*~~~ https://p5js.org/reference/#/p5/arc ~~~*/

arc(50, 50, 80, 80, 0, PI + QUARTER_PI, CHORD);

/*~~~ https://p5js.org/reference/#/p5/arc ~~~*/

arc(50, 50, 80, 80, 0, PI + QUARTER_PI, PIE);

/*~~~ https://p5js.org/reference/#/p5/ellipse ~~~*/

ellipse(56, 46, 55, 55);

/*~~~ https://p5js.org/reference/#/p5/circle ~~~*/

// Draw a circle at location (30, 30) with a diameter of 20.
circle(30, 30, 20);

/*~~~ https://p5js.org/reference/#/p5/line ~~~*/


line(30, 20, 85, 75);

/*~~~ https://p5js.org/reference/#/p5/line ~~~*/

line(30, 20, 85, 20);
stroke(126);
line(85, 20, 85, 75);
stroke(255);
line(85, 75, 30, 75);

/*~~~ https://p5js.org/reference/#/p5/point ~~~*/


point(30, 20);
point(85, 20);
point(85, 75);
point(30, 75);

/*~~~ https://p5js.org/reference/#/p5/point ~~~*/

point(30, 20);
point(85, 20);
stroke('purple'); // Change the color
strokeWeight(10); // Make the points 10 pixels in size
point(85, 75);
point(30, 75);

/*~~~ https://p5js.org/reference/#/p5/point ~~~*/

let a = createVector(10, 10);
point(a);
let b = createVector(10, 20);
point(b);
point(createVector(20, 10));
point(createVector(20, 20));

/*~~~ https://p5js.org/reference/#/p5/quad ~~~*/

quad(38, 31, 86, 20, 69, 63, 30, 76);

/*~~~ https://p5js.org/reference/#/p5/rect ~~~*/

// Draw a rectangle at location (30, 20) with a width and height of 55.
rect(30, 20, 55, 55);

/*~~~ https://p5js.org/reference/#/p5/rect ~~~*/

// Draw a rectangle with rounded corners, each having a radius of 20.
rect(30, 20, 55, 55, 20);

/*~~~ https://p5js.org/reference/#/p5/rect ~~~*/

// Draw a rectangle with rounded corners having the following radii:
// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
rect(30, 20, 55, 55, 20, 15, 10, 5);

/*~~~ https://p5js.org/reference/#/p5/square ~~~*/

// Draw a square at location (30, 20) with a side size of 55.
square(30, 20, 55);

/*~~~ https://p5js.org/reference/#/p5/square ~~~*/

// Draw a square with rounded corners, each having a radius of 20.
square(30, 20, 55, 20);

/*~~~ https://p5js.org/reference/#/p5/square ~~~*/

// Draw a square with rounded corners having the following radii:
// top-left = 20, top-right = 15, bottom-right = 10, bottom-left = 5.
square(30, 20, 55, 20, 15, 10, 5);


/*~~~ https://p5js.org/reference/#/p5/triangle ~~~*/

triangle(30, 75, 58, 20, 86, 75);

/*~~~ https://p5js.org/reference/#/p5/ellipseMode ~~~*/

// Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses
ellipseMode(RADIUS);
fill(255);
ellipse(50, 50, 30, 30); // Outer white ellipse
ellipseMode(CENTER);
fill(100);
ellipse(50, 50, 30, 30); // Inner gray ellipse

/*~~~ https://p5js.org/reference/#/p5/ellipseMode ~~~*/

// Example showing CORNER and CORNERS ellipseMode with 2 overlaying ellipses
ellipseMode(CORNER);
fill(255);
ellipse(25, 25, 50, 50); // Outer white ellipse
ellipseMode(CORNERS);
fill(100);
ellipse(25, 25, 50, 50); // Inner gray ellipse

/*~~~ https://p5js.org/reference/#/p5/rectMode ~~~*/


rectMode(CORNER);
fill(255);
rect(25, 25, 50, 50); // Draw white rectangle using CORNER mode

rectMode(CORNERS);
fill(100);
rect(25, 25, 50, 50); // Draw gray rectanle using CORNERS mode

/*~~~ https://p5js.org/reference/#/p5/rectMode ~~~*/

rectMode(RADIUS);
fill(255);
rect(50, 50, 30, 30); // Draw white rectangle using RADIUS mode

rectMode(CENTER);
fill(100);
rect(50, 50, 30, 30); // Draw gray rectangle using CENTER mode


/*~~~ https://p5js.org/reference/#/p5/strokeCap ~~~*/

// Example of different strokeCaps
strokeWeight(12.0);
strokeCap(ROUND);
line(20, 30, 80, 30);
strokeCap(SQUARE);
line(20, 50, 80, 50);
strokeCap(PROJECT);
line(20, 70, 80, 70);

/*~~~ https://p5js.org/reference/#/p5/strokeJoin ~~~*/

// Example of MITER type of joints
noFill();
strokeWeight(10.0);
strokeJoin(MITER);
beginShape();
vertex(35, 20);
vertex(65, 50);
vertex(35, 80);
endShape();


/*~~~ https://p5js.org/reference/#/p5/strokeJoin ~~~*/

// Example of BEVEL type of joints
noFill();
strokeWeight(10.0);
strokeJoin(BEVEL);
beginShape();
vertex(35, 20);
vertex(65, 50);
vertex(35, 80);
endShape();

/*~~~ https://p5js.org/reference/#/p5/strokeJoin ~~~*/

// Example of ROUND type of joints
noFill();
strokeWeight(10.0);
strokeJoin(ROUND);
beginShape();
vertex(35, 20);
vertex(65, 50);
vertex(35, 80);
endShape();


/*~~~ https://p5js.org/reference/#/p5/strokeWeight ~~~*/

// Example of different stroke weights
strokeWeight(1); // Default
line(20, 20, 80, 20);
strokeWeight(4); // Thicker
line(20, 40, 80, 40);
strokeWeight(10); // Beastly
line(20, 70, 80, 70);

/*~~~ https://p5js.org/reference/#/p5/bezier ~~~*/

noFill();
stroke(255, 102, 0);
line(85, 20, 10, 10);
line(90, 90, 15, 80);
stroke(0, 0, 0);
bezier(85, 20, 10, 10, 90, 90, 15, 80);

/*~~~ https://p5js.org/reference/#/p5/bezierPoint ~~~*/

noFill();
let x1 = 85,
 x2 = 10,
 x3 = 90,
 x4 = 15;
let y1 = 20,
 y2 = 10,
 y3 = 90,
 y4 = 80;
bezier(x1, y1, x2, y2, x3, y3, x4, y4);
fill(255);
let steps = 10;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = bezierPoint(x1, x2, x3, x4, t);
  let y = bezierPoint(y1, y2, y3, y4, t);
  circle(x, y, 5);
}


/*~~~ https://p5js.org/reference/#/p5/bezierTangent ~~~*/

noFill();
bezier(85, 20, 10, 10, 90, 90, 15, 80);
let steps = 6;
fill(255);
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  // Get the location of the point
  let x = bezierPoint(85, 10, 90, 15, t);
  let y = bezierPoint(20, 10, 90, 80, t);
  // Get the tangent points
  let tx = bezierTangent(85, 10, 90, 15, t);
  let ty = bezierTangent(20, 10, 90, 80, t);
  // Calculate an angle from the tangent points
  let a = atan2(ty, tx);
  a += PI;
  stroke(255, 102, 0);
  line(x, y, cos(a) * 30 + x, sin(a) * 30 + y);
  // The following line of code makes a line
  // inverse of the above line
  //line(x, y, cos(a)*-30 + x, sin(a)*-30 + y);
  stroke(0);
  ellipse(x, y, 5, 5);
}


/*~~~ https://p5js.org/reference/#/p5/bezierTangent ~~~*/

noFill();
bezier(85, 20, 10, 10, 90, 90, 15, 80);
stroke(255, 102, 0);
let steps = 16;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = bezierPoint(85, 10, 90, 15, t);
  let y = bezierPoint(20, 10, 90, 80, t);
  let tx = bezierTangent(85, 10, 90, 15, t);
  let ty = bezierTangent(20, 10, 90, 80, t);
  let a = atan2(ty, tx);
  a -= HALF_PI;
  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);
}

/*~~~ https://p5js.org/reference/#/p5/curve ~~~*/

noFill();
stroke(255, 102, 0);
curve(5, 26, 5, 26, 73, 24, 73, 61);
stroke(0);
curve(5, 26, 73, 24, 73, 61, 15, 65);
stroke(255, 102, 0);
curve(73, 24, 73, 61, 15, 65, 15, 65);


/*~~~ https://p5js.org/reference/#/p5/curve ~~~*/

// Define the curve points as JavaScript objects
let p1 = { x: 5, y: 26 };
let p2 = { x: 73, y: 24 };
let p3 = { x: 73, y: 61 };
let p4 = { x: 15, y: 65 };
noFill();
stroke(255, 102, 0);
curve(p1.x, p1.y, p1.x, p1.y, p2.x, p2.y, p3.x, p3.y);
stroke(0);
curve(p1.x, p1.y, p2.x, p2.y, p3.x, p3.y, p4.x, p4.y);
stroke(255, 102, 0);
curve(p2.x, p2.y, p3.x, p3.y, p4.x, p4.y, p4.x, p4.y);


/*~~~ https://p5js.org/reference/#/p5/curve ~~~*/

noFill();
stroke(255, 102, 0);
curve(5, 26, 0, 5, 26, 0, 73, 24, 0, 73, 61, 0);
stroke(0);
curve(5, 26, 0, 73, 24, 0, 73, 61, 0, 15, 65, 0);
stroke(255, 102, 0);
curve(73, 24, 0, 73, 61, 0, 15, 65, 0, 15, 65, 0);


/*~~~ https://p5js.org/reference/#/p5/curveTightness ~~~*/

// Move the mouse left and right to see the curve change
function setup() {
  createCanvas(100, 100);
  noFill();
}

function draw() {
  background(204);
  let t = map(mouseX, 0, width, -5, 5);
  curveTightness(t);
  beginShape();
  curveVertex(10, 26);
  curveVertex(10, 26);
  curveVertex(83, 24);
  curveVertex(83, 61);
  curveVertex(25, 65);
  curveVertex(25, 65);
  endShape();
}

/*~~~ https://p5js.org/reference/#/p5/curvePoint ~~~*/


noFill();
curve(5, 26, 5, 26, 73, 24, 73, 61);
curve(5, 26, 73, 24, 73, 61, 15, 65);
fill(255);
ellipseMode(CENTER);
let steps = 6;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = curvePoint(5, 5, 73, 73, t);
  let y = curvePoint(26, 26, 24, 61, t);
  ellipse(x, y, 5, 5);
  x = curvePoint(5, 73, 73, 15, t);
  y = curvePoint(26, 24, 61, 65, t);
  ellipse(x, y, 5, 5);
}


/*~~~ https://p5js.org/reference/#/p5/curveTangent ~~~*/

noFill();
curve(5, 26, 73, 24, 73, 61, 15, 65);
let steps = 6;
for (let i = 0; i <= steps; i++) {
  let t = i / steps;
  let x = curvePoint(5, 73, 73, 15, t);
  let y = curvePoint(26, 24, 61, 65, t);
  //ellipse(x, y, 5, 5);
  let tx = curveTangent(5, 73, 73, 15, t);
  let ty = curveTangent(26, 24, 61, 65, t);
  let a = atan2(ty, tx);
  a -= PI / 2.0;
  line(x, y, cos(a) * 8 + x, sin(a) * 8 + y);
}

/*~~~ https://p5js.org/reference/#/p5/beginContour ~~~*/

translate(50, 50);
stroke(255, 0, 0);
beginShape();
// Exterior part of shape, clockwise winding
vertex(-40, -40);
vertex(40, -40);
vertex(40, 40);
vertex(-40, 40);
// Interior part of shape, counter-clockwise winding
beginContour();
vertex(-20, -20);
vertex(-20, 20);
vertex(20, 20);
vertex(20, -20);
endContour();
endShape(CLOSE);

/*~~~ https://p5js.org/reference/#/p5/beginShape ~~~*/

beginShape();
vertex(20, 20);
vertex(40, 20);
vertex(40, 40);
vertex(60, 40);
vertex(60, 60);
vertex(20, 60);
endShape(CLOSE);

/*~~~ https://p5js.org/reference/#/p5/bezierVertex ~~~*/

noFill();
beginShape();
vertex(30, 20);
bezierVertex(80, 0, 80, 75, 30, 75);
endShape();

/*~~~ https://p5js.org/reference/#/p5/bezierVertex ~~~*/

beginShape();
vertex(30, 20);
bezierVertex(80, 0, 80, 75, 30, 75);
bezierVertex(50, 80, 60, 25, 30, 20);
endShape();

/*~~~ https://p5js.org/reference/#/p5/curveVertex ~~~*/


strokeWeight(5);
point(84, 91);
point(68, 19);
point(21, 17);
point(32, 91);
strokeWeight(1);

noFill();
beginShape();
curveVertex(84, 91);
curveVertex(84, 91);
curveVertex(68, 19);
curveVertex(21, 17);
curveVertex(32, 91);
curveVertex(32, 91);
endShape();


/*~~~ https://p5js.org/reference/#/p5/endShape ~~~*/


noFill();

beginShape();
vertex(20, 20);
vertex(45, 20);
vertex(45, 80);
endShape(CLOSE);

beginShape();
vertex(50, 20);
vertex(75, 20);
vertex(75, 80);
endShape();

/*~~~ https://p5js.org/reference/#/p5/quadraticVertex ~~~*/


strokeWeight(5);
point(20, 20);
point(80, 20);
point(50, 50);

noFill();
strokeWeight(1);
beginShape();
vertex(20, 20);
quadraticVertex(80, 20, 50, 50);
endShape();


/*~~~ https://p5js.org/reference/#/p5/quadraticVertex ~~~*/

strokeWeight(5);
point(20, 20);
point(80, 20);
point(50, 50);

point(20, 80);
point(80, 80);
point(80, 60);

noFill();
strokeWeight(1);
beginShape();
vertex(20, 20);
quadraticVertex(80, 20, 50, 50);
quadraticVertex(20, 80, 80, 80);
vertex(80, 60);
endShape();

/*~~~ https://p5js.org/reference/#/p5/vertex ~~~*/

createCanvas(100, 100);
background(240, 240, 240);
fill(237, 34, 93);
noStroke();
translate(50,50);
beginShape();
vertex(-10, 10);
vertex(0, 35);
vertex(10, 10);
vertex(35, 0);
vertex(10, -8);
vertex(0, -35);
vertex(-10, -8);
vertex(-35, 0);
endShape();

/*~~~ https://p5js.org/reference/#/p5/cursor ~~~*/

// Move the mouse across the quadrants
// to see the cursor change
function draw() {
  line(width / 2, 0, width / 2, height);
  line(0, height / 2, width, height / 2);
  if (mouseX < 50 && mouseY < 50) {
    cursor(CROSS);
  } else if (mouseX > 50 && mouseY < 50) {
    cursor('progress');
  } else if (mouseX > 50 && mouseY > 50) {
    cursor('https://avatars0.githubusercontent.com/u/1617169?s=16');
  } else {
    cursor('grab');
  }
}

/*~~~ https://p5js.org/reference/#/p5/noCursor ~~~*/

function setup() {
  noCursor();
}

function draw() {
  background(200);
  ellipse(mouseX, mouseY, 10, 10);
}

/*~~~ https://p5js.org/reference/#/p5/preload ~~~*/

let img;
let c;
function preload() {
  // preload() runs once
  img = loadImage('assets/laDefense.jpg');
}

function setup() {
  // setup() waits until preload() is done
  img.loadPixels();
  // get color of middle pixel
  c = img.get(img.width / 2, img.height / 2);
}

function draw() {
  background(c);
  image(img, 25, 25, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/setup ~~~*/

let a = 0;

function setup() {
  background(0);
  noStroke();
  fill(102);
}

function draw() {
  rect(a++ % width, 10, 2, 80);
}

/*~~~ https://p5js.org/reference/#/p5/draw ~~~*/

let yPos = 0;
function setup() {
  // setup() runs once
  frameRate(30);
}
function draw() {
  // draw() loops forever, until stopped
  background(204);
  yPos = yPos - 1;
  if (yPos < 0) {
    yPos = height;
  }
  line(0, yPos, width, yPos);
}

/*~~~ https://p5js.org/reference/#/p5/noLoop ~~~*/

function setup() {
  createCanvas(100, 100);
  background(200);
  noLoop();
}

function draw() {
  line(10, 10, 90, 90);
}

/*~~~ https://p5js.org/reference/#/p5/noLoop ~~~*/


let x = 0;
function setup() {
  createCanvas(100, 100);
}

function draw() {
  background(204);
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(x, 0, x, height);
}

function mousePressed() {
  noLoop();
}

function mouseReleased() {
  loop();
}


/*~~~ https://p5js.org/reference/#/p5/loop ~~~*/

let x = 0;
function setup() {
  createCanvas(100, 100);
  noLoop();
}

function draw() {
  background(204);
  x = x + 0.1;
  if (x > width) {
    x = 0;
  }
  line(x, 0, x, height);
}

function mousePressed() {
  loop();
}

function mouseReleased() {
  noLoop();
}

/*~~~ https://p5js.org/reference/#/p5/push ~~~*/

ellipse(0, 50, 33, 33); // Left circle

push(); // Start a new drawing state
strokeWeight(10);
fill(204, 153, 0);
translate(50, 0);
ellipse(0, 50, 33, 33); // Middle circle
pop(); // Restore original state

ellipse(100, 50, 33, 33); // Right circle


/*~~~ https://p5js.org/reference/#/p5/push ~~~*/

ellipse(0, 50, 33, 33); // Left circle

push(); // Start a new drawing state
strokeWeight(10);
fill(204, 153, 0);
ellipse(33, 50, 33, 33); // Left-middle circle

push(); // Start another new drawing state
stroke(0, 102, 153);
ellipse(66, 50, 33, 33); // Right-middle circle
pop(); // Restore previous state

pop(); // Restore original state

ellipse(100, 50, 33, 33); // Right circle

/*~~~ https://p5js.org/reference/#/p5/redraw ~~~*/

let x = 0;

function setup() {
  createCanvas(100, 100);
  noLoop();
}

function draw() {
  background(204);
  line(x, 0, x, height);
}

function mousePressed() {
  x += 1;
  redraw();
}

/*~~~ https://p5js.org/reference/#/p5/createCanvas ~~~*/

function setup() {
  createCanvas(100, 50);
  background(153);
  line(0, 0, width, height);
}

/*~~~ https://p5js.org/reference/#/p5/createGraphics ~~~*/

let pg;
function setup() {
  createCanvas(100, 100);
  pg = createGraphics(100, 100);
}

function draw() {
  background(200);
  pg.background(100);
  pg.noStroke();
  pg.ellipse(pg.width / 2, pg.height / 2, 50, 50);
  image(pg, 50, 50);
  image(pg, 0, 0, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/blendMode ~~~*/

blendMode(LIGHTEST);
strokeWeight(30);
stroke(80, 150, 255);
line(25, 25, 75, 75);
stroke(255, 50, 50);
line(75, 25, 25, 75);

/*~~~ https://p5js.org/reference/#/p5/blendMode ~~~*/

blendMode(MULTIPLY);
strokeWeight(30);
stroke(80, 150, 255);
line(25, 25, 75, 75);
stroke(255, 50, 50);
line(75, 25, 25, 75);


/*~~~ https://p5js.org/reference/#/p5/drawingContext ~~~*/

function setup() {
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = 'black';
  background(200);
  ellipse(width / 2, height / 2, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/applyMatrix ~~~*/

function setup() {
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 20;
  background(200);
  // Equivalent to translate(x, y);
  applyMatrix(1, 0, 0, 1, 40 + step, 50);
  rect(0, 0, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/applyMatrix ~~~*/

function setup() {
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 20;
  background(200);
  translate(50, 50);
  // Equivalent to scale(x, y);
  applyMatrix(1 / step, 0, 0, 1 / step, 0, 0);
  rect(0, 0, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/applyMatrix ~~~*/

function setup() {
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 20;
  let angle = map(step, 0, 20, 0, TWO_PI);
  let cos_a = cos(angle);
  let sin_a = sin(angle);
  background(200);
  translate(50, 50);
  // Equivalent to rotate(angle);
  applyMatrix(cos_a, sin_a, -sin_a, cos_a, 0, 0);
  rect(0, 0, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/applyMatrix ~~~*/


function setup() {
  frameRate(10);
  rectMode(CENTER);
}

function draw() {
  let step = frameCount % 20;
  let angle = map(step, 0, 20, -PI / 4, PI / 4);
  background(200);
  translate(50, 50);
  // equivalent to shearX(angle);
  let shear_factor = 1 / tan(PI / 2 - angle);
  applyMatrix(1, 0, shear_factor, 1, 0, 0);
  rect(0, 0, 50, 50);
}


/*~~~ https://p5js.org/reference/#/p5/resetMatrix ~~~*/

translate(50, 50);
applyMatrix(0.5, 0.5, -0.5, 0.5, 0, 0);
rect(0, 0, 20, 20);
// Note that the translate is also reset.
resetMatrix();
rect(0, 0, 20, 20);

/*~~~ https://p5js.org/reference/#/p5/rotate ~~~*/

translate(width / 2, height / 2);
rotate(PI / 3.0);
rect(-26, -26, 52, 52);

/*~~~ https://p5js.org/reference/#/p5/scale ~~~*/

rect(30, 20, 50, 50);
scale(0.5);
rect(30, 20, 50, 50);

/*~~~ https://p5js.org/reference/#/p5/shearX ~~~*/

translate(width / 4, height / 4);
shearX(PI / 4.0);
rect(0, 0, 30, 30);

/*~~~ https://p5js.org/reference/#/p5/shearY ~~~*/

translate(width / 4, height / 4);
shearY(PI / 4.0);
rect(0, 0, 30, 30);

/*~~~ https://p5js.org/reference/#/p5/translate ~~~*/

translate(30, 20);
rect(0, 0, 55, 55);

/*~~~ https://p5js.org/reference/#/p5/translate ~~~*/

rect(0, 0, 55, 55); // Draw rect at original 0,0
translate(30, 20);
rect(0, 0, 55, 55); // Draw rect at new 0,0
translate(14, 14);
rect(0, 0, 55, 55); // Draw rect at new 0,0

/*~~~ https://p5js.org/reference/#/p5/translate ~~~*/

function draw() {
  background(200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  rect(0, 0, 20, 20);
}

/*~~~ https://p5js.org/reference/#/p5/keyIsPressed ~~~*/

function draw() {
  if (keyIsPressed === true) {
    fill(0);
  } else {
    fill(255);
  }
  rect(25, 25, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/key ~~~*/


// Click any key to display it!
// (Not Guaranteed to be Case Sensitive)
function setup() {
  fill(245, 123, 158);
  textSize(50);
}

function draw() {
  background(200);
  text(key, 33, 65); // Display last key pressed.
}

/*~~~ https://p5js.org/reference/#/p5/keyCode ~~~*/

let fillVal = 126;
function draw() {
  fill(fillVal);
  rect(25, 25, 50, 50);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    fillVal = 255;
  } else if (keyCode === DOWN_ARROW) {
    fillVal = 0;
  }
  return false; // prevent default
}

/*~~~ https://p5js.org/reference/#/p5/keyCode ~~~*/

function draw() {}
function keyPressed() {
  background('yellow');
  noStroke();
  fill(0);
  text(`${key} ${keyCode}`, 10, 40);
  print(key, ' ', keyCode);
  return false; // prevent default
}

/*~~~ https://p5js.org/reference/#/p5/keyPressed ~~~*/

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/keyPressed ~~~*/

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyPressed() {
  if (keyCode === LEFT_ARROW) {
    value = 255;
  } else if (keyCode === RIGHT_ARROW) {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/keyReleased ~~~*/

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function keyReleased() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
  return false; // prevent any default behavior
}

/*~~~ https://p5js.org/reference/#/p5/keyIsDown ~~~*/

let x = 50;
let y = 50;

function setup() {
  createCanvas(100, 100);
  fill(255, 0, 0);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    x -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    x += 5;
  }

  if (keyIsDown(UP_ARROW)) {
    y -= 5;
  }

  if (keyIsDown(DOWN_ARROW)) {
    y += 5;
  }

  clear();
  ellipse(x, y, 50, 50);
}


/*~~~ https://p5js.org/reference/#/p5/keyIsDown ~~~*/

let diameter = 50;

function setup() {
  createCanvas(100, 100);
}

function draw() {
  // 107 and 187 are keyCodes for "+"
  if (keyIsDown(107) || keyIsDown(187)) {
    diameter += 1;
  }

  // 109 and 189 are keyCodes for "-"
  if (keyIsDown(109) || keyIsDown(189)) {
    diameter -= 1;
  }

  clear();
  fill(255, 0, 0);
  ellipse(50, 50, diameter, diameter);
}

/*~~~ https://p5js.org/reference/#/p5/mouseX ~~~*/

// Move the mouse across the canvas
function draw() {
  background(244, 248, 252);
  line(mouseX, 0, mouseX, 100);
}

/*~~~ https://p5js.org/reference/#/p5/mouseY ~~~*/

// Move the mouse across the canvas
function draw() {
  background(244, 248, 252);
  line(0, mouseY, 100, mouseY);
}


/*~~~ https://p5js.org/reference/#/p5/pmouseX ~~~*/

// Move the mouse across the canvas to leave a trail
function setup() {

}

function draw() {
  background(244, 248, 252);
  line(mouseX, mouseY, pmouseX, pmouseY);
  print(window.pmouseX + ' -> ' + window.mouseX);
}


/*~~~ https://p5js.org/reference/#/p5/pmouseY ~~~*/

function draw() {
  background(237, 34, 93);
  fill(0);
  //draw a square only if the mouse is not moving
  if (mouseY === pmouseY && mouseX === pmouseX) {
    rect(20, 20, 60, 60);
  }

  print(pmouseY + ' -> ' + mouseY);
}

/*~~~ https://p5js.org/reference/#/p5/mouseButton ~~~*/

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    if (mouseButton === LEFT) {
      ellipse(50, 50, 50, 50);
    }
    if (mouseButton === RIGHT) {
      rect(25, 25, 50, 50);
    }
    if (mouseButton === CENTER) {
      triangle(23, 75, 50, 20, 78, 75);
    }
  }

  print(mouseButton);
}

/*~~~ https://p5js.org/reference/#/p5/mouseIsPressed ~~~*/

function draw() {
  background(237, 34, 93);
  fill(0);

  if (mouseIsPressed) {
    ellipse(50, 50, 50, 50);
  } else {
    rect(25, 25, 50, 50);
  }

  print(mouseIsPressed);
}

/*~~~ https://p5js.org/reference/#/p5/mouseMoved ~~~*/

// Move the mouse across the page
// to change its value

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/mouseDragged ~~~*/

// Drag the mouse across the page
// to change its value

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/mousePressed ~~~*/

// Click within the image to change
// the value of the rectangle

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mousePressed() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}


/*~~~ https://p5js.org/reference/#/p5/mouseReleased ~~~*/

// Click within the image to change
// the value of the rectangle
// after the mouse has been clicked

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseReleased() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/mouseClicked ~~~*/

// Click within the image to change
// the value of the rectangle
// after the mouse has been clicked

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/touches ~~~*/

// On a touchscreen device, touch
// the canvas using one or more fingers
// at the same time
function draw() {
  clear();
  let display = touches.length + ' touches';
  text(display, 5, 10);
}


/*~~~ https://p5js.org/reference/#/p5/touchStarted ~~~*/

// Touch within the image to change
// the value of the rectangle

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function touchStarted() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/touchMoved ~~~*/

// Move your finger across the page
// to change its value

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function touchMoved() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/touchEnded ~~~*/

// Release touch within the image to
// change the value of the rectangle

let value = 0;
function draw() {
  fill(value);
  rect(25, 25, 50, 50);
}
function touchEnded() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

/*~~~ https://p5js.org/reference/#/p5/createImage ~~~*/

let img = createImage(66, 66);
img.loadPixels();
for (let i = 0; i < img.width; i++) {
  for (let j = 0; j < img.height; j++) {
    img.set(i, j, color(0, 90, 102));
  }
}
img.updatePixels();
image(img, 17, 17);

/*~~~ https://p5js.org/reference/#/p5/createImage ~~~*/

let img = createImage(66, 66);
img.loadPixels();
for (let i = 0; i < img.width; i++) {
  for (let j = 0; j < img.height; j++) {
    img.set(i, j, color(0, 90, 102, (i % img.width) * 2));
  }
}
img.updatePixels();
image(img, 17, 17);
image(img, 34, 34);


/*~~~ https://p5js.org/reference/#/p5/createImage ~~~*/

let pink = color(255, 102, 204);
let img = createImage(66, 66);
img.loadPixels();
let d = pixelDensity();
let halfImage = 4 * (img.width * d) * (img.height / 2 * d);
for (let i = 0; i < halfImage; i += 4) {
  img.pixels[i] = red(pink);
  img.pixels[i + 1] = green(pink);
  img.pixels[i + 2] = blue(pink);
  img.pixels[i + 3] = alpha(pink);
}
img.updatePixels();
image(img, 17, 17);

/*~~~ https://p5js.org/reference/#/p5.Image ~~~*/

function setup() {
  let img = createImage(100, 100); // same as new p5.Image(100, 100);
  img.loadPixels();
  createCanvas(100, 100);
  background(0);

  // helper for writing color to array
  function writeColor(image, x, y, red, green, blue, alpha) {
    let index = (x + y * width) * 4;
    image.pixels[index] = red;
    image.pixels[index + 1] = green;
    image.pixels[index + 2] = blue;
    image.pixels[index + 3] = alpha;
  }

  let x, y;
  // fill with random colors
  for (y = 0; y < img.height; y++) {
    for (x = 0; x < img.width; x++) {
      let red = random(255);
      let green = random(255);
      let blue = random(255);
      let alpha = 255;
      writeColor(img, x, y, red, green, blue, alpha);
    }
  }

  // draw a red line
  y = 0;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 255, 0, 0, 255);
  }

  // draw a green line
  y = img.height - 1;
  for (x = 0; x < img.width; x++) {
    writeColor(img, x, y, 0, 255, 0, 255);
  }

  img.updatePixels();
  image(img, 0, 0);
}

/*~~~ https://p5js.org/reference/#/p5.Image/loadPixels ~~~*/

let myImage;
let halfImage;

function preload() {
  myImage = loadImage('assets/rockies.jpg');
}

function setup() {
  myImage.loadPixels();
  halfImage = 4 * myImage.width * myImage.height / 2;
  for (let i = 0; i < halfImage; i++) {
    myImage.pixels[i + halfImage] = myImage.pixels[i];
  }
  myImage.updatePixels();
}

function draw() {
  image(myImage, 0, 0, width, height);
}

/*~~~ https://p5js.org/reference/#/p5.Image/get ~~~*/

let myImage;
let c;

function preload() {
  myImage = loadImage('assets/rockies.jpg');
}

function setup() {
  background(myImage);
  noStroke();
  c = myImage.get(60, 90);
  fill(c);
  rect(25, 25, 50, 50);
}

//get() returns color here

/*~~~ https://p5js.org/reference/#/p5.Image/resize ~~~*/

let img;

function preload() {
  img = loadImage('assets/rockies.jpg');
}

function draw() {
  image(img, 0, 0);
}

function mousePressed() {
  img.resize(50, 100);
}

/*~~~ https://p5js.org/reference/#/p5.Image/mask ~~~*/

let photo, maskImage;
function preload() {
  photo = loadImage('assets/rockies.jpg');
  maskImage = loadImage('assets/mask2.png');
}

function setup() {
  createCanvas(100, 100);
  photo.mask(maskImage);
  image(photo, 0, 0);
}

/*~~~ https://p5js.org/reference/#/p5.Image/filter ~~~*/

let photo1;
let photo2;

function preload() {
  photo1 = loadImage('assets/rockies.jpg');
  photo2 = loadImage('assets/rockies.jpg');
}

function setup() {
  photo2.filter(GRAY);
  image(photo1, 0, 0);
  image(photo2, width / 2, 0);
}

/*~~~ https://p5js.org/reference/#/p5.Image/save ~~~*/

let photo;

function preload() {
  photo = loadImage('assets/rockies.jpg');
}

function draw() {
  image(photo, 0, 0);
}

function keyTyped() {
  if (key === 's') {
    photo.save('photo', 'png');
  }
}

/*~~~ https://p5js.org/reference/#/p5/pixels ~~~*/

let pink = color(255, 102, 204);
loadPixels();
let d = pixelDensity();
let halfImage = 4 * (width * d) * (height / 2 * d);
for (let i = 0; i < halfImage; i += 4) {
  pixels[i] = red(pink);
  pixels[i + 1] = green(pink);
  pixels[i + 2] = blue(pink);
  pixels[i + 3] = alpha(pink);
}
updatePixels();

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(THRESHOLD);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(GRAY);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(OPAQUE);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(INVERT);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(POSTERIZE, 3);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(DILATE);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(BLUR, 3);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/bricks.jpg');
}
function setup() {
  image(img, 0, 0);
  filter(ERODE);
}

/*~~~ https://p5js.org/reference/#/p5/filter ~~~*/

let img;
function preload() {
  img = loadImage('assets/rockies.jpg');
}
function setup() {
  image(img, 0, 0);
  let c = get();
  image(c, width / 2, 0);
}

/*~~~ https://p5js.org/reference/#/p5/get ~~~*/

let img;
function preload() {
  img = loadImage('assets/rockies.jpg');
}
function setup() {
  image(img, 0, 0);
  let c = get();
  image(c, width / 2, 0);
}

/*~~~ https://p5js.org/reference/#/p5/get ~~~*/

let img;
function preload() {
  img = loadImage('assets/rockies.jpg');
}
function setup() {
  image(img, 0, 0);
  let c = get(50, 90);
  fill(c);
  noStroke();
  rect(25, 25, 50, 50);
}

/*~~~ https://p5js.org/reference/#/p5/loadPixels ~~~*/

let img;
function preload() {
  img = loadImage('assets/rockies.jpg');
}

function setup() {
  image(img, 0, 0, width, height);
  let d = pixelDensity();
  let halfImage = 4 * (width * d) * (height * d / 2);
  loadPixels();
  for (let i = 0; i < halfImage; i++) {
    pixels[i + halfImage] = pixels[i];
  }
  updatePixels();
}

/*~~~ https://p5js.org/reference/#/p5/set ~~~*/

loadPixels();
let black = color(0);
set(30, 20, black);
set(85, 20, black);
set(85, 75, black);
set(30, 75, black);
updatePixels();


/*~~~ https://p5js.org/reference/#/p5/set ~~~*/

loadPixels();
for (let i = 30; i < width - 15; i++) {
  for (let j = 20; j < height - 25; j++) {
    let c = color(204 - j, 153 - i, 0);
    set(i, j, c);
  }
}
updatePixels();

/*~~~ https://p5js.org/reference/#/p5/set ~~~*/

let img;
function preload() {
  img = loadImage('assets/rockies.jpg');
}

function setup() {
tint(255,0,0,100);
  set(0, 0, img);
  updatePixels();
  line(0, 0, width, height);
  line(0, height, width, 0);
}


/*~~~ https://p5js.org/reference/#/p5/createVector ~~~*/

let v1;
function setup() {
  createCanvas(100, 100);
  stroke(255, 0, 255);
  v1 = createVector(width / 2, height / 2);
}

function draw() {
  background(255);
  line(v1.x, v1.y, mouseX, mouseY);
}

/*~~~ https://p5js.org/reference/#/p5.Vector ~~~*/

let v1 = createVector(40, 50);
let v2 = createVector(40, 50);

ellipse(v1.x, v1.y, 50, 50);
ellipse(v2.x, v2.y, 50, 50);
v1.add(v2);
ellipse(v1.x, v1.y, 50, 50);

/*~~~ https://p5js.org/reference/#/p5.Vector/toString ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, color(0));

  noStroke();
  fill(0);
  text(v1.toString(), 10, 25, 90, 75);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/set ~~~*/

let v0, v1;
function setup() {
  createCanvas(100, 100);

  v0 = createVector(0, 0);
  v1 = createVector(50, 50);
}

function draw() {
  background(240);

  drawArrow(v0, v1, 'black');
  v1.set(v1.x + random(-1, 1), v1.y + random(-1, 1));

  noStroke();
  fill(0);
  text('x: ' + round(v1.x) + ' y: ' + round(v1.y), 20, 90);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/add ~~~*/

// red vector + blue vector = purple vector
function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(-30, 20);
  drawArrow(v1, v2, 'blue');

  let v3 = p5.Vector.add(v1, v2);
  drawArrow(v0, v3, 'purple');
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


/*~~~ https://p5js.org/reference/#/p5.Vector/sub ~~~*/

// red vector - blue vector = purple vector
function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(70, 50);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(mouseX, mouseY);
  drawArrow(v0, v2, 'blue');

  let v3 = p5.Vector.sub(v1, v2);
  drawArrow(v2, v3, 'purple');
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/mult ~~~*/

function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = createVector(25, -25);
  drawArrow(v0, v1, 'red');

  let num = map(mouseX, 0, width, -2, 2, true);
  let v2 = p5.Vector.mult(v1, num);
  drawArrow(v0, v2, 'blue');

  noStroke();
  fill(0);
  text('multiplied by ' + num.toFixed(2), 5, 90);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/div ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 100);
  let v1 = createVector(50, -50);
  drawArrow(v0, v1, 'red');

  let num = map(mouseX, 0, width, 10, 0.5, true);
  let v2 = p5.Vector.div(v1, num);
  drawArrow(v0, v2, 'blue');

  noStroke();
  fill(0);
  text('divided by ' + num.toFixed(2), 10, 90);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/mag ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, 'black');

  noStroke();
  fill(0);
  text('vector length: \n' + v1.mag().toFixed(2), 10, 70);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


/*~~~ https://p5js.org/reference/#/p5.Vector/magSq ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, 'black');

  noStroke();
  fill(0);
  text('vector length squared: \n' + v1.magSq().toFixed(2), 10, 45);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/dist ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 0);

  let v1 = createVector(70, 50);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(mouseX, mouseY);
  drawArrow(v0, v2, 'blue');

  noStroke();
  fill(0);
  text('distance between vectors: \n' + v2.dist(v1).toFixed(2), 5, 50);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/normalize ~~~*/

function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = createVector(mouseX - 50, mouseY - 50);

  drawArrow(v0, v1, 'red');
  v1.normalize();
  drawArrow(v0, v1.mult(35), 'blue');

  noFill();
  ellipse(50, 50, 35 * 2);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/limit ~~~*/

function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = createVector(mouseX - 50, mouseY - 50);

  drawArrow(v0, v1, 'red');
  drawArrow(v0, v1.limit(35), 'blue');

  noFill();
  ellipse(50, 50, 35 * 2);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/setMag ~~~*/


function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(50, 50);

  drawArrow(v0, v1, 'red');

  let length = map(mouseX, 0, width, 0, 141, true);
  v1.setMag(length);
  drawArrow(v0, v1, 'blue');

  noStroke();
  fill(0);
  text('magnitude set to: \n' + length.toFixed(2), 10, 70);
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/heading ~~~*/

function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = createVector(mouseX - 50, mouseY - 50);

  drawArrow(v0, v1, 'black');

  let myHeading = v1.heading();
  noStroke();
  fill(0);
  text(
    'vector heading: \n' +
      myHeading.toFixed(2) +
      ' radians or \n' +
      degrees(myHeading).toFixed(2) +
      ' degrees',
    10,
    50,
  );
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/rotate ~~~*/

let angle = 0;
function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = createVector(50, 0);

  drawArrow(v0, v1.rotate(angle), 'black');
  angle += 0.01;
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


/*~~~ https://p5js.org/reference/#/p5.Vector/angleBetween ~~~*/

function draw() {
  background(240);
  let v0 = createVector(50, 50);

  let v1 = createVector(50, 0);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(mouseX - 50, mouseY - 50);
  drawArrow(v0, v2, 'blue');

  let angleBetween = v1.angleBetween(v2);
  noStroke();
  fill(0);
  text(
    'angle between: \n' +
      angleBetween.toFixed(2) +
      '\n radians or \n' +
      degrees(angleBetween).toFixed(2) +
      ' degrees',
    10,
    50,
  );
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


/*~~~ https://p5js.org/reference/#/p5.Vector/lerp ~~~*/

let step = 0.01;
let amount = 0;

function draw() {
  background(240);
  let v0 = createVector(0, 0);

  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, 'red');

  let v2 = createVector(90, 90);
  drawArrow(v0, v2, 'blue');

  if (amount > 1 || amount < 0) {
    step *= -1;
  }
  amount += step;
  let v3 = p5.Vector.lerp(v1, v2, amount);

  drawArrow(v0, v3, 'purple');
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}


/*~~~ https://p5js.org/reference/#/p5.Vector/reflect ~~~*/

function draw() {
  background(240);

  let v0 = createVector(0, 0);
  let v1 = createVector(mouseX, mouseY);
  drawArrow(v0, v1, 'red');

  let n = createVector(0, -30);
  drawArrow(v1, n, 'blue');

  let r = v1.copy();
  r.reflect(n);
  drawArrow(v1, r, 'purple');
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/fromAngle ~~~*/

function draw() {
  background(200);

  // Create a variable, proportional to the mouseX,
  // varying from 0-360, to represent an angle in degrees.
  let myDegrees = map(mouseX, 0, width, 0, 360);

  // Display that variable in an onscreen text.
  // (Note the nfc() function to truncate additional decimal places,
  // and the "\xB0" character for the degree symbol.)
  let readout = 'angle = ' + myDegrees.toFixed(1) + '\xB0';
  noStroke();
  fill(0);
  text(readout, 5, 15);

  // Create a p5.Vector using the fromAngle function,
  // and extract its x and y components.
  let v = p5.Vector.fromAngle(radians(myDegrees), 30);
  let vx = v.x;
  let vy = v.y;

  push();
  translate(width / 2, height / 2);
  noFill();
  stroke(150);
  line(0, 0, 30, 0);
  stroke(0);
  line(0, 0, vx, vy);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5.Vector/random2D ~~~*/

function setup() {
  frameRate(1);
}

function draw() {
  background(240);

  let v0 = createVector(50, 50);
  let v1 = p5.Vector.random2D();
  drawArrow(v0, v1.mult(50), 'black');
}

// draw an arrow for a vector at a given base position
function drawArrow(base, vec, myColor) {
  push();
  stroke(myColor);
  strokeWeight(3);
  fill(myColor);
  translate(base.x, base.y);
  line(0, 0, vec.x, vec.y);
  rotate(vec.heading());
  let arrowSize = 7;
  translate(vec.mag() - arrowSize, 0);
  triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
  pop();
}

/*~~~ https://p5js.org/reference/#/p5/textAlign ~~~*/

fill(0);
noStroke();
textSize(16);
textAlign(RIGHT);
text('ABCD', 50, 30);
textAlign(CENTER);
text('EFGH', 50, 50);
textAlign(LEFT);
text('IJKL', 50, 70);

/*~~~ https://p5js.org/reference/#/p5/textAlign ~~~*/

fill(0);

textSize(16);
strokeWeight(0.5);

line(0, 12, width, 12);
textAlign(CENTER, TOP);
text('TOP', width/2, 12);

line(0, 37, width, 37);
textAlign(CENTER, CENTER);
text('CENTER', width/2, 37);

line(0, 62, width, 62);
textAlign(CENTER, BASELINE);
text('BASELINE', width/2, 62);

line(0, 87, width, 87);
textAlign(CENTER, BOTTOM);
text('BOTTOM', width/2, 87);


/*~~~ https://p5js.org/reference/#/p5/textLeading ~~~*/

fill(0);
noStroke();
let lines = 'L1\nL2\nL3'; // "\n" is a "new line" character
textSize(12);

textLeading(10);
text(lines, 10, 25);

textLeading(20);
text(lines, 40, 25);

textLeading(30);
text(lines, 70, 25);

/*~~~ https://p5js.org/reference/#/p5/textSize ~~~*/

fill(0);
noStroke();
textSize(12);
text('Font Size 12', 10, 30);
textSize(14);
text('Font Size 14', 10, 60);
textSize(16);
text('Font Size 16', 10, 90);

/*~~~ https://p5js.org/reference/#/p5/textStyle ~~~*/

fill(0);
noStroke();
textSize(12);
textStyle(NORMAL);
text('Font Style Normal', 10, 15);
textStyle(ITALIC);
text('Font Style Italic', 10, 40);
textStyle(BOLD);
text('Font Style Bold', 10, 65);
textStyle(BOLDITALIC);
text('Font Style Bold Italic', 10, 90);

/*~~~ https://p5js.org/reference/#/p5/textWidth ~~~*/

textSize(28);
fill(0);
let aChar = 'P';
let cWidth = textWidth(aChar);
text(aChar, 0, 40);
line(cWidth, 0, cWidth, 50);

let aString = 'p5.js';
let sWidth = textWidth(aString);
text(aString, 0, 85);
line(sWidth, 50, sWidth, 100);

/*~~~ https://p5js.org/reference/#/p5/textAscent ~~~*/

fill(0);
let base = height * 0.75;
let scalar = 0.8; // Different for each font

textSize(32); // Set initial text size
let asc = textAscent() * scalar; // Calc ascent
line(0, base - asc, width, base - asc);
text('dp', 0, base); // Draw text on baseline

textSize(64); // Increase text size
asc = textAscent() * scalar; // Recalc ascent
line(40, base - asc, width, base - asc);
text('dp', 40, base); // Draw text on baseline

/*~~~ https://p5js.org/reference/#/p5/textDescent ~~~*/

fill(0);
let base = height * 0.75;
let scalar = 0.8; // Different for each font

textSize(32); // Set initial text size
let desc = textDescent() * scalar; // Calc ascent
line(0, base + desc, width, base + desc);
text('dp', 0, base); // Draw text on baseline

textSize(64); // Increase text size
desc = textDescent() * scalar; // Recalc ascent
line(40, base + desc, width, base + desc);
text('dp', 40, base); // Draw text on baseline

/*~~~ https://p5js.org/reference/#/p5/randomSeed ~~~*/

randomSeed(99);
for (let i = 0; i < 100; i++) {
  let r = random(0, 255);
  stroke(r);
  line(i, 0, i, 100);
}

/*~~~ https://p5js.org/reference/#/p5/random ~~~*/

for (let i = 0; i < 100; i++) {
  let r = random(50);
  stroke(r * 5);
  line(50, i, 50 + r, i);
}

/*~~~ https://p5js.org/reference/#/p5/random ~~~*/

for (let i = 0; i < 100; i++) {
  let r = random(-50, 50);
  line(50, i, 50 + r, i);
}

/*~~~ https://p5js.org/reference/#/p5/random ~~~*/

// Get a random element from an array using the random(Array) syntax
let words = ['apple', 'bear', 'cat', 'dog'];
let word = random(words); // select random word
noStroke();
fill(0);
text(word, 10, 50); // draw the word

/*~~~ https://p5js.org/reference/#/p5/randomGaussian ~~~*/

for (let y = 0; y < 100; y++) {
  let x = randomGaussian(50, 15);
  line(50, y, x, y);
}

/*~~~ https://p5js.org/reference/#/p5/randomGaussian ~~~*/

let distribution = new Array(360);
function setup() {
   createCanvas(100, 100);
   for (let i = 0; i < distribution.length; i++) {
     distribution[i] = floor(randomGaussian(0, 15));
   }
 }
function draw() {
   background(204);
  translate(width / 2, width / 2);
  for (let i = 0; i < distribution.length; i++) {
     rotate(TWO_PI / distribution.length);
     stroke(0);
     let dist = abs(distribution[i]);
     line(0, 0, dist, 0);
   }
 }

/*~~~ https://p5js.org/reference/#/p5/noise ~~~*/

let xoff = 0.0;

function draw() {
  background(204);
  xoff = xoff + 0.01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
}

/*~~~ https://p5js.org/reference/#/p5/noise ~~~*/

let noiseScale=0.02;

function draw() {
  background(0);
  for (let x=0; x < width; x++) {
    let noiseVal = noise((mouseX+x)*noiseScale, mouseY*noiseScale);
    stroke(noiseVal*255);
    line(x, mouseY+noiseVal*80, x, height);
  }
}

/*~~~ https://p5js.org/reference/#/p5/noiseDetail ~~~*/

let noiseVal;
 let noiseScale = 0.02;
function setup() {
   createCanvas(100, 100);
 }
function draw() {
   background(0);
   for (let y = 0; y < height; y++) {
     for (let x = 0; x < width / 2; x++) {
       noiseDetail(2, 0.2);
       noiseVal = noise((mouseX + x) * noiseScale, (mouseY + y) * noiseScale);
       stroke(noiseVal * 255);
       point(x, y);
       noiseDetail(8, 0.65);
       noiseVal = noise(
         (mouseX + x + width / 2) * noiseScale,
         (mouseY + y) * noiseScale
       );
       stroke(noiseVal * 255);
       point(x + width / 2, y);
     }
   }
 }

/*~~~ https://p5js.org/reference/#/p5/noiseSeed ~~~*/


let xoff = 0.0;

function setup() {
  noiseSeed(99);
  stroke(0, 10);
}

function draw() {
  xoff = xoff + .01;
  let n = noise(xoff) * width;
  line(n, 0, n, height);
}