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
      <head>
        <style dangerouslySetInnerHTML={{
          __html: `
                  :root {
                    --background-color: #3E639E;
                    --main-orange: #ED9B40;
                    --main-orange-70opacity: rgba(237, 155, 64, .7);
                    --main-black: #1C1C1C;
                    --main-black-70opacity: rgba(28, 28, 28, .7);
                    --main-red: #DE2027;
                    --main-red-70opacity: rgba(222, 32, 39, .7);
                    --main-green: #7CEA9C;
                    --main-green-hover: #6fcf8a;
                    --main-green-70opacity: rgba(124, 234, 156, .7);
                    --main-purple: #6a0dad;
                    --main-purple-hover: #3d0466;
                  }

                  * {
                    padding: 0;
                    margin: 0;
                    box-sizing: border-box;
                  }

                  html {
                    scroll-behavior: smooth;
                  }

                  body {
                    overflow-x: hidden;
                  }

                  a {
                    text-decoration: none;
                    color: inherit;
                  }

                  ul {
                    list-style: none;
                  }

                  #navTopSpace {
                    height: 170px;
                  }

                  @media (max-width: 1200px) {
                    #navTopSpace {
                      height: 110px;
                    }
                  }
          `,
        }} />
      </head>

      <body>
        <NavBar />
        <div id="navTopSpace"></div>
        {children}
        <Footer />
      </body>
    </html>
  )
}
