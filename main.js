function getComputerChoice() {
  let choices = ['Rock', 'Paper', 'Scissors'];
  return choices[Math.floor(Math.random() * 3)];
}

function capitalize(str) {
  str = str.toLowerCase();
  return str[0].toUpperCase() + str.substring(1);
}

function playRound(playerSelection, computerSelection) {
  playerSelection = capitalize(playerSelection);
  if (playerSelection === computerSelection) {
    return `You Tied! The computer also picked ${computerSelection}`;
  }
  let won =
    (playerSelection === 'Rock' && computerSelection === 'Scissors') ||
    (playerSelection === 'Paper' && computerSelection === 'Rock') ||
    (playerSelection === 'Scissors' && computerSelection === 'Paper');
  if (won) {
    return `You Won! ${playerSelection} beats ${computerSelection}`;
  }
  return `You Lose! ${computerSelection} beats ${playerSelection}`;
}
