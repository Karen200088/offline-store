import { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styles from './Breadcrumb.module.scss';

import { useTheme } from '@/shared/lib/theme/ThemeContext';

const Breadcrumb: FC = () => {
  const location = useLocation();
  const { theme } = useTheme();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <nav className={[styles.breadcrumb, styles[theme]].join(' ')}>
      <ul>
        {pathnames.map((pathname, index) => (
          <li key={index}>
            {index !== 0 ? (
              <Link to={`/${pathnames.slice(0, index + 1).join('/')}`} className={styles.link}>
                {decodeURIComponent(pathname)}
              </Link>
            ) : (
              decodeURIComponent(pathname)
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Breadcrumb;
