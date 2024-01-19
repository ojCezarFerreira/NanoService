import Image from 'next/image'
import styles from './page.module.css'

import banner from '../../public/images/banner-principal-assistencia-tecnica-manaus.png'
import iphoneQuebrado from '../../public/images/iphone-quebrado.png'
import ServiceCard from '@/components/ServiceCard/ServiceCard'

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
      <section className={styles.services}>
        <h2>Serviços</h2>
        <ServiceCard background={iphoneQuebrado} />
      </section>
    </main>
  )
}
