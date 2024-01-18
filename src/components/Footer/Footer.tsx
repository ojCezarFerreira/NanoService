import Image from 'next/image'
import styles from './Footer.module.css'
import Link from 'next/link'

export default function Footer() {
  return <>
    <footer className={styles.footer}>
      <Image
        src="/images/nanoservice-logo.png"
        alt="nanoservice logo"
        width={350}
        height={350}
        quality={100}
      />

      {/*Adicionar links aos icones das redes sociais*/}
      <section className={styles.contactSection}>
        <h2>Contato</h2>
        <div className={styles.contactMeans}>
          WhatsApp e Telegram: (92) 92985-3348
          <br /> <br />
          E-mail: comercial@nanoservice.net.br
        </div>
        <div className={styles.socialMedias}>
          <Link href="#">
            <Image
              src="/images/icon-instagram.png"
              alt="icone instagram"
              quality={100}
              width={90}
              height={90}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/icon-facebook.png"
              alt="icone facebook"
              quality={100}
              width={90}
              height={90}
            />
          </Link>
          <Link href="#">
            <Image
              src="/images/icon-whatsapp.png"
              alt="icone whatsapp"
              quality={100}
              width={90}
              height={90}
            />
          </Link>
          <Link href="#">
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
    </footer>
  </>
}