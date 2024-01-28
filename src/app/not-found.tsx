import styles from './not-found.module.css'

import Link from 'next/link'
import Image from 'next/image'

import error404 from '@/../public/images/svg/erro404.svg'
import satellite from '@/../public/images/svg/space-satellite.svg'

export default function NotFound() {
  return <>
    <main className={styles.container}>
      <h1>Página não encontrada!</h1>
      <Image
        src={error404}
        alt="Error 404"
        width={500}
        height={500}
        className={styles.erro}
        priority
      />
      <Link href="/" aria-label='botão voltar a home'>Voltar a Home</Link>
      <div className={styles.behindImages}>
        <Image
          src={satellite}
          alt="satelite"
          width={200}
          height={200}
          className={styles.satellite}
        />
      </div>
    </main>
  </>
}