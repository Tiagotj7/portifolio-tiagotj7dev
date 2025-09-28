// app/layout.tsx
import './globals.css'
import { Orbitron } from 'next/font/google'

const orbitron = Orbitron({ subsets: ['latin'], weight: ['400', '700'] });

export const metadata = {
  title: 'Portfólio Tiago Carvalho',
  description: 'Portfólio pessoal de Tiago Carvalho - Desenvolvedor Front-End e Software',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body className={orbitron.className}>{children}</body>
    </html>
  )
}
