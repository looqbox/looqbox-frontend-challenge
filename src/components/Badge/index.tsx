import React from "react";

import styles from "../../styles/Badge.module.css";

const Badge = ({ type }) => {
  return <span style={{backgroundColor: `var(--tag_${type})`}} className={`${styles.badge} badge-${type}`}>{`${type}`}</span>
};

export default Badge;
