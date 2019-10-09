import React from "react";
import GuessInput from "./Components/guessInput";

class App extends React.Component {
  render() {
    return (
      <div>
        <h1>Welcome to bulls and cows</h1>
        <GuessInput />
      </div>
    );
  }
}

export default App;
