import { Poppins, Bungee } from "next/font/google";
import "./globals.css";
import Providers from "./providers";
const popinsFont = Poppins({ display: "swap", weight: '500', subsets: ["latin"]});

export const metadata = {
  title: "Digital Service Lab. Solusi Digital Cepat, Tepat, dan Terpercaya.",
  description: "Digital Service Lab adalah penyedia layanan servis laptop dan handphone yang fokus pada solusi cepat, rapi, dan terpercaya. Kami menangani berbagai kebutuhan mulai dari perbaikan hardware, perbaikan software, upgrade perangkat, hingga perawatan rutin agar perangkat kembali optimal.",
};

export default function RootLayout({ children }) {
  return (
    <html data-theme="light" lang="en" suppressHydrationWarnin>
      <body
        className={`${popinsFont.className} $antialiased`}
      >
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
