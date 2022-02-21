import { useContext } from 'react';

import styles from './SearchInput.module.scss';

import { config } from 'conf';

import { GlobalContext } from 'ui/_functions/Contexts/GlobalContext/GlobalContext';

export const SearchInput = () => {
  const { setSearchingPhrase } = useContext(GlobalContext);

  const { messages } = config;

  return (
    <input
      onChange={(event) => setSearchingPhrase(event.target.value)}
      className={styles.input}
      placeholder={messages['searchPlaceholder']}
    />
  );
};
