import "./styles/final-score.css";
export const FunctionalFinalScore = ({ incorrectCount, correctCount }) => (
  <div id="final-score">
    <h1>Your Final Score Was</h1>
    <div id="score">
      <p>{correctCount}</p>
      <hr />
      <p>{incorrectCount + correctCount}</p>
    </div>
  </div>
);
