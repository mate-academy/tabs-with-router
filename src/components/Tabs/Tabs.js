import React from 'react';
import { NavLink } from 'react-router-dom';
import { TabsProps } from '../PropTypes/PropTypes';
import Tab from '../Tab/Tab';

const Tabs = ({ tabs, match }) => (
  <>
    <ul>
      {tabs.map(tab => (
        <li>
          <NavLink to={`/tabs/${tab.id}`}>
            {tab.title}
          </NavLink>
        </li>
      ))}
    </ul>
    <Tab match={match} tabs={tabs} key={tabs.id} />
  </>
);

Tabs.propTypes = TabsProps;
export default Tabs;
