import React from "react";
import GuessInput from "./Components/guessInput";
import Instructions from "./Components/instructions";

class App extends React.Component {
  state = {
    hiddenWord: "quote",
    hiddenWordLength: 5,
    guessesRemaining: 12
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
      </div>
    );
  }

  processGuess = guess => {
    console.log("Processing guess ", guess);
  };

  sendGuessFromInputToApp = event => {
    if (event.key === "Enter") {
      this.processGuess(event.target.value);
    }
  };
}

export default App;
