"use client";

import Image from 'next/image'
import styles from './NavBar.module.css'
import Link from 'next/link'
import { linkTelegram, linkWpp } from '@/data/links'
import { useState } from 'react';

import foguete from '../../../public/images/foguete.png'

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
            <Link href={linkWpp} target='_blank'>
              <Image src="/images/icon-whatsapp.png" alt="icone whatsapp" width={70} height={70} quality={100} />
            </Link>
          </li>
          <li>
            <Link href={linkTelegram} target='_blank'>
              <Image src="/images/icon-telegram.png" alt="icone telegram" width={70} height={70} quality={100} />
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
          <li><Link href="/leva-e-traz" onClick={menuMobileAction} id={styles.levaETraz}>
            Leva e Traz
            <Image
              src={foguete}
              alt="foguete"
              width={30}
              height={30}
            />
          </Link></li>
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

        <Link href={linkWpp} target='_blank' className={styles.navContactButtonMobile}>
          <Image src="/images/icon-whatsapp.png" alt="icone whatsapp" width={40} height={40} quality={100} />
        </Link>

        <Link href={linkTelegram} target='_blank' className={styles.navContactButtonMobile}>
          <Image src="/images/icon-telegram.png" alt="icone telegram" width={40} height={40} quality={100} />
        </Link>

        <button className={menuMobileIsActive ? styles.hamburguerActive : styles.hamburguer} onClick={menuMobileAction}></button>
      </div>
      <div className={styles.subNav}>
        Atendemos toda Manaus <Image src="/images/svg/deliveryTruck.svg" alt="Caminhão de delivery" width={33} height={25} />
      </div>
    </nav>
  </>
}