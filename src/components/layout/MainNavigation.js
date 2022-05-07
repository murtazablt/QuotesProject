import React from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";

function MainNavigation() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <NavLink to="/quotes"  >Great Quotes</NavLink>
      </div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink
              to="/quotes"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/new-quote"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Add a Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
