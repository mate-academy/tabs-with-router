import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const textContent = tabs.find(tab => tab.id === tabId)?.content;

  return (
    <div className="section">
      <div className="container">
        <h1 className="title">Tabs page</h1>

        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li
                data-cy="Tab"
                key={tab.id}
                className={classNames({
                  'is-active': tab.id === tabId,
                })}
              >
                <Link to={`../${tab.id}`}>
                  {tab.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {textContent || (
            'Please select a tab'
          )}
        </div>
      </div>
    </div>
  );
};
