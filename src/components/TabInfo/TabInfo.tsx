import classNames from 'classnames';
import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { Tab } from '../../types/Tab';

interface Props {
  tab: Tab,
}

export const TabInfo = React.memo<Props>(({ tab }) => {
  const { tabId = '' } = useParams();

  return (
    <li
      className={classNames({ 'is-active': tab.id === tabId })}
      data-cy="Tab"
    >
      <Link
        to={`/tabs/${tab.id}`}
        data-cy="TabLink"
      >
        {tab.title}
      </Link>
    </li>
  );
});
