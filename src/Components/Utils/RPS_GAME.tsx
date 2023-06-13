import { randomNumber } from "./utils";



export function RPS_GAME(CHOICE1: string, CHOICE2: string) {
  // THIS FUNCTION CONTAINS THE ALGORITHM FOR THE ROCK PAPER SCISSORS GAME
  const status = {
    ROCK_WINS: "ROCK",
    PAPER_WINS: "PAPER",
    SCISSORS_WINS: "SCISSORS",
    DRAW: "DRAW",
  };
  switch (true) {
    case CHOICE1 == "PAPER" || CHOICE2 == "ROCK":
      console.log("paper vs rock");
      return status.PAPER_WINS;
      break;
    case CHOICE1 == "PAPER" || CHOICE2 == "SCISSORS":
      console.log("paper vs scissors");
      return status.SCISSORS_WINS;
      break;

    case CHOICE1 == "ROCK" || CHOICE2 == "SCISSORS":
      console.log("rock vs scissors");
      return status.ROCK_WINS;
      break;
    default:
      console.log("it is a draw");
      return status.DRAW;
      break;
  }
}

export function PLAY_RPS_GAME() {
  // THIS FUNCTION PLAYS THE ROCK PAPER SCISSORS GAME
  const options = ["ROCK", "PAPER", "SCISSORS"];
  const choice1 = options[randomNumber()];
  const choice2 = options[randomNumber()];

  return RPS_GAME(choice1, choice2);
}
