import styles from './style.module.scss';

interface CardInformationProps {
  value?: number;
  label?: string;
}

export function CardInformation({ label, value }: CardInformationProps) {
  return (
    <article className={styles.container}>
      <strong>{value}</strong>
      <span>{label}</span>
    </article>
  );
}
