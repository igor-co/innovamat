import styles from './SearchButton.module.scss';

import { config } from 'conf';

import { LoupeIcon } from 'assets/icons/LoupeIcon';

export const SearchButton = ({ onClick = () => {} }) => {
  const { messages } = config;

  return (
    <button className={styles.button} onClick={onClick}>
      <LoupeIcon />
      <span className={styles.label}>{messages['search']}</span>
    </button>
  );
};
