import Image from 'next/image'
import styles from './page.module.css'

import banner from '../../public/images/banner-principal-assistencia-tecnica-manaus.png'
import iconCheck from '../../public/images/icon-check.png'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import serviceCardDataArray from '@/data/serviceCardContent'
import BrandCarousel from '@/components/BrandCarousel/BrandCarousel'
import aboutUsBanner from '../../public/images/banner-quem-somos.png'
import nanoLogoClean from '../../public/images/nanoservice-clean-logo.png'

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
    <main className={styles.container}>
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
        <h2 id='quemSomos'>Marcas</h2>
        <BrandCarousel />
      </section>

      <section className={styles.aboutUs}>
        <div className={styles.aboutBanner}>
          <h2>
            <Image
              src={nanoLogoClean}
              alt="Nano Service Logo"
              width={150}
              height={150}
              placeholder='blur'
            />
            Quem Somos?
          </h2>
          <p>A primeira assintência técnica 100% online</p>
          <Image
            src={aboutUsBanner}
            alt='Quem somos?'
            fill={true}
            placeholder='blur'
            style={{ opacity: "70%", zIndex: "-1" }}
          />
        </div>
        <div className={`${styles.aboutContent} ${styles.aboutMission}`}>
          <h3>Missão</h3>
          <p>
            Atender as mais diversas necessidades de reparo em equipamentos eletrônicos.
          </p>
        </div>
        <div className={`${styles.aboutContent} ${styles.aboutVision}`}>
          <h3>Visão</h3>
          <p>
            Em um universo cada vez mais tecnológico e dinâmico, otimizamos o tempo de nossos
            clientes que buscam diagnostico e reparo de qualidade para seus equipamentos no conforto da sua residência
          </p>
        </div>
        <div className={`${styles.aboutContent} ${styles.aboutValues}`}>
          <h3>Valores</h3>
          <p>
            Qualidade, Agilidade e transparência nos diagnósticos e manutenções
          </p>
        </div>
      </section>
    </main>
  )
}
