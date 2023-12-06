import { FC } from 'react';

import styles from './Loading.module.scss';

export const Loading: FC = () => {
  return (
    <div className={styles.loader}>
      <div className={styles.spinner}></div>
    </div>
  );
};
