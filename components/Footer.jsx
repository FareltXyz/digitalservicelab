import Image from "next/image";
import Link from "next/link";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaShieldHalved, 
  FaBolt,
  FaHeart
} from "react-icons/fa6";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/80 dark:border-slate-800/80 bg-white/60 dark:bg-slate-950/80 backdrop-blur-md pt-16 pb-12 relative overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-slate-200/60 dark:border-slate-800/60">
          
          {/* Brand Info */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <Image 
                src="/logo.jpeg" 
                alt="Digital Service Lab Logo" 
                width={42} 
                height={42} 
                className="rounded-full border border-cyan-400 object-cover shadow-sm"
              />
              <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                DIGITAL SERVICE LAB
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              Solusi digital cepat, tepat, dan terpercaya untuk perbaikan laptop, smartphone, dan instalasi jaringan. 
              Teknisi berpengalaman, peralatan diagnostik presisi, dan jaminan garansi resmi.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-600 dark:text-emerald-400">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              <span>Online Support Siap Menjawab</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Navigasi Cepat
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>
                <a href="#beranda" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Beranda
                </a>
              </li>
              <li>
                <a href="#layanan" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Katalog Layanan
                </a>
              </li>
              <li>
                <a href="#estimasi" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Cek Estimasi Biaya
                </a>
              </li>
              <li>
                <a href="#alur-kerja" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  SOP & Alur Servis
                </a>
              </li>
              <li>
                <a href="#keunggulan" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Keunggulan Lab
                </a>
              </li>
              <li>
                <a href="#testimoni" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Ulasan Pelanggan
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-cyan-600 dark:hover:text-cyan-400 transition">
                  Tanya Jawab (FAQ)
                </a>
              </li>
            </ul>
          </div>

          {/* Services List */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Layanan Utama
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <li>Perbaikan Hardware & Komponen Laptop</li>
              <li>Ganti Layar LCD & Baterai Laptop/HP</li>
              <li>Upgrade SSD NVMe & Penambahan RAM</li>
              <li>Deep Cleaning & Repaste Thermal Paste</li>
              <li>Penyelamatan File & Data Recovery</li>
              <li>Instalasi Router & Setup WiFi Cepat</li>
              <li>Troubleshoot Motherboard & Chipset</li>
            </ul>
          </div>

          {/* Contact Direct */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-900 dark:text-white">
              Hubungi Kami
            </h4>
            <div className="space-y-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              <a
                href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-emerald-500 transition"
              >
                <FaWhatsapp className="text-emerald-500 text-base" />
                <span>+62 858-9535-4443</span>
              </a>

              <a
                href="mailto:muhammadfarelwardhana@gmail.com"
                className="flex items-center gap-2 hover:text-cyan-500 transition break-all"
              >
                <FaEnvelope className="text-cyan-500 text-base flex-shrink-0" />
                <span>muhammadfarelwardhana@gmail.com</span>
              </a>

              <div className="p-3 rounded-xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs">
                <p className="font-bold text-slate-800 dark:text-slate-200 mb-0.5">
                  Workshop Operasional:
                </p>
                <p className="text-slate-500 dark:text-slate-400">
                  Senin - Sabtu: 09.00 - 20.00 WIB
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500 dark:text-slate-400">
          <p>© {currentYear} Digital Service Lab. Seluruh Hak Cipta Dilindungi.</p>
          <div className="flex items-center gap-2">
            <span>Solusi Digital Cepat, Tepat, dan Terpercaya</span>
            <span>•</span>
            <span className="flex items-center gap-1 text-cyan-600 dark:text-cyan-400 font-semibold">
              <FaShieldHalved /> Bergaransi Resmi
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}

