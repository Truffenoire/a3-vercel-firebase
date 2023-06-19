import './globals.css'
import { Inter } from 'next/font/google'

import Nav from '../components/Nav/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'A3 Patrimoine',
  description: 'Bienvenue dans la gestion de votre patrimoine.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={inter.className}><Nav/> {children}</body>
    </html>
  )
}
