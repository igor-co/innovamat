import { useState } from 'react';

import styles from './Navigation.module.scss';

import { config } from 'conf';

import { MenuItem } from 'ui/_components/Navigation/_components/MenuItem';

export const Navigation = () => {
  const [activeItem, setActiveItem] = useState('');

  const { paths, messages } = config;

  const menuOptions = [
    {
      label: messages['talleres'],
      path: paths.TALLERES,
      //   isActive: activeItem === paths.TALLERES,
      isActive: true,
    },
    {
      label: messages['rincones'],
      path: paths.RINCONES,
      isActive: activeItem === paths.RINCONES,
    },
    {
      label: messages['ambientes'],
      path: paths.AMBIENTES,
      isActive: activeItem === paths.AMBIENTES,
    },
    {
      label: messages['rutinas'],
      path: paths.RUTINAS,
      isActive: activeItem === paths.RUTINAS,
    },
  ];

  return (
    <div className={styles.navigationWrapper}>
      <h3 className={styles.menuTitle}>{messages['menuTitle']}</h3>
      <nav className={styles.nav}>
        {menuOptions.map(({ label, path, isActive }) => (
          <MenuItem key={path} label={label} path={path} isActive={isActive} />
        ))}
      </nav>
    </div>
  );
};
