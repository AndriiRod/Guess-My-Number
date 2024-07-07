'use strict';
const checkBtn = document.querySelector('.check');
const message = document.querySelector('.message');
const inputFiled = document.querySelector('.guess');
const secretNumberFiled = document.querySelector('.number');
const scoreFiled = document.querySelector('.score');
const body = document.querySelector('body');
const againBtn = document.querySelector('.again');
const bestScoreField = document.querySelector('.highscore');

const initValue = {
  score: 20,
  bestScore: 0,
  message: 'Start guessing...',
  secretField: '?',
  input: '',
};

let score;
let bestScore = initValue.bestScore;
let secretNumber;

function displayMessage(text) {
  message.textContent = text;
}


function handleReset() {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = initValue.score;
  scoreFiled.textContent = score;
  body.style.backgroundColor = '#222';
  secretNumberFiled.textContent = initValue.secretField;
  secretNumberFiled.style.width = '15rem';
  displayMessage(initValue.message);
  inputFiled.value = initValue.input;
  checkBtn.disabled = false;
}

function handleCheck() {
  const inputValue = Number(inputFiled.value);
  if (!inputValue) {
    displayMessage('❌ No number!');
  } else if (inputValue === secretNumber) {
    secretNumberFiled.textContent = secretNumber;
    displayMessage('🔥 Correct number');
    body.style.backgroundColor = '#60b347';
    secretNumberFiled.style.width = '30rem';
    if (score > bestScore) {
      bestScore = score;
      bestScoreField.textContent = bestScore;
    }
    checkBtn.disabled = true;
  } else {
    displayMessage(inputValue > secretNumber ? '↗️ Too high' : '↘️ Too low');
    score = score - 1;
    scoreFiled.textContent = score;
  }
  if (score === 0) {
    displayMessage('😒 You lost the game!');
    checkBtn.disabled = true;
  }
}

againBtn.addEventListener('click', handleReset);
checkBtn.addEventListener('click', handleCheck);

handleReset();

