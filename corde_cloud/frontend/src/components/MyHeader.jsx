import React, { useState, useEffect } from 'react'
import styles from '@/styles/Header.module.css'

const MyHeader = ({title}) => {
  const backClick = () => {
    window.history.back();
  };
  return (
    <div className={styles.header}>
      <div className={styles.returnArea}>
        <div className={styles.returnButton} onClick={backClick}>
          戻る
        </div>
        <div className={styles.title}>
          {title}
        </div>
        <div> </div>
      </div>
    </div>
  );
}

export default MyHeader;
