import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [data, setData] = useState({
    name: "",
    comment: "",
    email: "",
    password: "",
  });

  const insertData = () => {
    axios
      .post("http://localhost:8000/insertData.php", data)
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <input
        type="text"
        placeholder="ユーザー名"
        value={data.name}
        onChange={(e) => setData({ ...data, name: e.target.value })}
      />
      <input
        type="text"
        placeholder="コメント"
        value={data.comment}
        onChange={(e) => setData({ ...data, comment: e.target.value })}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        value={data.email}
        onChange={(e) => setData({ ...data, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="パスワード"
        value={data.password}
        onChange={(e) => setData({ ...data, password: e.target.value })}
      />
      <button onClick={insertData}>登録</button>
    </>
  );
};

export default Registration;
