import { FC } from 'react';
import { useParams } from 'react-router-dom';
import { TabsTable } from '../../components/TabsTable';
import { Tab } from '../../types/Tab';

export const tabsFromServer = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const findTabId = (tabs: Tab[], tabId: string) => (
  tabs.find(tab => tab.id === tabId)?.id
);

export const TabsPage: FC = () => {
  const { tabId } = useParams<{ tabId: string }>();

  let validTabId = tabId;

  if (tabId) {
    validTabId = findTabId(tabsFromServer, tabId);
  }

  return (
    <>
      <h1 className="title">Tabs page</h1>
      <TabsTable tabs={tabsFromServer} selectedTabId={validTabId} />
    </>
  );
};
