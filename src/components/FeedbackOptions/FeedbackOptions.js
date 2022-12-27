import React from 'react';
import './FeedbackOptions.css';

export default function FeedbackOptions({ setBad, setGood, setNeutral }) {
  return (
    <div>
      <h2>Leave feedback</h2>
      <ul className="btn-list">
        <li>
          <button
            className="btn btn--positive"
            type="button"
            onClick={() => setGood(prevCount => prevCount + 1)}
          >
            Good
          </button>
        </li>
        <li>
          <button
            className="btn btn--negative"
            type="button"
            onClick={() => setBad(prevCount => prevCount + 1)}
          >
            Bad
          </button>
        </li>
        <li>
          <button
            className="btn btn--neutral"
            type="button"
            onClick={() => setNeutral(prevCount => prevCount + 1)}
          >
            Neutral
          </button>
        </li>
      </ul>
    </div>
  );
}
