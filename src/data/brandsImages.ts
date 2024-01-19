import { StaticImageData } from 'next/image'

import android from '../../public/images/brands/android.png'
import asus from '../../public/images/brands/asus.svg'
import blackShark from '../../public/images/brands/black-shark.svg'
import caterpillar from '../../public/images/brands/caterpillar.svg'
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
import vaio from '../../public/images/brands/vaio.svg'
import xiaomi from '../../public/images/brands/xiaomi.svg'
import apple from '../../public/images/brands/logo-apple.svg'

interface brandImage {
  id: number
  brand: StaticImageData
  alt: string
}

const brands: brandImage[] = [
  { id: 1, brand: android, alt: 'Android logo' },
  { id: 2, brand: asus, alt: 'Asus logo' },
  { id: 3, brand: blackShark, alt: 'Black Shark logo' },
  { id: 4, brand: caterpillar, alt: 'Caterpillar logo' },
  { id: 5, brand: doodge, alt: 'Doodge logo' },
  { id: 6, brand: garmin, alt: 'Garmin logo' },
  { id: 7, brand: google, alt: 'Google logo' },
  { id: 8, brand: lenovo, alt: 'Lenovo logo' },
  { id: 9, brand: microsoft, alt: 'Microsoft logo' },
  { id: 10, brand: motorola, alt: 'Motorola logo' },
  { id: 11, brand: multilaser, alt: 'Multilaser logo' },
  { id: 12, brand: nokia, alt: 'Nokia logo' },
  { id: 13, brand: samsung, alt: 'Samsung logo' },
  { id: 14, brand: sony, alt: 'Sony logo' },
  { id: 15, brand: vaio, alt: 'Vaio logo' },
  { id: 16, brand: xiaomi, alt: 'Xiaomi logo' },
  { id: 17, brand: apple, alt: 'Apple logo' },
]

export default brands
