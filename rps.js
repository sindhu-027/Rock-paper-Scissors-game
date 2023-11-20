let score = JSON.parse(localStorage.getItem("score")) || {
    wins: 0,
    loses: 0,
    ties: 0,
  };

  updateScoreElement();

  /*
  if (!score) {
    score = {
      wins: 0,
      loses: 0,
      ties: 0,
    };
  }
  */
  function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let result = "";

    if (playerMove === "scissors") {
      if (computerMove === "rock") {
        result = "You Lose.";
      } else if (computerMove === "paper") {
        result = "You Win.";
      } else if (computerMove === "scissors") {
        result = "Tie.";
      }
    } else if (playerMove === "paper") {
      if (computerMove === "rock") {
        result = "You Win.";
      } else if (computerMove === "paper") {
        result = "Tie.";
      } else if (computerMove === "scissors") {
        result = "You Lose.";
      }
    } else if (playerMove === "rock") {
      if (computerMove === "rock") {
        result = "Tie.";
      } else if (computerMove === "paper") {
        result = "You Lose.";
      } else if (computerMove === "scissors") {
        result = "You Win.";
      }
    }

    if (result === "You Win.") {
      score.wins += 1;
    } else if (result === "You Lose.") {
      score.loses += 1;
    } else if (result === "Tie.") {
      score.tie += 1;
    }

    localStorage.setItem("score", JSON.stringify(score));

    updateScoreElement();

    document.querySelector(".js-result").innerHTML = result;
    document.querySelector(".js-moves").innerHTML = ` You
  <img src="images/${playerMove}-emoji.png" alt="" class="move-icon" />
  <img src="images/${computerMove}-emoji.png" alt="" class="move-icon" />Computer`;
  }

  function updateScoreElement() {
    document.querySelector(
      ".js-score"
    ).innerHTML = ` Wins: ${score.wins}, Losses:${score.loses}, Ties; ${score.ties}`;
  }

  function pickComputerMove() {
    const randNumber = Math.random();

    let computerMove = "";

    if (randNumber >= 0 && randNumber < 1 / 3) {
      computerMove = "rock";
    } else if (randNumber >= 1 / 3 && randNumber < 2 / 3) {
      computerMove = "paper";
    } else if (randNumber >= 2 / 3 && randNumber < 1) {
      computerMove = "scissors";
    }

    return computerMove;
  }