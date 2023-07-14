import React from 'react';
import styles from '@/styles/Home.module.css';

const home = () => {

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
    }
  ];
  
  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>

      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '20px' , flexWrap: 'wrap'}}>
        {dummyData.map((item,index) => (
          <React.Fragment key={item.id}>
          
          <a href ={'/itemdetail'}> 
          <img
            src={item.imageURL}
            alt={`Image ${item.id}`}
            onClick={handleClick}
            style={{width:'114px' , height:'131px' , padding:'10px'}}
          />
          </a>
          {(index + 1) % 3 === 0 && <br />} {/* 3つごとに改行 */}
            </React.Fragment>
        ))}
      </div>
      

      <p className={styles.sns}>SNSのおすすめ</p>
      <div className={styles.container}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' , marginTop: '20px', flexWrap: 'wrap'}}>
        {dummyData.map((item,index) => (
          <React.Fragment key={item.id}>
        <img
          src={item.imageURL}
          alt={`Image ${item.id}`}
          style={{width:'114px' , height:'131px' , padding:'10px'}}
        />
        {(index + 1) % 3 === 0 && <br />} {/* 3つごとに改行 */}
            </React.Fragment>
      ))}
      </div>
      </div>
      </div>
  );
}

export default home;