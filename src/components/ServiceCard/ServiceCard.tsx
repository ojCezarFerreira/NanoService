import Image, { StaticImageData } from 'next/image'
import styles from './ServiceCard.module.css'

interface ServiceCardProps {
  background: StaticImageData
}

export default function ServiceCard(props: ServiceCardProps) {
  return <>
    <div className={styles.card}>
      <Image
        src={props.background}
        alt='Serviços tecnicos especializado manaus'
        fill={true}
        quality={100}
        placeholder='blur'
      />
    </div>
  </>
}