import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = () => {
  const [name, setName] = useState();
  const [pass, setPass] = useState();
  const [comment, setComment] = useState();
  const [mail, setMail] = useState();
  const insertData = () => {
    console.log(name,pass,comment,mail)
    axios
    .post("http://localhost:8000/api/Insert.php", {
        user_name: name,
        comment: comment,
        mail_address: mail,
        password: pass
      })
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
        onChange={(e)=>setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="コメント"
          name="user_comment"
        onChange={(e)=>setComment(e.target.value)}
      />
      <input
        type="email"
        placeholder="メールアドレス"
        name="mail_address"
        onChange={(e)=>setMail(e.target.value)}
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
