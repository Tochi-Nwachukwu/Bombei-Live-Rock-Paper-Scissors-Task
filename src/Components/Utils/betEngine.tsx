import { PLAY_RPS_GAME } from "./RPS_GAME";
import { betMultiplyer, randomNumber } from "./utils";

const options = ["ROCK", "PAPER", "SCISSORS"];
const CPU_BET = options[randomNumber()];

export default function betEngine(usersChoice: any) {
  let USER_BET1;
  let USER_BET2;

  const gameResults = PLAY_RPS_GAME();
  USER_BET1 = usersChoice.bet1;

  switch (false) {
    case usersChoice.bet2:
      return singleBetCaseMatcher(
        USER_BET1.CHOICE,
        CPU_BET,
        gameResults,
        USER_BET1.AMOUNT
      );

      break;

    default:
      USER_BET2 = usersChoice.bet2;
      return doubleBetCaseMatcher(
        USER_BET1.CHOICE,
        USER_BET2.CHOICE,
        CPU_BET,
        gameResults,
        USER_BET1.AMOUNT + USER_BET2.AMOUNT
      );
      break;
  }
}

function formatResult(
  // This fuction formats the result in a manner that can be easilty read by the socreboard
  winner: boolean,
  message: any,
  cpus_bet: string,
  your_bet: string,
  money: number,
  gameOutcome: string
) {
  const response = {
    winner,
    message,
    cpus_bet,
    your_bet,
    money,
    gameOutcome,
  };
  return response;
}

function doubleBetCaseMatcher(
  PLAYER_CHOICE: string,
  PLAYER_CHOICE2: string,
  CPU_CHOICE: string,
  GAME_RESULT: string,
  BET_AMOUNT: number
) {
  switch (true) {
    // This is what happens when the game is a draw
    case GAME_RESULT == CPU_CHOICE &&
      (GAME_RESULT == PLAYER_CHOICE || GAME_RESULT == PLAYER_CHOICE2):
      return formatResult(
        false,
        "NOBODY WINS. YOU BOTH BET ON THE SAME CARD",
        `CPUS BET:${CPU_BET}`,
        `YOUR FIRST BET: ${PLAYER_CHOICE} YOUR SECOND BET ${PLAYER_CHOICE2}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;

    // This is what happens when player one wins
    case (GAME_RESULT == PLAYER_CHOICE || GAME_RESULT == PLAYER_CHOICE2) &&
      GAME_RESULT !== CPU_CHOICE:
      const money: number = betMultiplyer(2, BET_AMOUNT);
      return formatResult(
        true,
        `YOU WIN! YOU JUST WON ${money}`,
        `CPUS BET:${CPU_BET}`,
        `YOUR FIRST BET: ${PLAYER_CHOICE} YOUR SECOND BET ${PLAYER_CHOICE2}`,
        money,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;

    // This is what happens when CPU  wins
    case GAME_RESULT == CPU_CHOICE &&
      (GAME_RESULT !== PLAYER_CHOICE || GAME_RESULT !== PLAYER_CHOICE2):
      return formatResult(
        false,
        "CPU WINS! YOU LOST THE BET",
        `CPUS BET:${CPU_BET}`,
        `YOUR FIRST BET: ${PLAYER_CHOICE} ; YOUR SECOND BET ${PLAYER_CHOICE2}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
    // This is what happens when both player and CPU fails
    case GAME_RESULT !== CPU_CHOICE &&
      (GAME_RESULT !== PLAYER_CHOICE || GAME_RESULT !== PLAYER_CHOICE2):
      return formatResult(
        false,
        "YOU BOTH LOST THE BET",
        `CPUS BET:${CPU_BET}`,
        `YOUR FIRST BET: ${PLAYER_CHOICE}; YOUR SECOND BET ${PLAYER_CHOICE2}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
    default:
      return formatResult(
        false,
        "THE MATCH WAS A DRAW; NOBODY WINS",
        `CPUS BET:${CPU_BET}`,
        `YOUR FIRST BET: ${PLAYER_CHOICE}; YOUR SECOND BET ${PLAYER_CHOICE2}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
  }
}
function singleBetCaseMatcher(
  PLAYER_CHOICE: string,
  CPU_CHOICE: string,
  GAME_RESULT: string,
  BET_AMOUNT: number
) {
  switch (true) {
    // This is what happens when the game is a draw
    case GAME_RESULT == CPU_CHOICE && GAME_RESULT == PLAYER_CHOICE:
      return formatResult(
        false,
        "NOBODY WINS. YOU BOTH BET ON THE SAME CARD",
        `CPUS BET:${CPU_BET}`,
        `YOUR BET: ${PLAYER_CHOICE}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;

    // This is what happens when player one wins
    case GAME_RESULT == PLAYER_CHOICE && GAME_RESULT !== CPU_CHOICE:
      const money: number = betMultiplyer(1, BET_AMOUNT);
      return formatResult(
        true,
        `YOU WIN! YOU JUST WON ${money}`,
        `CPUS BET:${CPU_BET}`,
        `YOUR BET: ${PLAYER_CHOICE}`,
        money,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;

    // This is what happens when CPU  wins
    case GAME_RESULT == CPU_CHOICE && GAME_RESULT !== PLAYER_CHOICE:
      return formatResult(
        false,
        "CPU WINS! YOU LOST THE BET",
        `CPUS BET:${CPU_BET}`,
        `YOUR BET: ${PLAYER_CHOICE}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
    // This is what happens when both player and CPU fails
    case GAME_RESULT !== CPU_CHOICE && GAME_RESULT !== PLAYER_CHOICE:
      return formatResult(
        false,
        "YOU BOTH LOST THE BET",
        `CPUS BET:${CPU_BET}`,
        `YOUR BET: ${PLAYER_CHOICE}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
    default:
      return formatResult(
        false,
        "THE MATCH WAS A DRAW; NOBODY WINS",
        `CPUS BET:${CPU_BET}`,
        `YOUR BET: ${PLAYER_CHOICE}`,
        0,
        `THE GAME RESULT WAS: ${GAME_RESULT}`
      );
      break;
  }
}
