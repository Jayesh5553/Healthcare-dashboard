import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Health',
  description: 'Created with v0',
  generator: 'Health',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
