import React, { useState, useEffect } from 'react'
import axios from "axios";
import styles from "@/styles/gpt/Insert.module.css"
import MyHeader from "@/components/MyHeader";

function Login() {
const [user_name, setUser_name] = useState('');
const [mail_address, setMail_address] = useState('');
const [password, setPassword] = useState('');

  const handleLogin = () => {
    // 新規登録処理をここに実装する
    axios
    .post("http://kyuuri.daa.jp/Web/corde_cloud/Insert.php", {
        user_name: user_name,
        mail_address: mail_address,
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
        if(response.data.success){
          localStorage.setItem('user_id', response.data.user_id);
        }else if(response.data.already){
          alert("このメールアドレスは既に登録されています。ログイン画面からログインしてください");
        }else if(response.data.success == false){
          alert("なんらかのエラーが発生しました");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleSignUp = () => {
    // ログイン機能移動処理をここに実装する
    console.log('ログインがクリックされました');
    window.location.href = '/index';
  };

  return (
    
    <div className={styles.container}>
      <MyHeader title={"新規登録"} />
      <img src="Icon/Icon.png" alt="" className={styles.icon} />
      <div className={styles.shape}>
      <input className={styles.input} type="text" value={user_name} onChange={(e)=>(setUser_name(e.target.value))} placeholder="Username" />
      <br />
      <input className={styles.input} type="text" value={mail_address} onChange={(e)=>(setMail_address(e.target.value))} placeholder="Mailaddress" />
      <br />
      <input className={styles.inputpass} type="password" value={password} onChange={(e)=>(setPassword(e.target.value))} placeholder="Password" />
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