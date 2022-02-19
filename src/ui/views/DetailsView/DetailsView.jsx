import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './DetailsView.module.scss';

import { config } from 'conf';

import { Layout } from 'ui/_components/Layout';
import { SpinnerIcon } from 'assets/icons/SpinnerIcon';

import { Api } from 'services/Api';

export const DetailsView = () => {
  const [content, setContent] = useState([]);
  const [error, setError] = useState({ status: null, message: null });
  const [loadingStatus, setLoadingStatus] = useState('idle');

  const { id } = useParams();

  const { messages } = config;

  const onViewLoad = useCallback(async () => {
    setLoadingStatus('pending');
    try {
      const { data } = await Api.getResourcesById(id);
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
  }, [id]);

  useEffect(() => {
    onViewLoad();
  }, [id, onViewLoad]);

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

    return <div dangerouslySetInnerHTML={{ __html: content.description }} />;
  };

  return (
    <Layout>
      <main>
        <h2 className={styles.viewTitle}>{content.title}</h2>
        {renderContent()}
      </main>
    </Layout>
  );
};
