import styles from './Navigation.module.scss';

import { config } from 'conf';

import { MenuItem } from 'ui/_components/Navigation/_components/MenuItem';

import { AmbientesIcon } from 'assets/icons/AmbientesIcon';
import { RinconesIcon } from 'assets/icons/RinconesIcon';
import { RutinasIcon } from 'assets/icons/RutinasIcon';
import { TalleresIcon } from 'assets/icons/TalleresIcon';

export const Navigation = () => {
  const { paths, messages } = config;

  const menuOptions = [
    { path: paths.TALLERES, icon: <TalleresIcon /> },
    { path: paths.RINCONES, icon: <RinconesIcon /> },
    { path: paths.AMBIENTES, icon: <AmbientesIcon /> },
    { path: paths.RUTINAS, icon: <RutinasIcon /> },
  ];

  return (
    <div className={styles.navigationWrapper}>
      <h3 className={styles.menuTitle}>{messages['menuTitle']}</h3>
      <nav className={styles.nav}>
        {menuOptions.map(({ path, icon }) => (
          <MenuItem key={paths.TALLERES} path={path}>
            {icon}
          </MenuItem>
        ))}
      </nav>
    </div>
  );
};
