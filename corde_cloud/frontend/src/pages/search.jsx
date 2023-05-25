import React, { useState, useEffect } from 'react'
import styles from '@/styles/Search.module.css'

export default function Home() {
  return (
    <div>
        <div className={styles.container}>
            <p className={styles.tagSearch}>タグ検索</p>
            <pre>
                #季節
                #柄
                #色
                #ブランド名  など
            </pre>
            <button className={styles.button}>検索</button>
        </div>

        <div className={styles.container}>
            <p className={styles.displayAll}>アイテムをすべて表示する</p>
            <button className={styles.button}>表示</button>
        </div>

    </div>
    
  )
}
