import React, { useState,useEffect } from "react";
import axios from "axios";
const Registration = () => {
  useEffect(() => {
    const user_id = window.localStorage.getItem("user_id");
  }, []);
  const user_id = window.localStorage.getItem("user_item");
  const [item_name,setName] = useState();
  const [detail,setDetail] = useState();
  const [image, setImage] = useState(null);
  const handleImageChange = (e)=>{
    if(e.target.files && e.target.files[0]){
      setImage(e.target.files[0])
    }
  }
  const insert =async (event) =>{
    event.preventDefault();
    const formData = new FormData();
    formData.append('image',image);

    axios
    .post("http://localhost:8000/api/Insert.php",formData,{
      headers: {
        'Content-Type':'multipart/form-data',
      }
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    });
  };
  return(
    <form onSubmit={insert}>
      <input
        type="text"
        placeholder="アイテム名"
        name="detail"
        onChange={(e)=>setDetail(e.target.value)}
        />
        <input
        type="text"
        placeholder="アイテム詳細"
        name="detail"
        onChange={(e)=>setDetail(e.target.value)}
        />
        <input type="file" accept="image/*" onChange={handleImageChange}/>
      <button type="submit">登録</button>
      </form>
  );
};
export default Registration;
