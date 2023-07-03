import "./styles/score-board.css";

export const FunctionalScoreBoard = ({incorrectCount, correctCount, fishes}) => {
  const fishNames = fishes.map((fish)=> fish.name);
  return (
    <div id="score-board">
      <div>Incorrect 🔻: {incorrectCount}</div>
      <div id="choices-left">
        {fishNames.map((answer) => (
          <div key={answer} className="choice">
            {answer}
          </div>
        ))}
      </div>
      <div>Correct ✅: {correctCount}</div>
    </div>
  );
};
