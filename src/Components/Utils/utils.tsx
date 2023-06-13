// THIS FILE CONTAINS USEFUL FUNCTIONS THAT ARE USED WITHIN THE APPLICATION

export function balanceChecker(balance: number) {
  // THIS FUNCTION CHECKS THE BALANCE OF THE PLAYER
  if (balance > 0) {
    return true;
  } else return false;
}

type anouncePropTypes = {
  notif: string;
};
export function Announncer({ notif }: anouncePropTypes) {
  return <h2 className="notification">{notif}</h2>;
}

export const randomNumber = (): number => {
  // THIS FUNCTION GENERATES A RANDOM
  const number = Math.floor(Math.random() * (3 - 0)) + 0;
  return number;
};

export function collateBet(
  rockbet: number,
  paperbet: number,
  scissorsbet: number
) {
  const betData: Array<object> = [];

  if (rockbet !== 0) {
    betData.push(betParser("ROCK", rockbet));
  }
  if (paperbet !== 0) {
    betData.push(betParser("PAPER", paperbet));
  }
  if (scissorsbet !== 0) {
    betData.push(betParser("SCISSORS", scissorsbet));
  }

  return {
    numberOfBets: betData.length,
    bet1: betData[0],
    bet2: betData[1] ? betData[1] : false,
  };
}

export function betParser(bet: string, amount: number) {
  // This  function parses the player's bet and returns in the appropriate format
  return { CHOICE: bet, AMOUNT: amount };
}

export function betMultiplyer(numberOfBets: number, betvalue: number) {
  if (numberOfBets == 1) {
    return betvalue * 14;
  } else {
    return betvalue * 3;
  }
}
