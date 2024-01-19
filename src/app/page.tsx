import Image from 'next/image'
import styles from './page.module.css'

import banner from '../../public/images/banner-principal-assistencia-tecnica-manaus.png'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import serviceCardData from '@/data/serviceCardContent'

export default function Home() {
  function renderServices() {
    return serviceCardData.map((service, i) => {
      return <ServiceCard key={i} background={service.image} title={service.title} contentIcon={service.contentIcon} content={service.content} />
    })
  }

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
        <div className={styles.cards}>
          {renderServices()}
        </div>
      </section>
    </main>
  )
}
