import React, { useState, useEffect } from 'react';
import { Description } from './Description/Description';
import { Options } from './Options/Options';
import { Feedback } from './Feedback/Feedback';
import { Nothing } from './Notification/Notification';

export function App() {
  const initialClicks = JSON.parse(localStorage.getItem('clicks')) || {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  const [clicks, setClicks] = useState(initialClicks);

  const totalFeedback = clicks.good + clicks.neutral + clicks.bad;
  const positivePercentage = Math.round(((clicks.good + clicks.neutral) / totalFeedback) * 100);

  useEffect(() => {
    localStorage.setItem('clicks', JSON.stringify(clicks));
  }, [clicks]);

  const handleClick = type => {
    if (type === 'reset') {
      setClicks({ good: 0, neutral: 0, bad: 0 });
    } else {
      setClicks({ ...clicks, [type]: clicks[type] + 1 });
    }
  };

  return (
    <>
      <Description />
      <Options handleClick={handleClick} />
      {totalFeedback > 0 ? (
        <Feedback clicks={clicks} totalFeedback={totalFeedback} positivePercentage={positivePercentage} />
      ) : (
        <Nothing />
      )}
    </>
  );
}
