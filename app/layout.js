import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Where is My Rep? | NY',
  description: 'Check where your Representatives are located in The New York State Assembly.',
  icons: {
    icon: '/outline-ny.svg',
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
