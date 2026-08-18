// app/layout.tsx
import './globals.css'

export const metadata = {
  title: 'Tiago Carvalho — Dev Front-End & Cibersegurança',
  description: 'Portfólio pessoal de Tiago Carvalho - Desenvolvedor Front-End e de Software, com foco em cibersegurança.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
