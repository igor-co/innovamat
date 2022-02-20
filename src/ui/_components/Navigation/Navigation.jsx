import styles from './Navigation.module.scss';

import { config } from 'conf';

import { MenuItem } from 'ui/_components/Navigation/_components/MenuItem';

export const Navigation = () => {
  const { paths, messages } = config;

  const menuOptions = [
    paths.TALLERES,
    paths.RINCONES,
    paths.AMBIENTES,
    paths.RUTINAS,
  ];

  return (
    <div className={styles.navigationWrapper}>
      <h3 className={styles.menuTitle}>{messages['menuTitle']}</h3>
      <nav className={styles.nav}>
        {menuOptions.map((path) => (
          <MenuItem key={path} path={path} />
        ))}
      </nav>
    </div>
  );
};
