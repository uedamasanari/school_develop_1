import React, { useState } from 'react';
import styles from '@/styles/Item_registration.module.css'

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
      <h1>アイテム送信フォーム</h1>
      <form onSubmit={handleSubmit}>
        <div className={styles['form-group']}>
          <label>アイテム名:</label>
          <input type="text" value={itemName} onChange={handleItemNameChange} />
        </div>
        <div className={styles['form-group']}>
          <label>アイテム画像:</label>
          <input type="file" accept="image/*" onChange={handleItemImageChange} />
          {itemImage && <img src={itemImage} alt="アイテム画像" className={styles['image-preview']} />}
        </div>
        <div className={styles['form-group']}>
          <label>タグ:</label>
          <select value={selectedTag} onChange={handleTagChange}>
            <option value="">タグを選択してください</option>
            <option value="tag1">タグ1</option>
            <option value="tag2">タグ2</option>
            <option value="tag3">タグ3</option>
          </select>
        </div>
        <div className={styles['form-group']}>
          <label>詳細:</label>
          <textarea value={itemDescription} onChange={handleDescriptionChange} />
        </div>
        <div className={styles['button-group']}>
          <button type="submit">#追加</button>
        </div>
      </form>
      <div className={styles['button-group']}>
        <button onClick={handleSubmit} className={styles.button}>登録</button>
      </div>
    </div>
  );
};


export default Item_registration;
