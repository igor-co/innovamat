import { useEffect, useState } from 'react';

import styles from './Layout.module.scss';

import { Navigation } from 'ui/_components/Navigation';
import { Header } from 'ui/_components/Header';

export const Layout = ({ children }) => {
  const [isScrolledDown, setIsScrolledDown] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolledDown(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={styles.layoutWrapper}>
      <Header isScrolledDown={isScrolledDown} />
      <Navigation />
      <div className={styles.content}>{children}</div>
    </div>
  );
};
