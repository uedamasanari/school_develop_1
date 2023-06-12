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
    
    <div className="container">
      <MyHeader title={"ログイン"} />
      <h1 className="icon">アイコン</h1>
      <input className="input" type="text" value={email} onChange={handleEmailChange} placeholder="メールアドレス" />
      <br />
      <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="パスワード" />
      <br />
      <button className="button" onClick={handleLogin}>ログイン</button>
      <button className="button" onClick={handleSignUp}>新規登録</button>
    </div>
  );
}

export default Login;