import React, { useState, useEffect } from 'react'
import styles from '@/styles/ItemDetail.module.css'

export default function Home() {

  const itemname = 'アイテム名';
  const detail = 'アイテム説明';
  const dummyData = [
    {
      id:1,
      imageURL:'searchResults/sample.jpeg'
    },
  ];

  return (
    <div>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '20px'}}>
      {dummyData.map((item) => (
        <div key="item.id">
        <img
          src={item.imageURL}
          alt={`Image ${item.id}`}
          style={{width:'318px' , height:'224px'}}
        />
        </div>
      ))}
      </div>

        <p className={styles.itemname}>{itemname}</p>
        <div className={styles.box}><p className={styles.detail}>{detail}</p></div>
        
    </div>
    
  )
}
