import type { Metadata } from "next";
import { Geist, Geist_Mono, Changa, Tajawal, Oregano } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from './context/LanguageContext';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const changa = Changa({
  variable: "--font-changa",
  subsets: ["latin", "arabic"],
  weight: ["400", "700"],
});

const tajawal = Tajawal({
  variable: "--font-tajawal",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "700"],
});

const oregano = Oregano({
  variable: "--font-oregano",
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata: Metadata = {
  title: "Oriental Glimpses",
  description: "Discover the beauty of the Orient",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${changa.variable} ${tajawal.variable} ${oregano.variable}`}>
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
