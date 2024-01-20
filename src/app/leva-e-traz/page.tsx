import Image from 'next/image'
import styles from './page.module.css'

import background from '../../../public/images/leva-e-traz.png'
import Link from 'next/link'
import { linkTelegram, linkWpp } from '@/data/links'

export default function LevaETraz() {
  return <>
    <main className={styles.container}>
      <section className={styles.content}>
        <div className={styles.background}>
          <Image
            src={background}
            alt="pessoa entregando uma caixa"
            fill={true}
          />
        </div>
        <h1>Leva e Traz</h1>
        <p>
          O “Leva e Traz” é o serviço de delivery de equipamentos da NanoService onde buscamos, diagnosticamos, reparamos e devolvemos o seu equipamento sem você sair de casa ou do trabalho.
        </p>
        <p>
          O custo inicial será somente do translado e hora técnica do diagnostico, valor este que é retido como calção à ser abatido do valor final da possível manutenção.
        </p>
        <p>
          Para saber mais, entre em contato conosco através dos nossos canais oficias como; Telegram, WhatsApp e Instagram.
        </p>

        <div className={styles.contactButtons}>
          <Link href={linkWpp} target='_blank'>
            <Image src="/images/icon-whatsapp.png" alt="icone whatsapp" width={70} height={70} quality={100} />
          </Link>

          <Link href={linkTelegram} target='_blank'>
            <Image src="/images/icon-telegram.png" alt="icone telegram" width={70} height={70} quality={100} />
          </Link>
        </div>
      </section>
    </main>

  </>
}