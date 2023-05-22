import styles from '@/styles/Setting.module.css'

export default function Setting() {

  return (


    <div className="main">
      <div className="image-container">

          {/*画像人間イメージsvc*/}
          <img className={styles.picture_human_svc} src='setting/picture_human.svg'/>

          {/*画像人間に被せるカメライメージsvc*/}
          <img className={styles.picture_camera_svc} src='setting/picture_camera.svg' />
      </div>


      {/* ユーザー名 */}
      <p className={styles.text_user}>ユーザー名</p>
      <input type="text" className={styles.add_user_name} half placeholder="user_name" autocomplete="no"></input>



      {/* ユーザー名 */}
      <p className={styles.text_mail}>メールアドレス</p>
      <input type="text" className={styles.add_mail} half placeholder="mail" autocomplete="no"></input>


      {/*メールアドレスの横の鍵マークイメージsvc*/}
      <img className={styles.add_svc} src='setting/Locked.svg' />



      {/* 自己紹介欄 */}
      <p className={styles.text_comment}>自己紹介</p>
      <input type="text" className={styles.add_comment} half placeholder="comment" autocomplete="no"></input>


    </div>




  )
}
