import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], weight: ['700'] })

export const metadata: Metadata = {
  title: 'Nano Service',
  description: 'Assitência Tecnica Especializada Multimarcas de Manaus',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={montserrat.className}>{children}</body>
    </html>
  )
}
