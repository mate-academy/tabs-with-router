import React from 'react';
import { PageNavLink } from '../PageNavLink';

export const NavBar: React.FC = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <PageNavLink
            to="/"
            linkText="Home"
          />

          <PageNavLink
            to="/tabs"
            linkText="Tabs"
          />
        </div>
      </div>
    </nav>
  );
};
