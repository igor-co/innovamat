import { useContext, useEffect, useState } from 'react';

import styles from './SearchView.module.scss';

import { config } from 'conf';

import { Card } from 'ui/_components/Card';
import { Layout } from 'ui/_components/Layout';
import { SpinnerIcon } from 'assets/icons/SpinnerIcon';

import { useLocalStorage } from 'ui/_functions/Hooks/useLocalStorage';
import { GlobalContext } from 'ui/_functions/Contexts/GlobalContext/GlobalContext';

import { Api } from 'services/Api';

export const SearchView = () => {
  const { searchingPhrase, isSearching, currentViewType } =
    useContext(GlobalContext);

  const [{ status, error, content }, setState] = useState({
    status: 'idle',
    error: null,
    content: [],
  });

  const [favoritesIds, setFavoritesIds] = useLocalStorage('innovamat_fav', []);

  const { messages } = config;

  useEffect(() => {
    onViewLoad();
  }, [isSearching]);

  const onViewLoad = async () => {
    setState((prev) => ({ ...prev, status: 'pending' }));
    try {
      const { data } = await Api.search(searchingPhrase);

      setState((prev) => ({ ...prev, status: 'resolved', content: data }));
    } catch (error) {
      setState((prev) => ({
        ...prev,
        status: 'rejected',
        error: {
          status: error.response.status,
          message: error.response.data.message,
        },
      }));
    }
  };

  const onFavoriteClick = (isFavorite, id) => {
    if (isFavorite) {
      setFavoritesIds((prev) => prev.filter((favorite) => favorite !== id));
    } else {
      setFavoritesIds((prev) => [...prev, id]);
    }
  };

  const filterByCallback = (resource) =>
    resource.tag.toUpperCase() === currentViewType.toUpperCase();

  const renderContent = () => {
    if (status === 'pending') {
      return (
        <div className={styles.loaderWrapper}>
          <SpinnerIcon />
        </div>
      );
    }

    if (status === 'rejected') {
      return (
        <div className={styles.noContent}>
          <h2 className={styles.error}>
            {messages['error']} : {error.status}
          </h2>
          <p>{messages['errorAdvice']}</p>
        </div>
      );
    }

    console.log('content', content);

    if (status === 'resolved' && content.length === 0) {
      return (
        <div className={styles.noContent}>
          <p>{messages['noSearchResult']}</p>
        </div>
      );
    }

    return (
      <section className={styles.section}>
        {content.filter(filterByCallback).map((resource) => (
          <Card
            key={resource.id}
            {...resource}
            onFavoriteClick={onFavoriteClick}
            favoritesIds={favoritesIds}
          />
        ))}
      </section>
    );
  };

  return (
    <Layout>
      <main>
        <h2 className={styles.viewTitle}>{messages['searchResult']}</h2>

        {renderContent()}
      </main>
    </Layout>
  );
};
