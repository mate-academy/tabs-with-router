import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './tabs.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId: string }>();
  const activeTab = tabs.find(tab => tab.id === tabId);

  return (
    <div className="TabsPage">
      <ul className="TabsPage__list">
        {
          tabs.map(tab => (
            <li key={tab.id} className="TabsPage__item">
              <Link to={`/tabs/${tab.id}`}>
                {tab.title}
              </Link>
            </li>
          ))
        }
      </ul>

      {activeTab ? (
        <p className="TabsPage__content">
          {activeTab.content}
        </p>
      ) : 'No selected tab'}

    </div>
  );
};
