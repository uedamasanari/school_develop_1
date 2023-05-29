import styles from '@/styles/Timeline.module.css';

export default function Timeline() {
  return (
    
    <div className={styles.container}>
      <div>
        <div className={styles.profile}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>  
          </svg>
          <p className={styles.p}>@koshiki</p>
        </div>
        <hr className={styles.horizontalLine} />
        <img src='Timeline/rei1.jpg' className={styles.img}></img>
        <hr className={styles.horizontalLine} />
      </div>
      <div className={styles.icons}>
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.icon} ${styles.leftIcon}`} viewBox="0 0 16 16">
        <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
      </svg>

      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className={`${styles.icon} ${styles.rightIcon}`} viewBox="0 0 16 16">
        <path d="M2 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v13.5a.5.5 0 0 1-.777.416L8 13.101l-5.223 2.815A.5.5 0 0 1 2 15.5V2zm2-1a1 1 0 0 0-1 1v12.566l4.723-2.482a.5.5 0 0 1 .554 0L13 14.566V2a1 1 0 0 0-1-1H4z" />
      </svg>
      </div>
      <div>
        <hr className={styles.horizontalLine} />
      </div>
      </div>
  );
}
//このプログラムのアイコンの下の行に横線を入れたいです