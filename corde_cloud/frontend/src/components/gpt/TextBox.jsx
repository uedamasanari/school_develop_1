import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/gpt/TextBox.module.css'
import UpLoad from "@/components/gpt/UpLoad.jsx";

const TextBox = () => {

  return (
    <div>
      <div className={styles.text_area}>
        <div className={styles.text_box}>
            <div className={styles.button_area}>
                <div className={styles.button}>
                </div>
                <div className={styles.button}>
                </div>
                <div className={styles.button}>
                </div>
            </div>
            <div className={styles.button_area}>
                <div className={styles.button}>
                </div>
                <div className={styles.button}>
                </div>
                <div className={styles.button}>
                </div>
            </div>
        </div>
      </div>
      
    </div>
  );
}

export default TextBox;
