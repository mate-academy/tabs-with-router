import React from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';

type Props = {
  to: string;
  title: string;
};

export const PageNavLink: React.FC<Props> = ({ to, title }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => classNames(
        'navbar-item',
        { 'is-active': isActive },
      )}
    >
      {title}
    </NavLink>
  );
};
