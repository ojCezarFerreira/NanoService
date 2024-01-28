import { StaticImageData } from 'next/image'

import android from '../../public/images/brands/android.png'
import asus from '../../public/images/brands/asus.svg'
import blackShark from '../../public/images/brands/black-shark.svg'
import caterpillar from '../../public/images/brands/caterpillar-logo.svg'
import doodge from '../../public/images/brands/doodgee.svg'
import garmin from '../../public/images/brands/garmin-logo.svg'
import google from '../../public/images/brands/google.png'
import lenovo from '../../public/images/brands/lenovo-logo.svg'
import microsoft from '../../public/images/brands/microsoft.png'
import motorola from '../../public/images/brands/motorola.png'
import multilaser from '../../public/images/brands/multilaser-logo.svg'
import nokia from '../../public/images/brands/nokia.svg'
import samsung from '../../public/images/brands/samsung.svg'
import sony from '../../public/images/brands/sony.png'
import vaio from '../../public/images/brands/vaio-logo.svg'
import xiaomi from '../../public/images/brands/xiaomi.svg'
import apple from '../../public/images/brands/logo-apple.svg'

interface brandImage {
  id: number
  brand: StaticImageData
  alt: string
}

const brands: brandImage[] = [
  { id: 1, brand: android, alt: 'assistencia tecnica manaus Android' },
  { id: 2, brand: asus, alt: ' assistencia tecnica manaus Asus' },
  { id: 3, brand: blackShark, alt: ' assistencia tecnica manaus Black Shark' },
  { id: 4, brand: caterpillar, alt: ' assistencia tecnica manaus Caterpillar' },
  { id: 5, brand: doodge, alt: ' assistencia tecnica manaus Doodge' },
  { id: 6, brand: garmin, alt: ' assistencia tecnica manaus Garmin' },
  { id: 7, brand: google, alt: ' assistencia tecnica manaus Google' },
  { id: 8, brand: lenovo, alt: ' assistencia tecnica manaus Lenovo' },
  { id: 9, brand: microsoft, alt: ' assistencia tecnica manaus Microsoft' },
  { id: 10, brand: motorola, alt: ' assistencia tecnica manaus Motorola' },
  { id: 11, brand: multilaser, alt: ' assistencia tecnica manaus Multilaser' },
  { id: 12, brand: nokia, alt: ' assistencia tecnica manaus Nokia' },
  { id: 13, brand: samsung, alt: ' assistencia tecnica manaus Samsung' },
  { id: 14, brand: sony, alt: ' assistencia tecnica manaus Sony' },
  { id: 15, brand: vaio, alt: ' assistencia tecnica manaus Vaio' },
  { id: 16, brand: xiaomi, alt: ' assistencia tecnica manaus Xiaomi' },
  { id: 17, brand: apple, alt: 'assistencia tecnica manaus Apple' },
]

export default brands
