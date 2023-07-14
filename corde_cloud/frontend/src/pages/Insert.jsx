import React, { useState, useEffect } from 'react'
import styles from "@/styles/gpt/Insert.module.css"
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
    // 新規登録処理をここに実装する
    console.log('新規登録がクリックされました');
    console.log('Username:', username);
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Passwordcheck:', passwordcheck);
  };

  const handleSignUp = () => {
    // ログイン機能移動処理をここに実装する
    console.log('ログインがクリックされました');
  };

  return (
    
    <div className={styles.container}>
      <MyHeader title={"新規登録"} />
      <img src="Icon/Icon.png" alt="" className={styles.icon} />
      <div className={styles.shape}>
      <input className={styles.input} type="text" value={email} onChange={handleEmailChange} placeholder="Username" />
      <br />
      <input className={styles.input} type="text" value={email} onChange={handleEmailChange} placeholder="Mailaddress" />
      <br />
      <input className={styles.inputpass} type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <br />
      <input className={styles.inputpass} type="password" value={password} onChange={handlePasswordChange} placeholder="Password" />
      <br />
      <div className={styles.buttonContainer}>
      <button className={styles.button} onClick={handleLogin}>新規登録</button>
      <button className={styles.buttoninsert} onClick={handleSignUp}>ログインへ</button>
      </div>
    </div>
  </div>
  );
}

export default Login;