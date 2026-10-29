"use client";

import { useState } from "react";
import { 
  FaWhatsapp, 
  FaEnvelope, 
  FaLocationDot, 
  FaClock, 
  FaHeadset, 
  FaPaperPlane,
  FaShieldHalved
} from "react-icons/fa6";

export default function ContactLocation() {
  const [formData, setFormData] = useState({
    name: "",
    device: "Laptop",
    issue: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.issue.trim()) {
      alert("Silakan isi nama dan deskripsi kendala perangkat Anda.");
      return;
    }
    const message = encodeURIComponent(
      `Halo Digital Service Lab!\nSaya ingin konsultasi servis:\n- Nama: ${formData.name}\n- Jenis Perangkat: ${formData.device}\n- Kendala / Kerusakan: ${formData.issue}\n\nMohon info arahan dan estimasi pengerjaannya. Terima kasih!`
    );
    window.open(`https://wa.me/6285895354443?text=${message}`, "_blank");
  };

  return (
    <section id="kontak" className="py-24 relative overflow-hidden bg-tech-grid">
      {/* Background Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-96 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase font-mono">
            <FaHeadset />
            <span>Pusat Layanan & Konsultasi</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Hubungi <span className="text-gradient-tech">Digital Service Lab</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base">
            Siap membantu memulihkan performa gadget Anda. Konsultasikan kerusakan sekarang tanpa dipungut biaya.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Contact Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* WhatsApp Card */}
            <a
              href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20ingin%20konsultasi%20mengenai%20servis%20perangkat%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-4 hover:border-emerald-500/60 hover:shadow-xl hover:shadow-emerald-500/5 transition-all group cursor-pointer block"
            >
              <div className="w-14 h-14 rounded-2xl bg-emerald-500/15 text-emerald-500 flex items-center justify-center text-2xl group-hover:scale-110 transition-transform flex-shrink-0">
                <FaWhatsapp />
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 font-bold uppercase tracking-wider">
                    WhatsApp Hotline
                  </span>
                  <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-500 font-bold">
                    Respon Cepat
                  </span>
                </div>
                <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white truncate mt-0.5">
                  +62 858-9535-4443
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Klik untuk chat langsung dengan teknisi
                </p>
              </div>
            </a>

            {/* Email Card */}
            <a
              href="mailto:muhammadfarelwardhana@gmail.com"
              className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-center gap-4 hover:border-cyan-500/60 hover:shadow-xl hover:shadow-cyan-500/5 transition-all group cursor-pointer block"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/15 text-cyan-500 flex items-center justify-center text-xl group-hover:scale-110 transition-transform flex-shrink-0">
                <FaEnvelope />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
                  Email Kerjasama & Pengaduan
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-white truncate mt-0.5">
                  muhammadfarelwardhana@gmail.com
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Kirim rincian kebutuhan atau invoice penawaran
                </p>
              </div>
            </a>

            {/* Jam Operasional */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/15 text-blue-500 flex items-center justify-center text-xl flex-shrink-0">
                <FaClock />
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wider">
                  Jam Operasional Lab
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Senin - Sabtu: 09.00 - 20.00 WIB
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Minggu & Hari Libur: Tetap menerima konsultasi WhatsApp & by appointment.
                </p>
              </div>
            </div>

            {/* Coverage Area */}
            <div className="glass-panel p-6 rounded-3xl border border-slate-200/80 dark:border-slate-800/80 flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl bg-amber-500/15 text-amber-500 flex items-center justify-center text-xl flex-shrink-0">
                <FaLocationDot />
              </div>
              <div className="flex-1">
                <span className="text-xs font-mono text-amber-600 dark:text-amber-400 font-bold uppercase tracking-wider">
                  Layanan Antar-Jemput & On-Site
                </span>
                <h3 className="text-sm font-bold text-slate-900 dark:text-white mt-1">
                  Workshop Servis & Kunjungan Instalasi WiFi
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                  Menerima pengiriman via Gosend / GrabExpress / ekspedisi untuk keamanan dan kemudahan Anda.
                </p>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Consultation Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-glow rounded-3xl p-7 sm:p-10 border border-slate-200/80 dark:border-slate-800/80 shadow-2xl">
              
              <div className="mb-6">
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
                  Formulir Konsultasi Kilat
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 mt-1">
                  Tulis kendala perangkat Anda. Sistem akan langsung mengarahkan Anda ke WhatsApp teknisi dengan rincian yang rapi.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5">
                    Nama Anda:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Contoh: Farel Wardhana"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition"
                  />
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5">
                    Jenis Perangkat:
                  </label>
                  <select
                    value={formData.device}
                    onChange={(e) => setFormData({ ...formData, device: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition cursor-pointer"
                  >
                    <option value="Laptop (Asus, Lenovo, Acer, HP, Dell, dll)">Laptop (Asus, Lenovo, Acer, HP, Dell, dll)</option>
                    <option value="Apple MacBook / iMac">Apple MacBook / iMac</option>
                    <option value="PC Desktop / Gaming Rig">PC Desktop / Gaming Rig</option>
                    <option value="Smartphone Android / iPhone">Smartphone Android / iPhone</option>
                    <option value="Jaringan WiFi & Router">Jaringan WiFi & Router</option>
                    <option value="Lainnya">Lainnya</option>
                  </select>
                </div>

                <div>
                  <label className="text-xs font-mono font-bold uppercase tracking-wider text-slate-600 dark:text-slate-300 block mb-1.5">
                    Jelaskan Kerusakan / Keluhan:
                  </label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Contoh: Laptop mati total setelah kena air, lampu indikator charger berkedip. Butuh diservis secepatnya karena ada tugas kuliah."
                    value={formData.issue}
                    onChange={(e) => setFormData({ ...formData, issue: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-white/90 dark:bg-slate-900/90 text-sm text-slate-900 dark:text-white placeholder-slate-400 focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-4 px-6 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 hover:from-sky-500 hover:to-teal-400 shadow-lg shadow-cyan-500/25 active:scale-98 transition-all cursor-pointer text-sm sm:text-base"
                  >
                    <FaPaperPlane className="text-base" />
                    <span>Kirim Pesan Konsultasi via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 text-[11px] text-slate-400 pt-2">
                  <FaShieldHalved className="text-emerald-500 text-xs" />
                  <span>Data Anda rahasia dan langsung terhubung ke teknisi resmi.</span>
                </div>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

