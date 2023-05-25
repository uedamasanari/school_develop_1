import React, { useState, useEffect } from 'react'
import styles from '@/styles/Home.module.css'

export default function Home() {
  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>
      <div className={styles.container}>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
      </div>

      <p className={styles.sns}>SNSのおすすめ</p>
      <div className={styles.container}>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
        <div className={styles.pic}></div>
      </div>
    </div>
  )
}
