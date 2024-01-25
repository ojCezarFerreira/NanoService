import './globals.css'

import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import { GoogleAnalytics } from '@next/third-parties/google'

import NavBar from '@/components/NavBar/NavBar'
import Footer from '@/components/Footer/Footer'

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
    <html lang="pt-br">
      <body className={montserrat.className}>
        <NavBar />
        <div id="navTopSpace"></div>
        {children}
        <Footer />
        <GoogleAnalytics gaId='G-W6LXP45501' />
      </body>
    </html>
  )
}
