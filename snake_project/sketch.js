let snake;
let rez = 20;
let food;
let w;
let h;


function setup() {
  createCanvas(400, 400);
  w = floor(width/rez)
  h = floor(height/rez)
  frameRate(10);
  snake = new Snake();
  food = new Food();
  // food.newLocation()
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    snake.setDir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.setDir(-1, 0);
  } else if (keyCode === UP_ARROW) {
    snake.setDir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.setDir(0, 1);
  } else if (keyCode === 32) {
    for(let i = 0; i < snake.body.length; i++){
      snake.body[i].x = 0
      snake.body[i].y = 0
    }
  }
}
// function mousePressed(){
//   snake.grow()
// }

function draw() {
  scale(rez);
  background(255, 204, 0);

  snake.update();
  snake.show();
  food.show()

  if (snake.eat(food.location)) {
    food.newLocation();
  }

  if (snake.endGame()) {
    let s = 'GAME OVER';
    fill(50);
    textSize(6)
    text(s, 1, 4, 20, 50);
  };

}


