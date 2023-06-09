import React, { useState } from 'react';
import styles from '@/styles/Item_registration.module.css'
import MyHeader from "@/components/MyHeader";


const Item_registration = () => {
  const [itemName, setItemName] = useState('');
  const [itemImage, setItemImage] = useState(null);
  const [selectedTag, setSelectedTag] = useState('');
  const [itemDescription, setItemDescription] = useState('');

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleItemImageChange = (event) => {
    const file = event.target.files[0];
    setItemImage(URL.createObjectURL(file));
  };

  const handleTagChange = (event) => {
    setSelectedTag(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setItemDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // 送信処理を行う関数を実装する

    // フォームの値を初期化する
    setItemName('');
    setItemImage(null);
    setSelectedTag('');
    setItemDescription('');
  };

  return (

    <div className={styles.container}>
            <MyHeader title={"プロフィール"} />
      <form onSubmit={handleSubmit}>

        
        <div className={styles.form_group_name}>
          {/* アイテム名 */}
          <input type="text" value={itemName} onChange={handleItemNameChange} className={styles.form_name} half placeholder="アイテム名"/>
        </div>


        <div className={styles.form_group_image}>
          {/* アイテム画 */}


            <input type="file" accept="image/*" onChange={handleItemImageChange} className={styles.image_tab} />

          {itemImage && <img src={itemImage} alt="アイテム画像" className={styles.image_preview} />}
        </div>


        <div className={styles.form_group_tag}>
          <label>タグ</label>
          <select  multiple={true} value={selectedTag} onChange={handleTagChange}>
            <option value="">タグを選択してください</option>
            <option value="tag1">タグ1</option>
            <option value="tag2">タグ2</option>
            <option value="tag3">タグ3</option>
          </select>
        </div>


        <button className={styles.add_button}>#追加</button>


        <div className={styles.form_group}>
          {/* 詳細 */}
          <input textarea value={itemDescription} onChange={handleDescriptionChange} className={styles.item_info} half placeholder="アイテム詳細"/>
        </div>


        <div className={styles.button_group}>
          <button type="submit" className={`${styles.button} ${styles.center_button}`}>登録</button>
        </div>


      </form>
    </div>
  );
};


export default Item_registration;
