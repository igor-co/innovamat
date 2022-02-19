import { useState } from 'react';

import styles from './Header.module.scss';

import { FiltersButton } from './_components/FiltersButton';
import { SearchButton } from './_components/SearchButton';
import { SearchInput } from './_components/SearchInput';

export const Header = ({ isScrolledDown }) => {
  const [search, setSearch] = useState('');

  return (
    <header
      className={`${styles.headerWrapper} ${
        isScrolledDown ? styles.shadow : ''
      }`}
    >
      <div className={styles.searchBar}>
        <FiltersButton />
        <SearchInput onChange={setSearch} />
        <SearchButton />
      </div>
    </header>
  );
};
