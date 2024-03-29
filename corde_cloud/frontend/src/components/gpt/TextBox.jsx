import React, { useState } from 'react';
import axios from 'axios';
import styles from '@/styles/gpt/TextBox.module.css'
import UpLoad from "@/components/gpt/UpLoad.jsx";

const TextBox = ({setText}) => {

  const [input, setInput] = useState(true);

  return (
    <div>
      <div className={styles.text_area}>
        <div className={styles.text_box}>
          <textarea className={styles.textarea} onChange={(e)=>(setText(e.target.value))}/>
            {/* <div className={styles.button_area}>
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
            </div> */}
        </div>
      </div>
    </div>
  );
}

export default TextBox;
