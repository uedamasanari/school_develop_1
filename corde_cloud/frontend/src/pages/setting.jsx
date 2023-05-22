import styles from '@/styles/Setting.module.css'

export default function Setting() {

  return (


    <div className="main">

          {/*画像人間イメージsvc*/}
          <img classNames={styles.picture_human_svc} src='setting/picture_human.svg'  width="50" height="50"/>

          {/*画像人間に被せるカメライメージsvc*/}
          <img classNames={styles.picture_camera_svc} src='setting/picture_camera.svg' />


      {/* ユーザー名 */}
      <p>ユーザー名</p>


      {/* ユーザー名 */}
      <p>メールアドレス</p>

      {/*メールアドレスの横の鍵マークイメージsvc*/}
      <img classNames={styles.add_svc} src='setting/Locked.svg' />
    </div>


          
  )
}
