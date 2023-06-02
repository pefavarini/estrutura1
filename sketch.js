var ball = {
  x : 200,
  y : 200,
  r : 50,
  color : ["blue","red","green"],
  speed : 0,
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r);
  fill(ball.color[0]);
  ball.speed = 1;
  ball.x = ball.x + ball.speed
}