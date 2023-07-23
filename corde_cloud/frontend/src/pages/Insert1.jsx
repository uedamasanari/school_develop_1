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
    .post("https://localhost:8000/api/Insert.php", {
        user_name: name,
        comment: comment,
        mail_address: mail,
        password: pass
      },
      {
        headers: {
          "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getCloset = () => {
    axios
    .post("http://localhost:8000/api/Allcloset.php",{
      user_id:1,
    })
    .then((response) => {
      console.log(response.data);
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
        value={pass}
        onChange={(e)=>setPass(e.target.value)}
      />
      <button onClick={insertData}>登録</button>
      <button onClick={getCloset}>クローゼット取得</button>
    </div>
  );
};

export default Registration;
