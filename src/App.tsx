import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import cn from 'classnames';
import {
  NavLink, Route, Routes, Navigate,
} from 'react-router-dom';
import { HomePage, NotFound } from './components/Pages';
import { Tabs } from './components/Tabs';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const App = () => {
  const getLinkClass = ({ isActive }: { isActive: boolean }): string => {
    return cn('navbar-item',
      { 'is-active': isActive });
  };

  return (
    <>
      <nav
        className="navbar is-light is-fixed-top is-mobile has-shadow"
        data-cy="Nav"
      >
        <div className="container">
          <div className="navbar-brand">
            <NavLink to="/" className={getLinkClass}>Home</NavLink>
            <NavLink to="/tabs" className={getLinkClass}>Tabs</NavLink>
          </div>
        </div>
      </nav>

      <div className="section">
        <div className="container">
          <Routes>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route path="/" element={<HomePage />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/tabs" element={<Tabs tabs={tabs} />}>
              <Route
                index
                element={<Tabs tabs={tabs} />}
              />
              <Route path=":tabId" element={<Tabs tabs={tabs} />} />
            </Route>
          </Routes>
        </div>
      </div>
    </>
  );
};
