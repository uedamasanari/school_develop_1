import MyHeader from "@/components/MyHeader";
import React, { useState } from 'react';
import styles from '@/styles/Timeline.module.css';
import axios from "axios";

const Timeline = () =>  {
  const items = [1, 2, 3];
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLikeClick = () => {
    setIsLiked(!likes);
    setLikes(likes ? likes - 1 : likes + 1);
  };

  const [isBooks, setIsBooks] = useState(false);
  const [books, setBooks] = useState(0);

  const handleBookClick = () => {
    setIsBooks(!books);
    setBooks(books ? books - 1 : books + 1);
  };
  const handleGetLikesCount = (tweetId) => {
  axios.get(`/code_cloud/backend/api/getTweetLikesCount.php?tweet_id=${tweetId}`)
    .then(response => {
      const likeCount = response.data.like_count;
      // 取得したいいね数を利用する処理をここに書く
    })
    .catch(error => {
      // エラーハンドリング
      console.error(error);
    });
  };

  return (
    
    <div>
      <MyHeader title={"タイムライン"} />
      <div className={styles.size}>
      {items.map((item, index) => (
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
          <img src="Timeline/rei2.svg" className={styles.img} alt="post-image"></img>
          <hr className={styles.horizontalLine} />
        </div>
        <div className={styles.icons}>
          <span className={`heart ${likes ? 'red-heart' : ''} ${styles.leftIcon}`} onClick={handleLikeClick}>
            {likes ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.likedIcon} ${styles.red_heart}`} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.likeIcon} ${styles.heart}`} viewBox="0 0 16 16">
                <path fillRule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" />
              </svg>
            )}
          </span>
          <span className={`book ${books ? 'black-book' : ''} ${styles.rightIcon}`} onClick={handleBookClick}>
            {books ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.bookedIcon} ${styles.black_book}`} viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.bookIcon} ${styles.book}`} viewBox="0 0 16 16">
                <path d="M2 2v13.5a.5.5 0 0 0 .74.439L8 13.069l5.26 2.87A.5.5 0 0 0 14 15.5V2a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2z" />
              </svg>
            )}
          </span>
        </div>
        <div>
          <hr className={styles.horizontalLine} />
      </div>
        </div>
      ))}
      </div>
    </div>
    
  );
}

export default Timeline;