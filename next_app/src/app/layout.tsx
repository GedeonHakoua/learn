import type { Metadata } from "next";
import "./globals.css";
import { poppins, raleway } from "@/fonts/font";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "Gedeon App",
  description: "Une application de gestin de contacts",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${poppins.className}`}>
        {children}
      </body>
    </html>
  );
}