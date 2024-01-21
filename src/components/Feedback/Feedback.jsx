export const Feedback = ({ clicks, totalFeedback, positivePercentage}) => {
  return (
    <div>
      <p>Good:{clicks.good}</p>
      <p>Neutral:{clicks.neutral}</p>
      <p>Bad:{clicks.bad}</p>
       <p>Total: {totalFeedback}</p>
      <p>Positive: {positivePercentage}%</p>
    </div>
  );
};
