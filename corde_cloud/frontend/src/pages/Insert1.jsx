import React, { useState, useEffect } from 'react'
import styles from '@/styles/Insert.module.css'
import MyHeader from "@/components/MyHeader";
import React from "react";
import { useState } from "react";
import axios from "axios";

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
    
    <div className="container">
      <MyHeader title={"新規登録"} />
      <h1 className="icon">アイコン</h1>
      <input className="input" type="text" value={email} onChange={handleEmailChange} placeholder="メールアドレス" />
      <br />
      <input className="input" type="password" value={password} onChange={handlePasswordChange} placeholder="パスワード" />
      <br />
      <button className="button" onClick={handleLogin}>登録</button>
      <button className="button" onClick={handleSignUp}>ログイン</button>
    </div>
  );
}

export default Login;