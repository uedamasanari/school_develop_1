import React, { useState, useEffect } from 'react'
import styles from '@/styles/Setting.module.css'
import MyHeader from "@/components/MyHeader";

const Setting = () => {
  const handleUpdate = () => {
    // Perform the update logic here
    // This function will be called when the "Update" button is clicked
    console.log('Update clicked');
  };
  
  return (


    <div className={styles.main}>

      <MyHeader title={"プロフィール編集画面"} />

      <div className={styles.image_container}>

          {/*画像人間イメージsvc*/}
          <img className={styles.picture_human_svc} src='setting/picture_human.svg'/>

          {/*画像人間に被せるカメライメージsvc*/}
          <img className={styles.picture_camera_svc} src='setting/picture_camera.svg' />
      </div>


      {/* ユーザー名 */}
      <p className={styles.text_user}>ユーザー名</p>
      <input type="text" className={styles.add_user_name} half placeholder="ユーザー名" maxlength="5" autocomplete="yes"></input>



      {/* ユーザー名 */}
      <p className={styles.text_mail}>メールアドレス</p>
      <input type="text" className={styles.add_mail} half placeholder="ユーザーのメールアドレス挿入" maxlength="0"autocomplete="no"></input>


      {/*メールアドレスの横の鍵マークイメージsvc*/}
      <img className={styles.add_svc} src='setting/Locked.svg' />



      {/* 自己紹介欄 */}
      <p className={styles.text_comment}>自己紹介</p>
      <input type="text" className={styles.add_comment} half placeholder="自己紹介" maxlength="5" autocomplete="no"></input>


      <button className={styles.update_button} onClick={handleUpdate}>更新</button>



    </div>




  )
};

export default Setting;