const grid = document.querySelector('.grid');
const btn = document.querySelector('#start');
const scoreDisplay = document.querySelector('#score');
const speed = 0.99
let squares = []
let currentSnake = [2, 1, 0]
let direction = 1
let width = 30
let appleIndex = 0
let score = 0
let intervalTime = 400
let timerId = 0

function createGrid() {
    //create 100 elements with a for loop
    for (let i = 0; i < 900; i++) {


        //create elements
        const square = document.createElement('div')
            //add styling to these elements
        square.classList.add('square')
            //put the elements into our grid
        grid.appendChild(square)
            //push it into a new squares
        squares.push(square)
    }
}

createGrid();

currentSnake.forEach(index => squares[index].classList.add('snake'));

function gameStart() {
    currentSnake.forEach(index => squares[index].classList.remove('snake'));
    squares[appleIndex].classList.remove('apple')
    clearInterval(timerId);
    currentSnake = [2, 1, 0];
    score = 0;
    scoreDisplay.textContent = score
    direction = 1;
    intervalTime = 400;
    timerId = 0;
    generateApples();
    currentSnake.forEach(index => squares[index].classList.add('snake'));
    timerId = setInterval(move, intervalTime);

}


function generateApples() {
    do {
        appleIndex = Math.floor(Math.random() * squares.length);
    } while (squares[appleIndex].classList.contains('snake'));
    squares[appleIndex].classList.add('apple');
}

generateApples();

function move() {

    if (
        (currentSnake[0] + width >= width * width && direction === width) || // DOWN //
        (currentSnake[0] % width === width - 1 && direction === 1) || // Right//
        (currentSnake[0] % width === 0 && direction === -1) ||
        (currentSnake[0] - width <= 0 && direction === -width) ||
        squares[currentSnake[0] + direction].classList.contains('snake')
    )
        return clearInterval(timerId)
            //remove last element from our current snake array
    const tail = currentSnake.pop();
    //remove styling from last element
    squares[tail].classList.remove('snake');
    //add square in direction we are heading
    currentSnake.unshift(currentSnake[0] + direction);
    //add styiling so we can see it
    squares[currentSnake[0]].classList.add('snake');

    if (squares[currentSnake[0]].classList.contains('apple')) {
        //remove the class of apple
        squares[currentSnake[0]].classList.remove('apple')
            //grow our snake by adding class of snake to it
        squares[tail].classList.add('snake')
            //grow our snake array
        currentSnake.push(tail)
            //generate a new apple
        generateApples()
            //add one to score
        score++
        scoreDisplay.textContent = score
            //speed up our snake
        clearInterval()
        intervalTime = intervalTime * speed
        timerId = setInterval(move, intervalTime)

    }

}

function control(e) {
    if (e.key === "ArrowRight" || e.key === "Right") {
        direction = 1
    } else if (e.key === "ArrowUp" || e.key === "Up") {
        direction = -width
    } else if (e.key === "ArrowLeft" || e.key === "Left") {
        direction = -1
    } else if (e.key === "ArrowDown" || e.key === "Down") {
        direction = +width
    }
}

document.addEventListener('keydown', control)

btn.addEventListener('click', gameStart)