import React, { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'

const home = () =>{

  const squares = Array.from({length:3},(_,index) => index);
  
  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>
      <div className="container">
        {squares.map((index) => (
          <div key={index} className="square"></div>
        ))}
      </div>

      <p className={styles.sns}>SNSのおすすめ</p>
      <div className={styles.container}>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
      </div>
    </div>
  );
}

export default home;