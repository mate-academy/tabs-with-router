import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import { NavLink, Route, Routes, Navigate } from 'react-router-dom';
import classNames from 'classnames';
import { TabsPage } from './Components/TabsPage/TabsPage';

export const App = () => (
  <>
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink
            to="/"
            className={({ isActive }) => {
              return classNames('navbar-item', {
                'navbar-item is-active': isActive,
              });
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/tabs"
            className={({ isActive }) => {
              return classNames('navbar-item', {
                'navbar-item is-active': isActive,
              });
            }}
          >
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <div className="section">
      <div className="container">
        <Routes>
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<h1 className="title">Page not found</h1>} />
          <Route path="/" element={<h1 className="title">Home page</h1>} />
          <Route path="/tabs">
            <Route index element={<TabsPage />} />
            <Route path=":tabId/*" element={<TabsPage />} />
          </Route>
        </Routes>
      </div>
    </div>
  </>
);
