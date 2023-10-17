import type { Metadata } from 'next'
import { Inter, Roboto } from 'next/font/google'
import './globals.css'
import Navigation from './components/layouts/Navigation'
import Aside from './components/layouts/Aside'
import Footer from './components/layouts/Footer'
import NewsLetterBanner from './components/shared/NewsLetterBanner'
import { ContextProvider } from './components/shared/ContextProvider'
// import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })
const roboto = Roboto({
    subsets: ['latin'],
    weight: ["100", "400", "700"],
})

export const metadata: Metadata = {
  title: 'Efortlex Stores',
  description: 'Get your daily essentials at the best prices, everything from groceries to electronics.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/brandLogo.svg" sizes='32x32' />
      </head>
      <ContextProvider>
        <body className={roboto.className + " relative"}>
          <Navigation />
          <Aside />
          <main>
            {children}
          </main>
          <NewsLetterBanner />
          <Footer />
        </body>
      </ContextProvider>
    </html>
  )
}
