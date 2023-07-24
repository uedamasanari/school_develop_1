import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '@/styles/ItemDetail.module.css'
import MyHeader from '@/components/MyHeader'

export default function Home() {
  const [item_id, setItemId] = useState(1)
  const [item_name, setItemName] = useState("")
  const [detail, setDetail] = useState("")
  const [picture_path, setPicturePath] = useState("")

  useEffect(() => {
    axios
    .post("http://localhost:8000/api/Allcloset.php",{user_id:1})
    .then((response) => {
      setItemId(response.data.data[0].item_id);
      setItemName(response.data.data[0].item_name);
      setDetail(response.data.data[0].detail);
      setPicturePath(response.data.data[0].picture_path);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  return (
    <div>
      <MyHeader title={"クローゼット"} />
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '20px'}}>
        <div key="item.id">
        <img
          src={picture_path}
          alt={`Image ${item_id}`}
          style={{width:'318px' , height:'224px'}}
        />
        </div>
      </div>

        <p className={styles.itemname}>{item_name}</p>
        <div className={styles.box}><p className={styles.detail}>{detail}</p></div>
        
    </div>
    
  )
}
