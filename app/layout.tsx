import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({ 
  subsets: ['latin'], 
  weight: '400'
})

export const metadata: Metadata = {
  title: 'Nizar Alghifary',
  description: 'Hi, I am Nizar Alghifary, a web developer from Indonesia',
  icons: {
    icon: "/Nizar.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={poppins.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}