import { cloneElement, useContext } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

import { config } from 'conf';

import { GlobalContext } from 'ui/_functions/Contexts/GlobalContext/GlobalContext';

export const MenuItem = ({ path, children }) => {
  const { currentViewType, setCurrentViewType } = useContext(GlobalContext);

  const { messages } = config;

  const isActive = currentViewType === path;

  return (
    <NavLink
      to={`/${path}`}
      className={styles.menuItem}
      onClick={() => setCurrentViewType(path)}
    >
      {cloneElement(children, { isActive })}
      <span className={isActive ? styles.labelSelected : styles.labelInactive}>
        {messages[path]}
      </span>
    </NavLink>
  );
};
