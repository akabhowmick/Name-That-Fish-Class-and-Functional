import { useState } from "react";
import { FunctionalGameBoard } from "./FunctionalGameBoard";
import { FunctionalScoreBoard } from "./FunctionalScoreBoard";
import { FunctionalFinalScore } from "./FunctionalFinalScore";
import { initialFishes } from "../../info";

export function FunctionalApp() {
  const [correctCount, setCorrectCount] = useState(0);
  const [incorrectCount, setIncorrectCount] = useState(0);
  const [fishes, setFishes] = useState(initialFishes);
  const fishCount = initialFishes.length - fishes.length;

  const setScore = (guess) => {
    if (guess.toLowerCase() === fishes[0].name) {
      setCorrectCount(correctCount + 1);
    } else {
      setIncorrectCount(incorrectCount + 1);
    }
    if (fishCount < initialFishes.length) {
      setFishes(fishes.filter((fish) => fish !== fishes[0]));
    }
  };

  const showFinalScore = fishes.length === 0;

  return (
    <>
      <FunctionalScoreBoard
        incorrectCount={incorrectCount}
        correctCount={correctCount}
        fishes={fishes}
      />
      {!showFinalScore ? (
        <FunctionalGameBoard setScore={setScore} fishToDisplay={fishes[0]} />
      ) : (
        <FunctionalFinalScore
          incorrectCount={incorrectCount}
          correctCount={correctCount}
        />
      )}
    </>
  );
}
