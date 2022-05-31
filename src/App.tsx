import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { MainNav } from './components/MainNav/MainNav';
import { HomePage } from './components/HomePage/HomePage';
import { TabsPage } from './components/TabsPage/TabsPage';
import { NotFoundPage } from './components/NotFoundPage/NotFoundPage';

import './App.scss';
import './reset.scss';

const tabs = [
  { id: 'tab-1', title: 'Tab 1', content: 'Some text 1' },
  { id: 'tab-2', title: 'Tab 2', content: 'Some text 2' },
  { id: 'tab-3', title: 'Tab 3', content: 'Some text 3' },
];

const App: React.FC = () => (
  <div className="app">
    <MainNav />

    <Routes>
      <Route path="/" element={<HomePage />} />

      <Route path="/tabs/" element={<TabsPage tabs={tabs} />}>
        <Route path=":tabId" element={<TabsPage tabs={tabs} />} />
      </Route>

      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  </div>
);

export default App;
