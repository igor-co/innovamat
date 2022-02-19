import styles from './SearchInput.module.scss';

import { config } from 'conf';

export const SearchInput = ({ onChange }) => {
  const { messages } = config;

  return (
    <input
      onChange={(event) => onChange(event.target.value)}
      className={styles.input}
      placeholder={messages['searchPlaceholder']}
    />
  );
};
