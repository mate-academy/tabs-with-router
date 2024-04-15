import { Link, useParams } from 'react-router-dom';
const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const TabsPage = () => {
  const { tabId } = useParams();
  const selectedTabId = tabId;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>

      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <li
              data-cy="Tab"
              className={tab.id === selectedTabId ? 'is-active' : ''}
              key={tab.id}
            >
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
          ))}
        </ul>
      </div>

      {!selectedTabId || !tabs.some(tab => tab.id === selectedTabId) ? (
        <div className="block" data-cy="TabContent">
          Please select a tab
        </div>
      ) : (
        tabs.map(
          tab =>
            tab.id === selectedTabId && (
              <div className="block" data-cy="TabContent" key={tab.id}>
                {tab.content}
              </div>
            ),
        )
      )}
    </div>
  );
};