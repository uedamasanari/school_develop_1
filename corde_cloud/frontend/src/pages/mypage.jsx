import React, { useState } from 'react';
import styles from '@/styles/Mypage.module.css'






  {/*ユーザー写真*/}
  const mypage = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggleExpand = () => {
      setExpanded(!expanded);
    };


  const insertLineBreaks = (text, maxCharacters) => {
    const regex = new RegExp(`(.{1,${maxCharacters}})(\\s+|$)`, 'g');
    return text.replace(regex, '$1\n');
      };


  return (
    <div>
      <div className={styles.user_Profile}>

        {/*ユーザー写真*/}
        <div className={styles.image_container}>
          <img className={styles.picture_human_svc} src='setting/picture_human.svg'/>
        </div>

        <div>
          {/* ユーザー名 */}
          <p className={styles.user_name}>ユーザー名</p>

          {/* メールアドレス */}
          <p className={styles.user_mail}>メールアドレス</p>

        </div>

      </div>




      {/* プロフィールコメント欄 */}
      <p className={styles.user_comment}>プロフィールコメント欄</p>


      <div className={`${styles.comment} ${expanded ? styles.expanded : ''}`}>
        <div
          className={styles.commentContent}
          style={{
            maxHeight: expanded ? 'none' : '2.4em',
            overflow: 'hidden',
            display: expanded ? 'block' : '-webkit-box',
            WebkitLineClamp: expanded ? 'unset' : 2,
            WebkitBoxOrient: 'vertical',
          }}
        >
          <p>{insertLineBreaks('コメントの内容きますああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ', 10)}</p>
        </div>
      </div>


        {/* …続きを見る */}
        {expanded ? (
        <div className={styles.read_more} onClick={handleToggleExpand}>
          閉じる
        </div>
              ) : (
        <div className={styles.read_more} onClick={handleToggleExpand}>
        ...続きを見る
        </div>
        )}





      <div className={styles.main2}>

        {/* プロフィールを編集 */}
        <button className={styles.profile_setting_button}>プロフィールを編集</button>


        <div className={styles.box}>
      </div>


        {/*タグイメージsvc*/}
        <img className={styles.tag_svc} src='profile/tag.svg' />



      </div>


      {/*タグイメージsvc*/}

      <img className={styles.add_svc} src='profile/add.svg' />

    </div>
  )
};

export default mypage;