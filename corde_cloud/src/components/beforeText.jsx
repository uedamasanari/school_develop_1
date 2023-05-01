import Image from 'next/image'
import styles from '@/styles/beforeText.module.css'


 const beforeText=({text})=> {
  return (
    <div>
      <div className={styles.previous_word}>
        {text}
      </div>
    </div>
  )
}
export default beforeText
