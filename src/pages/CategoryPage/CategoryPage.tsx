import { FC } from 'react';

import CategoryViewList from '@/widgets/CategoryViewList/CategoryViewList';
import Breadcrumb from '@/feature/Breadcrumb/Breadcrumb';

const CategoryPage: FC = () => {
  return (
    <>
      <Breadcrumb />
      <CategoryViewList />
    </>
  );
};

export default CategoryPage;
