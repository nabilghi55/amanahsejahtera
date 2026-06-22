import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "PT Amanah Surya Sejahtera | Solusi Properti, Kontraktor & Homestay Terintegrasi",
  description: "Selamat datang di ekosistem digital PT Amanah Surya Sejahtera. Kami menyediakan perumahan berkualitas, jasa konstruksi kontraktor terpercaya, dan penginapan harian, mingguan, bulanan di Amanah Homestay.",
  keywords: "PT Amanah Surya Sejahtera, developer perumahan, rumah subsidi, rumah komersial, renovasi rumah, kontraktor bangunan, amanah homestay, penginapan harian, sewa rumah",
  openGraph: {
    title: "PT Amanah Surya Sejahtera | Solusi Properti, Kontraktor & Homestay",
    description: "Ekosistem digital properti dan konstruksi terintegrasi. Cari rumah impian, sewa homestay nyaman, atau bangun proyek impian Anda.",
    type: "website",
    locale: "id_ID",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('theme');
                  var system = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                  var theme = saved || system;
                  document.documentElement.setAttribute('data-theme', theme);
                } catch (e) {}
              })()
            `,
          }}
        />
      </head>
      <body>
        <Navbar />
        <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
