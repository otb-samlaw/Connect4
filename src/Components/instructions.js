import React from "react";

const Instructions = props => {
  return (
    <div>
      <h2>Instructions:</h2>
      <p>
        You have 12 attempts to guess the secret word! After each guess you will
        see how close you were in bulls and cows. One bull = a correct letter in
        the correct place. One cow = a correct letter in the wrong place. Good
        luck!
      </p>
    </div>
  );
};

export default Instructions;
