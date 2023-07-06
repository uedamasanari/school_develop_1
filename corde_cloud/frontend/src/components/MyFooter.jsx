import React, { useState, useEffect } from 'react'
import styles from '@/styles/Footer.module.css'

const MyFooter = () => {

  return (
    <div className={styles.footer}  style={{ display: 'flex', justifyContent: 'space-between' }}>
      <img src="Footer/home.svg" className={styles.img} alt="post-image"></img>
      <img src="Footer/closet.svg" className={styles.img} alt="post-image"></img>
      <img src="Footer/item.svg" className={styles.img} alt="post-image"></img>
      <img src="Footer/ai.svg" className={styles.img} alt="post-image"></img>
      <img src="Footer/mypage.svg" className={styles.img} alt="post-image"></img>
    </div>
  );
}

export default MyFooter;
