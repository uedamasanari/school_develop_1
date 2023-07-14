import React, { useState } from 'react';
import styles from '@/styles/Gpt.module.css'

const UpLoad = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const fileInput = React.useRef();

  const handleImageClick = () => {
    fileInput.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.match(/^image\//)) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target.result);
      };
      reader.readAsDataURL(file);
    } else {
      setSelectedImage(null);
    }
  };

  return (
    <div>
    <input
        type="file"
        style={{ display: "none" }}
        ref={fileInput}
        onChange={handleFileChange}
    />
    <img
        src={selectedImage || "gpt/upload.svg"}
        onClick={handleImageClick}
        alt="Clickable placeholder"
        style={{ cursor: "pointer" }} // Optionally change cursor on hover
    />
    </div>
  );
}

export default UpLoad;
