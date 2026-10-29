"use client";

import { useState, useEffect } from "react";
import { FaWhatsapp, FaXmark } from "react-icons/fa6";

export default function FloatingWA() {
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTooltip(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Interactive Tooltip bubble */}
      {showTooltip && (
        <div className="relative glass-panel bg-white/95 dark:bg-slate-900/95 p-3 rounded-2xl shadow-xl border border-emerald-500/30 max-w-xs text-xs animate-in fade-in slide-in-from-bottom-2 duration-300">
          <button
            onClick={() => setShowTooltip(false)}
            aria-label="Tutup notifikasi"
            className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-slate-200 dark:bg-slate-800 text-slate-500 hover:text-slate-800 dark:hover:text-white flex items-center justify-center text-[10px]"
          >
            <FaXmark />
          </button>
          <div className="flex items-center gap-2 mb-1">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping"></span>
            <span className="font-bold text-slate-900 dark:text-white">Ada Masalah Gadget?</span>
          </div>
          <p className="text-slate-600 dark:text-slate-300 leading-snug">
            Konsultasikan gratis sekarang. Teknisi kami siap menjawab via WhatsApp!
          </p>
        </div>
      )}

      {/* Main Floating Button */}
      <a
        href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20ingin%20tanya%20servis%20gadget"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat WhatsApp Digital Service Lab"
        className="group relative flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-600 to-teal-400 text-white shadow-xl shadow-emerald-500/30 hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
      >
        <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 group-hover:opacity-75 blur-xs animate-ping"></span>
        <FaWhatsapp className="text-3xl relative z-10" />
      </a>
    </div>
  );
}

