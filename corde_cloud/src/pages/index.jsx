import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import SamplePage from '@/components/samplePage'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <SamplePage />
    </div>
  )
}
