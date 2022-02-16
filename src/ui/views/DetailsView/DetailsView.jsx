import { useEffect, useState } from 'react';
import { NavLink, useParams } from 'react-router-dom';

import styles from './DetailsView.module.scss';

import { Api } from 'services/Api';

export const DetailsView = () => {
  const [content, setContent] = useState([]);

  let { id } = useParams();

  useEffect(() => {
    onPageLoad();
  }, []);

  const onPageLoad = async () => {
    try {
      const { data } = await Api.getResourcesById(id);
      setContent(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <>
      <section>
        <h1>Details</h1>
        <h2>{content.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: content.description }} />
      </section>
      <nav>
        <NavLink to='/'>Inicio</NavLink>
      </nav>
    </>
  );
};
