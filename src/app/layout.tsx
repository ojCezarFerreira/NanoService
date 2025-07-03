import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'

import Footer from '@/components/Footer/Footer'
import NavBar from '@/components/NavBar/NavBar'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] })

export const metadata: Metadata = {
  title: 'Nano Service',
  description: 'Serviço Técnico Especializado Multimarca de Manaus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br" className={montserrat.className}>
      <body>
        <NavBar />
        <div id="navTopSpace"></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
