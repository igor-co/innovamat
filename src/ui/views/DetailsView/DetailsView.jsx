import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './DetailsView.module.scss';

import { config } from 'conf';

import { Layout } from 'ui/_components/Layout';
import { PdfViewer } from 'ui/_components/PdfViewer';
import { SpinnerIcon } from 'assets/icons/SpinnerIcon';

import { Api } from 'services/Api';

export const DetailsView = () => {
  const [{ status, error, content }, setState] = useState({
    status: 'idle',
    error: null,
    content: [],
  });

  const { id } = useParams();

  const { messages } = config;

  const onViewLoad = useCallback(async () => {
    setState((prev) => ({ ...prev, status: 'pending' }));
    try {
      const { data } = await Api.getResourcesById(id);

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
  }, [id]);

  useEffect(() => {
    onViewLoad();
  }, [id, onViewLoad]);

  const renderFileByType = () => {
    switch (content.type) {
      case 'pdf':
        // activateControlls pass false to disable controlls, controll are useful for smaller screens
        return <PdfViewer url={content.file} activateControlls />;

      //case:'any_type' return <ViewerByType/> Here we can add more file cases for different types
      default:
        return (
          <a href={content.file} className={styles.downloadLink}>
            {messages['downloadFile']}
          </a>
        );
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

    return (
      <>
        <div dangerouslySetInnerHTML={{ __html: content.description }} />
        <div className={styles.fileWrapper}>{renderFileByType()}</div>
      </>
    );
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
