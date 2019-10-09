import React from "react";

const GuessInput = props => {
  return (
    <div>
      <p>The hidden word contains {props.hiddenWordLength} letters</p>
      <label>Enter guess:</label>
      <input onKeyDown={props.sendGuessFromInputToApp}></input>
    </div>
  );
};

export default GuessInput;
