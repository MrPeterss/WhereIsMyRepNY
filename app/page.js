import Image from 'next/image'
import styles from './page.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <main className={styles.main}>
      <Head>
        <link rel="shortcut icon" href="/" />
      </Head>
      <iframe src="https://www.google.com/maps/d/u/0/embed?mid=1F02yuT8lj229-C8vMS24-Z3wHKk9G9k&ehbc=2E312F" width="640" height="480"></iframe>
    </main>
  )
}
