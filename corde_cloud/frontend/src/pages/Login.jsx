import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '@/styles/Login.module.css'
import MyHeader from "@/components/MyHeader";

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // ログイン処理をここに実装する
    axios
    .post("http://kyuuri.daa.jp/Web/corde_cloud/login.php", {
        email: email,
        password: password,
      },
      {
        headers: {
          "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        if(response.data.status){
          localStorage.setItem('user_id', response.data.user_id);
          window.location.href = '/home';
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = () => {
    // 新規登録処理をここに実装する
    console.log('新規登録がクリックされました');
  };

  return (
    
    <div className={styles.container}>
      <MyHeader title={"ログイン"} />
      <img src="Icon/Icon.png" alt="" className={styles.icon} />
      <div className={styles.shape}>
      <input className={styles.input} type="text" value={email} onChange={handleEmailChange} placeholder="Mailaddress" />
      <br />
      <input className={styles.inputpass} type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <br />
      <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleLogin}>ログイン</button>
      <button className={styles.buttoninsert} onClick={handleSignUp}>新規登録</button>
      </div>
    </div>
  </div>
  );
}

export default Login;