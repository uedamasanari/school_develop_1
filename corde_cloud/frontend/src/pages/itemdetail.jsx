import React, { useState, useEffect } from 'react'
import styles from '@/styles/ItemDetail.module.css'

export default function Home() {
  return (
    <div>
        <p className={styles.itemimg}><img src="searchResults/sample.jpeg" width="318" height="224"/></p>
        <p className={styles.itemname}>アイテム名</p>
        
        
    </div>
    
  )
}
