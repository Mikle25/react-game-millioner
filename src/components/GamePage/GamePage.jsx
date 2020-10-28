import React, { useState } from 'react';
import './GamePage.scss';

export const GamePage = () => {
  const [question, setQuestion] = useState(['A', 'B', 'C', 'D']);
  const [money, setMoney] = useState([
    500,
    1000,
    2000,
    4000,
    8000,
    16000,
    32000,
    64000,
    125000,
    250000,
    500000,
    1000000
  ]);
  const [total, setTotal] = useState(0);

  return (
    <section className="Game-page">
      <div className="Game-page__container-game">
        <button className="Game-page__menu">
          <span></span>
        </button>

        <div className="Game-page__question">
          <p>How old your elder brother was 10 years before you was born, mate?</p>
        </div>

        <div className="Game-page__answer">
        {question.map((elem, i) => (
          <svg
            key={i}
            viewBox="0 0 405 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
              window.location.assign('http://localhost:3000/#/game-over/');
            }}
          >
            <path d="M388 36L405 36" stroke="#D0D0D8"/>
            <path d="M0 36L17 36" stroke="#D0D0D8"/>
            <path d="M48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5Z" fill="white" stroke="#D0D0D8"/>
            <text
              x="15%"
              y="50%"
              fill="#FF8B37"
              dominantBaseline="central"
            >
              {elem}
            </text>

            <text
              x="25%"
              y="50%"
              fill="#000"
              dominantBaseline="central"
            >
              {elem}
            </text>
          </svg>
        ))}
        </div>
      </div>

      <div className="Game-page__container-total">
        {money
          .sort((a, b) => b - a)
          .map((elem, i) => (
          <svg
            key={i}
            width="376"
            height="40"
            viewBox="0 0 376 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M69 20H0" stroke="#D0D0D8"/>
            <path d="M376 20H307" stroke="#D0D0D8"/>
            <path d="M90.2872 0.5H285.713C289.126 0.5 292.362 2.01596 294.547 4.63788L307.349 20L294.547 35.3621C292.362 37.984 289.126 39.5 285.713 39.5H90.2872C86.8742 39.5 83.6375 37.984 81.4526 35.3621L68.6509 20L81.4526 4.63788C83.6376 2.01596 86.8742 0.5 90.2872 0.5Z" fill="white" stroke="#D0D0D8"/>
            <text
              x="50%"
              y="50%"
              fill="#000"
              textAnchor="middle"
              dominantBaseline="central"
            >
              {`$${elem}`}
            </text>
          </svg>
        ))}
      </div>
    </ section>
  );
};
