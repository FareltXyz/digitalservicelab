"use client";

import { useState } from "react";
import { FaChevronDown, FaCircleQuestion } from "react-icons/fa6";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: "Apakah ada biaya untuk pengecekan awal atau konsultasi?",
      a: "Konsultasi dan pengecekan awal kerusakan di Digital Service Lab bersifat transparan. Teknisi kami akan menganalisa kendala dan menginformasikan perkiraan biaya terlebih dahulu. Pengerjaan servis hanya akan dilakukan setelah Anda menyetujui penawaran tersebut.",
    },
    {
      q: "Berapa lama rata-rata proses perbaikan laptop atau handphone?",
      a: "Untuk tindakan ringan seperti instalasi OS, deep cleaning thermal paste, ganti RAM, upgrade SSD, dan ganti tempered glass smartphone, dapat diselesaikan dalam waktu 30 hingga 90 menit (bisa ditunggu). Untuk kasus motherboard atau korslet IC power, membutuhkan waktu diagnosa 1-3 hari kerja.",
    },
    {
      q: "Apakah data dan dokumen penting di dalam perangkat saya aman?",
      a: "Sangat aman. Privasi data Anda adalah prioritas nomor satu kami. Teknisi kami bekerja di bawah SOP ketat dan tidak akan membuka, menyalin, atau mendistribusikan file pribadi Anda. Untuk perbaikan software tertentu, kami juga selalu mengonfirmasi opsi backup terlebih dahulu.",
    },
    {
      q: "Bagaimana ketentuan garansi servis yang diberikan?",
      a: "Setiap pengerjaan hardware dan penggantian suku cadang baru mendapatkan jaminan garansi resmi lab hingga 30 hari penuh (bahkan SSD/RAM tertentu memiliki garansi distributor resmi hingga 3-5 tahun). Jika kendala serupa terulang dalam masa garansi, kami perbaiki kembali secara gratis.",
    },
    {
      q: "Apakah melayani panggilan ke rumah untuk instalasi WiFi & jaringan?",
      a: "Ya! Khusus untuk layanan instalasi WiFi rumah/kantor, setting router, penarikan kabel LAN, dan optimalisasi sinyal WiFi, teknisi kami siap melakukan kunjungan on-site langsung ke lokasi Anda.",
    },
    {
      q: "Bagaimana cara melakukan booking atau konsultasi servis?",
      a: "Sangat mudah. Anda cukup menekan tombol 'Konsultasi Servis' atau 'Booking via WhatsApp' di website ini. Ceritakan kendala perangkat Anda, dan admin teknis kami akan segera memandu Anda.",
    },
  ];

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center space-y-3 mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase font-mono">
            <FaCircleQuestion />
            <span>Paling Sering Ditanyakan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Frequently Asked <span className="text-gradient-tech">Questions (FAQ)</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Pertanyaan seputar alur servis, keamanan data, durasi pengerjaan, dan ketentuan garansi.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((item, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className={`glass-panel rounded-2xl border transition-all duration-200 overflow-hidden ${
                  isOpen 
                    ? "border-cyan-500/50 shadow-md shadow-cyan-500/5" 
                    : "border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-400/30"
                }`}
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer focus:outline-none"
                >
                  <span className="text-sm sm:text-base font-bold text-slate-900 dark:text-white pr-4">
                    {item.q}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? "rotate-180 bg-cyan-500 text-white"
                        : "bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400"
                    }`}
                  >
                    <FaChevronDown className="text-xs" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed border-t border-slate-100 dark:border-slate-800/60">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

