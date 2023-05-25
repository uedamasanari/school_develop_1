import React, { useState, useEffect } from 'react';
import styles from '@/styles/Home.module.css';

const home = () => {
  
  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>
      <div className="container">
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
      </div>
      <div className="container">
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
      </div>
      

      <p className={styles.sns}>SNSのおすすめ</p>
      <div className="container">
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
      </div>
      <div className="container">
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
        <img src="home/home.jpeg" width="114" height="131"/>
      </div>

    </div>
      
  );
}

export default home;