import React, { useState } from "react";
import axios from "axios";
const Registration = () => {
  const [email, setMail] = useState();
  const [password, setPass] = useState();
  const [loginStatus, setLoginStatus] = useState();
  const Login =() =>{
    console.log(email,password)
    axios
    .post("http://localhost:8000/api/login.php",{
      email: email,
      password: password
    })
    .then((response) => {
      console.log(response);
      setLoginStatus(response.data.message);
    })
    .catch((error) => {
      console.log(error);
      setLoginStatus("Error occurred");
    });
  };
  return(
    <div>
      {/* ログインステータスに応じたメッセージを表示 */}
      {loginStatus && <p>{loginStatus}</p>}
      <input
        type="text"
        placeholder="メールアドレス"
        name="mail_address"
        onChange={(e)=>setMail(e.target.value)}
        />
        <input
          type="password"
          placeholder="パスワード"
          name="password"
        onChange={(e)=>setPass(e.target.value)}
      />
      <button onClick={Login}>ログイン</button>
    </div>
  );
};
export default Registration;
