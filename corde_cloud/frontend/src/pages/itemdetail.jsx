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
    const localStorageItemId = localStorage.getItem('item_id'); // LocalStorageからitem_idを取得します

    axios
    .post("https://kyuuri.daa.jp/Web/corde_cloud/Allcloset.php",{user_id:localStorage.getItem('user_id')})
    .then((response) => {
      // レスポンスの中でLocalStorageのitem_idと一致するものを見つけます
      const matchedItem = response.data.data.find(item => item.item_id.toString() === localStorageItemId);

      // 一致するものがあった場合には、そのアイテムの詳細をセットします
      if (matchedItem) {
        setItemId(matchedItem.item_id);
        setItemName(matchedItem.item_name);
        setDetail(matchedItem.detail);
        setPicturePath(matchedItem.picture_path);
      }
    })
    .catch((error) => {
      console.log(error);
    });
  }, []);

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
