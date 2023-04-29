/**
 * This function creates a red ball sprite that can be moved using the arrow keys.
 */

/* `var ball;` is declaring a variable named `ball` without assigning it a value. This variable will be
used to store a reference to the sprite object that will be created later in the `setup()` function. */
var ball;

/**
 * The function sets up a canvas and creates a red ball sprite at the center of the canvas.
 */
function setup() {
  createCanvas(500, 500);

  /* `ball = createSprite(250, 250, 10, 10);` is creating a sprite object named `ball` with a width and
  height of 10 pixels and positioning it at the center of the canvas (250, 250). */
  ball = createSprite(250, 250, 30, 30);
  ball.shapeColor = "red";
}

/**
 * The function checks for arrow key inputs and changes the position of an object accordingly while
 * drawing sprites on a white background.
 */
function draw() {
  background("white");


 /* This code block is checking for arrow key inputs using the `keyDown()` function. If the left arrow
 key is pressed, it calls the `changePosition()` function with arguments `-1` and `0`, which moves
 the `ball` sprite to the left by one pixel and keeps its vertical position unchanged. If the right
 arrow key is pressed, it calls the `changePosition()` function with arguments `1` and `0`, which
 moves the `ball` sprite to the right by one pixel and keeps its vertical position unchanged. If the
 up arrow key is pressed, it calls the `changePosition()` function with arguments `0` and `-1`,
 which moves the `ball` sprite up by one pixel and keeps its horizontal position unchanged. If the
 down arrow key is pressed, it calls the `changePosition()` function with arguments `0` and `+1`,
 which moves the `ball` sprite down by one pixel and keeps its horizontal position unchanged. */
  if (keyDown(LEFT_ARROW)) {
   /* `changePosition(-1, 0);` is calling the `changePosition()` function and passing in two arguments:
   `-1` and `0`. This will move the `ball` sprite to the left by one pixel and keep its vertical
   position unchanged. */
    changePosition(-10, 0);
  }
  else if (keyDown(RIGHT_ARROW)) {
    changePosition(10, 0);
  }
  else if (keyDown(UP_ARROW)) {
    changePosition(0, -10);
  }
  else if (keyDown(DOWN_ARROW)) {
    changePosition(0, +10);
  }
  drawSprites();
}

/**
 * The function changes the position of a ball object by adding the values of x and y to its current
 * position.
 * @param x - The amount by which the ball's x-coordinate should be changed.
 * @param y - The parameter "y" in the function "changePosition" represents the amount of vertical
 * movement that will be applied to the "ball" object. It will be added to the current y-coordinate of
 * the ball to change its position vertically.
 */
function changePosition(xINPUT, yINPUT) {
  /* `ball.x = ball.x + xINPUT;` is updating the x-coordinate of the ball sprite by adding the value of `xINPUT`
  to its current x-coordinate. This allows the ball to move horizontally on the canvas when the
  arrow keys are pressed. */
  ball.x = ball.x + xINPUT;
  /* `ball.y = ball.y + yINPUT;` is updating the y-coordinate of the ball sprite by adding the value of `yINPUT`
  to its current y-coordinate. This allows the ball to move vertically on the canvas when the arrow
  keys are pressed. */
  ball.y = ball.y + yINPUT;
}