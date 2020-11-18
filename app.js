const ROCK = "Rock";
const PAPER = "Paper";
const SCISSOR = "Scissor";
const DEFAULT_CHOICE = ROCK;
const gameIsRunning = false;

const startGameBtn = document.getElementById("start-game-btn");

const getPlayerChoice = function () {
  const selection = prompt(`${ROCK}, ${PAPER} or ${SCISSOR}`, "").toUpperCase();

  if (selection !== ROCK && selection !== PAPER && selection !== SCISSOR) {
    alert("Invalid choic. We chose Rock for you!");
    return DEFAULT_CHOICE;
  }
  return selection;
};

startGameBtn.addEventListener("click", function () {
  if (gameIsRunning) {
    return;
  }
  gameIsRunning = true;
  console.log("Game isstarting...");
  const playerSelection = getPlayerChoice();
  console.log(playerSelection);
});
