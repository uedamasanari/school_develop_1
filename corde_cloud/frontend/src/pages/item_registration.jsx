import React, { useState } from 'react';
import styles from '@/styles/Item_registration.module.css'
import MyHeader from "@/components/MyHeader";


const Item_registration = () => {
  const [itemName, setItemName] = useState('');
  const [selectedFile, setSelectedFile] = useState(null);
  const [itemDescription, setItemDescription] = useState('');

  const handleItemNameChange = (event) => {
    setItemName(event.target.value);
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
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




        <div>
      <label className={styles.fileLabel}>
        <input type="file" onChange={handleFileChange} className={styles.fileInput} />
        画像を選択
      </label>
      {selectedFile && (
        <div className={styles.imageContainer}>
          <img src={URL.createObjectURL(selectedFile)} alt="選択されたファイル" />
        </div>
      )}
    </div>






        <div className={styles.form_group}>
          {/* 詳細 */}
          <input type="text" value={itemDescription} onChange={handleDescriptionChange} className={styles.item_info} half placeholder="アイテム詳細"/>
        </div>


        <div className={styles.button_group}>
          <button type="submit" className={`${styles.button} ${styles.center_button}`}>登録</button>
        </div>


      </form>
    </div>
  );
};


export default Item_registration;
