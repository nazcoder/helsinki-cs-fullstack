import { useState } from 'react';

const Button = ({ onClick, text }) => <button onClick={onClick}>{text}</button>;

const StaticsLine = ({ text, value }) => (
  <p>
    {text} {value}
  </p>
);

const Statics = ({ good, neutral, bad }) => {
  const all = good + neutral + bad;
  const average = (good - bad) / all || 0;
  const positive = (good / all) * 100 || 0;

  const hasFeedback = all > 0;

  if (!hasFeedback) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    );
  }

  return (
    <div>
      <h1>statistics</h1>
      <StaticsLine text="good" value={good} />
      <StaticsLine text="neutral" value={neutral} />
      <StaticsLine text="bad" value={bad} />
      <StaticsLine text="all" value={all} />
      <StaticsLine text="average" value={average} />
      <StaticsLine text="positive" value={`${positive} %`} />
    </div>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={() => setGood(good + 1)} text="good" />
      <Button onClick={() => setNeutral(neutral + 1)} text="neutral" />
      <Button onClick={() => setBad(bad + 1)} text="bad" />
      <Statics good={good} neutral={neutral} bad={bad} />
    </div>
  );
};

export default App;
