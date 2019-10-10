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
    if (!this.isValidGuess(guess)) {
      this.setState(() => {
        return { invalidGuess: true };
      });
    } else {
      this.setState(prevState => {
        return {
          guessesRemaining: prevState.guessesRemaining - 1,
          invalidGuess: false
        };
      });
    }
  };

  isValidGuess = guess => {
    guess = guess.toLowerCase();
    const strArr = guess.split("");
    let foundInvalid = false;
    strArr.forEach(letter => {
      if (strArr.length !== 5) foundInvalid = true;
      else if (!/[a-z]/.test(letter)) {
        foundInvalid = true;
      } else if (!this.isIsogram(strArr)) foundInvalid = true;
    });
    return !foundInvalid;
  };

  isIsogram = strArr => {
    let lettersNotUsed = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z"
    ];
    let validIsogram = true;
    strArr.forEach(letter => {
      if (lettersNotUsed.includes(letter)) {
        lettersNotUsed = lettersNotUsed.filter(thisLetter => {
          return thisLetter !== letter;
        });
      } else validIsogram = false;
    });
    return validIsogram;
  };

  sendGuessFromInputToApp = event => {
    if (event.key === "Enter") {
      this.processGuess(event.target.value);
    }
  };
}

export default App;
