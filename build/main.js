function playGame(playerchoice) {
  const choices = ["rock", "paper", "scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  const computerChoice = choices[randomIndex];
  const resultText = document.querySelector(".result");
  const computerText = document.querySelector(".computer-choice");
  const playerText = document.querySelector(".player-choice");

  if (playerchoice === computerChoice) {
    resultText.textContent = `It's a Draw!!`;
    computerText.textContent = `Computer's choice: ${computerChoice}`;
    playerText.textContent = `Your choice: ${playerchoice}`;
  } else if (
    (playerchoice === "rock" && computerChoice === "scissors") ||
    (playerchoice === "scissors" && computerChoice === "paper") ||
    (playerchoice === "paper" && computerChoice === "rock")
  ) {
    resultText.textContent = `You Won!!`;
    computerText.textContent = `Computer's choice: ${computerChoice}`;
    playerText.textContent = `Your choice: ${playerchoice}`;
  } else {
    resultText.textContent = `You Loose!!`;
    computerText.textContent = `Computer's choice: ${computerChoice}`;
    playerText.textContent = `Your choice: ${playerchoice}`;
  }
}
