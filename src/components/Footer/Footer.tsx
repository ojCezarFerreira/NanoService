import { linkFacebook, linkInstagram, linkTelegram, linkWpp } from '@/data/links'
import Image from 'next/image'
import Link from 'next/link'
import styles from './Footer.module.css'

export default function Footer() {
  return <>
    <footer className={styles.footer}>
      <div className={styles.content}>
        <Image
          src="/images/nanoservice-logo.png"
          alt="nanoservice logo"
          width={350}
          height={350}
          quality={100}
          className={styles.logo}
        />

        <section className={styles.contactSection}>
          <h2>Contato</h2>
          <div className={styles.contactMeans}>
            WhatsApp e Telegram: (99) 99999-9999
            <br /> <br />
            E-mail: comercial@nanoservice.net.br
          </div>
          <div className={styles.socialMedias}>
            <Link href={linkInstagram}>
              <Image
                src="/images/svg/icon-instagram.svg"
                alt="icone instagram"
                quality={100}
                width={70}
                height={70}
              />
            </Link>
            <Link href={linkFacebook}>
              <Image
                src="/images/svg/icon-facebook.svg"
                alt="icone facebook"
                quality={100}
                width={70}
                height={70}
              />
            </Link>
            <Link href={linkWpp}>
              <Image
                src="/images/svg/icon-whatsapp.svg"
                alt="icone whatsapp"
                quality={100}
                width={70}
                height={70}
              />
            </Link>
            <Link href={linkTelegram} target='_blank'>
              <Image
                src="/images/svg/icon-telegram.svg"
                alt="icone telegram"
                quality={100}
                width={70}
                height={70}
              />
            </Link>
          </div>
        </section>

      </div>
      <div className={styles.copyright}>
        © Copyright NanoTech. Todos os direitos reservados
        <br />
        Desenvolvido por Cynk Agência Digital
      </div>
    </footer>
  </>
}