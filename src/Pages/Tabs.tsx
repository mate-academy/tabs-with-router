import cn from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabsId } = useParams();
  const selectedTabsById = tabs.find(tab => tab.id === tabsId);

  return (
    <>
      <div className="section">
        <div className="container">
          <h1 className="title">Tabs page</h1>

          <div className="tabs is-boxed">
            <ul>
              {tabs.map(tab => (
                <li
                  data-cy="Tab"
                  key={tab.id}
                  className={cn({
                    'is-active': tab.id === tabsId,
                  })}
                >
                  <Link to={`../${tab.id}`}>{tab.title}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="block" data-cy="TabContent">
            {selectedTabsById?.content || 'Please select a tab'}
          </div>
        </div>
      </div>
    </>
  );
};