import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <div className="person-info">
        <h2>Zakharov Aleksandr</h2>
        <ul>
          <li>
            <a href="tel:+375256265876">+375(25)6265876</a>
          </li>
          <li>
            <a href="mailto:Zakharov.faur@gmail.com">Zakharov.faur@gmail.com</a>
          </li>
          <li>
            <a href="https://github.com/ZakharovOwl">GitHub: ZakharovOwl</a>
          </li>
          <li>
            <a href="https://zakharovowl.github.io/Portfolio/">My Portfolio</a>
          </li>
          <li>
            <a href="https://t.me/zakharov_faur">Telegram</a>
          </li>
        </ul>
      </div>
      <ul className="navigation">
        <li>
          <NavLink to="/" exact activeClassName="link_active" className="list__link">
            Registration
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/login" exact
            activeClassName="link_active"
            className="list__link"
          >
            Login
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/answers" exact
            activeClassName="link_active"
            className="list__link"
          >
            Answers
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
