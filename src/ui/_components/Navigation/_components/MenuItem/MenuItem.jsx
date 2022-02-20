import { useContext } from 'react';

import { NavLink } from 'react-router-dom';

import styles from './MenuItem.module.scss';

import { config } from 'conf';

import { AmbientesIcon } from 'assets/icons/AmbientesIcon';
import { RinconesIcon } from 'assets/icons/RinconesIcon';
import { RutinasIcon } from 'assets/icons/RutinasIcon';
import { TalleresIcon } from 'assets/icons/TalleresIcon';

import { ViewTypeContext } from 'ui/_functions/Contexts/ViewTypeContext/ViewTypeContext';

export const MenuItem = ({ label, path }) => {
  const { currentViewType, setCurrentViewType } = useContext(ViewTypeContext);

  const { paths } = config;

  const isActive = currentViewType === path;

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
    <NavLink
      to={`/${path}`}
      className={styles.menuItem}
      onClick={() => setCurrentViewType(path)}
    >
      {renderIcon()}
      <span className={isActive ? styles.labelSelected : styles.labelInactive}>
        {label}
      </span>
    </NavLink>
  );
};
