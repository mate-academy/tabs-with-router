import { Link, useParams } from 'react-router-dom';
import { tabs } from '../../App';
import classNames from 'classnames';

export const TabsPage = () => {
  const currentTab = useParams();

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => {
            return (
              <li
                key={tab.id}
                data-cy="Tab"
                className={classNames({
                  'is-active': currentTab.tabId === tab.id,
                })}
              >
                <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
              </li>
            );
          })}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {tabs.some(tab => tab.id === currentTab.tabId)
          ? tabs.map(tab => tab.id === currentTab.tabId && tab.content)
          : 'Please select a tab'}
      </div>
    </>
  );
};
