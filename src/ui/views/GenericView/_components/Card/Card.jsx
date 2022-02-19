import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

import { config } from 'conf';

import { HeartIcon } from 'assets/icons/HeartIcon';

export const Card = ({ id, title, image, description }) => {
  const navigate = useNavigate();

  const { paths, messages } = config;

  const onSelect = (id) => {
    navigate(`/${paths.RESOURCES}/${id}`);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent} onClick={() => onSelect(id)}>
        <img
          src={image}
          alt='here goes the description'
          className={styles.image}
        />
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>

      <span className={`${styles.favorite} ${true ? styles.active : ''}`}>
        <HeartIcon isActive={true} />
        {messages.favorite}
      </span>
    </div>
  );
};
