import styles from '@/styles/Mypage.module.css'

export default function Mypage() {

  const MypageComponent = () =>{
    const [user_name,setUser_name] =usestate("");
    const [mail_address,setMail_address] =usestate("");
    const [profile_comment,setProfile_comment] =usestate("");
  }
  
  return (
    <div>
      {/*ユーザー写真*/}
      
      {/* ユーザー名 */}
      <p>{user_name}</p>

      {/* メールアドレス */}
      <p>{mail_address}</p>

      {/* プロフィールコメント欄 */}

      {/* …続きを見る */}

      {/* プロフィールを編集 */}



      <img src='template/tag.svg' />
      <img src='template/add.svg' />
    </div>
  )
}
