function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
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

// No need to validate input with button eventlisteners
// function validInput(str) {
//   return choices.includes(str);
// }

// function game() {
//   let playerScore = 0;
//   let computerScore = 0;
//   let outcome = 0;
//   let playerSelection = '';
//   for (let i = 0; i < 5; i++) {
//     while (true) {
//       playerSelection = capitalize(prompt('Pick Rock, Paper, or Scissors: '));
//       if (validInput(playerSelection)) {
//         break;
//       }
//       console.log('Invalid input, try again');
//     }
//     outcome = playRound(playerSelection, getComputerChoice());
//     if (outcome === 1) {
//       playerScore++;
//       console.log(
//         `You won round ${
//           i + 1
//         }! Your score: ${playerScore} Computer score: ${computerScore}`
//       );
//     } else if (outcome === 2) {
//       console.log(
//         `You tied round ${
//           i + 1
//         }! Your score: ${playerScore} Computer score: ${computerScore}`
//       );
//     } else {
//       computerScore++;
//       console.log(
//         `You lost round ${
//           i + 1
//         }! Your score: ${playerScore} Computer score: ${computerScore}`
//       );
//     }
//   }
//   if (playerScore > computerScore) {
//     console.log('You Won!');
//   } else if (playerScore < computerScore) {
//     console.log('You Lost!');
//   } else {
//     console.log('You Tied!');
//   }
// }

const buttons = document.querySelectorAll('button');
buttons.forEach((btn) => btn.addEventListener('click', playRound));
