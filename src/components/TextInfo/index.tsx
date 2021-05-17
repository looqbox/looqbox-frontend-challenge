import React from 'react';
import styles from './styles.module.css';

interface IProps {
  title: string;
  text: string | number;
}
const TextInfo: React.FC<IProps> = ({ title, text }) => (
  <h2 className={styles.title}>
    {title}
    <span>{text}</span>
  </h2>
);

export default TextInfo;
