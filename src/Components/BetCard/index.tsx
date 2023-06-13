import "./betcard.css";
type betCardProps = {
  color: string;
  bet: number;
  text: string;
  betFunction: Function;
};

function BetCard({ color, bet, text, betFunction }: betCardProps) {
  const betValue = <div className="circle">{bet}</div>;
  return (
    <div
      onClick={() => {
        betFunction(text.toUpperCase(), 500);
      }}
      style={{ borderColor: `${color}`, backgroundColor: `${color}` }}
      className="card"
    >
      <div className="card-container">
        {" "}
        <div className="bet-value-cont">
          <h2 className="bet-value">{betValue}</h2>
        </div>
        <div>
          <h2 className="text">{text}</h2>
        </div>
      </div>
    </div>
  );
}

export default BetCard;
