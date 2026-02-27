import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from '@/components/ui/ScrollToTop';
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: {
    default: "Muhamad Nur Salam | Portfolio",
    template: "%s | Muhamad Nur Salam"
  },
  icons: {
    icon: 'favicon.png',},
  description: "Portofolio resmi Muhamad Nur Salam. Mahasiswa Teknik Informatika Universitas Pasundan, Roblox Developer KDS Studio, dan Founder Bengkeliaja.",
  keywords: ["Muhamad Nur Salam", "Muhamad Nur Salam UNPAS", "Kalyn", "KDS Studio", "Bengkeliaja", "Teknik Informatika UNPAS", "AgriSmart", "Universitas Pasundan", "SMK Negeri 1 Cidaun", "Cyber security", "Bypas Community", "GDGoC UNPAS", "Mahasiswa IT", "Pendaki Gunung Muhamad Nur Salam", "Konten Kreator"],
  authors: [{ name: "Muhamad Nur Salam" }],
  openGraph: {
    title: "Muhamad Nur Salam | Portfolio",
    description: "Mahasiswa Teknik Informatika UNPAS",
    url: "https://googlestudentambassador.id",
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
    // Wajib tambah suppressHydrationWarning di tag html jika pakai next-themes
    <html lang="id" className="scroll-smooth" suppressHydrationWarning>
      <body className="antialiased bg-white dark:bg-slate-950 text-slate-900 dark:text-slate-50 transition-colors duration-300">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
          <ScrollToTop />
        </ThemeProvider>
      </body>
    </html>
  );
}