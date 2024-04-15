import type { Metadata } from "next";
import { Lato} from "next/font/google";
import "./globals.css";
import {Old_Standard_TT } from 'next/font/google'
import nextConfig from "../next.config.mjs"
import Favicon from '/public/favicon.ico';
export const metadata: Metadata = {
  title: "Portfolio",
  description: "Albatol Portfolio",
  icons: {
    icon: `${nextConfig.basePath}/favicon.ico `, 
  }
};
const oldstandard = Old_Standard_TT({
  subsets: ['latin'],
  variable: "--font-serif",
  weight: "400"
});
const lato = Lato({
  subsets: ['latin-ext'],
  variable: "--font-sans-serif",
  weight: "300",
  style: "normal",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${oldstandard.className}` }>{children}</body>
    </html>
  );
}
