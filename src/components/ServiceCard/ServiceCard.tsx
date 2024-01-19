import Image, { StaticImageData } from 'next/image'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  background: StaticImageData
  title: string
  contentIcon: StaticImageData
  content: string[]
}

export default function ServiceCard(props: ServiceCardProps) {
  function renderListContent() {
    return props.content.map((content, i) => {
      return <li key={i}>
        <Image
          src={props.contentIcon}
          alt="Botao vermelho com um X no centro que indica negatividade"
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
        alt='Serviços tecnicos especializado manaus'
        fill={true}
        quality={100}
      />
      <h2>{props.title}</h2>

      <div className={styles.content}>
        <ul>
          {renderListContent()}
        </ul>

        <span>E muito mais...</span>
      </div>
    </div>
  </>
}