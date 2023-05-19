import React, { useState } from 'react';
import styles from '@/styles/Mypage.module.css'



export default function mypage() {


    const [user_picture,setUser_picture] =useState("");
    const [user_name,setUser_name] =useState("");
    const [mail_address,setMail_address] =useState("");

  
  return (
    <div>
      {/*ユーザー写真*/}
      
      {/* ユーザー名 */}
      <p>ユーザー名</p>

      {/* メールアドレス */}
      <p>メールアドレス</p>

      {/* プロフィールコメント欄 */}

      {/* …続きを見る */}

      {/* プロフィールを編集 */}
      <button className={styles.profile_setting_button}>プロフィールを編集</button>


      {/*タグイメージsvc*/}
      <img classNames={styles.tag_svc} src='profile/tag.svg' />


      {/*タグイメージsvc*/}

      <img classNames={styles.add_svc} src='profile/add.svg' />

    </div>
  )

}
