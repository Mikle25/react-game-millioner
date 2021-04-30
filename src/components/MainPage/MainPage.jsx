import React from 'react';
import { Link } from 'react-router-dom'
import './MainPage.scss';
import logo from '../../assets/images/Logo.svg';


export const MainPage = () => {
  return (
    <section className="main-page">
      <div className="main-page__inner">
        <div className="main-page__images">
          <img
            className="main-page__logo"
            src={logo}
            alt="Logo"
          />
        </div>

        <div className="main-page__play">
          <h1>Who wants to be a millionaire?</h1>
          
          <Link
            to="/game"
            className="main-page__play-btn"
          >
            Start
          </Link>
        </div>
      </div>
    </section>
  );
};

