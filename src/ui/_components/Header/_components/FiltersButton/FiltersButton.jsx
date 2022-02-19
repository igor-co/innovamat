import styles from './FiltersButton.module.scss';

import { config } from 'conf';

import { ChevronIcon } from 'assets/icons/ChevronIcon';
import { FiltersIcon } from 'assets/icons/FiltersIcon';

export const FiltersButton = () => {
  const { messages } = config;

  return (
    <button className={styles.button}>
      <ChevronIcon />
      <span className={styles.label}>{messages['filterLabel']}</span>
      <FiltersIcon />
    </button>
  );
};
