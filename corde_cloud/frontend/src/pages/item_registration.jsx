import React, { useState } from "react";
import axios from "axios";
import styles from "@/styles/Item_registration.module.css";
import MyHeader from "@/components/MyHeader";
import swal from "sweetalert";

async function uploadImage(file, item_name, detail) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      "http://localhost:8000/api/insertImage.php",
      formData
    );
    console.log(response);

    const imagePath = response.data.imagePath;
    console.log(imagePath);
    const itemData = {
      item_name: item_name,
      detail: detail,
      user_id: 1,
      imagePath: imagePath,
    };

    const response2 = await axios.post(
      "http://localhost:8000/api/insertCloset.php",
      itemData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response2);
    swal("登録完了", "アイテムを登録しました", "success");
  } catch (error) {
    console.log(error);
  }
}

const Item_registration = () => {
  const [file, setFile] = useState(null);
  const [item_name, setItemName] = useState("");
  const [detail, setDetail] = useState("");
  const [preview, setPreview] = useState(null);

  const handleChange = (event) => {
    setFile(event.target.files[0]);
    setPreview(URL.createObjectURL(event.target.files[0]));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (file) {
        await uploadImage(file, item_name, detail);
      } else {
        alert("Please select a file to upload");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.container}>
      <MyHeader title={"プロフィール"} />
      <div className={styles.form_group_name}>
        <input
          type="text"
          placeholder="アイテム名"
          name="item_name"
          className={styles.form_name}
          onChange={(e) => setItemName(e.target.value)}
        />
      </div>
      <div className={styles.form_group}>
        <input
          type="text"
          placeholder="詳細"
          name="detail"
          className={styles.item_info}
          onChange={(e) => setDetail(e.target.value)}
        />
      </div>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group_name}>
          <input
            type="file"
            name="image"
            accept="image/*"
            required
            onChange={handleChange}
          />
        </div>
        {preview && <img className={styles.image_preview} src={preview} alt="Image preview" />}
        <div className={styles.button_group}>
          <button
            type="submit"
            className={`${styles.button} ${styles.center_button}`}
          >
            登録
          </button>
        </div>
      </form>
    </div>
  );
};

export default Item_registration;
