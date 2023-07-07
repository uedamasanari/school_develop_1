import React, { useState } from "react";
import axios from "axios";

const Registration = () => {
  const [data, setData] = useState({
    user_name: "",
    user_coment: "",
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
  

  return (
    <div>
      <input
        type="text"
        placeholder="ユーザー名"
        name="user_name"
        value={data.user_name}
        onChange={handleChange}
      />
      <input
        type="text"
        placeholder="コメント"
        name="user_coment"
        value={data.user_coment}
        onChange={handleChange}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        name="mail_address"
        value={data.mail_address}
        onChange={handleChange}
      />
      <input
        type="password"
        placeholder="パスワード"
        name="password"
        value={data.password}
        onChange={handleChange}
      />
      <button onClick={insertData}>登録</button>
    </div>
  );
};

export default Registration;
