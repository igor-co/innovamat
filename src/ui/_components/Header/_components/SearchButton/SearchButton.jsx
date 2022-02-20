import styles from './SearchButton.module.scss';
import { useNavigate } from 'react-router-dom';

import { config } from 'conf';

import { LoupeIcon } from 'assets/icons/LoupeIcon';

export const SearchButton = ({ onClick = () => {} }) => {
  const { messages, paths } = config;

  const navigate = useNavigate();

  const onSearch = () => {
    onClick();
    navigate(`/${paths.SEARCH}`);
  };

  return (
    <button className={styles.button} onClick={onSearch}>
      <LoupeIcon />
      <span className={styles.label}>{messages['search']}</span>
    </button>
  );
};
