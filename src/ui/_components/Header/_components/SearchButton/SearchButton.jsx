import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './SearchButton.module.scss';

import { config } from 'conf';

import { LoupeIcon } from 'assets/icons/LoupeIcon';

import { GlobalContext } from 'ui/_functions/Contexts/GlobalContext/GlobalContext';

export const SearchButton = () => {
  const { setIsSearching } = useContext(GlobalContext);

  const { messages, paths } = config;

  const navigate = useNavigate();

  const onSearch = () => {
    setIsSearching((prevState) => !prevState);
    navigate(`/${paths.SEARCH}`);
  };

  return (
    <button className={styles.button} onClick={onSearch}>
      <LoupeIcon />
      <span className={styles.label}>{messages['search']}</span>
    </button>
  );
};
