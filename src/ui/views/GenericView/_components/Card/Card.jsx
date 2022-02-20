import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import styles from './Card.module.scss';

import { config } from 'conf';

import { HeartIcon } from 'assets/icons/HeartIcon';

export const Card = ({
  description,
  favoritesIds,
  id,
  image,
  onFavoriteClick,
  title,
}) => {
  const navigate = useNavigate();

  const [isFavorite, setIsFavorite] = useState(false);

  const { paths, messages } = config;

  useEffect(() => {
    setIsFavorite(favoritesIds.includes(id));
  }, [favoritesIds, id]);

  const onSelect = () => {
    navigate(`/${paths.RESOURCES}/${id}`);
  };

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.cardContent} onClick={onSelect}>
        <img
          src={image}
          alt='here goes the description'
          className={styles.image}
        />
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.description}>{description}</p>
      </div>

      <span
        className={`${styles.favorite} ${isFavorite ? styles.active : ''}`}
        onClick={() => onFavoriteClick(isFavorite, id)}
      >
        <HeartIcon isActive={isFavorite} />
        {messages.favorite}
      </span>
    </div>
  );
};
