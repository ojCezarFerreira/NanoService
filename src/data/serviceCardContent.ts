import { StaticImageData } from 'next/image'

import blackBack from '../../public/images/black-back.webp'
import brokenTv from '../../public/images/broken-tv.png'
import cartucho from '../../public/images/cartucho.webp'
import consoleControl from '../../public/images/console-control.png'
import iphoneQuebrado from '../../public/images/iphone-quebrado.webp'
import laptop from '../../public/images/laptop.webp'
import cafeMachine from '../../public/images/máquina-de-cafe.png'
import projetor from '../../public/images/projetor.png'
import xboxSerieS from '../../public/images/serie-xbox-s.png'
import iconCancelar from '../../public/images/svg/icone-cancelar.svg'


interface serviceCardData {
  title: string
  image: StaticImageData
  contentIcon: StaticImageData[]
  content: string[]
}

const serviceCardDataArray: serviceCardData[] = [
  {
    title: "Reparos em Tablet e Smartphone",
    image: iphoneQuebrado,
    contentIcon: [iconCancelar],
    content: [
      "Tela Quebrada",
      "Molhou",
      "Não liga",
      "Não reconhece chip",
      "Não carrega"
    ],
  },
  {
    title: "Reparos em Notebook",
    image: laptop,
    contentIcon: [iconCancelar],
    content: [
      "Display manchado",
      "Não liga",
      "Lentidão ao ligar",
      "Lentidão durante o uso",
      "Molhou",
      "Carenagem quebrou"
    ],
  },
  {
    title: "Reparos em Impressora",
    image: cartucho,
    contentIcon: [iconCancelar],
    content: [
      "Não puxa papel",
      "Impressão com falhas",
      "Impressão em branco",
      "Não liga",
    ],
  },
  {
    title: "Eletrônicos em Geral",
    image: blackBack,
    contentIcon: [brokenTv, xboxSerieS, consoleControl, projetor, cafeMachine],
    content: [
      "Televisor",
      "Video Game",
      "Controle",
      "Projetor",
      "Cafeteira",
    ],
  },
]

export default serviceCardDataArray