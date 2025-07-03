import Image from 'next/image'
import styles from './page.module.css'

import BannerPrincipal from '@/components/BannerPrincipal/BannerPrincipal'
import BrandCarousel from '@/components/BrandCarousel/BrandCarousel'
import ServiceCard from '@/components/ServiceCard/ServiceCard'
import serviceCardDataArray from '@/data/serviceCardContent'
import aboutUsBanner from '../../public/images/banner-quem-somos.webp'
import nanoLogoClean from '../../public/images/nanoservice-clean-logo.png'
import iconCheck from '../../public/images/svg/icon-check.svg'

export default function Home() {
  function renderServices() {
    return serviceCardDataArray.map((service) => {
      return <>
        <ServiceCard key={Math.random()} background={service.image} title={service.title} contentIcon={service.contentIcon} content={service.content} />
        <span className={styles.servicesWarning}>
          Temos a Solução
          <Image
            src={iconCheck}
            alt="Assitencia tecnica manaus nano service samsung xiaomi doogee apple nokia sony vaio asus motorola positivo caterpillar garmin lenovo HP epson brothers"
            width={30}
            height={30}
          />
        </span>
      </>

    })
  }

  return (
    <main className={styles.container}>

      <BannerPrincipal />

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
              alt="nano service troca de tela reparo de celular assistencia notebook manaus tela quebrou caiu na agua assitencia reparo smartwatch relogio digital impressora"
              width={150}
              height={150}
              placeholder='blur'
            />
            Quem Somos?
          </h2>
          <p>A primeira assistência técnica 100% online</p>
          <Image
            src={aboutUsBanner}
            alt='nano service troca de tela reparo de celular assistencia notebook manaus tela quebrou caiu na agua assitencia reparo smartwatch relogio digital impressora'
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
            clientes que buscam diagnostico e reparo de qualidade para seus equipamentos no conforto da sua residência ou trabalho
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
