let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
  return choices[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.substring(1);
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 2;
  } else if (
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper')
  ) {
    return 1;
  }
  return 0;
}

function validInput(str) {
  return choices.includes(str);
}

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

game();
