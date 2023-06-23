import React, { useState, useEffect } from 'react'
import styles from '@/styles/Search.module.css'

// export default function Home() {

  const MyComponent = () => {

    const linkClick = () =>{
      window.location.href = '/home';
    }

    const handleLinkClick = () => {
      window.location.href = '/searchResults';
    }

  

  return (
        <div className="container">
            <p className={styles.tagSearch}>タグ検索</p>

            <div>
              <a className={styles.plusbutton} onClick={linkClick}>+</a>
            </div>
            

                <p className={styles.tag}>#季節</p>
                <p className={styles.tag}>#柄</p>
                <p className={styles.tag}>#色</p>
                <p className={styles.tag}>#ブランド名  など</p>

                {/* <div className="button-container"> */}
                  {/* <button className={styles.button} onClick="goToLink(/searchResults)">検索</button> */}

                  <div>
                    <button className={styles.button} onClick={handleLinkClick}>検索</button>
                  </div>
                  
                  
        

        
            <p className={styles.displayAll}>アイテムをすべて表示する</p>
                  <div>
                    <button className={styles.button} onClick={handleLinkClick}>表示</button></div>
                  </div>
    
  )
}

export default MyComponent;



