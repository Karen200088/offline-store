import { FC } from 'react';
import { Link } from 'react-router-dom';

import styles from './CategoryItemCard.module.scss';

import { ICategoryItemCard } from '@/shared/config/CategoryItem.types';
import { useTheme } from '@/shared/lib/theme/ThemeContext';
import { truncateString } from '@/shared/utils/trucateString';

type CategoryItemCardProps = ICategoryItemCard;

const CategoryItemCard: FC<CategoryItemCardProps> = (props) => {
  const { theme } = useTheme();

  const shortTitle = truncateString(props.title, 30);
  const shortDescription = truncateString(props.description, 100);

  return (
    <div className={[styles.card, styles[theme]].join(' ')}>
      <Link to={props.id.toString()}>
        <img src={props.image} alt={props.title} className={styles.image} />
        <div className={styles.details}>
          <h2 className={styles.title}>{shortTitle}</h2>
          <p className={styles.description}>{shortDescription}</p>
          <p className={styles.price}>${props.price}</p>
          <div className={styles.rating}>
            Rating: {props.rating.rate} ({props.rating.count} Sold)
          </div>
        </div>
      </Link>
    </div>
  );
};

export default CategoryItemCard;
