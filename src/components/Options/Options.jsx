
import React from 'react';
import css from "./Optionscss.module.css";

export const Options = ({ handleClick, totalFeedback ,positivePercentage}) => {
  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      <button
        onClick={() => handleClick('reset')}
        className={totalFeedback > 0 ? css.showResetButton : css.hideResetButton}
      >
        Reset
      </button>
    </div>
  );
};

