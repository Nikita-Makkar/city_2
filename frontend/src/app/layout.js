"use client";
import { useEffect } from 'react';
import { Inter } from "next/font/google";
import Header from "../_component/Header/Header"
import Footer from "../_component/Footer/Footer"
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });


export default function RootLayout({ children }) {
  useEffect(() => {
    // Извлекаем значение CSS переменной --header-bg-color из :root
    const headerBgColor = getComputedStyle(document.documentElement).getPropertyValue('--header-bg-color').trim();

    // Устанавливаем мета-тег theme-color с полученным значением
    const metaThemeColor = document.querySelector('meta[name="theme-color"]');
    if (metaThemeColor) {
      metaThemeColor.setAttribute('content', headerBgColor);
    } else {
      const newMetaTag = document.createElement('meta');
      newMetaTag.name = 'theme-color';
      newMetaTag.content = headerBgColor;
      document.head.appendChild(newMetaTag);
    }
  }, []);

  return (
    <html lang="en">   
      <body className={inter.className}>
        <Header />
        <meta name="theme-color" />
        <div className='context'>
          {children}
        </div >
        <Footer />
      </body>
    </html>
  );
}
