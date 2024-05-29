import 'bulma/css/bulma.css';
import '@fortawesome/fontawesome-free/css/all.css';
import './App.scss';
import {Navigate, NavLink, Route, Routes} from "react-router-dom";
import classNames from "classnames";
import {Home} from "./components/Home";
import {PageNotFound} from "./components/PageNotFound";
import {Tabs} from "./components/Tabs";

// const tabs = [
//   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
//   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
//   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
// ];

function getNavLinkClass({isActive}: {isActive: boolean}) {
  return classNames("navbar-item", {"is-active": isActive});
}

export const App = () => (
  <>
    {/* Also requires <html class="has-navbar-fixed-top"> */}
    <nav
      className="navbar is-light is-fixed-top is-mobile has-shadow"
      data-cy="Nav"
    >
      <div className="container">
        <div className="navbar-brand">
          <NavLink to="/" className={getNavLinkClass}>
            Home
          </NavLink>
          <NavLink to="/tabs" className={getNavLinkClass}>
            Tabs
          </NavLink>
        </div>
      </div>
    </nav>

    <Routes>
      <Route index element={<Home />}/>
      <Route path="home" element={<Navigate to="/"/>}/>
      <Route path="*" element={<PageNotFound/>}/>
      <Route path="tabs">
        <Route path=":selectedTabId?" element={<Tabs />}/>
      </Route>
    </Routes>
  </>
);
