import React, { useState } from 'react';
import styles from '@/styles/Postdetails.module.css';

import ReactDOM from 'react-dom';

const Postdetails = () => {

  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
      setIsLiked(!likes);
      setLikes(likes ? likes - 1 : likes + 1);
    };
  return (
    
    <div className={styles.container}>
      <div>
        <div className={styles.profile}>
          <svg
            xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
          </svg>
          <p className={styles.p}>@koshiki</p>
        </div>
        <hr className={styles.horizontalLine} />
        <img src="Timeline/rei1.jpg" className={styles.img}></img>
        <hr className={styles.horizontalLine} />
      </div>
      <div className={styles.icons}>
	      <span className={`heart ${likes ? 'red-heart' : ''} ${styles.icon} ${styles.leftIcon}`} onClick={handleLikeClick}>
		      {likes ? (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.likedIcon} ${styles.red_heart}`} viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.likeIcon} ${styles.heart}`} viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
            </svg>
          )}
        </span>
        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.icon} ${styles.rightIcon}`} viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>
        </svg>
      </div>
      <div>
        <hr className={styles.horizontalLine} />
      </div>
      <div className={styles.good}>
        <span>{likes}いいね</span>
      </div>
      <div className={styles.detail}>
        <div className={styles.tag}>＃赤 ＃青 ＃お出かけ</div>
      </div>
    </div>
  );
};

export default Postdetails;
