import { useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import styles from './GenericView.module.scss';

import { Api } from 'services/Api';
import { config } from 'conf';

export const GenericView = ({ type }) => {
  const [content, setContent] = useState([]);

  let navigate = useNavigate();

  const { messages, paths } = config;

  useEffect(() => {
    onViewLoad();
  }, []);

  const onViewLoad = async () => {
    try {
      const { data } = await Api.getContentByPageType(type);
      setContent(data);
    } catch (error) {
      console.log('error', error);
    }
  };

  const onSelect = (id) => {
    navigate(`/${paths.RESOURCES}/${id}`);
  };

  return (
    <>
      <section>
        <h2>{messages[type]}</h2>

        {content.map((section) => (
          <div key={section.sectionTitle}>
            <h3>{section.sectionName}</h3>
            {section.resources.map((resource) => (
              <div
                onClick={() => onSelect(resource.id)}
                key={`${section.sectionName}_${section.image}_${resource.id}`}
              >
                <p>{resource.title}</p>
                <img src={resource.image} alt='' srcSet='' />
              </div>
            ))}
          </div>
        ))}
      </section>

      <nav>
        <NavLink to='/'>Inicio</NavLink>
      </nav>
    </>
  );
};
