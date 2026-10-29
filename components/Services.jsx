"use client";

import { useState } from "react";
import { 
  FaLaptopCode, 
  FaMobileScreen, 
  FaWifi, 
  FaCheck, 
  FaWhatsapp, 
  FaArrowRight, 
  FaMicrochip,
  FaBolt,
  FaShieldHalved
} from "react-icons/fa6";

export default function Services() {
  const [activeCategory, setActiveCategory] = useState("all");

  const categories = [
    { id: "all", label: "Semua Layanan" },
    { id: "laptop", label: "Laptop & PC", icon: <FaLaptopCode className="inline mr-1.5" /> },
    { id: "hp", label: "Smartphone", icon: <FaMobileScreen className="inline mr-1.5" /> },
    { id: "wifi", label: "Jaringan & WiFi", icon: <FaWifi className="inline mr-1.5" /> },
  ];

  const servicesData = [
    {
      id: "laptop-hardware",
      category: "laptop",
      title: "Perbaikan Hardware & Komponen Laptop",
      subtitle: "Ganti suku cadang, reballing chip, perbaikan engsel, LCD, motherboard & power failure.",
      price: "Rp 75.000 - Rp 350.000*",
      popular: true,
      features: [
        "Penggantian / Upgrade RAM & SSD M.2 NVMe",
        "Ganti Keyboard, Touchpad, Baterai, & Speaker",
        "Perbaikan / Penggantian Layar LCD & Flexibel",
        "Pembersihan Fan & Deep Cleaning Thermal Paste Premium",
        "Diagnosa Motherboard & Power IC Korsleting",
      ],
      badge: "Paling Banyak Dipilih",
      warranty: "Garansi 30 Hari",
      turnaround: "Bisa 1-2 Jam",
    },
    {
      id: "laptop-software",
      category: "laptop",
      title: "Instalasi OS & Optimalisasi Software",
      subtitle: "Penanganan sistem crash, virus, booting lambat, bluescreen, dan install aplikasi produktivitas.",
      price: "Rp 50.000 - Rp 150.000",
      popular: false,
      features: [
        "Instal Ulang Windows 10 / 11 & MacOS Original",
        "Install Driver Lengkap & Software Standar Kerja/Desain",
        "Pembersihan Malware, Trojan, & Virus Berat",
        "Backup & Restore Data Partisi File Penting",
        "Optimasi Startup & Tuning Registry Anti Lelet",
      ],
      badge: "Siap Pakai",
      warranty: "Garansi Software 14 Hari",
      turnaround: "30 - 60 Menit",
    },
    {
      id: "smartphone-repair",
      category: "hp",
      title: "Perbaikan Smartphone & Tablet",
      subtitle: "Solusi cepat untuk layar pecah, ganti baterai drop, reset sandi, dan optimalisasi memori.",
      price: "Mulai Rp 35.000*",
      popular: true,
      features: [
        "Pemasangan Tempered Glass Presisi Anti Gelembung",
        "Reset Setelan Pabrik & Bypass Lupa Akun / Sandi",
        "Pembersihan Memori Penuh (Junk Files & Cache)",
        "Ganti Baterai Tanam & Penggantian Port Charger USB",
        "Ganti LCD Touchscreen Berbagai Merek HP",
      ],
      badge: "Ekonomis & Cepat",
      warranty: "Garansi Hardware 14-30 Hari",
      turnaround: "Bisa Ditunggu",
    },
    {
      id: "wifi-network",
      category: "wifi",
      title: "Instalasi WiFi & Penguatan Sinyal Jaringan",
      subtitle: "Setup jaringan internet stabil untuk rumah, kantor, kos-kosan, maupun kafe / resto.",
      price: "Rp 350.000 - Rp 400.000",
      popular: false,
      features: [
        "Pemasangan & Setup Access Point / Router Baru",
        "Konfigurasi SSID, Ganti Password, & Proteksi Firewall",
        "Penggantian / Upgrade Perangkat WiFi Biar Tembus Tembok",
        "Crimping Kabel LAN Cat6 & Pengkabelan Rapi",
        "Manajemen Bandwidth Anti Rebutan Kuota",
      ],
      badge: "Sinyal Super Ngebut",
      warranty: "Garansi Jaringan 30 Hari",
      turnaround: "Kunjungan / On-Site",
    },
    {
      id: "deep-cleaning",
      category: "laptop",
      title: "Thermal Maintenance & Deep Cleaning",
      subtitle: "Cegah overheat dan kipas berisik dengan pembersihan sirkulasi udara dan penggantian thermal paste.",
      price: "Rp 75.000 - Rp 120.000",
      popular: false,
      features: [
        "Pembersihan Debu Kipas & Heatsink Pendingin",
        "Aplikasi Thermal Paste Berkualitas Tinggi (Arctic / Thermal Grizzly)",
        "Penggantian Thermal Pad pada VRAM Laptop Gaming",
        "Penurunan Suhu Kerja hingga 10°C - 20°C",
        "Pemeriksaan Kesehatan Hardware Secara Menyeluruh",
      ],
      badge: "Laptop Adem & Awet",
      warranty: "Garansi Pemasangan",
      turnaround: "45 Menit",
    },
    {
      id: "data-recovery",
      category: "laptop",
      title: "Data Recovery & Backup Darurat",
      subtitle: "Penyelamatan dokumen, foto, skripsi, dan data bisnis dari hardisk eksternal atau laptop rusak.",
      price: "Rp 100.000 - Rp 350.000",
      popular: false,
      features: [
        "Penyelamatan File dari Laptop Mati Total / Bootloop",
        "Recovery Data Hardisk Terformat atau Terhapus",
        "Migrasi Data Penuh dari HDD Lama ke SSD Baru (Cloning 1:1)",
        "Pemberian Enkripsi dan Privasi Dokumen 100% Dijamin",
        "Media Backup Flashdisk / Cloud Siap Pakai",
      ],
      badge: "Penyelamat Dokumen",
      warranty: "Data Rahasia Terjaga",
      turnaround: "1 - 3 Jam",
    },
  ];

  const filteredServices = activeCategory === "all" 
    ? servicesData 
    : servicesData.filter(s => s.category === activeCategory);

  return (
    <section id="layanan" className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase">
            <FaMicrochip />
            <span>Katalog Solusi Lengkap</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Layanan Servis <span className="text-gradient-tech">Digital Service Lab</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Semua proses pengerjaan dilakukan dengan alat presisi tinggi dan transparansi penuh. 
            Tanpa biaya siluman, konfirmasi harga selalu dilakukan sebelum pengerjaan dimulai.
          </p>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap justify-center gap-2 pt-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeCategory === cat.id
                    ? "bg-gradient-to-r from-cyan-600 to-blue-600 text-white shadow-md shadow-cyan-500/25 scale-105"
                    : "bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400/50"
                }`}
              >
                {cat.icon}
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-14">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className={`relative glass-panel rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-cyan-500/10 hover:border-cyan-500/50 group ${
                service.popular ? "border-cyan-500/60 dark:border-cyan-500/60" : ""
              }`}
            >
              {/* Card Badge if Popular */}
              {service.popular && (
                <div className="absolute -top-3 right-6 bg-gradient-to-r from-cyan-500 to-blue-600 text-white text-[11px] font-extrabold px-3 py-1 rounded-full shadow-md flex items-center gap-1.5">
                  <FaBolt className="text-[10px]" />
                  <span>{service.badge}</span>
                </div>
              )}

              {/* Upper Section */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-mono font-semibold px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 text-cyan-600 dark:text-cyan-400 border border-slate-200 dark:border-slate-700">
                    {service.turnaround}
                  </span>
                  <span className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 flex items-center gap-1">
                    <FaShieldHalved className="text-xs" />
                    {service.warranty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2 mb-4 leading-relaxed">
                  {service.subtitle}
                </p>

                {/* Price Display */}
                <div className="p-3.5 rounded-2xl bg-cyan-50/60 dark:bg-slate-900/60 border border-cyan-100 dark:border-cyan-900/40 my-4">
                  <span className="text-[11px] font-semibold text-slate-500 dark:text-slate-400 block">
                    Estimasi Biaya Mulai Dari:
                  </span>
                  <span className="text-xl font-extrabold text-cyan-700 dark:text-cyan-300 font-mono">
                    {service.price}
                  </span>
                </div>

                {/* Features List */}
                <p className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mt-4 mb-2 font-mono">
                  Cakupan Tindakan:
                </p>
                <ul className="space-y-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  {service.features.map((feat, i) => (
                    <li key={i} className="flex items-start gap-2.5">
                      <FaCheck className="text-cyan-500 text-xs mt-1 flex-shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-6 mt-6 border-t border-slate-200/80 dark:border-slate-800/80">
                <a
                  href={`https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20tertarik%20dengan%20layanan:%20${encodeURIComponent(
                    service.title
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-xl text-sm font-bold text-slate-900 dark:text-white bg-slate-100 hover:bg-gradient-to-r hover:from-cyan-600 hover:to-blue-600 hover:text-white dark:bg-slate-800 dark:hover:bg-gradient-to-r dark:hover:from-cyan-600 dark:hover:to-blue-600 border border-slate-200 dark:border-slate-700 group-hover:border-transparent transition-all duration-200 cursor-pointer"
                >
                  <FaWhatsapp className="text-base text-emerald-500 group-hover:text-white" />
                  <span>Konsultasikan Servis Ini</span>
                  <FaArrowRight className="text-xs ml-1" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote on Pricing */}
        <p className="text-center text-xs text-slate-400 dark:text-slate-500 mt-10">
          * Biaya di atas merupakan estimasi jasa dan dapat bervariasi sesuai tipe perangkat, tingkat kerusakan, serta tipe suku cadang yang digunakan.
        </p>

      </div>
    </section>
  );
}

