import { FC } from 'react';

import styles from './ThemeSwitch.module.scss';

import { useTheme } from '@/shared/lib/theme/ThemeContext';

const ThemeSwitch: FC = () => {
  const { theme, toggleTheme } = useTheme();
  return (
    <div className={styles.themeSwitch}>
      <span className={[styles.themeName, styles[theme]].join(' ')}>{theme} </span>
      <label className={styles.switch}>
        <input type="checkbox" checked={theme === 'dark'} onChange={toggleTheme} />
        <span className={styles.slider}></span>
      </label>
    </div>
  );
};

export default ThemeSwitch;
