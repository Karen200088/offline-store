import { FC } from 'react';
import { Outlet } from 'react-router-dom';

import styles from './MainLayout.module.scss';

import { useTheme } from '@/shared/lib/theme/ThemeContext';
import Header from '@/widgets/Header/Header';

const MainLayout: FC = () => {
  const { theme } = useTheme();

  return (
    <div className={[styles.mainLayout, styles[theme]].join(' ')}>
      <div className={styles.wrapper}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
