"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import { 
  FaWhatsapp, 
  FaCalculator, 
  FaShieldHalved, 
  FaBolt, 
  FaMicrochip, 
  FaClock, 
  FaCircleCheck,
  FaStar,
  FaWrench
} from "react-icons/fa6";

export default function Hero() {
  const heroImages = [
    { src: "/hero.jpg", alt: "Teknisi Servis Laptop Presisi", label: "Perbaikan Komponen & Hardware" },
    { src: "/hero2.jpg", alt: "Pengecekan Smartphone & Tablet", label: "Diagnosa Presisi Smartphone" },
    { src: "/hero3.jpg", alt: "Instalasi Jaringan & WiFi Cepat", label: "Optimalisasi Jaringan & WiFi" },
  ];

  return (
    <section id="beranda" className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-tech-grid">
      {/* Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-cyan-500/20 via-blue-500/15 to-teal-400/10 rounded-full blur-3xl pointer-events-none animate-glow-pulse" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-sky-400/10 rounded-full blur-2xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-80 h-80 bg-teal-400/10 rounded-full blur-2xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tech Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-700 dark:text-cyan-300 text-xs sm:text-sm font-semibold shadow-xs">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              <FaBolt className="text-cyan-500 text-xs" />
              <span>Pusat Reparasi Gadget & Layanan Digital Presisi</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
              Solusi Digital Cepat, <br className="hidden sm:inline" />
              <span className="text-gradient-tech">Tepat & Bergaransi</span> <br className="hidden sm:inline" />
              untuk Gadget Anda.
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Tangani masalah laptop lambat, mati total, layar pecah, ganti sparepart, instalasi OS, 
              hingga jaringan WiFi bermasalah bersama teknisi bersertifikasi. Diagnosa transparan, estimasi pasti di awal, dan pengerjaan rapi.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20ingin%20konsultasi%20mengenai%20servis%20perangkat%20saya"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-7 py-3.5 rounded-xl font-bold text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 hover:from-sky-500 hover:to-teal-400 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/35 hover:-translate-y-0.5 active:translate-y-0 transition-all text-sm sm:text-base cursor-pointer"
              >
                <FaWhatsapp className="text-xl" />
                <span>Konsultasi & Booking Servis</span>
              </a>

              <a
                href="#estimasi"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl font-semibold text-slate-800 dark:text-slate-200 bg-white/80 dark:bg-slate-900/80 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-300/80 dark:border-slate-700/80 shadow-xs hover:-translate-y-0.5 transition-all text-sm sm:text-base cursor-pointer"
              >
                <FaCalculator className="text-cyan-600 dark:text-cyan-400 text-base" />
                <span>Hitung Estimasi Biaya</span>
              </a>
            </div>

            {/* Trust Points */}
            <div className="pt-4 border-t border-slate-200/80 dark:border-slate-800/80 grid grid-cols-3 gap-2 sm:gap-4 max-w-xl mx-auto lg:mx-0">
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 text-center sm:text-left">
                <FaCircleCheck className="text-emerald-500 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Bisa Ditunggu</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Perbaikan ringan 30-60 menit</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 text-center sm:text-left">
                <FaShieldHalved className="text-cyan-500 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Garansi sd 30 Hari</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Jaminan servis bebas cemas</p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-1.5 text-center sm:text-left">
                <FaMicrochip className="text-blue-500 text-lg flex-shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900 dark:text-slate-100">Data 100% Aman</h4>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 hidden sm:block">Privasi dokumen terjamin</p>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: High-Tech Visual Showcase */}
          <div className="lg:col-span-5 relative">
            {/* Tech Card Wrapper */}
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer Glow Effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/30 via-blue-500/20 to-teal-500/30 rounded-3xl blur-xl opacity-75"></div>

              {/* Main Card Frame */}
              <div className="relative glass-panel rounded-3xl p-3 sm:p-4 shadow-2xl border border-white/40 dark:border-cyan-500/20 overflow-hidden">
                
                {/* Header bar of tech widget */}
                <div className="flex items-center justify-between pb-3 px-2 border-b border-slate-200/60 dark:border-slate-800/60 text-xs font-mono">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500 inline-block"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
                    <span className="ml-2 text-slate-500 dark:text-slate-400 font-semibold">LAB-STATION // DSL-01</span>
                  </div>
                  <div className="flex items-center gap-1 text-emerald-600 dark:text-emerald-400 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span>ONLINE</span>
                  </div>
                </div>

                {/* Swiper Visual Showcase */}
                <div className="mt-3 rounded-2xl overflow-hidden relative group">
                  <Swiper
                    modules={[Autoplay, Pagination]}
                    slidesPerView={1}
                    loop={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    pagination={{ clickable: true }}
                    className="w-full h-64 sm:h-80 rounded-2xl"
                  >
                    {heroImages.map((img, index) => (
                      <SwiperSlide key={index} className="relative">
                        <div className="relative w-full h-full min-h-[260px] sm:min-h-[320px]">
                          <Image
                            src={img.src}
                            alt={img.alt}
                            fill
                            priority={index === 0}
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 500px"
                          />
                          {/* Gradient Overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/30 to-transparent flex flex-col justify-end p-5">
                            <span className="inline-block text-[10px] tracking-wider font-mono uppercase font-bold text-cyan-400 bg-cyan-950/80 px-2 py-0.5 rounded border border-cyan-800/60 w-fit mb-1">
                              Digital Service Lab
                            </span>
                            <h3 className="text-white font-bold text-base sm:text-lg">
                              {img.label}
                            </h3>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>

                {/* Status Bar inside the frame */}
                <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
                  <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2">
                    <FaWrench className="text-cyan-500 text-sm" />
                    <div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Peralatan Servis</p>
                      <p className="font-bold text-slate-800 dark:text-slate-200">Presisi & ESD Safe</p>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-slate-100/80 dark:bg-slate-900/80 border border-slate-200/60 dark:border-slate-800/60 flex items-center gap-2">
                    <FaStar className="text-amber-400 text-sm" />
                    <div>
                      <p className="text-[10px] text-slate-500 dark:text-slate-400">Rating Kepuasan</p>
                      <p className="font-bold text-slate-800 dark:text-slate-200">4.9 / 5.0 (Google)</p>
                    </div>
                  </div>
                </div>

              </div>

              {/* Floating Badges */}
              <div className="hidden sm:flex absolute -top-5 -left-5 glass-panel rounded-2xl p-3 shadow-xl border border-cyan-500/30 items-center gap-3 animate-bounce [animation-duration:4s]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-white text-lg shadow-md shadow-cyan-500/30">
                  <FaBolt />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Respon Cepat</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">&lt; 15 Menit Dijawab</p>
                </div>
              </div>

              <div className="hidden sm:flex absolute -bottom-5 -right-5 glass-panel rounded-2xl p-3 shadow-xl border border-emerald-500/30 items-center gap-3 animate-bounce [animation-duration:5s]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center text-white text-lg shadow-md shadow-emerald-500/30">
                  <FaShieldHalved />
                </div>
                <div>
                  <p className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">Pengecekan Awal</p>
                  <p className="text-xs font-bold text-slate-900 dark:text-white">Transparan & Jelas</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

