import React from 'react';
import { Link } from 'react-router-dom';
import Burger from '../Burger/Burger';
import Logo from '../../assets/img/logo.png';
import './TopBar.css';

function TopBar() {
  return (
    <header className="topbar">

      <div className="container">

        <div className="topbar__burger">
          <Burger />
        </div>

        <div className="topbar__wrapper">
          <Link to="/" className="topbar__logo">
            <img src={Logo} alt="Logo Alzan" />
          </Link>

        </div>

      </div>
    </header>
  );
}

export default TopBar;
