
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "../../seoaudit/app/Nav";
import Footer from "../../seoaudit/app/Footer";
import { ReactNode } from 'react';
import { HeroHighlight } from "./components/ui/hero-highlight";
import { OBProvider } from "./contexts/Result";
import { Analytics } from "@vercel/analytics/react"
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};


export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <OBProvider> */}
          {children}
          <Analytics />
          <Footer />
        {/* </OBProvider> */}


      </body>
    </html>
  );
}
