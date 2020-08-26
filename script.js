var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message")
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");


init();

function init(){
setupModeButtons();
setupSquares();
reset();
}


// --------------ResetButton Eventlistener-------------

resetButton.addEventListener("click", function(){
    reset();
});


function setupModeButtons(){
    for (let i = 0; i < modeButtons.length; i++) {
        modeButtons[i].addEventListener('click', function(){
            modeButtons[0].classList.remove("selected");
            modeButtons[1].classList.remove("selected");
            this.classList.add("selected");
            // -----ternary operator-----
            this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
            reset();
        }) 
    }
}

function setupSquares(){
    for (let i = 0; i < squares.length; i++) {
        // add click listeners to squares
        squares[i].addEventListener('click', function(){
        // grab color of clicked squares
        var clickedColor = this.style.backgroundColor;
        // compare color to pickedColor
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            resetButton.textContent = "PLay Again?";
            changeColors(clickedColor);
            h1.style.backgroundColor = clickedColor;
        }
        else{
            this.style.backgroundColor = "#363636";
            messageDisplay.textContent = "Try Again";
        }
        });
    }
}


function reset(){
    // genarate all new colors
    colors = generateRandomColors(numSquares);
    // pick new random color from array
    pickedColor = pickColor();
    // chnage the colordDisplay to match the picked color
    colorDisplay.textContent = pickedColor;
    // change colors of squares
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
    h1.style.backgroundColor = "steelblue";
    resetButton.textContent = "New Colors";
    messageDisplay.textContent = "";
}


// --------------EasyButton Eventlistener-------------

// easyBtn.addEventListener('click', function(){
//     easyBtn.classList.add("selected");
//     hardBtn.classList.remove("selected");
//     numSquares = 3;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         if (colors[i]) {
//             squares[i].style.backgroundColor = colors[i];
//         } else {
//             squares[i].style.display = "none";
//         }
//     }
// });

// --------------HardButton Eventlistener-------------

// hardBtn.addEventListener('click', function(){
//     easyBtn.classList.remove("selected");
//     hardBtn.classList.add("selected");
//     numSquares = 6;
//     colors = generateRandomColors(numSquares);
//     pickedColor = pickColor();
//     colorDisplay.textContent = pickedColor;
//     for (let i = 0; i < squares.length; i++) {
//         squares[i].style.backgroundColor = colors[i];
//         squares[i].style.display = "block";
//     }
// });








// --------------Functions Definitions-------------

function changeColors(color){
    // loop through all squares
    for (let i = 0; i < squares.length; i++) {
    // change each color to match given color
        squares[i].style.backgroundColor = color;
    }
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length)
    return colors[random];
}

function generateRandomColors(num){
    // make an Array
    var arr = []
    // repeat num times
    for (let i = 0; i < num; i++) {
        // get random colors and push into the array
        arr.push(randomColor());
    }
    // return that array
    return arr;
}
function randomColor(){
    // pick a red from "0 - 255"
    var r = Math.floor(Math.random() * 256);
    // pick a green from "0 - 255"
    var g = Math.floor(Math.random() * 256);
    // pick a blue from "0 - 255"
    var b = Math.floor(Math.random() * 256);

    return "rgb(" + r + ", " + g + ", " + b + ")";
}