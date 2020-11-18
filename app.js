const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSOR = "SCISSOR";
const DEFAULT_CHOICE = ROCK;
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";

let gameIsRunning = false;

const startGameBtn = document.getElementById("start-game-btn");

const getPlayerChoice = () => {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}`, "").toUpperCase();
  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert("Invalid choice. We chose Rock for you!");
    return DEFAULT_CHOICE;
  }
  return selection;
};

const getComputerChoice = () => {
  const randomChoice = Math.random();
  if (randomChoice <= 0.33) {
    return ROCK;
  } else if (randomChoice <= 0.66) {
    return PAPER;
  } else {
    return SCISSOR;
  }
};

const getWinner = (cChoice, pChoice) => {
  if (cChoice === pChoice) {
    return RESULT_DRAW;
  } else if (
    (cChoice === ROCK && pChoice === PAPER) ||
    (cChoice === PAPER && pChoice === SCISSOR) ||
    (cChoice === SCISSOR && pChoice === ROCK)
  ) {
    return RESULT_PLAYER_WIN;
  } else {
    return RESULT_COMPUTER_WIN;
  }
};

startGameBtn.addEventListener("click", () => {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = getWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, coputer picked ${computerSelection}, therefore you  `;

  if (winner === RESULT_DRAW) {
    message += "had a draw";
  } else if (winner === RESULT_PLAYER_WIN) {
    message += "won";
  } else if (winner === RESULT_COMPUTER_WIN) {
    message += "lost";
  }
  alert(message);
  gameIsRunning = false;
});
