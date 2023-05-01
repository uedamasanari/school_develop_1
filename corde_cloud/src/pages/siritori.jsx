import Image from 'next/image'
import { useState,useEffect } from 'react'
import styles from '@/styles/Home.module.css'
import BeforeText from '@/components/beforeText'
import ConfirmText from '@/components/confirmText'
import SearchText from '@/components/searchText'
import PreviewText from '@/components/previewText'


const siritori =()=> {

    const [before,setBefore] = useState("しりとり")
    const [nowText,setNowText] = useState("")
    const [error,setError] = useState("エラー：前回の単語の最後の文字と一致しません。")
    const [flag,setFlag] = useState(false)

    const hantei =()=> {
        if (before[before.length - 1] === nowText[0]) {
            if (nowText[nowText.length - 1] === 'ん') {
                alert('入力された単語が「ん」で終わっています。あなたの負けです！')
                setBefore('しりとり')
                setNowText('')
            } else {
                setBefore(nowText)
                setFlag(false)
                setNowText("")
            }
            setNowText("")
    
        } else {
            setFlag(true)
        }
    }

  return (
    <div>
        <PreviewText text="この単語に続いてしりとりをしてください" />
        <BeforeText text={before}/>
        <PreviewText text="しりとりの単語を入力してください" />
        <SearchText setText={setNowText} text={nowText}/>
        <ConfirmText onHantei={hantei}/>
        <p>{flag == true ? error : ""}</p>
    </div>
  )
}

export default siritori