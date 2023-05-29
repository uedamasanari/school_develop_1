import React, { useState } from 'react';
import styles from '@/styles/Mypage.module.css'






  {/*ユーザー写真*/}
  const mypage = () => {
    const [expanded, setExpanded] = useState(false);
  
    const handleToggleExpand = () => {
      setExpanded(!expanded);
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

      <div className={`comment ${expanded ? 'expanded' : ''}`}>

        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
        aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa

      </div>

        {/* …続きを見る */}
        <div className={styles.read_more} onClick={handleToggleExpand}>
          {expanded ? '閉じる' : '...続きを見る'}
        </div>

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