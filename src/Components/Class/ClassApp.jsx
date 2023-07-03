import { Component } from "react";
import { ClassScoreBoard } from "./ClassScoreBoard";
import { ClassGameBoard } from "./ClassGameBoard";
import { ClassFinalScore } from "./ClassFinalScore";
import { initialFishes } from "../../info";

export class ClassApp extends Component {
  state = {
    incorrectCount: 0,
    correctCount: 0,
    fishes: [...initialFishes],
  };

  render() {
    const { fishes, incorrectCount, correctCount } = this.state;
    const fishCount = initialFishes.length - fishes.length;
    const setScore = (guess) => {
      if (guess.toLowerCase() === fishes[0].name) {
        this.setState({ correctCount: correctCount + 1 });
      } else {
        this.setState({ incorrectCount: incorrectCount + 1 });
      }
      if (fishCount < initialFishes.length) {
        this.setState({ fishes: fishes.filter((fish) => fish !== fishes[0]) });
      }
    };
    const showFinalScore = fishes.length === 0;
    return (
      <>
        <ClassScoreBoard
          incorrectCount={incorrectCount}
          correctCount={correctCount}
          fishes={fishes}
        />
        {!showFinalScore ? (
          <ClassGameBoard setScore={setScore} fishToDisplay={fishes[0]} />
        ) : (
          <ClassFinalScore
            incorrectCount={incorrectCount}
            correctCount={correctCount}
          />
        )}
      </>
    );
  }
}
