import Image from 'next/image'
import styles from './page.module.css'

import banner from '../../public/images/banner-principal-assistencia-tecnica-manaus.png'

export default function Home() {
  return (
    <main className={styles.main}>
      <section className={styles.banner}>
        <Image
          src={banner}
          alt="banner principal assistencia tecnica manaus"
          fill={true}
          quality={100}
          placeholder='blur'
        />
      </section>
    </main>
  )
}
