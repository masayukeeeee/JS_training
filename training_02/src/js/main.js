// number generator
var correct_number = Math.floor(Math.random() * 101);
console.log(correct_number);


// variable for recording predected numbers
var predicted_numbers = new Array();


// hints
var hints = new Array("It's too high", "It's too low", "Congratulation!!!");


// get parameters
var guesses = document.querySelector('.guesses');
var lastResult = document.querySelector('.lastResult');
var lowOrHi = document.querySelector('.lowOrHi');

var guessSubmit = document.querySelector('.guessSubmit');
var guessField = document.querySelector('.guessField');

var guessCount = 1;
var resetButton;



// define function named resetGame
function resetGame() {
    guessCount = 1;

    var resetParas = document.querySelectorAll('.reultParas p');
    for (var i = 0; i < resetParas.length; i++) {
        resetParas[i].textContent = '';
    }

    resetButton.parentNode.removeChild(resetButton);

    guessField.disabled = false;
    guessSubmit.disabled = false;
    guessField.value = '';
    guessField.focus();

    lastResult.style.backgroundColor = 'white';

    randomNumber = Math.floor(Math.random() * 101)
}

// define function named setGameOver
function setGameOver() {
    guessField.disabled = true;
    guessSubmit.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = 'New game';
    document.body.appendChild(resetButton);
    resetButton.addEventListener('click', resetGame)
}


// compare two numbers
function compare() {
    var predict_number = Number(guessField.value)

    if (guessCount === 1) {
        guesses.textContent = 'previous numbers: ';
    }
    guesses.textContent += predict_number + ' ';

    if (correct_number < predict_number) {
        var result_status = 0;
    } else if (correct_number > predict_number) {
        var result_status = 1;
    } else {
        var result_status = 2;
    }

    lastResult.textContent = hints[result_status]

    if (result_status === 2) {
        setGameOver();
    } else if (guessCount === 10) {
        setGameOver();
    }

    guessCount++;
    guessField.value = '';
    guessField.focus();

};

// set function on button
guessSubmit.addEventListener('click', compare);