import axios from "axios";
import React, { useState } from "react";

async function uploadImage(file, item_name, detail) {
  const formData = new FormData();
  formData.append("image", file);

  try {
    const response = await axios.post(
      "http://kyuuri.daa.jp/Web/corde_cloud/insertImage.php",
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
      "http://kyuuri.daa.jp/Web/corde_cloud/insertCloset.php",
      itemData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    console.log(response2);
  } catch (error) {
    console.log(error);
  }
}

function ImageUploadForm() {
  const [file, setFile] = useState(null);
  const [item_name, setItemName] = useState("");
  const [detail, setDetail] = useState("");

  const handleChange = (event) => {
    setFile(event.target.files[0]);
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
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="file"
          name="image"
          accept="image/*"
          required
          onChange={handleChange}
        />
        <button type="submit">Upload Image</button>
      </form>
      <input
        type="text"
        placeholder="アイテム名"
        name="item_name"
        onChange={(e) => setItemName(e.target.value)}
      />
      <input
        type="text"
        placeholder="詳細"
        name="detail"
        onChange={(e) => setDetail(e.target.value)}
      />
    </div>
  );
}

export default ImageUploadForm;
