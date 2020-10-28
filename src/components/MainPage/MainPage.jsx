import React from 'react';
import { Link } from 'react-router-dom'
import './MainPage.scss';
import logo from '../../assets/images/Logo.svg';


export const MainPage = () => {

  return (
    <section className="Main-page">
      <div className="Main-page__inner">
        <div className="Main-page__images">
          <img className="Main-page__logo" src={logo} alt="Logo"/>
        </div>
        <div className="Main-page__play">
          <h1>Who wants to be a millionaire?</h1>
            <Link to="/game" className="Main-page__play-btn">Start</Link>
        </div>
      </div>
    </section>
  );
};

