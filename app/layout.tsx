import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";
import SplashScreen from "@/components/splash-screen";

const inter = Inter({
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Nizar Alghifary - Developer Portfolio",
  description: "Hi, I am Nizar Putra Alghifary, a web developer from Indonesia.",
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
    locale: "id",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <SplashScreen>
            {children}
          </SplashScreen>
        </ThemeProvider>
      </body>
    </html>
  );
}