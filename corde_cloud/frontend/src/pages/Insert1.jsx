import React, { useState } from "react";
import styles from "@/styles/gpt/Insert.module.css"
import axios from "axios";
import MyHeader from "@/components/MyHeader";

const Registration = () => {
  const [data, setData] = useState({
    user_name: "",
    comment: "",
    mail_address: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const insertData = () => {
    axios
      .post("http://localhost:8000/Insert.php", data)
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  //<MyHeader title={"新規登録"} />  一番上の新規登録のバナー
  //import MyHeader from "@/components/MyHeader"; 新規登録のバナーを実装するときに必要なインポート

  //<img src="Icon/Icon.png" alt="" className={styles.icon}/>　Iconの実装

  //<div className={styles.shape}>　真ん中の四角を実装。

  //それぞれに　className={styles.(CSSのクラス)}　を実装

  

  return (
    <div>
      <MyHeader title={"新規登録"} /> 
      <img src="Icon/Icon.png" alt="" className={styles.icon}/>
      <form action="Insert.php" method="POST">
      <div className={styles.shape}>
      <input
        className={styles.input}
        type="text"
        placeholder="ユーザー名"
        name="user_name"
        value={data.user_name}
        onChange={handleChange}
      />
      <input
      className={styles.input}
        type="text"
        placeholder="コメント"
        name="user_coment"
        value={data.user_coment}
        onChange={handleChange}
      />
      <input
      className={styles.input}
        type="email"
        placeholder="メールアドレス"
        name="mail_address"
        value={data.mail_address}
        onChange={handleChange}
      />
      <input
      className={styles.input}
        type="password"
        placeholder="パスワード"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button className={styles.button} onClick={insertData}>登録</button>
      </div>
    </form>
    </div>
  );
};

export default Registration;
