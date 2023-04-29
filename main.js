function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function addScore(result) {
  let scoreDiv = null;
  if (result) {
    scoreDiv = document.querySelector('.player>.score');
  } else {
    scoreDiv = document.querySelector('.computer>.score');
  }
  scoreDiv.innerText = parseInt(scoreDiv.innerText) + 1;
  if (parseInt(scoreDiv.innerText) === 5) {
    if (result) {
      endGame('Player');
    } else {
      endGame('CPU');
    }
  }
}

function playRound() {
  let playerSelection = this.innerText;
  let computerSelection = getComputerChoice();

  if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    displayResult(1, playerSelection, computerSelection);
    addScore(1);
  } else if (playerSelection !== computerSelection) {
    displayResult(0, playerSelection, computerSelection);
    addScore(0);
  } else {
    displayResult(2, playerSelection, computerSelection);
  }
}

function displayResult(result, playerSelection, computerSelection) {
  const resultDiv = document.querySelector('.result');
  const roundNumber = document.querySelector('span');
  if (result === 1) {
    resultDiv.innerText = `You Won Round ${roundNumber.innerText}! ${playerSelection} Beats ${computerSelection}!`;
  } else if (result === 0) {
    resultDiv.innerText = `You Lost Round ${roundNumber.innerText}! ${computerSelection} Beats ${playerSelection}!`;
  } else {
    resultDiv.innerText = `You Tied Round ${roundNumber.innerText}! The CPU Also Picked ${playerSelection}!`;
  }
  roundNumber.innerText = parseInt(roundNumber.innerText) + 1;
}

function endGame(winner) {
  const resultDiv = document.querySelector('.result');
  const roundNumber = document.querySelector('span');
  const playerScore = document.querySelector('.player>.score');
  const computerScore = document.querySelector('.computer>.score');

  resultDiv.innerText = `${winner} Wins! Final Score was ${playerScore.innerText} - ${computerScore.innerText}.\nThe Game has Reset.`;
  roundNumber.innerText = 1;
  playerScore.innerText = 0;
  computerScore.innerText = 0;
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', playRound));
