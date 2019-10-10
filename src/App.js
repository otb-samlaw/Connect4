import React from "react";
import GuessInput from "./Components/guessInput";
import Instructions from "./Components/instructions";
import ErrorFeedback from "./Components/errorFeedback";
import Victory from "./Components/victory";
import Lose from "./Components/youLose";
import GuessFeedback from "./Components/guessFeedback";

class App extends React.Component {
  state = {
    hiddenWord: "quote",
    hiddenWordLength: 5,
    guessesRemaining: 12,
    invalidGuess: false,
    guessedHiddenWord: false,
    bulls: 0,
    cows: 0
  };

  render() {
    return (
      <div>
        <h1>Welcome to bulls and cows</h1>
        <Instructions />
        <GuessInput
          hiddenWordLength={this.state.hiddenWordLength}
          sendGuessFromInputToApp={this.sendGuessFromInputToApp}
          guessesRemaining={this.state.guessesRemaining}
        />
        <GuessFeedback bulls={this.state.bulls} cows={this.state.cows} />
        {this.state.invalidGuess && <ErrorFeedback />}
        {this.state.guessedHiddenWord && <Victory />}
        {this.state.guessesRemaining === 0 && !this.state.guessedHiddenWord && (
          <Lose tryAgainFn={this.resetWithSameWord} />
        )}
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
      const [bulls, cows] = this.getBullsAndCows(guess);
      this.setState(prevState => {
        return {
          guessesRemaining: prevState.guessesRemaining - 1,
          invalidGuess: false,
          bulls: bulls,
          cows: cows
        };
      });
    }
    if (guess === this.state.hiddenWord) {
      this.setState(() => {
        return { guessedHiddenWord: true };
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

  getBullsAndCows = guess => {
    const guessArr = guess.split("");
    const wordArr = this.state.hiddenWord.split("");
    let bulls = 0;
    let cows = 0;
    guessArr.forEach((guessLetter, index) => {
      if (guessLetter === wordArr[index]) bulls++;
      else if (wordArr.includes(guessLetter)) cows++;
    });
    return [bulls, cows];
  };

  sendGuessFromInputToApp = event => {
    if (event.key === "Enter" && this.state.guessesRemaining > 0) {
      this.processGuess(event.target.value);
    }
  };

  resetWithSameWord = event => {
    this.setState(prevState => {
      return {
        guessesRemaining: 12,
        invalidGuess: false,
        guessedHiddenWord: false,
        bulls: 0,
        cows: 0
      };
    });
  };
}

export default App;
