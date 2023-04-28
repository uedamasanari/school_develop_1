import Image from 'next/image'
import styles from '@/styles/Home.module.css'
import {useState, useEffect} from 'react'

export default function samplePage() {

    const [text,setText] = useState("aaa")
    const [startTimer, setStartTimer] = useState(false);
    const [timer, setTimer] = useState(0);

    useEffect(() => {
        if (startTimer) {
        const interval = setInterval(() => {
            setTimer((prevTimer) => prevTimer + 1);
        }, 1000);

        return () => clearInterval(interval);
        }
    }, [startTimer]);

    useEffect(() => {
        if (timer % 10 == 0 && timer > 0) {
            alert("10秒経過しました")
        }
    }, [timer]);

return (
    <div>
        <Image
        src="/images/chat.svg"
        alt="Next.js Logo"
        width={200}
        height={500}
        priority
        />
        <div className={styles.text}>
            <input type="text" value={text} onChange={(e)=>setText(e.target.value)} />
        </div>
        <div>
            <button onClick={() => setStartTimer(true)}>タイマー開始</button>
        </div>
    </div>
    )
}
