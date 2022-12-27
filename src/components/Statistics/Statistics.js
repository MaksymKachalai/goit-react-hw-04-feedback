import React, { useMemo } from 'react';
import './Statistics.css';

export default function Statistics({ good, bad, neutral }) {
  const positivePercentageFeeds = useMemo(() => {
    const sum = good + bad + neutral;

    const positivePercentage = (good / sum) * 100;

    return Math.round(positivePercentage, 2);
  }, [good, bad, neutral]);

  return (
    <div>
      <ul className="stat-list">
        <li className="stat-list__item">
          Good: <span className="stat-list__number">{good}</span>
        </li>
        <li className="stat-list__item">
          Neutral: <span className="stat-list__number">{neutral}</span>
        </li>
        <li className="stat-list__item">
          Bad: <span className="stat-list__number">{bad}</span>
        </li>
        <li className="stat-list__item">
          Total:{' '}
          <span className="stat-list__number">{good + bad + neutral}</span>
        </li>
        <li className="stat-list__item percentage">
          Positive feedback:{' '}
          <span className="stat-list__number stat-list__number--percentage">
            {positivePercentageFeeds || 0}%
          </span>
        </li>
      </ul>
    </div>
  );
}
