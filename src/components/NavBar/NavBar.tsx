"use client";

import { linkTelegram, linkWpp } from '@/data/links';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import styles from './NavBar.module.css';

export default function NavBar() {
  const [menuMobileIsActive, setMenuMobileIsActive] = useState(false)

  function menuMobileAction() {
    if (typeof window !== 'undefined') {
      if (window.innerWidth > 1200) return
    }

    if (menuMobileIsActive) {
      setMenuMobileIsActive(false)
    } else {
      setMenuMobileIsActive(true)
    }
  }

  return <>
    <nav className={styles.nav}>
      <div className={menuMobileIsActive ? styles.navListActive : styles.navList}>
        <ul className={styles.contactList}>
          <li><span>Faça seu pré-orçamento <br />GRÁTIS aqui!</span></li>
          <li>
            <Link href={linkWpp}>
              <Image src="/images/svg/icon-whatsapp.svg" alt="whatsapp nano service assistencia tecnica manaus" width={70} height={70} quality={100} />
            </Link>
          </li>
          <li>
            <Link href={linkTelegram}>
              <Image src="/images/svg/icon-telegram.svg" alt="telegram nano service assistencia tecnica manaus" width={70} height={70} quality={100} />
            </Link>
          </li>
        </ul>

        <Link href='/' className={styles.logoDesk}>
          <Image
            src="/images/nanoservice-logo.png"
            alt="nanoservice logo"
            width={142}
            height={120}
            quality={100}

          />
        </Link>
        <ul className={styles.pagesList}>
          <li><Link href="/leva-e-traz" onClick={menuMobileAction}>Leva e Traz</Link></li>
          <li><Link href="/#quemSomos" onClick={menuMobileAction}>Quem Somos?</Link></li>
        </ul>
      </div>

      <div className={menuMobileIsActive ? styles.navListMobileWithMenuActive : styles.navListMobile}>
        <Link href='/'>
          <Image
            src="/images/nanoservice-clean-logo.png"
            alt="nanoservice logo"
            width={70}
            height={80}
            quality={100}
            className={styles.logoMobile}
          />
        </Link>

        <Link href={linkWpp} className={styles.navContactButtonMobile}>
          <Image src="/images/svg/icon-whatsapp.svg" alt="whatsapp nano service assistencia tecnica manaus" width={40} height={40} quality={100} />
        </Link>

        <Link href={linkTelegram} className={styles.navContactButtonMobile}>
          <Image src="/images/svg/icon-telegram.svg" alt="telegram nano service assistencia tecnica manaus" width={40} height={40} quality={100} />
        </Link>

        <button aria-label="botao-menu" className={menuMobileIsActive ? styles.hamburguerActive : styles.hamburguer} onClick={menuMobileAction}></button>
      </div>
      <div className={styles.subNav}>
        Atendemos toda Manaus <Image src="/images/svg/deliveryTruck.svg" alt="Assitência Técnica Manaus Delivery" width={33} height={25} />
      </div>
    </nav>
  </>
}