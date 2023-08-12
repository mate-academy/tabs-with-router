import { NavLink, Outlet } from 'react-router-dom';
import classNames from 'classnames';
import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';

export const App = () => {
  const getClassNames = ({ isActive }: { isActive: boolean }) => classNames(
    'navbar-item',
    { 'is-active': isActive },
  );

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink
              to="/"
              className={getClassNames}
            >
              Home
            </NavLink>
            <NavLink
              to="/tabs"
              className={getClassNames}
            >
              Tabs
            </NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Outlet />
        </div>
      </div>
    </>
  );
};
