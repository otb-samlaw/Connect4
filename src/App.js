import React from "react";
import GuessInput from "./Components/guessInput";
import Instructions from "./Components/instructions";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to bulls and cows</h1>
        <Instructions />
        <GuessInput />
      </div>
    );
  }
}

export default App;
