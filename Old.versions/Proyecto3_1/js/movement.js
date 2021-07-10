// // MOVEMENT FIGHTER


// let x_pos=0;
// let y_pos=0;

// let velX=0.8;
// let velY=0.8;
// function movementX(x){
//     let fighter = document.getElementById('fighter'); // actual position of the div
//     fighter.style.left=x+'em'; // added new position to position
// }
// function movementY(y){
//     let fighter = document.getElementById('fighter'); // actual position of the div
//     fighter.style.top=y+'em'; // added new position to position
// }


// let sizeY = 40;
// let sizeX = 40;
// function pusher (elEvento){
//     let evento = window.event || elEvento; //storage key pushed
//     let stromboly = document.getElementById('scenario');
//     stromboly.style.height = sizeY +'em';
//     stromboly.style.width = sizeX +'em';

//     switch(evento.keyCode){
//         case 39: //right
//             if (x_pos<sizeX-1){
//                 x_pos+=velX;
//             }
//             movementX(x_pos);
//             break;
//         case 37: //left
//             if (x_pos>0){
//                 x_pos-=velX;
//             }
//             movementX(x_pos);
//             break;
//         case 38: //up
//             if (y_pos>0){
//                 y_pos-=velY;
//             }
//             movementY(y_pos);
//             break;
//         case 40: //down
//             if (y_pos<sizeY-1){
//                 y_pos+=velY;
//             }
//             movementY(y_pos);
//             break;
//     }
// }
// function systemOn(){
//     document.onkeydown = pusher; //capta la pulsación de la tecla y llama a la función pusher
//     console.log(sizeY);
// console.log(sizeX);
// }
// systemOn();


// const board_border = 'black';
// const board_background = "white";
// const snake_col = 'lightblue';
// const snake_border = 'darkblue';

// let snake = [
//   {x: 200, y: 200},
//   {x: 190, y: 200},
//   {x: 180, y: 200},
//   {x: 170, y: 200},
//   {x: 160, y: 200}
// ]

// // Horizontal velocity
// let dx = 10;
// // Vertical velocity
// let dy = 0;

// // Get the canvas element
// const snakeboard = document.getElementById("snakeboard");
// // Return a two dimensional drawing context
// const snakeboard_ctx = snakeboard.getContext("2d");
// // Start game
// main();

// // main function called repeatedly to keep the game running
// function main() {
//     setTimeout(function onTick() {
//     clear_board();
//     move_snake();
//     drawSnake();
//     // Call main again
//     main();
//   }, 100)
// }

// // draw a border around the canvas
// function clear_board() {
//   //  Select the colour to fill the drawing
//   snakeboard_ctx.fillStyle = board_background;
//   //  Select the colour for the border of the canvas
//   snakeboard_ctx.strokestyle = board_border;
//   // Draw a "filled" rectangle to cover the entire canvas
//   snakeboard_ctx.fillRect(0, 0, snakeboard.width, snakeboard.height);
//   // Draw a "border" around the entire canvas
//   snakeboard_ctx.strokeRect(0, 0, snakeboard.width, snakeboard.height);
// }

// // Draw the snake on the canvas
// function drawSnake() {
//   // Draw each part
//   snake.forEach(drawSnakePart)
// }

// // Draw one snake part
// function drawSnakePart(snakePart) {

//   // Set the colour of the snake part
//   snakeboard_ctx.fillStyle = snake_col;
//   // Set the border colour of the snake part
//   snakeboard_ctx.strokestyle = snake_border;
//   // Draw a "filled" rectangle to represent the snake part at the coordinates
//   // the part is located
//   snakeboard_ctx.fillRect(snakePart.x, snakePart.y, 10, 10);
//   // Draw a border around the snake part
//   snakeboard_ctx.strokeRect(snakePart.x, snakePart.y, 10, 10);
// }

// function move_snake() {
//   // Create the new Snake's head
//   const head = {x: snake[0].x + dx, y: snake[0].y + dy};
//   // Add the new head to the beginning of snake body
//   snake.unshift(head);
//   snake.pop();
// }




// function change_direction(event) 
// {  
//    const LEFT_KEY = 37;
//    const RIGHT_KEY = 39;
//    const UP_KEY = 38;
//    const DOWN_KEY = 40;
 
//    const keyPressed = event.keyCode;
//    const goingUp = dy === -10;
//    const goingDown = dy === 10;
//    const goingRight = dx === 10;  
//    const goingLeft = dx === -10;
 
//      if (keyPressed === LEFT_KEY && !goingRight)
//      {    
//           dx = -10;
//           dy = 0;  
//      }
 
//      if (keyPressed === UP_KEY && !goingDown)
//      {    
//           dx = 0;
//           dy = -10;
//      }
 
//      if (keyPressed === RIGHT_KEY && !goingLeft)
//      {    
//           dx = 10;
//           dy = 0;
//      }
 
//      if (keyPressed === DOWN_KEY && !goingUp)
//      {    
//           dx = 0;
//           dy = 10;
//      }
// }

// document.addEventListener("keydown", change_direction)
