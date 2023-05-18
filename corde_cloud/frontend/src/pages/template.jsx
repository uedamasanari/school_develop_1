import React, { useState, useEffect } from 'react'
import styles from '@/styles/template.module.css'

const template = () => {
    const [message, setMessage] = useState('');
    const [hp,setHp] = useState(100);

    const alertfunk = () => {
        alert("あなたが入力しているメッセージは"+message+"です。")
    }

    const atackfunk = () => {
        setHp(hp-5)
    }

    useEffect(() => {
        if(hp % 10 == 0 && hp != 100){
            alert("敵のHPは10で割り切れます。")
        }
    },[hp])

  return (
    <div>
        <p className={styles.text}>{message}</p>
        <input type='text' className={styles.message} value={message} onChange={e => setMessage(e.target.value)} />
        <button className={styles.button} onClick={alertfunk}>アラートを表示</button>

        <p className={styles.hp}>HP:{hp}</p>
        <button className={styles.button} onClick={atackfunk}>攻撃</button>

        <img src='gpt/next.svg' />
    </div>
  );
}

export default template;
