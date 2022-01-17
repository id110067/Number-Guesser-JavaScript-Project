let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, ComputerGuess, targetGuess) => {
  let diffHumanTarget = Math.abs(userGuess - targetGuess);
  let diffComputerTarget = Math.abs(computerGuess - targetGuess);
  if (diffHumanTarget <= diffComputerTarget) {
    return true;
  }
  else {
    return false;
  }
};

const updateScore = (winner) => {
  if (winner === 'human') {
    humanScore++;
  }
  else {
    computerScore++;
  }
};

const advanceRound = (currentRoundNumber) => {
  currentRoundNumber++;
};


