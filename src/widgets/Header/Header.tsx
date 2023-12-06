import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { getCategories } from './api/api';
import styles from './Header.module.scss';

import { useTheme } from '@/shared/lib/theme/ThemeContext';
import ThemeSwitch from '@/feature/ThemeSwitch/ThemeSwitch';
import { RoutesEnum } from '@/shared/config/RouteTypes';

const Header: FC = () => {
  const { theme } = useTheme();
  const [isMenuOpen, setMenuOpen] = useState<boolean>(false);
  const [categories, setCategories] = useState<Array<string> | []>([]);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const getCategoriesHandler = async () => {
    try {
      const response = await getCategories();
      if (response) setCategories(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategoriesHandler();
  }, []);

  return (
    <header>
      <div className={[styles.header, styles[theme]].join(' ')}>
        <div className={styles.headerMain}>
          <ThemeSwitch />
          <Link to={'/'}>
            <h1>Offline Shop</h1>
          </Link>
          <button className={styles.burgerMenu} onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <nav className={`${styles.navList} ${isMenuOpen ? styles.showMenu : ''}`}>
          <ul>
            {categories &&
              categories.map((category) => (
                <li key={category} onClick={toggleMenu}>
                  <Link to={`${RoutesEnum.CATEGORIES_ROUTE}/${category}`}>{category}</Link>
                </li>
              ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
