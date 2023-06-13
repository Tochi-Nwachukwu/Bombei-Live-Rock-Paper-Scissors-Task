import { useState } from "react";
import "./styles.css";
import Scoreboard from "../Components/Scoreboard";
import BetCard from "../Components/BetCard";
import {
  Announncer,
  balanceChecker,
  collateBet,
} from "../Components/Utils/utils";
import betEngine from "../Components/Utils/betEngine";

function Home() {
  let [balance, setBalance] = useState<number>(5000);
  let [diplayText, setDisplayText] = useState<string>("Pick your Positions");

  let [gameResult, setGameResult] = useState<any>({});
  let [rockBet, setRockBet] = useState<number>(0);
  let [paperBet, setPaperBet] = useState<number>(0);
  let [wins, setWins] = useState<number>(0);
  const [clear, setClear] = useState<boolean>(false);
  let [scissorsBet, setScissorsBet] = useState<number>(0);
  let [bet, setBet] = useState<number>(rockBet + paperBet + scissorsBet);

  function placeBet(betPosition: string, betValue: number) {
    if (balanceChecker(balance)) {
      switch (betPosition) {
        case "ROCK":
          if (paperBet && scissorsBet !== 0) {
            setDisplayText("You can only place two bets :)");
          } else {
            setRockBet((rockBet += betValue));
            setBalance((balance -= 500));
            setBet((bet += 500));
          }
          break;
        case "PAPER":
          if (rockBet && scissorsBet !== 0) {
            setDisplayText("You can only place two bets :)");
          } else {
            setPaperBet((paperBet += betValue));
            setBalance((balance -= 500));
            setBet((bet += 500));
          }
          break;
        case "SCISSORS":
          if (rockBet && paperBet !== 0) {
            setDisplayText("You can only place two bets :)");
          } else {
            setScissorsBet((scissorsBet += betValue));
            setBalance((balance -= 500));
            setBet((bet += 500));
          }
          break;

        default:
          break;
      }
    } else setDisplayText("You're out of cash");
  }

  function display(text: string) {
    return (
      <div>
        <Announncer notif={text} />
        {clear && (
          <div>
            <h4 className="details">{gameResult.cpus_bet}</h4>
            <h4 className="details">{gameResult.your_bet}</h4>
            <h4 id="gameScore" className="details">
              {gameResult.gameOutcome}
            </h4>
            <h4 className="details">{gameResult.message}</h4>
          </div>
        )}
      </div>
    );
  }

  function resetGame() {
    setClear(false);
    setDisplayText("Pick your Positions");
    setBet(0);
    setRockBet(0);
    setPaperBet(0);
    setScissorsBet(0);
  }

  function updateFunds(funds: number) {
    setBalance((balance += funds));
  }

  function playGame() {
    const result = betEngine(collateBet(rockBet, paperBet, scissorsBet));
    setGameResult(result);
    setDisplayText(result?.message);
    console.log(result);
    if (result.winner == true) {
      updateFunds(result.money);
      setWins((wins += 1));
    }
    setClear(!clear);
  }
  return (
    <div className="home">
      <Scoreboard balance={balance} bet={bet} win={wins} />{" "}
      <div className="play-container">
        {display(diplayText)}

        <div className="play-cards">
          <BetCard
            bet={rockBet}
            text="rock"
            color="dodgerblue"
            betFunction={placeBet}
          />
          <BetCard
            text="paper"
            color="green"
            bet={paperBet}
            betFunction={placeBet}
          />
          <BetCard
            text="scissors"
            color="red"
            bet={scissorsBet}
            betFunction={placeBet}
          />
        </div>

        <div className="play">
          {!clear && (
            <button
              onClick={() => {
                playGame();
              }}
              className="play-button"
            >
              PLAY
            </button>
          )}
          {clear && (
            <button
              onClick={() => {
                resetGame();
              }}
              className="play-button"
            >
              CLEAR
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;
