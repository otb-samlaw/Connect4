import React from "react";

const GuessFeedback = props => {
  return (
    <div>
      <p>Bulls: {props.bulls}</p>
      <p>Cows: {props.cows}</p>
    </div>
  );
};

export default GuessFeedback;
