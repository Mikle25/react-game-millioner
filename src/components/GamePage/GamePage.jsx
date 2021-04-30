import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import classnames from 'classnames';
import './GamePage.scss';
import data from '../../assets/api/api.json';

export const GamePage = ({ updateTotal }) => {
  const history = useHistory();
  const [level, setLevel] = useState(0)
  const [isToggleBtnMenu, setToggleBtnMenu] = useState(false);
  const [select, setSelect] = useState('');
  const [correct, setCorrect] = useState('');
  const [wrong, setWrong] = useState('');

  const levelMoney = [...data.money];
  const questions = [...data.questions];
  const question = questions[level].quest;
  const options = questions[level].options;

  const selectAnswer = (e) => {
    setSelect(e.id);

      setTimeout(()=>{
        if (questions[level].answer.includes(e.id)) {
          setCorrect(e.id);

          setTimeout(() => {
            updateTotal(levelMoney[level])

            if (level < data.questions.length - 1) {
              setLevel(level + 1)
            } else {
              setLevel(0);
              history.push('/game-over');
            }
          }, 1000)
        } else {
          setWrong(e.id)

          setTimeout(() => {
            setLevel(0);
            history.push('/game-over');
          }, 1000)
        }
      }, 1000)
  }

  return (
    <section className="game-page">
      <div className="game-page__container-game">
        <div className="game-page__inner-menu">
          <button
            className={
              classnames(
                "menu",
                {"menu--active": isToggleBtnMenu}
              )
            }
            onClick={() => setToggleBtnMenu(!isToggleBtnMenu)}>
            <span></span>
          </button>
        </div>

        <div className="game-page__question">
          <p>{question}</p>
        </div>

        <div className="game-page__answer">
        {options
          .map((answer, i) => (
          <svg
            key={i}
            viewBox="0 0 405 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id={answer}
            onClick={(e) => {
              selectAnswer(e.currentTarget)
            }}

            className={
              classnames(
                {"game-page__answer--select": select === answer},
                {"game-page__answer--correct": correct === answer},
                {"game-page__answer--wrong": wrong === answer}
              )
            }
          >
            <path
              d="M388 36L405 36"
              stroke="#D0D0D8"
            />
            <path
              d="M0 36L17 36"
              stroke="#D0D0D8"
            />
            <path
              d="M48.052 0.5H356.948C360.648 0.5 364.122 2.28016 366.283 5.28344L388.384 36L366.283 66.7166C364.122 69.7198 360.648 71.5 356.948 71.5H48.052C44.3521 71.5 40.8781 69.7198 38.7172 66.7166L16.616 36L38.7172 5.28344C40.8781 2.28016 44.3521 0.5 48.052 0.5Z"
              fill="white"
              stroke="#D0D0D8"
            />

            <text
              x="15%"
              y="50%"
              fill="#FF8B37"
              dominantBaseline="central"
            >
              {data.variants[i]}
            </text>

            <text
              x="25%"
              y="50%"
              viewBox="0 0 405 72"
              fill="#000"
              dominantBaseline="central"
            >
              {answer}
            </text>
          </svg>
        ))}
        </div>
      </div>

      <div
        className={
          classnames(
            "game-page__container-total",
            {"game-page__container-total--active": isToggleBtnMenu}
          )
        }
      >
        {levelMoney
          .map((money, i) => (
          <svg
            key={i}
            viewBox="0 0 376 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            id={i}
            className={
              classnames(
                `game-page__container-total-${levelMoney.length - i}`,
                {"game-page__container-total--current-money": level - 1 === i},
                {"game-page__container-total--finished-money": i < level - 1}
              )
            }
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
              {`$${money.toLocaleString('en-EN')}`}
            </text>
          </svg>
        ))}
      </div>
    </ section>
  );
};
