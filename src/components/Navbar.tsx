import classnames from 'classnames';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({
              isActive,
            }) => classnames('navbar-item', {
              'is-active': isActive,
            })}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({
              isActive,
            }) => classnames('navbar-item', {
              'is-active': isActive,
            })}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>
  );
};
