import React, { useState, useEffect } from 'react'
import styles from '@/styles/Searchresults.module.css'

export default function Home() {

  const handleClick = () => {
    window.location.href = '/itemdetail';
  }

  const dummyData = [
    {
      id:1,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:2,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:3,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:4,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:5,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:6,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:7,
      imageURL:'searchResults/sample.jpeg'
    },
    {
      id:8,
      imageURL:'searchResults/sample.jpeg'
    }

  ];


  return (
    <div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '20px' , flexWrap: 'wrap'}}>
        {dummyData.map((item,index) => (
          <React.Fragment key={item.id}>
          <img
            src={item.imageURL}
            alt={`Image ${item.id}`}
            onClick={handleClick}
            style={{width:'147px' , height:'155px' , padding:'10px'}}
          />
          {(index + 1) % 2 === 0 && <br />} {/* 2つごとに改行 */}
            </React.Fragment>
        ))}
      </div>
    

     </div>
    
  )
}
