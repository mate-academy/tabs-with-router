import { useParams, Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';

const tabs = [
   { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
   { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
   { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
 ];


export const TabsPage = () => {
  const { tabId } = useParams();
  const currentTab = tabs.find(tab => tab.id === tabId);

  return (
    <>
        <h1 className="title">Tabs page</h1>
        <div className="tabs is-boxed">
          <ul>
            {tabs.map(tab => (
              <li data-cy="Tab" className={tab.id === tabId ? "is-active" : ""} key={tab.id}>
              <Link to={`/tabs/${tab.id}`}>{tab.title}</Link>
            </li>
            ))}
          </ul>
        </div>

        <div className="block" data-cy="TabContent">
          {currentTab ? currentTab.content : 'Please select a tab'}
        </div>
        <Outlet />
    </>
  )
}
