// function setup() {
//   createCanvas(400, 800);
// }

// function draw() {
//   background(220);
//   fill(0);
//   rect(200, 200, 80, 80);
// }



let distMouse = 15;
let cols; let rows; let size = 10; let offset = 4;
let blocks = [];

function setup() {
  createCanvas(1600, 900);
  rectMode(CENTER);
  angleMode(DEGREES);
  cols = width/size;
  rows = height/size;
  
  for (let i=0; i<cols; i++) {
    blocks[i] = [];
    for (let j=0; j<rows; j++) {
      blocks[i][j] = new Block(size/2 + i*size, size/2 + j*size);
    }
  }

}

function draw() {
  background(0);
  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  } 

  
}