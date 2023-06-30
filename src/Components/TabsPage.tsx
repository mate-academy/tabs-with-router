import classNames from 'classnames';
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { Tab } from '../types/Tab';

type Props = {
  tabs: Tab[]
};

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId = '' } = useParams();

  const isSelectedTab = useMemo(() => {
    return tabs.find(tab => tab.id === tabId);
  }, [tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={classNames(
                { 'is-active': tabId === tab.id },
              )}
              key={tab.id}
            >
              <Link
                to={`../${tab.id}`}
              >
                {tab.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        { isSelectedTab?.content || 'Please select a tab' }
      </div>
    </>
  );
};
