import React from 'react';
import { Link } from 'react-router-dom';
import './GameOver.scss';
import logo from '../../assets/images/Logo.svg';

export const GameOver = ({ total, zeroingTotal }) => {

  return (
    <section className="game-over">
      <div className="game-over__inner">
        <div className="game-over__images">
          <img
            className="game-over__logo"
            src={logo}
            alt="Logo"
          />
        </div>
        
        <div className="game-over__play">
          <div>
            <p>Total score:</p>

            <h1>{`$${total.toLocaleString('en-EN')} earned`}</h1>
          </div>

          <Link
            to="/"
            className="game-over__play-btn"
            onClick={() => zeroingTotal()}
          >
            Try again
          </Link>
        </div>
      </div>
    </section>
  );
}
