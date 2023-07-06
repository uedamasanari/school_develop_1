import React, { useState, useEffect } from 'react'
import styles from '@/styles/Login.module.css'
import MyHeader from "@/components/MyHeader";

function Login() {
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');

useEffect(() => {
  console.log('Email:', email);
  console.log('Password:', password);
}, [email, password]);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = () => {
    // ログイン処理をここに実装する
    console.log('ログインがクリックされました');
    console.log('Email:', email);
    console.log('Password:', password);
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