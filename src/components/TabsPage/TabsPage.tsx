import classNames from 'classnames';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage: React.FC = () => {
  const { tabId } = useParams<{ tabId?: string }>();
  const [selectedTab, setSelectedTab] = useState<string | undefined>(tabId);

  useEffect(() => {
    setSelectedTab(tabId);
  }, [tabId]);

  return (
    <>
      <h1 className="title">
        Tabs page
      </h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map((element: Tab) => (
            <li
              data-cy="Tab"
              className={classNames('', {
                'is-active': selectedTab === element.id,
              })}
              key={element.id}
            >
              <Link
                to={`/tabs/${element.id}`}
                state={{ text: element.content }}
              >
                {element.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className="block"
        data-cy="TabContent"
      >
        {selectedTab !== undefined && tabs.some(tab => tab.id === selectedTab)
          ? tabs.find(tab => tab.id === selectedTab)?.content
          : 'Please select a tab'}
      </div>
    </>
  );
};
