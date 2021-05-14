import React from "react";

import Link from "next/link";

import styles from "../../styles/BackButton.module.css";

const BackButton = () => {
  return (
    <div className={styles.button}>
      <Link href="/">
        <a>Back</a>
      </Link>
    </div>
  );
};

export default BackButton;
