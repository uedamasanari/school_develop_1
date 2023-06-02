import React, { useState, useEffect } from 'react'
import styles from '@/styles/Search.module.css'

export default function Home() {
  return (
    <div style={{backgroungimage:'url("search/closet.svg")'}}>
        {/* <div className="container"> */}
            <p className={styles.tagSearch}>タグ検索</p>
                <p className={styles.tag}>#季節</p>
                <p className={styles.tag}>#柄</p>
                <p className={styles.tag}>#色</p>
                <p className={styles.tag}>#ブランド名  など</p>
                <div className="button-container"><button className={styles.button}>表示</button></div>
        {/* </div> */}

        {/* <div className="container"> */}
            <p className={styles.displayAll}>アイテムをすべて表示する</p>
            <div className="button-container"><button className={styles.button}>表示</button></div>
        {/* </div> */}

    </div>
    
  )
}
