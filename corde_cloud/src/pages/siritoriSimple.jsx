import Image from 'next/image';
import { useState } from 'react';
import styles from '@/styles/Home.module.css';

const Siritori = () => {
    //初期値「しりとり」、編集名「before」でuseStateを宣言
    //初期値「''」、編集名「nowText」でuseStateを宣言
    //初期値「エラー：前回の単語の最後の文字と一致しません。」、編集名「error」でuseStateを宣言
    //初期値「false」、編集名「flag」でuseStateを宣言

    const hantei = () => {
        if (before[before.length - 1] === nowText[0]) {
            if (nowText[nowText.length - 1] === 'ん') {
                alert('入力された単語が「ん」で終わっています。あなたの負けです！');
                //初期値「しりとり」でbeforeを更新

            } else {
                //nowTextでbeforeを更新

                //初期値「false」でflagを更新
            }
            //初期値「''」でnowTextを更新
        } else {
            //初期値「true」でflagを更新
        }
    };

  return (
    <div>
      <div>
        <label>この単語に続いてしりとりをしてください</label>
      </div>
      <div>
        //classをprevious_wordでbeforeをdivで表示
      </div>
      <div>
        <label>しりとりの単語を入力してください</label>
      </div>
      <div>
        //typeをtext、valueをnowTextで表示、onChangeでnowTextをe.target.valueで更新
        <input
          type="text"
          value=???
          onChange={(e) => ??? }
        />
      </div>
      <div>
        //押されたらhanteiを動かす
        <button ???>確定</button>
      </div>
      <p>
        //flagがtrueならerrorを表示
      </p>
    </div>
  );
};

export default Siritori;
