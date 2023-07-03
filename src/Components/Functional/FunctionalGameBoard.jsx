import { useState } from "react";
import "./styles/game-board.css";

export function FunctionalGameBoard({ setScore, fishToDisplay }) {
  const [guess, setGuess] = useState("");

  const evaluateGuess = (e) => {
    e.preventDefault();
    setScore(guess);
    setGuess("");
  };
  return (
    <div id="game-board">
      <div id="fish-container">
        <img src={fishToDisplay.url} alt={fishToDisplay.name} />
      </div>
      <form id="fish-guess-form" onSubmit={(e) => evaluateGuess(e)}>
        <label htmlFor="fish-guess">What kind of fish is this?</label>
        <input
          type="text"
          name="fish-guess"
          onChange={(e) => setGuess(e.target.value)}
          value={guess}
        />
        <input type="submit" />
      </form>
    </div>
  );
}
