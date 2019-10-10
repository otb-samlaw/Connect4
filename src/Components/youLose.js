import React from "react";

const Lose = props => {
  return (
    <div>
      <p className="lose">
        Bad luck! You ran out of guesses. Use the buttons below to play again
        with the same word or try a new word.
      </p>
      <button onClick={props.tryAgainFn}>Try again with same word</button>
    </div>
  );
};

export default Lose;
