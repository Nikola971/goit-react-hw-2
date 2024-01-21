export const Options = ({ handleClick }) => {
  return (
    <div>
      <button onClick={() => handleClick('good')}>Good</button>
      <button onClick={() => handleClick('neutral')}>Neutral</button>
      <button onClick={() => handleClick('bad')}>Bad</button>
      <button onClick={() => handleClick('reset')}>Reset</button>
    </div>
  );
};
