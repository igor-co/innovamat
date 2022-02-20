import { useCallback, useEffect, useState } from 'react';

import styles from './GenericView.module.scss';

import { config } from 'conf';

import { Card } from 'ui/views/GenericView/_components/Card';
import { Layout } from 'ui/_components/Layout';
import { SpinnerIcon } from 'assets/icons/SpinnerIcon';

import { useLocalStorage } from 'ui/_components/_utils/Hooks/useLocalStorage';

import { Api } from 'services/Api';

export const GenericView = ({ type }) => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState({ status: null, message: null });
  const [loadingStatus, setLoadingStatus] = useState('idle');

  const [favoritesIds, setFavoritesIds] = useLocalStorage('innovamat_fav', []);

  const { messages } = config;

  const onViewLoad = useCallback(async () => {
    setLoadingStatus('pending');
    try {
      const { data } = await Api.getContentByPageType(type);
      setContent(data);
      setLoadingStatus('success');
    } catch (error) {
      setError({
        status: error.response.status,
        message: error.response.data.message,
      });
      setLoadingStatus('error');
      setContent([]);
    }
  }, [type]);

  useEffect(() => {
    onViewLoad();
  }, [type, onViewLoad]);

  const onFavoriteClick = (isFavorite, id) => {
    if (isFavorite) {
      setFavoritesIds((prev) => prev.filter((favorite) => favorite !== id));
    } else {
      setFavoritesIds((prev) => [...prev, id]);
    }
  };

  const renderContent = () => {
    if (loadingStatus === 'pending') {
      return (
        <div className={styles.loaderWrapper}>
          <SpinnerIcon />
        </div>
      );
    }

    if (loadingStatus === 'error') {
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

    if (loadingStatus === 'success' && content.length === 0) {
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
        <h2 className={styles.viewTitle}>{messages[type]}</h2>
        {renderContent()}
      </main>
    </Layout>
  );
};
