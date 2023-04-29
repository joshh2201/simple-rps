let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.substring(1);
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
    addScore(1);
    displayResult(1, playerSelection, computerSelection);
  } else if (playerSelection !== computerSelection) {
    addScore(0);
    displayResult(0, playerSelection, computerSelection);
  } else {
    displayResult(2, playerSelection, computerSelection);
  }
}

function displayResult(result, playerSelection, computerSelection) {
  const resultDiv = document.querySelector('.result');
  const roundNumber = document.querySelector('span');
  if (result === 1) {
    resultDiv.innerText = `You won round ${roundNumber.innerText}! ${playerSelection} beats ${computerSelection}!`;
  } else if (result === 0) {
    resultDiv.innerText = `You lost round ${roundNumber.innerText}! ${computerSelection} beats ${playerSelection}!`;
  } else {
    resultDiv.innerText = `You tied round ${roundNumber.innerText}! The CPU also picked ${playerSelection}!`;
  }
  roundNumber.innerText = parseInt(roundNumber.innerText) + 1;
}

// No need to validate input with button eventlisteners
// function validInput(str) {
//   return choices.includes(str);
// }

function game() {
  let playerScore = 0;
  let computerScore = 0;
  let outcome = 0;
  let playerSelection = '';
  for (let i = 0; i < 5; i++) {
    while (true) {
      playerSelection = capitalize(prompt('Pick Rock, Paper, or Scissors: '));
      if (validInput(playerSelection)) {
        break;
      }
      console.log('Invalid input, try again');
    }
    outcome = playRound(playerSelection, getComputerChoice());
    if (outcome === 1) {
      playerScore++;
      console.log(
        `You won round ${
          i + 1
        }! Your score: ${playerScore} Computer score: ${computerScore}`
      );
    } else if (outcome === 2) {
      console.log(
        `You tied round ${
          i + 1
        }! Your score: ${playerScore} Computer score: ${computerScore}`
      );
    } else {
      computerScore++;
      console.log(
        `You lost round ${
          i + 1
        }! Your score: ${playerScore} Computer score: ${computerScore}`
      );
    }
  }
  if (playerScore > computerScore) {
    console.log('You Won!');
  } else if (playerScore < computerScore) {
    console.log('You Lost!');
  } else {
    console.log('You Tied!');
  }
}

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', playRound));
// game();
