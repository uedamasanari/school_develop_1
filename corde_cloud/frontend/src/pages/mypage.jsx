import React, { useState , useEffect} from 'react';
import styles from '@/styles/Mypage.module.css'
import MyHeader from "@/components/MyHeader";

import { Link } from 'react-router-dom';
import setting from './setting.jsx';


  {/*ユーザー写真*/}
  const mypage = () => {

    const [expanded, setExpanded] = useState(false);


    const settingClick = () => {
      location.href = "/setting";
    };

    const tag_registrationClick = () => {
      location.href = "/tag_registration";
    };



    const handleToggleExpand = () => {
      setExpanded(!expanded);

    };






  const insertLineBreaks = (text, maxCharacters) => {
    const regex = new RegExp(`(.{1,${maxCharacters}})(\\s+|$)`, 'g');
    return text.replace(regex, '$1\n');
      };







      const [activeTab, setActiveTab] = useState('posts');
      const [images, setImages] = useState([]);
    
      useEffect(() => {
        // データベースから画像を取得する処理を実装する
        // 仮の画像データの配列
        const sampleImages = [
          { id: 1, url: 'https://example.com/image1.jpg', alt: 'Image 1' },
          { id: 2, url: 'https://example.com/image2.jpg', alt: 'Image 2' },
          { id: 3, url: 'https://example.com/image3.jpg', alt: 'Image 3' },
          { id: 4, url: 'https://example.com/image4.jpg', alt: 'Image 4' },
          { id: 5, url: 'https://example.com/image5.jpg', alt: 'Image 5' },
          { id: 6, url: 'https://example.com/image6.jpg', alt: 'Image 6' },
          // データベースから取得した画像データを追加する
        ];
    
        setImages(sampleImages);
      }, []);
    
      const renderImages = () => {
        const rows = [];
        let row = [];
    
        images.forEach((image, index) => {
          row.push(
            <div key={image.id} className={styles.imageWrapper}>
              <img src={image.url} alt={image.alt} className={styles.image} />
            </div>
          );
    
          if ((index + 1) % 3 === 0 || index === images.length - 1) {
            rows.push(<div key={index} className={styles.imageRow}>{row}</div>);
            row = [];
          }
        });
    
        return rows;
      };
    
      const handleTabChange = (tab) => {
        setActiveTab(tab);
      };
    

  return (
    <div>

      <MyHeader title={"プロフィール"} />

      <div className={styles.header}>

      <div onClick={settingClick}>
        <img className={styles.setting_svc} src='profile/Setting.svg'/>
      </div>

      </div>




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
      {/*<p className={styles.user_comment}>プロフィールコメント欄</p>*/}


      <div className={`${styles.comment} ${expanded ? styles.expanded : ''}`}
      style={{ maxWidth: '300px' }}>
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
        続きを読む
        </div>
        )}





      <div className={styles.main2}>

        {/* プロフィールを編集 */}
        <button onClick={settingClick}
          className={styles.profile_setting_button}>プロフィールを編集
        </button>
        


        <div className={styles.box}>
      </div>


        {/*タグイメージsvc*/}
        <img className={styles.tag_svc} src='profile/tag.svg' />




      </div>


      {/*タグイメージsvc*/}
<div onClick={tag_registrationClick}>
      <img className={styles.add_svc} src='profile/add.svg' />
</div>



      <div className={styles.App}>
      <div className={styles.tabs}>
        <button
          className={`${styles.tab} ${activeTab === 'posts' ? styles.active : ''}`}
          onClick={() => handleTabChange('posts')}
        >
          Posts
        </button>
        <button
          className={`${styles.tab} ${activeTab === 'about' ? styles.active : ''}`}
          onClick={() => handleTabChange('about')}
        >
          About
        </button>
      </div>
      <div className={styles.content}>
        {activeTab === 'posts' && (
          <div>

            {renderImages()}
          </div>
        )}
        
      </div>
    </div>




    </div>
  )
};





export default mypage;