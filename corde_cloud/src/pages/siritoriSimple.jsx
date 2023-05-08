import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

const Siritori = () => {
  const [before, setBefore] = useState('しりとり');
  const [nowText, setNowText] = useState('');
  const [error, setError] = useState('エラー：前回の単語の最後の文字と一致しません。');
  const [flag, setFlag] = useState(false);

  const hantei = () => {
    if (before[before.length - 1] === nowText[0]) {
      if (nowText[nowText.length - 1] === 'ん') {
        alert('入力された単語が「ん」で終わっています。あなたの負けです！');
        setBefore('しりとり');
        setNowText('');
      } else {
        setBefore(nowText);
        setFlag(false);
        setNowText('');
      }
      setNowText('');
    } else {
      setFlag(true);
    }
    };

  return (
    <div>
      <div>
        <label>この単語に続いてしりとりをしてください</label>
      </div>
      <div>
        <div className={styles.previous_word}>{before}</div>
      </div>
      <div>
        <label>しりとりの単語を入力してください</label>
      </div>
      <div>
        <input
          type="text"
          name="shiritori-input"
          value={nowText}
          onChange={(e) => setNowText(e.target.value)}
        />
      </div>
      <div>
        <button onClick={hantei}>確定</button>
      </div>
      <p>{flag === true ? error : ''}</p>
    </div>
  );
};

export default Siritori;
