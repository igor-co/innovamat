import styles from './Navigation.module.scss';

import { config } from 'conf';

import { MenuItem } from 'ui/_components/Navigation/_components/MenuItem';

export const Navigation = () => {
  const { paths, messages } = config;

  const menuOptions = [
    {
      label: messages['talleres'],
      path: paths.TALLERES,
    },
    {
      label: messages['rincones'],
      path: paths.RINCONES,
    },
    {
      label: messages['ambientes'],
      path: paths.AMBIENTES,
    },
    {
      label: messages['rutinas'],
      path: paths.RUTINAS,
    },
  ];

  return (
    <div className={styles.navigationWrapper}>
      <h3 className={styles.menuTitle}>{messages['menuTitle']}</h3>
      <nav className={styles.nav}>
        {menuOptions.map(({ label, path }) => (
          <MenuItem key={path} label={label} path={path} />
        ))}
      </nav>
    </div>
  );
};
