import Image from 'next/image'
import styles from './NavBar.module.css'
import Link from 'next/link'

export default function NavBar() {
  return <>
    <nav className={styles.nav}>
      <div className={styles.navList}>
        <ul className={styles.contactList}>
          <li>Faça seu pré-orçamento <br />GRÁTIS aqui!</li>
          {/* Adicionar links aos botões */}
          <li><Image src="/images/icon-whatsapp.png" alt="icone whatsapp" width={70} height={70} quality={100} /></li>
          <li><Image src="/images/icon-telegram.png" alt="icone telegram" width={70} height={70} quality={100} /></li>
        </ul>

        <Image
          src="/images/nanoservice-logo.png"
          alt="nanoservice logo"
          width={142}
          height={120}
          quality={100}
        />

        <ul className={styles.pagesList}>
          <li><Link href="#">Leva e Traz</Link></li>
          <li><Link href="#">Quem Somos?</Link></li>
        </ul>
      </div>
      <div className={styles.subNav}>
        Atendemos toda Manaus <Image src="/images/svg/deliveryTruck.svg" alt="Caminhão de delivery" width={33} height={25} />
      </div>
    </nav>
  </>
}