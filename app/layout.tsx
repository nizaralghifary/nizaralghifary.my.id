import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import './globals.css'

import { ThemeProvider } from "@/components/theme-provider"
import { Analytics } from "@vercel/analytics/react"

const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
})
export const metadata: Metadata = {
  title: "Nizar Alghifary",
  description: "Hi, I am Nizar Alghifary, a web developer from Indonesia",
  icons: {
    icon: "/Nizar.svg",
  },
  openGraph: {
    title: "Nizar Alghifary",
    description: "Web developer from Indonesia",
    url: "https://www.nizaralghifary.my.id",
    siteName: "Nizar Alghifary Portfolio",
    images: [
      {
        url: "/Nizar.svg", 
        width: 800,
        height: 600,
        alt: "Nizar Alghifary",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Nizar Alghifary",
    description: "Hi, I am Nizar Alghifary, a web developer from Indonesia",
    images: ["/Nizar.svg"], 
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
          storageKey="nizar-theme"
        >
          {children}
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  )
}