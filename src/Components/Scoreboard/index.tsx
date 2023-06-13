// import React from "react";
import "./scoreboard.css";

type ScoreboardProps = {
  balance: number;
  bet: number;
  win: number;
};
export function Scoreboard({ balance, bet, win }: ScoreboardProps) {
  return (
    <div className="scoreboard">
      <div className="container">
        <h2>
          Balance: <span>{balance}</span>
        </h2>
        <h2>
          Bet: <span>{bet}</span>
        </h2>
        <h2>
          Win: <span>{win}</span>
        </h2>
      </div>
    </div>
  );
}

export default Scoreboard;
