import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

import { config } from 'conf';

import { AmbientesIcon } from 'assets/icons/AmbientesIcon';
import { RinconesIcon } from 'assets/icons/RinconesIcon';
import { RutinasIcon } from 'assets/icons/RutinasIcon';
import { TalleresIcon } from 'assets/icons/TalleresIcon';

export const MenuItem = ({ isActive, label, path }) => {
  const { paths } = config;
  const renderIcon = () => {
    switch (path) {
      case paths.AMBIENTES:
        return <AmbientesIcon isActive={isActive} />;
      case paths.RINCONES:
        return <RinconesIcon isActive={isActive} />;
      case paths.RUTINAS:
        return <RutinasIcon isActive={isActive} />;
      case paths.TALLERES:
        return <TalleresIcon isActive={isActive} />;
      default:
    }
  };

  return (
    <NavLink to={`/${path}`} className={styles.menuItem}>
      {renderIcon()}
      <span className={isActive ? styles.labelSelected : styles.labelInactive}>
        {label}
      </span>
    </NavLink>
  );
};
