import { poppins, nunito_sans } from "../lib/fonts"
import "./globals.css";
import dynamic from 'next/dynamic'
import Header from "@/components/header/Header";
const Footer = dynamic(() => import("@/components/footer/Footer"))

export const metadata = {
  title: "LENS Corporation | Biometrics &amp; Computer Vision",
  description: "Welcome to LENS Corporation, a leading AI and biometrics company driving innovation at the intersection of technology and identity verification. Discover our cutting-edge solutions utilizing artificial intelligence and biometric technologies to enhance security and streamline authentication processes.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${nunito_sans} ${poppins}`}>
        <Header />
        <main className="poppins">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
