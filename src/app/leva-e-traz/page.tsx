import Image from 'next/image'
import styles from './page.module.css'

import Link from 'next/link'
import { linkTelegram, linkWpp } from '@/data/links'

import deliveryMan from '@/../public/images/svg/delivery-man.svg'

export default function LevaETraz() {
  return <>
    <main className={styles.container}>
      <section className={styles.content}>
        <div>
        </div>
        <h1>Leva e Traz</h1>
        <p>
          O “Leva e Traz” é o serviço de delivery de equipamentos da NanoService onde buscamos, diagnosticamos, reparamos e devolvemos o seu equipamento sem você sair de casa ou do trabalho.
        </p>
        <p>
          O custo inicial será somente do translado, valor este que é retido como calção à ser abatido do valor final da possível manutenção.
        </p>
        <p>
          Para saber mais, entre em contato conosco através dos nossos canais oficias como; Telegram, WhatsApp e Instagram.
        </p>

        <div className={styles.contactButtons}>
          <Link href={linkWpp} target='_blank'>
            <Image src="/images/svg/icon-whatsapp.svg" alt="whatsapp nano service assistencia tecnica manaus" width={60} height={60} quality={100} />
          </Link>

          <Link href={linkTelegram} target='_blank'>
            <Image src="/images/svg/icon-telegram.svg" alt="telegram nano service assistencia tecnica manaus" width={60} height={60} quality={100} />
          </Link>
        </div>

        <div className={styles.backgroundImage}>
          <Image
            src={deliveryMan}
            alt="assitencia tecnica manaus nano service reparo de tela apple samsung iphone lenovo motorola acer dell asus"
            width={300}
            height={300}
          />
        </div>
      </section>
    </main>

  </>
}