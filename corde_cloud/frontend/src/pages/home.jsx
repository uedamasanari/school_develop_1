import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

const home = () => {
  
  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>
      <div className="container">
        <p className={styles.codeimg}>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
        </p>
      </div>

      <div className="container">
        <p className={styles.codeimg}>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
        </p>
      </div>
      

      <p className={styles.sns}>SNSのおすすめ</p>
      <div className="container">
        <p className={styles.codeimg}>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
        </p>
      </div>

      <div className="container">
        <p className={styles.codeimg}>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
          <img src="home/sample.jpeg" width="114" height="131"/>
        </p>
      </div>

    </div>
      
  );
}

export default home;