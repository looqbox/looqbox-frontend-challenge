import styles from './style.module.scss';
import globalStyles from '../../styles/global.module.scss';

export function Loading() {
  return (
    <div className={globalStyles.min100vh}>
      <div className={styles.container}>
        <img
          src="/images/pokemon/outline_pokeball.svg"
          alt="outline pokeball"
        />
        <img
          src="/images/pokemon/outline_pokeball.svg"
          alt="outline pokeball"
        />
        <img
          src="/images/pokemon/outline_pokeball.svg"
          alt="outline pokeball"
        />
        <img
          src="/images/pokemon/outline_pokeball.svg"
          alt="outline pokeball"
        />
        <img
          src="/images/pokemon/outline_pokeball.svg"
          alt="outline pokeball"
        />
      </div>
    </div>
  );
}
