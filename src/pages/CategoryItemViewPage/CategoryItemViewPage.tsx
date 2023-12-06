import { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import styles from './CategoryItemViewPage.module.scss';
import { getOneProduct } from './api/api';

import Breadcrumb from '@/feature/Breadcrumb/Breadcrumb';
import { ICategoryItemCard } from '@/shared/config/CategoryItem.types';
import { Loading } from '@/shared/ui';
import { useTheme } from '@/shared/lib/theme/ThemeContext';

const CategoryItemViewPage: FC = () => {
  const { id } = useParams();
  const { theme } = useTheme();
  const [productData, setProductData] = useState<ICategoryItemCard | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const getCategoryItemsHandler = async () => {
    try {
      setLoading(true);
      if (id) {
        const response = await getOneProduct(id);
        if (response) setProductData(response);
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
  if (!productData) return <div>No Product</div>;

  return (
    <>
      <Breadcrumb />
      <div className={[styles.product, styles[theme]].join(' ')}>
        <img src={productData.image} alt={productData.title} className={styles.productImage} />
        <div className={styles.productDetails}>
          <h2>{productData.title}</h2>
          <p className={styles.description}>{productData.description}</p>
          <p className={styles.category}>Category: {productData.category}</p>
          <div className={styles.rating}>
            <p className={styles.price}>${productData.price}</p>
            Rating: {productData.rating.rate} ({productData.rating.count} Sold)
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryItemViewPage;
