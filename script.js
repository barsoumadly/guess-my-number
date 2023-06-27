'use strict';

let randomNumber = Math.trunc(Math.random() * 20) + 1;
const number = document.querySelector('.number');

const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');

const btnCheck = document.querySelector('.check');
const btnAgain = document.querySelector('.again');
const body = document.querySelector('body');

let scoreValue = 20;
let highScoreValue = 0;

const checkInputValidation = inputNumber => (inputNumber ? inputNumber : 0);

const isValidScore = function () {
  if (scoreValue > 1) {
    return true;
  } else {
    return false;
  }
};

const displayLoseMessage = function () {
  message.textContent = '💥 You lost the game!';
  score.textContent = 0;
  number.textContent = randomNumber;
  number.style.width = '30rem';
  body.style.backgroundColor = '#e74c3c';
};

const decreaseScoreValue = function () {
  if (isValidScore()) {
    scoreValue--;
    score.textContent = scoreValue;
  } else {
    displayLoseMessage();
  }
};

const increaseHighscore = function () {
  if (highScoreValue < scoreValue) {
    highScoreValue = scoreValue;
  }
  highScore.textContent = highScoreValue;
};

const displyaIfGreater = function () {
  message.textContent = '📈 Too high!';
  decreaseScoreValue();
};

const displyaIfSmaller = function () {
  message.textContent = '📉 Too low!';
  decreaseScoreValue();
};

const displayIfEqual = function () {
  message.textContent = '🎉 Correct Number!';
  number.textContent = randomNumber;
  number.style.width = '30rem';
  body.style.backgroundColor = '#60b347';
  increaseHighscore();
};

const checkNumberEquality = function (inputNumber) {
  if (inputNumber === randomNumber) {
    displayIfEqual();
  } else if (inputNumber > randomNumber) {
    displyaIfGreater();
  } else {
    displyaIfSmaller();
  }
};

const checkOperation = function (inputNumber) {
  if (checkInputValidation(inputNumber)) {
    checkNumberEquality(inputNumber);
  } else {
    message.textContent = '⛔ No Number!';
  }
};

btnCheck.addEventListener('click', function () {
  let inputNumber = Number(document.querySelector('.guess').value);
  checkOperation(inputNumber);
});

const resetText = function () {
  message.textContent = 'Start guessing...';
  number.textContent = '?';
  number.style.width = '15rem';
  body.style.backgroundColor = '#222';
};

const restNumbers = function () {
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  scoreValue = 20;
  score.textContent = scoreValue;
  document.querySelector('.guess').value = '';
};

const againOperation = function () {
  resetText();
  restNumbers();
};

btnAgain.addEventListener('click', function () {
  againOperation();
});
