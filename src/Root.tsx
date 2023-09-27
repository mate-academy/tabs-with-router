import {
  HashRouter,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom';
import { App } from './App';
import { HomePage } from './Pages/HomePage';
import { TabsPage } from './Pages/TabsPages';
import { TabContent } from './components/TabContent';
import { TabsProvider } from './TabsContext';

export const Root = () => {
  return (
    <HashRouter>
      <TabsProvider>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} />
            <Route path="tabs" element={<TabsPage />}>
              <Route path=":tabId?" element={<TabContent />} />
            </Route>
            <Route path="/home" element={<Navigate to="/" />} />
            <Route
              path="*"
              element={
                <h1 className="title">Page not found</h1>
              }
            />
          </Route>
        </Routes>
      </TabsProvider>
    </HashRouter>
  );
};
