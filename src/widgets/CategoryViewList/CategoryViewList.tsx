import { FC, Fragment, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import CategoryItemCard from '../CategoryItemCard/CategoryItemCard';

import { getCategoryItems } from './api/api';
import styles from './CategoryViewList.module.scss';

import { ICategoryItemCard } from '@/shared/config/CategoryItem.types';
import { Loading } from '@/shared/ui';
import { useTheme } from '@/shared/lib/theme/ThemeContext';

const CategoryViewList: FC = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const [categoryData, setCategoryData] = useState<ICategoryItemCard[] | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategoryItemsHandler = async () => {
    try {
      setLoading(true);
      if (id) {
        const response = await getCategoryItems(id);
        if (response) setCategoryData(response);
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoryItemsHandler();
  }, [id]);

  if (loading) return <Loading />;
  if (!categoryData) return <div>No Data</div>;

  return (
    <div className={[styles.cardList, styles[theme]].join(' ')}>
      {categoryData &&
        categoryData.map((categoryItem) => (
          <Fragment key={categoryItem.id}>
            <CategoryItemCard
              id={categoryItem.id}
              title={categoryItem.title}
              price={categoryItem.price}
              description={categoryItem.description}
              category={categoryItem.category}
              image={categoryItem.image}
              rating={categoryItem.rating}
            />
          </Fragment>
        ))}
    </div>
  );
};

export default CategoryViewList;
