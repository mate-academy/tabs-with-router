import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Tab({ match, tabs }) {
  const tab = tabs.find(tab => tab.id === match.params.currentTabId)
  return (
    <>
    <nav className="nav nav-tabs">
      {tabs.map(tab => {
        return (
          <NavLink
            key={tab.id}
            activeClassName="active"
            className="nav-link text-dark"
            to={`/tabs/${tab.id}`}
          >
            {tab.title}
          </NavLink>
        );
      })}
    </nav>
    <p>{tab && tab.content}</p>
    </>
  );
}
