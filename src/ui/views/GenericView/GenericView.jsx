import { useCallback, useContext, useEffect, useState } from 'react';

import styles from './GenericView.module.scss';

import { config } from 'conf';

import { Card } from 'ui/_components/Card';
import { Layout } from 'ui/_components/Layout';
import { SpinnerIcon } from 'assets/icons/SpinnerIcon';

import { useLocalStorage } from 'ui/_functions/Hooks/useLocalStorage';
import { ViewTypeContext } from 'ui/_functions/Contexts/ViewTypeContext/ViewTypeContext';

import { Api } from 'services/Api';

export const GenericView = () => {
  const { currentViewType } = useContext(ViewTypeContext);

  const [{ status, error, content }, setState] = useState({
    status: 'idle',
    error: null,
    content: [],
  });

  const [favoritesIds, setFavoritesIds] = useLocalStorage('innovamat_fav', []);

  const { messages } = config;

  const onViewLoad = useCallback(async () => {
    setState((prev) => ({ ...prev, status: 'pending' }));
    try {
      const { data } = await Api.getContentByPageType(currentViewType);

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
  }, [currentViewType]);

  useEffect(() => {
    onViewLoad();
  }, [currentViewType, onViewLoad]);

  const onFavoriteClick = (isFavorite, id) => {
    if (isFavorite) {
      setFavoritesIds((prev) => prev.filter((favorite) => favorite !== id));
    } else {
      setFavoritesIds((prev) => [...prev, id]);
    }
  };

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

          {/** Should display the error message provided from server,
           may use error boundary with logger to track the errors 
           
            <h4>Server message:{error.message}</h4>
           
           */}

          <p>{messages['errorAdvice']}</p>
        </div>
      );
    }

    if (status === 'resolved' && content.length === 0) {
      return (
        <div className={styles.noContent}>
          <h2>{messages['noData']}</h2>
          <p>{messages['errorAdvice']}</p>
        </div>
      );
    }

    return content.map((section) => (
      <section key={section.sectionTitle}>
        <h3 className={styles.sectionTitle}>{section.sectionName}</h3>
        <div className={styles.section}>
          {section.resources.map((resource) => (
            <Card
              key={resource.id}
              {...resource}
              onFavoriteClick={onFavoriteClick}
              favoritesIds={favoritesIds}
            />
          ))}
        </div>
      </section>
    ));
  };

  return (
    <Layout>
      <main>
        <h2 className={styles.viewTitle}>{messages[currentViewType]}</h2>
        {renderContent()}
      </main>
    </Layout>
  );
};
