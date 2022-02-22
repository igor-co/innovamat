import { useState } from 'react';

import styles from './FiltersButton.module.scss';

import { config } from 'conf';

import { ChevronIcon } from 'assets/icons/ChevronIcon';
import { FiltersIcon } from 'assets/icons/FiltersIcon';
import { FiltersPanel } from 'ui/_components/Header/_components/FiltersPanel';

export const FiltersButton = ({ classNames }) => {
  const [isOpened, setIsOpened] = useState(false);
  const { messages } = config;

  return (
    <div className={classNames}>
      <button
        className={`${styles.button} ${isOpened ? styles.isOpened : ''}`}
        onClick={() => setIsOpened((prev) => !prev)}
      >
        <ChevronIcon />
        <span className={styles.label}>{messages['filterLabel']}</span>
        <FiltersIcon />
      </button>

      {isOpened && <FiltersPanel />}
    </div>
  );
};
