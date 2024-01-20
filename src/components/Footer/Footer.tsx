import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'
import { linkFacebook, linkInstagram, linkTelegram, linkWpp } from '@/data/links'

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
            WhatsApp e Telegram: (92) 92985-3348
            <br /> <br />
            E-mail: comercial@nanoservice.net.br
          </div>
          <div className={styles.socialMedias}>
            <Link href={linkInstagram} target='_blank'>
              <Image
                src="/images/icon-instagram.png"
                alt="icone instagram"
                quality={100}
                width={90}
                height={90}
              />
            </Link>
            <Link href={linkFacebook} target='_blank'>
              <Image
                src="/images/icon-facebook.png"
                alt="icone facebook"
                quality={100}
                width={90}
                height={90}
              />
            </Link>
            <Link href={linkWpp} target='_blank'>
              <Image
                src="/images/icon-whatsapp.png"
                alt="icone whatsapp"
                quality={100}
                width={90}
                height={90}
              />
            </Link>
            <Link href={linkTelegram} target='_blank'>
              <Image
                src="/images/icon-telegram.png"
                alt="icone telegram"
                quality={100}
                width={90}
                height={90}
              />
            </Link>
          </div>
        </section>

      </div>
      <div className={styles.copyright}>
        © Copyright NanoTech. Todos os direitos reservados
        <br />
        Desenvolvido por NanoTech
      </div>
    </footer>
  </>
}