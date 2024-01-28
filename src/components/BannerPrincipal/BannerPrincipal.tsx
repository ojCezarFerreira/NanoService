import Link from 'next/link'
import styles from './BannerPrincipal.module.css'
import Image, { StaticImageData } from 'next/image'

import applewatch from '@/../public/images/items/applewatch.jpg'
import iphone from '@/../public/images/items/iphone.jpg'
import samsung from '@/../public/images/items/samsung.jpg'
import tablet from '@/../public/images/items/tablet.jpg'
import xiaomi from '@/../public/images/items/xiaomi.jpg'

interface BehindItem {
  src: StaticImageData,
  text: string
}

export default function BannerPrincipal() {
  const behindItems = [
    { src: applewatch, text: 'Reparo em applewatch relogio digital smartwatch assistencia tecnica especializada' },
    { src: iphone, text: 'Reparo em iphone troca de tela iphone troca de bateria descarregando rapido nao liga assistencia tecnica especializada caiu na agua molhou' },
    { src: samsung, text: 'Reparo em samsung troca de tela samsung troca de bateria descarregando rapido nao liga assistencia tecnica especializada caiu na agua molhou' },
    { src: tablet, text: 'Reparo em tablet troca de tela tablet troca de bateria descarregando rapido nao liga assistencia tecnica especializada caiu na agua molhou' },
    { src: xiaomi, text: 'Reparo em xiaomi troca de tela xiaomi troca de bateria descarregando rapido nao liga assistencia tecnica especializada caiu na agua molhou' },
  ]

  function renderBehindItems() {
    return <>
      {behindItems.map((item => {
        return <Image
          key={Math.random()}
          src={item.src}
          alt={item.text}
          width={150}
          height={150}
        />
      }))}
    </>
  }


  return <>
    <section className={styles.banner}>
      <h1>Assistência Técnica Especializada Multimarcas</h1>

      <div className={styles.card}>
        <p>
          Faça tudo sem sair de casa
          com o Leva e Traz da Nano Service
        </p>
        <Link href="/leva-e-traz">Saber Mais...</Link>
      </div>

      <div className={styles.behindItems}>
        {renderBehindItems()}
      </div>
    </section>
  </>
}