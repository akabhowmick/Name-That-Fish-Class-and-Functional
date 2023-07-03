import { Component } from "react";
import "./styles/game-board.css";

export class ClassGameBoard extends Component {
  state = {
    guess: "",
  };
  render() {
    const { setScore, fishToDisplay } = this.props;
    const { guess } = this.state;
    const evaluateGuess = (e) => {
      e.preventDefault();
      setScore(guess);
      this.setState({ guess: "" });
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
            onChange={(e) => this.setState({ guess: e.target.value })}
            value={guess}
          />
          <input type="submit" />
        </form>
      </div>
    );
  }
}
