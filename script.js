var playerPoints = 0;
var computerPoints = 0;
document.getElementById("final-evaluation").textContent = '';

function computerPlay() {

  let num = Math.floor(Math.random() * 3);

  if (num < 1) {
    return 'rock';
  } else if (num < 2) {
    return 'paper';
  } else {
    return 'scissors';
  }
}

//select all buttons and add event listener for each
const buttons = document.querySelectorAll("button");

buttons.forEach(function(button) {
  button.addEventListener('click', function(e) {
    if (playerPoints == 5 || computerPoints == 5) {
      playerPoints = 0;
      computerPoints = 0;
    }
    const playerSelection = button.id;
    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    evaluate(result);
  });
});

function playRound(playerChoice, computerChoice) {

  if (playerChoice == computerChoice) {
    return "It's a draw!";
  } else if (playerChoice == 'rock' && computerChoice =='paper') {
    computerPoints++;
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else if (playerChoice == 'scissors' && computerChoice == 'rock') {
    computerPoints++;
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else if (playerChoice == 'paper' && computerChoice == 'scissors') {
    computerPoints++;
    return "You lose! " + computerChoice + " beats " + playerChoice;
  } else {
    playerPoints++;
    return "You win! " + playerChoice + " beats " + computerChoice;
  }
}

function evaluate(result) {
  document.getElementById("result-text").textContent = result;
  document.getElementById("player-score").textContent = playerPoints;
  document.getElementById("computer-score").textContent= computerPoints;
  if (playerPoints == 5) {
      document.getElementById("final-evaluation").textContent = 'You won the game!';
    } else if (computerPoints == 5) {
      document.getElementById("final-evaluation").textContent = 'You lost the game!';
    } else {
      document.getElementById("final-evaluation").textContent = '';
    }
}