import React from 'react';
import { Link } from 'react-router-dom';
import './GameOver.scss';
import logo from '../../assets/images/Logo.svg';

export const GameOver = () => {

  return (
    <section className="Game-over">
      <div className="Game-over__inner">
        <div className="Game-over__images">
          <img className="Game-over__logo" src={logo} alt="Logo"/>
        </div>
        <div className="Game-over__play">
          <div>
            <p>Total score:</p>
            <h1>$8,000 earned</h1>
          </div>
          <Link to="/" className="Game-over__play-btn">
            Try again
          </Link>
        </div>
      </div>
    </section>
  );
}
