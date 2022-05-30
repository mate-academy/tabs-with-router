import './App.scss';
import { Route, Switch, NavLink } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { TabsPage } from './components/TabsPage';

const App: React.FC = () => (
  <div className="App">
    <header className="header">
      <nav className="nav">
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Home
        </NavLink>
        <NavLink
          to="/tabs"
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Tabs
        </NavLink>
      </nav>
    </header>
    <main className="content">
      <Switch>
        <Route path="/tabs/:tabId?" component={TabsPage} />
        <Route path="/" exact component={HomePage} />
      </Switch>
    </main>
    <footer className="footer">
      <p>Created by @Vakolyyk</p>
    </footer>
  </div>
);

export default App;
