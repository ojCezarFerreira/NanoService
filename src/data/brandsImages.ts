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

interface brandImage {
  brand: StaticImageData
  alt: string
}

const brands: brandImage[] = [
  { brand: android, alt: 'Android logo' },
  { brand: asus, alt: 'Asus logo' },
  { brand: blackShark, alt: 'Black Shark logo' },
  { brand: caterpillar, alt: 'Caterpillar logo' },
  { brand: doodge, alt: 'Doodge logo' },
  { brand: garmin, alt: 'Garmin logo' },
  { brand: google, alt: 'Google logo' },
  { brand: lenovo, alt: 'Lenovo logo' },
  { brand: microsoft, alt: 'Microsoft logo' },
  { brand: motorola, alt: 'Motorola logo' },
  { brand: multilaser, alt: 'Multilaser logo' },
  { brand: nokia, alt: 'Nokia logo' },
  { brand: samsung, alt: 'Samsung logo' },
  { brand: sony, alt: 'Sony logo' },
  { brand: vaio, alt: 'Vaio logo' },
  { brand: xiaomi, alt: 'Xiaomi logo' }
]

export default brands
