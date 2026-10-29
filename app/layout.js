import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Providers from "./providers";

const jakartaFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
  variable: "--font-jakarta",
});

export const metadata = {
  title: "Digital Service Lab | Solusi Reparasi Gadget & Layanan Digital Bergaransi",
  description: "Layanan perbaikan laptop, komputer, smartphone, dan instalasi jaringan WiFi berstandar teknisi profesional. Cepat, transparan, bergaransi resmi, dan dapat diandalkan.",
  keywords: [
    "servis laptop",
    "reparasi hp",
    "digital service lab",
    "pasang wifi",
    "ganti lcd laptop",
    "upgrade ram ssd",
    "service laptop terdekat",
    "teknisi komputer profesional"
  ],
  authors: [{ name: "Digital Service Lab" }],
  icons: {
    icon: "/logo.jpeg",
    apple: "/logo.jpeg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" data-theme="light" suppressHydrationWarning>
      <body className={`${jakartaFont.className} antialiased selection:bg-cyan-500 selection:text-white`}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
