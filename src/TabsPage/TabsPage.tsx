import { useParams } from 'react-router-dom';
import { useMemo } from 'react';
import { TabsMenu } from '../TabsMenu/TabsMenu';
import { Tab } from '../types/Tab';

interface Props {
  tabs: Tab[];
}

export const TabsPage: React.FC<Props> = ({ tabs }) => {
  const { tabId } = useParams();

  const selectedTab = useMemo(() => {
    return tabs.find((tab) => tab.id === tabId) || null;
  }, [tabs, tabId]);

  return (
    <>
      <h1 className="title">Tabs page</h1>

      <TabsMenu tabs={tabs} selectedTab={selectedTab} />

      <div className="block" data-cy="TabContent">
        {
          selectedTab?.content
          || 'Please select a tab'
        }
      </div>
    </>
  );
};
