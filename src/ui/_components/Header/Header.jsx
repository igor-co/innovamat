import styles from './Header.module.scss';

import { FiltersButton } from './_components/FiltersButton';
import { SearchButton } from './_components/SearchButton';
import { SearchInput } from './_components/SearchInput';

export const Header = ({ isScrolledDown }) => {
  return (
    <header
      className={`${styles.headerWrapper} ${
        isScrolledDown ? styles.shadow : ''
      }`}
    >
      <div className={styles.searchBar}>
        <FiltersButton classNames={styles.filter} />
        <SearchInput classNames={styles.searchInput} />
        <SearchButton classNames={styles.searchButton} />
      </div>
    </header>
  );
};
