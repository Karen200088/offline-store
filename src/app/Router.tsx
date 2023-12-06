import { FC, lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import MainLayout from './layouts/MainLayout';

import { Loading } from '@/shared/ui';
import { RoutesEnum } from '@/shared/config/RouteTypes';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const CategoryPage = lazy(() => import('../pages/CategoryPage/CategoryPage'));
const CategoryItemViewPage = lazy(() => import('../pages/CategoryItemViewPage/CategoryItemViewPage'));
const NotFound = lazy(() => import('../pages/NotFound/NotFound'));

const appRouter = createBrowserRouter([
  {
    element: <MainLayout />,
    children: [
      {
        path: RoutesEnum.HOME,
        element: <HomePage />,
      },
      {
        path: `${RoutesEnum.CATEGORIES_ROUTE}/:id`,
        element: <CategoryPage />,
      },
      {
        path: `${RoutesEnum.CATEGORIES_ITEM_VIEW}/:id`,
        element: <CategoryItemViewPage />,
      },
    ],
  },
  {
    path: '*',
    element: <NotFound />,
  },
]);

const Router: FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={appRouter} />
    </Suspense>
  );
};

export default Router;
