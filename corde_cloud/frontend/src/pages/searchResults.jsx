import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from "@/styles/Searchresults.module.css";
import MyHeader from "@/components/MyHeader";

export default function Home() {
  const [closet, setCloset] = useState([]);

  useEffect(() => {
    axios
      .post("http://kyuuri.daa.jp/Web/corde_cloud/Allcloset.php", {
        user_id: localStorage.getItem("user_id"),
      })
      .then((response) => {
        setCloset(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleClick = (index) => {
    console.log(closet[index].item_id);
    localStorage.setItem("item_id", closet[index].item_id);
    window.location.href = '/itemdetail';
  };

  return (
    <div>
      <MyHeader title={"クローゼット"} />
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
          flexWrap: "wrap",
          overflow: "scroll",
          height: "750px",
        }}
      >
        {closet.map((item, index) => (
          <React.Fragment key={item.item_id}>
            <img
              src={item.picture_path}
              alt={`Image ${item.item_id}`}
              onClick={() => handleClick(index)}
              style={{
                width: "147px",
                height: "155px",
                padding: "10px",
                cursor: "pointer",
              }}
            />
            {(index + 1) % 2 === 0 && <br />} {/* 2つごとに改行 */}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}
