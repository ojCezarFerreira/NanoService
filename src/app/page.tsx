import Image from 'next/image'
import styles from './page.module.css'

import banner from '../../public/images/banner-principal-assistencia-tecnica-manaus.png'
import iconCheck from '../../public/images/icon-check.png'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import serviceCardDataArray from '@/data/serviceCardContent'
import BrandCarousel from '@/components/BrandCarousel/BrandCarousel'

export default function Home() {
  function renderServices() {
    return serviceCardDataArray.map((service, i) => {
      return <>
        <ServiceCard key={i} background={service.image} title={service.title} contentIcon={service.contentIcon} content={service.content} />
        <span className={styles.servicesWarning}>
          Temos a Solução
          <Image
            src={iconCheck}
            alt="Check"
            width={30}
            height={30}
          />
        </span>
      </>

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
        <div className={styles.servicesCards}>
          {renderServices()}
        </div>
      </section>

      <section className={styles.brands}>
        <h2>Marcas</h2>
        <BrandCarousel />
      </section>

      <section className={styles.aboutUs}>
        <div className={styles.aboutBanner}></div>
        <div className={styles.aboutMission}></div>
        <div className={styles.aboutVision}></div>
        <div className={styles.aboutValues}></div>
      </section>
    </main>
  )
}
