import React, { useState } from 'react';
import styles from '@/styles/Tag_registration.module.css';
import MyHeader from "@/components/MyHeader";




const Tag_registration = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tagName, setTagName] = useState('');
  const [tagColor, setTagColor] = useState('red');

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const handleTagNameChange = (e) => {
    setTagName(e.target.value);
  };

  const handleTagColorChange = (e) => {
    setTagColor(e.target.value);
  };

  const handleRegister = () => {
    // 登録処理を実行する
    // ここでtagNameとtagColorの値を使用する
  };

  return (
    <div>

<MyHeader title={"タグ登録"} />

      <button className={styles.button} onClick={openModal}>ボタン</button>

      {isModalOpen && (
        <div className={styles.modalBackdrop}>

          <div className={styles.modalContent}>

          <button className={`${styles.button} ${styles.closeButton}`} onClick={closeModal}>
              ×閉じる
            </button>


            <h2 className={styles.heading}>プレビュー</h2>

            <div className={styles.previewWrapper}>
            <div className={`${styles.previewBox} ${styles[tagColor]}`}>
              <p>#</p>{tagName}
            </div>
              <p className={styles.explanation}>＃は自動で生成されます。</p>
            </div>

            <h2 className={styles.heading}>タグの名前</h2>


            <input
              type="text"
              value={tagName}
              onChange={handleTagNameChange}
              className={styles.inputField}
            />


            <h2 className={styles.heading}>タグの色</h2>


            <select
              value={tagColor}
              onChange={handleTagColorChange}
              className={styles.selectField}
            >
              <option value="cFFA3FB">ピンク</option>
              <option value="cFFF493">黄色</option>
              <option value="cFFB763">オレンジ</option>
              <option value="cFF7676">朱色</option>
              <option value="c9397FF">青</option>
              <option value="c93FFFF">紫</option>
              <option value="cB3FF66">黄緑</option>
              <option value="c616161">緑</option>
            </select>


            <button className={`${styles.button} ${styles.registerButton}`} onClick={handleRegister}>
              登録
            </button>


          </div>
        </div>
      )}

      {isModalOpen && <div className={styles.overlay}></div>}
    </div>
  );
}

export default Tag_registration;