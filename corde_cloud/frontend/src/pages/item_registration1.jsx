import React, { useState } from "react";
import axios from "axios";
const Registration = () => {
  useEffect(() => {
    const user_id = localStorage.getItem("user_id");
  }, []);
  const user_id = localStorage.getItem("user_item");
  const [path, setpath] = useState();
  const [item_name,setName] = useState();
  const [loginStatus, setLoginStatus] = useState();
  const [detail,setDetail] = useState();
  const Login =() =>{
    console.log(item_name,detail,user_id)
    axios
    .post("http://localhost:8000/api/Insert.php",{
      item_name: item_name,
      detail: detail,
      user_id: user_id
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return(
    <div>
      <input
        type="text"
        placeholder="洋服詳細"
        name="detail"
        onChange={(e)=>setDetail(e.target.value)}
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
