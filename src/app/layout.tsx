import type { Metadata } from 'next'
import { Space_Grotesk } from 'next/font/google'
import './globals.css'

const groteskSans = Space_Grotesk({
  weight: '500',
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Resume builder',
  description: 'Test task'
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${groteskSans.className} antialiased min-h-screen`}>
        {children}
      </body>
    </html>
  )
}
