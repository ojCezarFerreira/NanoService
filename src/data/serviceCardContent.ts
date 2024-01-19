import iphoneQuebrado from '../../public/images/iphone-quebrado.png'
import notebookQuaseFechado from '../../public/images/notebook-quase-fechado.png'
import impressoraRecebendoManutencao from '../../public/images/impressora-recebendo-manutencao.png'
import placaEletronica from '../../public/images/placa-eletronica.png'
import iconCancelar from '../../public/images/svg/icone-cancelar.svg'
import iconCheck from '../../public/images/icon-check.png'
import { StaticImageData } from 'next/image'

interface serviceCardData {
  title: string
  image: StaticImageData
  contentIcon: StaticImageData
  content: string[]
}

const serviceCardDataArray: serviceCardData[] = [
  {
    title: "Reparos em Tablet e Smartphone",
    image: iphoneQuebrado,
    contentIcon: iconCancelar,
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
    image: notebookQuaseFechado,
    contentIcon: iconCancelar,
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
    image: impressoraRecebendoManutencao,
    contentIcon: iconCancelar,
    content: [
      "Não puxa papel",
      "Impressão com falhas",
      "Impressão em branco",
      "Não liga",
    ],
  },
  {
    title: "Eletrônicos em Geral",
    image: placaEletronica,
    contentIcon: iconCheck,
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