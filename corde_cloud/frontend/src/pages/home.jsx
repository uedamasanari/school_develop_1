import React, { useState, useEffect } from 'react'
import axios from 'axios'
import styles from '@/styles/Home.module.css'

const Home = () => {
  const [closet, setCloset] = useState([])

  useEffect(() => {
    axios
    .post("http://kyuuri.daa.jp/Web/corde_cloud/Allcloset.php",{user_id:localStorage.getItem('user_id')})
    .then((response) => {
      // closetの要素数を12までに制限
      setCloset(response.data.data.slice(0, 12));
      console.log(response.data.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])

  const handleClick = () => {
    window.location.href = '/itemdetail';
  }

  return (
    <div>
      <p className={styles.tytle}>あなたへのおすすめ</p>

      <p className={styles.closet}>クローゼットのおすすめ</p>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
        }}
      >
        {closet.map((item, index) => (
          <React.Fragment key={item.item_id}>
            <a href={"/itemdetail"}>
              <img
                src={item.picture_path}
                alt={`Image ${item.item_id}`}
                onClick={handleClick}
                style={{ width: "114px", height: "131px", padding: "10px" }}
              />
            </a>
            {(index + 1) % 3 === 0 && <br />} {/* 3つごとに改行 */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Home;
