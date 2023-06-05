import React, { useState, useEffect } from 'react'
import styles from '@/styles/Header.module.css'

const MyHeader = ({title}) => {

  return (
    <div className={styles.header}>
      <div className={styles.returnArea}>
        <div className={styles.returnButton}>
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
