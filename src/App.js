import React from "react";
import GuessInput from "./Components/guessInput";
import Instructions from "./Components/instructions";
import ErrorFeedback from "./Components/errorFeedback";

class App extends React.Component {
  state = {
    hiddenWord: "quote",
    hiddenWordLength: 5,
    guessesRemaining: 12,
    invalidGuess: false
  };

  render() {
    return (
      <div>
        <h1>Welcome to bulls and cows</h1>
        <Instructions />
        <GuessInput
          hiddenWordLength={this.state.hiddenWordLength}
          sendGuessFromInputToApp={this.sendGuessFromInputToApp}
        />
        {this.state.invalidGuess && <ErrorFeedback />}
      </div>
    );
  }

  processGuess = guess => {
    // const hiddenWord = this.state.hiddenWord;
    if (!this.isValidIsogram(guess)) {
      this.setState(() => {
        return { invalidGuess: true };
      });
    } else {
      this.setState(() => {
        return { invalidGuess: false };
      });
    }
  };

  isValidIsogram = guess => {
    const strArr = guess.split("");
    let foundInvalid = false;
    strArr.forEach(letter => {
      if (!/[a-z]/.test(letter.toLowerCase())) {
        foundInvalid = true;
      }
    });
    return !foundInvalid;
  };

  sendGuessFromInputToApp = event => {
    if (event.key === "Enter") {
      this.processGuess(event.target.value);
    }
  };
}

export default App;
