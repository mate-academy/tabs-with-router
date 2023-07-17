import { useParams } from 'react-router-dom';
import { TabItem } from '../Components/TabItem';
import { Tab } from '../types/Tab';

const tabs: Tab[] = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

export const Tabs = () => {
  const { tabId = null } = useParams();
  const activeTab = tabs.find(tab => tab.id === tabId) || null;

  return (
    <div className="container">
      <h1 className="title">Tabs page</h1>
      <div className="tabs is-boxed">
        <ul>
          {tabs.map(tab => (
            <TabItem key={tab.id} tab={tab} activeTabId={tabId} />
          ))}
        </ul>
      </div>

      <div className="block" data-cy="TabContent">
        {activeTab
          ? activeTab.content
          : 'Please select a tab'}

      </div>
    </div>
  );
};
