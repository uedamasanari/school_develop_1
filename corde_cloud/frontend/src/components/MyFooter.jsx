import React, { useState, useEffect } from 'react';
import styles from '@/styles/Footer.module.css';

const MyFooter = () => {
  const homeClick = () => {
    location.href = "/home";
  };
  const closetClick = () => {
    location.href = "/bookmark";
  };
  const itemClick = () => {
    location.href = "/item_registration";
  };
  const AIClick = () => {
    location.href = "/gpt";
  };
  const mypageClick = () => {
    location.href = "/mypage";
  };
  return (
    <div className={styles.footer}>
      <div onClick={homeClick}>
        <img src="Footer/home.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>ホーム</p>
      </div>
      <div onClick={closetClick}>
        <img src="Footer/closet.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>クローゼット</p>
      </div>
      <div onClick={itemClick}>
        <img src="Footer/item.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>アイテム登録</p>
      </div>
      <div onClick={AIClick}>
        <img src="Footer/ai.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>AI</p>
      </div>
      <div onClick={mypageClick}>
        <img src="Footer/mypage.svg" className={styles.img} alt="post-image" />
        <p className={styles.text}>マイページ</p>
      </div>
    </div>
  );
};

export default MyFooter;
