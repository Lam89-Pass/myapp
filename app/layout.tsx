import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: {
    default: "Muhamad Nur Salam | Portfolio Teknik Informatika UNPAS",
    template: "%s | Muhamad Nur Salam"
  },
  description: "Portofolio resmi Muhamad Nur Salam (Kalyn). Mahasiswa Teknik Informatika Universitas Pasundan, Game Developer KDS Studio, dan Founder Bengkeliaja.",
  keywords: ["Muhamad Nur Salam", "Muhamad Nur Salam UNPAS", "Kalyn", "KDS Studio", "Bengkeliaja", "Teknik Informatika UNPAS", "AgriSmart"],
  authors: [{ name: "Muhamad Nur Salam" }],
  openGraph: {
    title: "Muhamad Nur Salam | Portfolio",
    description: "Mahasiswa Teknik Informatika UNPAS & Game Developer.",
    url: "https://googlestudentambassador.id", // Ganti dengan domainmu nanti
    siteName: "Portfolio Muhamad Nur Salam",
    locale: "id_ID",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}