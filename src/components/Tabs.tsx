import React from 'react';
import { NavLink, useParams } from 'react-router-dom';
// import './Navigation.scss';

const tabs = [
  {
    id: 'tab-1', title: 'Tab 1', content: 'Some text 1',
  },
  {
    id: 'tab-2', title: 'Tab 2', content: 'Some text 2',
  },
  {
    id: 'tab-3', title: 'Tab 3', content: 'Some text 3',
  },
];

// interface RouteProps {
//   tabId: string,
// }

const Tabs = () => {
  // const activeTab = match.params.tabId || 0;
  const activeTab = useParams<{ tabId: string }>();
  const content = activeTab
    ? tabs.find(tab => tab.id === activeTab.tabId)?.content
    : '';

  return (
    <>
      <div className="Tabs">
        <ul className="Tabs__list">
          {tabs.map(tab => (
            <li className="Tabs__list-item" key={tab.id}>
              <NavLink
                to={`/tabs/${tab.id}`}
                className="Tabs__list-link"
                activeClassName="active"
              >
                {tab.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="Tabs__list">
          {content}
        </div>
      </div>

      {!activeTab.tabId && 
        <div className="alert">
        <span className="closebtn">&times;</span> 
          Please select a tab
        </div>
      }
    </>
  )
};

export default Tabs;
