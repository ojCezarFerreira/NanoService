import Image, { StaticImageData } from 'next/image'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  background: StaticImageData
  title: string
  contentIcon: StaticImageData[]
  content: string[]
}

export default function ServiceCard(props: ServiceCardProps) {
  function renderListContent() {
    return props.content.map((content, i) => {
      return <li key={Math.random()}>
        <Image
          src={props.contentIcon[i] ?? props.contentIcon[0]}
          alt="Nano Service assitencia tecnica manaus impressora HP Epson Cafeteira celular smartphone"
          width={30}
          height={30}
          quality={100}
        />
        {content}
      </li>
    })
  }


  return <>
    <div className={styles.card}>
      <Image
        src={props.background}
        alt='Assitencia tecnica manaus nano service samsung xiaomi doogee apple nokia sony vaio asus motorola positivo caterpillar garmin lenovo HP epson brothers'
        fill
        sizes='(max-width: 1920) 310px'
        quality={100}
        className={styles.cardBg}
      />
      <h2>{props.title}</h2>

      <div className={styles.content}>
        <ul>
          {renderListContent()}
        </ul>

      </div>
    </div>
  </>
}