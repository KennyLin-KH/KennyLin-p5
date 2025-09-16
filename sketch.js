let bodyc
let roofc
let windowsc
let doorc
let doorknobc
function setup() {
  createCanvas(800, 800);
  bodyc = color(247, 226, 97);
  roofc = color(213, 33, 33);
  windowsc = color(139, 245, 245);
  doorc = color(242, 176, 63);
  doorknobc = color(189, 103, 12);
}
function draw() {
  body(450,300,100,100)
  roof()
  windows()
  door()
  doorknob()
}
function body(x,y,w,h) {
  fill (bodyc);
  rect(x,y,w,h);
}
function roof() {
  fill (roofc);
  triangle(440,300,560,300,500,225);
}
function windows() {
  fill (windowsc);
  square(465,315,25);
}
function door() {
  fill (doorc);
  rect(520,350,30,50);
}
function doorknob() {
  fill (doorknobc);
  circle(545,380,5);
}
