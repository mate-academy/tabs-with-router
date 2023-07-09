import React from 'react';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';

interface Props {
  to: string;
  text: string;
}

export const PageNavLink: React.FC<Props> = ({ to, text }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => cn(
        'navbar-item', { 'is-active': isActive },
      )}
    >
      {text}
    </NavLink>
  );
};
