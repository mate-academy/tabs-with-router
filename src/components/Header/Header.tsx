import React from 'react';
import { NavLink } from 'react-router-dom';

export const Header: React.FC = () => {
  return (
    <div className="navbar">
      <nav className="navbar-brand">
        <NavLink
          to="/"
          className={
            ({ isActive }) => (isActive ? 'navbar-item is-tab is-active' : 'navbar-item is-tab')
          }
        >
          Home
        </NavLink>

        <NavLink
          to="/tabs"
          className={
            ({ isActive }) => (isActive ? 'navbar-item is-tab is-active' : 'navbar-item is-tab')
          }
        >
          Tabs
        </NavLink>
      </nav>
    </div>
  );
};
