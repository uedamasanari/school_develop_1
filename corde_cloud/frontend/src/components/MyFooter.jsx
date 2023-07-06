import React, { useState, useEffect } from 'react';
import styles from '@/styles/Footer.module.css';

const MyFooter = () => {
  return (
    <div className={styles.footer}>
      <div>
        <img src="Footer/home.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>ホーム</p>
      </div>
      <div>
        <img src="Footer/closet.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>クローゼット</p>
      </div>
      <div>
        <img src="Footer/item.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>アイテム登録</p>
      </div>
      <div>
        <img src="Footer/ai.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>AI</p>
      </div>
      <div>
        <img src="Footer/mypage.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>マイページ</p>
      </div>
    </div>
  );
};

export default MyFooter;
