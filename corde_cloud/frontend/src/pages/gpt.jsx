import React, { useState } from "react";
import axios from "axios";
import styles from "@/styles/Gpt.module.css";
import UpLoad from "@/components/gpt/UpLoad.jsx";
import TextBox from "@/components/gpt/TextBox";

const GptComponent = () => {
  const [message, setMessage] = useState("僕に聞きたいことを入力してね！※画像アップロード機能は未実装です");
  const [input, setInput] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [text, setText] = useState("");

  const fetchMessage = async () => {
    const configuration = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_OPENAI_API_KEY}`,
      },
    };
    const body = {
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "明るい人で、50文字以内に必ず収まる文章を返信",
        },
        { role: "user", content: text },
      ],
    };

    const res = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      body,
      configuration
    );
    setMessage(res.data.choices[0].message.content);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchMessage();
  };

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
      <div className={styles.robot}>
        <div className={styles.robot_text}>{message}</div>
        <img src="gpt/robot.svg" className={styles.robot_img} />
      </div>
      <div className={styles.upload}>
        <UpLoad />
        <UpLoad />
      </div>
      <TextBox setText={setText}/>
      <div className={styles.button_area}>
        <button className={styles.button} onClick={fetchMessage}>送信</button>
      </div>
    </div>
  );
};

export default GptComponent;
