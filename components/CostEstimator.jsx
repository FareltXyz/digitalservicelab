"use client";

import { useState } from "react";
import { 
  FaCalculator, 
  FaLaptop, 
  FaMobileScreen, 
  FaWifi, 
  FaDesktop, 
  FaWhatsapp, 
  FaClock, 
  FaShieldHalved,
  FaCircleCheck,
  FaWrench
} from "react-icons/fa6";

export default function CostEstimator() {
  const [deviceType, setDeviceType] = useState("laptop");
  const [selectedIssue, setSelectedIssue] = useState("upgrade-ssd");
  const [customBrand, setCustomBrand] = useState("");

  const issueOptions = {
    laptop: [
      { id: "upgrade-ssd", name: "Upgrade SSD + Install OS Baru", price: "Rp 150.000 - Rp 350.000", time: "1 - 2 Jam", warranty: "Garansi 30 Hari + Garansi SSD 3 Thn" },
      { id: "cleaning-paste", name: "Deep Cleaning & Ganti Thermal Paste", price: "Rp 75.000 - Rp 120.000", time: "45 Menit", warranty: "Garansi Pemasangan" },
      { id: "lcd-screen", name: "Ganti Layar LCD Laptop Pecah/Bergaris", price: "Rp 250.000 - Rp 650.000*", time: "1 - 3 Jam", warranty: "Garansi 30 Hari" },
      { id: "keyboard-batt", name: "Ganti Keyboard / Baterai Drop", price: "Rp 100.000 - Rp 250.000*", time: "45 - 90 Menit", warranty: "Garansi 30 Hari" },
      { id: "mati-total", name: "Laptop Mati Total / Kena Air / Korslet", price: "Rp 200.000 - Rp 450.000*", time: "1 - 3 Hari (Diagnosa Chip)", warranty: "Garansi 30 Hari" },
      { id: "os-install", name: "Install Ulang Windows + Driver Lengkap", price: "Rp 50.000 - Rp 80.000", time: "45 Menit", warranty: "Garansi 14 Hari" },
    ],
    desktop: [
      { id: "pc-cleaning", name: "Maintenance & Manajemen Kabel PC Gaming", price: "Rp 100.000 - Rp 180.000", time: "1 - 2 Jam", warranty: "Garansi Pemasangan" },
      { id: "pc-assembly", name: "Jasa Rakit PC Baru & Stress Test", price: "Rp 150.000 - Rp 300.000", time: "2 - 4 Jam", warranty: "Garansi Rakit 30 Hari" },
      { id: "pc-troubleshoot", name: "PC No Display / Blue Screen / Reebot Sendiri", price: "Rp 75.000 - Rp 200.000", time: "1 - 2 Jam", warranty: "Garansi 30 Hari" },
    ],
    hp: [
      { id: "hp-tempered", name: "Pemasangan Tempered Glass Presisi", price: "Rp 35.000 - Rp 50.000", time: "15 Menit", warranty: "Hasil Presisi" },
      { id: "hp-reset", name: "Reset Sandi / Factory Reset & Bersih Memori", price: "Rp 35.000 - Rp 75.000", time: "30 Menit", warranty: "Garansi Berhasil" },
      { id: "hp-battery", name: "Ganti Baterai Tanam Smartphone", price: "Rp 85.000 - Rp 190.000*", time: "45 Menit", warranty: "Garansi 30 Hari" },
      { id: "hp-lcd", name: "Ganti LCD & Touchscreen Smartphone", price: "Rp 150.000 - Rp 400.000*", time: "1 - 2 Jam", warranty: "Garansi 30 Hari" },
    ],
    wifi: [
      { id: "wifi-install", name: "Instalasi Baru Router & Setup WiFi Rumah", price: "Rp 350.000 - Rp 400.000", time: "2 - 3 Jam", warranty: "Garansi Setup 30 Hari" },
      { id: "wifi-troubleshoot", name: "Setting Ulang Password & Perluas Jangkauan WiFi", price: "Rp 75.000 - Rp 150.000", time: "1 Jam", warranty: "Garansi 14 Hari" },
      { id: "wifi-cable", name: "Crimping & Penarikan Kabel LAN Cat6", price: "Rp 50.000 - Rp 120.000", time: "1 - 2 Jam", warranty: "Koneksi Stabil 1Gbps" },
    ],
  };

  const currentIssues = issueOptions[deviceType] || issueOptions.laptop;
  const currentSelectedData = currentIssues.find(i => i.id === selectedIssue) || currentIssues[0];

  const deviceTypesList = [
    { id: "laptop", label: "Laptop / Notebook", icon: <FaLaptop /> },
    { id: "desktop", label: "PC Desktop / Komputer", icon: <FaDesktop /> },
    { id: "hp", label: "Smartphone / Tablet", icon: <FaMobileScreen /> },
    { id: "wifi", label: "WiFi & Jaringan LAN", icon: <FaWifi /> },
  ];

  const handleDeviceChange = (type) => {
    setDeviceType(type);
    setSelectedIssue(issueOptions[type][0].id);
  };

  const waMessage = encodeURIComponent(
    `Halo Digital Service Lab!\nSaya ingin konsultasi servis dengan rincian berikut:\n- Kategori: ${deviceTypesList.find(d => d.id === deviceType)?.label}\n- Perangkat/Brand: ${customBrand.trim() || "Belum dicantumkan"}\n- Kebutuhan Servis: ${currentSelectedData?.name}\n- Estimasi yang tertera: ${currentSelectedData?.price}\n\nMohon info ketersediaan slot pengerjaan dan konfirmasi detailnya. Terima kasih!`
  );

  return (
    <section id="estimasi" className="py-20 relative bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase">
            <FaCalculator />
            <span>Simulasi Cepat & Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Cek Estimasi Biaya <span className="text-gradient-tech">Servis Anda</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Pilih jenis perangkat dan kendala yang dialami untuk mendapatkan gambaran biaya pengerjaan serta estimasi durasi servis.
          </p>
        </div>

        {/* Main Interactive Box */}
        <div className="glass-panel-glow rounded-3xl p-6 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Controls (Inputs) */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Step 1: Device Type */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  1. Pilih Tipe Perangkat:
                </label>
                <div className="grid grid-cols-2 gap-2.5">
                  {deviceTypesList.map((dt) => (
                    <button
                      key={dt.id}
                      onClick={() => handleDeviceChange(dt.id)}
                      className={`flex items-center gap-2.5 p-3 rounded-xl border text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                        deviceType === dt.id
                          ? "bg-cyan-500/15 border-cyan-500 text-cyan-700 dark:text-cyan-300 shadow-xs"
                          : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400/50"
                      }`}
                    >
                      <span className="text-base sm:text-lg text-cyan-600 dark:text-cyan-400">{dt.icon}</span>
                      <span className="truncate">{dt.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Issue Selector */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2.5">
                  2. Pilih Kerusakan / Layanan:
                </label>
                <div className="space-y-2">
                  {currentIssues.map((issue) => (
                    <label
                      key={issue.id}
                      onClick={() => setSelectedIssue(issue.id)}
                      className={`flex items-center justify-between p-3 rounded-xl border text-xs sm:text-sm font-medium cursor-pointer transition-all ${
                        selectedIssue === issue.id
                          ? "bg-cyan-500/15 border-cyan-500 text-cyan-900 dark:text-cyan-200 font-semibold"
                          : "bg-white/80 dark:bg-slate-900/80 border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:border-cyan-400/40"
                      }`}
                    >
                      <div className="flex items-center gap-2.5">
                        <span className={`w-4 h-4 rounded-full border flex items-center justify-center ${
                          selectedIssue === issue.id 
                            ? "border-cyan-500 bg-cyan-500 text-white" 
                            : "border-slate-300 dark:border-slate-700"
                        }`}>
                          {selectedIssue === issue.id && <span className="w-1.5 h-1.5 rounded-full bg-white"></span>}
                        </span>
                        <span>{issue.name}</span>
                      </div>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono hidden sm:inline">
                        {issue.time}
                      </span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Step 3: Brand Note (Optional) */}
              <div>
                <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block mb-2">
                  3. Merek & Tipe Gadget (Opsional):
                </label>
                <input
                  type="text"
                  placeholder="Contoh: Asus Vivobook 14, iPhone 11, TP-Link MR6400"
                  value={customBrand}
                  onChange={(e) => setCustomBrand(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-sm text-slate-800 dark:text-slate-200 placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500"
                />
              </div>

            </div>

            {/* Right Summary Card (Output) */}
            <div className="lg:col-span-5">
              <div className="rounded-2xl p-6 bg-gradient-to-b from-slate-900 to-slate-950 text-white border border-cyan-500/30 shadow-xl space-y-5">
                
                <div className="flex items-center justify-between pb-3 border-b border-slate-800 text-xs">
                  <span className="font-mono text-cyan-400 font-bold uppercase tracking-wider flex items-center gap-1.5">
                    <FaWrench />
                    <span>Rangkuman Estimasi</span>
                  </span>
                  <span className="px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 text-[10px] font-bold border border-emerald-500/30">
                    Live Calculation
                  </span>
                </div>

                <div>
                  <span className="text-xs text-slate-400 block">Layanan Terpilih:</span>
                  <h4 className="text-base font-bold text-white mt-1">
                    {currentSelectedData?.name}
                  </h4>
                  {customBrand.trim() && (
                    <p className="text-xs text-cyan-300 mt-1">
                      Unit: {customBrand}
                    </p>
                  )}
                </div>

                <div className="p-4 rounded-xl bg-slate-800/80 border border-slate-700/80 space-y-1">
                  <span className="text-[11px] text-slate-400 font-medium">Perkiraan Biaya Servis:</span>
                  <div className="text-2xl font-black text-cyan-300 font-mono tracking-tight">
                    {currentSelectedData?.price}
                  </div>
                  <span className="text-[10px] text-slate-400 block pt-1">
                    *Biaya final dikonfirmasi setelah diagnosa fisik di tempat.
                  </span>
                </div>

                {/* Meta details */}
                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <FaClock className="text-cyan-400" />
                      Estimasi Pengerjaan:
                    </span>
                    <span className="font-bold text-white">{currentSelectedData?.time}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <FaShieldHalved className="text-emerald-400" />
                      Jaminan Garansi:
                    </span>
                    <span className="font-bold text-emerald-300">{currentSelectedData?.warranty}</span>
                  </div>

                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-2 text-slate-400">
                      <FaCircleCheck className="text-blue-400" />
                      Pengecekan Awal:
                    </span>
                    <span className="font-bold text-cyan-400">Transparan & Ramah</span>
                  </div>
                </div>

                {/* Direct Action WhatsApp */}
                <div className="pt-2">
                  <a
                    href={`https://wa.me/6285895354443?text=${waMessage}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-4 rounded-xl text-sm font-bold text-slate-950 bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400 hover:from-cyan-300 hover:to-emerald-300 shadow-lg shadow-cyan-500/25 active:scale-95 transition-all cursor-pointer"
                  >
                    <FaWhatsapp className="text-lg text-slate-950" />
                    <span>Booking Servis Ini via WhatsApp</span>
                  </a>
                  <p className="text-center text-[10px] text-slate-400 mt-2">
                    Tekan tombol untuk otomatis membuka chat WhatsApp beserta rincian di atas.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
