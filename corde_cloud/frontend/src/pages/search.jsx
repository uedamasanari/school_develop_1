import React, { useState, useEffect } from 'react'
import styles from '@/styles/Search.module.css'
import MyHeader from '@/components/MyHeader'

  const MyComponent = () => {

    const linkClick = () =>{
      window.location.href = '/searchResults';
    }

    const handleLinkClick = () => {
      window.location.href = '/searchResults';
    }

  

  return (
        <div className="container">
          <MyHeader title={"クローゼット"} />
            {/* <p className={styles.tagSearch}>タグ検索
            <a className={styles.plusbutton} onClick={linkClick}>+</a>
            </p>

                <p className={styles.tag}>#季節</p>
                <p className={styles.tag}>#柄</p>
                <p className={styles.tag}>#色</p>
                <p className={styles.tag}>#ブランド名  など</p>


                  <div>
                    <button className={styles.button} onClick={handleLinkClick}>検索</button>
                  </div> */}
                  
            <p className={styles.displayAll}>アイテムをすべて表示する</p>
                  <div>
                    <button className={styles.button} onClick={handleLinkClick}>表示</button>
                  </div>
        </div>
    
  )
}

export default MyComponent;