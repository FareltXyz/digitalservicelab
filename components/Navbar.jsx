"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useTheme } from "next-themes";
import { 
  FaBars, 
  FaXmark, 
  FaMoon, 
  FaSun, 
  FaWhatsapp, 
  FaBolt,
  FaWrench
} from "react-icons/fa6";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const current = resolvedTheme || theme;
    setTheme(current === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { name: "Beranda", href: "#beranda" },
    { name: "Layanan", href: "#layanan" },
    { name: "Cek Estimasi", href: "#estimasi" },
    { name: "Alur Kerja", href: "#alur-kerja" },
    { name: "Keunggulan", href: "#keunggulan" },
    { name: "Ulasan", href: "#testimoni" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? "bg-white/85 dark:bg-slate-950/85 backdrop-blur-md shadow-lg shadow-sky-500/5 border-b border-slate-200/80 dark:border-slate-800/80 py-3" 
          : "bg-white/60 dark:bg-slate-950/60 backdrop-blur-sm border-b border-slate-200/40 dark:border-slate-800/40 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo & Brand */}
          <Link href="#beranda" className="flex items-center gap-3 group">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-xs opacity-70 group-hover:opacity-100 transition duration-300"></div>
              <Image 
                src="/logo.jpeg" 
                alt="Digital Service Lab Logo" 
                width={42} 
                height={42} 
                className="relative rounded-full border border-sky-400 dark:border-cyan-400 object-cover"
              />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="font-extrabold text-lg sm:text-xl tracking-tight bg-gradient-to-r from-sky-600 via-cyan-600 to-blue-700 dark:from-sky-400 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent">
                  DIGITAL SERVICE LAB
                </span>
              </div>
              <div className="flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span>Workshop Buka & Siap Servis</span>
              </div>
            </div>
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-7">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-gradient-to-r after:from-cyan-500 after:to-blue-600 hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Actions: Theme Toggle & WhatsApp CTA */}
          <div className="hidden sm:flex items-center gap-3">
            {/* Theme Switcher Button */}
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/80 dark:bg-slate-900/80 text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:border-cyan-400/50 transition-all duration-200 cursor-pointer"
              >
                {resolvedTheme === "dark" ? (
                  <FaSun className="text-amber-400 text-lg" />
                ) : (
                  <FaMoon className="text-slate-600 text-lg" />
                )}
              </button>
            )}

            {/* Direct Consultation Button */}
            <a
              href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20ingin%20konsultasi%20mengenai%20servis%20perangkat%20saya"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 via-cyan-600 to-teal-500 hover:from-sky-500 hover:to-teal-400 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 transition-all duration-200"
            >
              <FaWhatsapp className="text-lg" />
              <span>Konsultasi Cepat</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex sm:hidden items-center gap-2">
            {mounted && (
              <button
                onClick={toggleTheme}
                aria-label="Toggle theme"
                className="p-2 rounded-lg border border-slate-200 dark:border-slate-800 bg-slate-100 dark:bg-slate-900 text-slate-700 dark:text-slate-300 text-sm"
              >
                {resolvedTheme === "dark" ? <FaSun className="text-amber-400" /> : <FaMoon />}
              </button>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle mobile navigation"
              className="p-2.5 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-100/90 dark:bg-slate-900/90 text-slate-800 dark:text-slate-200"
            >
              {isOpen ? <FaXmark className="text-xl" /> : <FaBars className="text-xl" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="lg:hidden mt-3 p-4 rounded-2xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-xl border border-slate-200 dark:border-slate-800 shadow-xl space-y-3">
            <div className="grid grid-cols-1 gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="px-3 py-2 rounded-lg text-sm font-medium text-slate-800 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 transition"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-2 border-t border-slate-200 dark:border-slate-800">
              <a
                href="https://wa.me/6285895354443?text=Halo%20Digital%20Service%20Lab,%20saya%20ingin%20konsultasi%20mengenai%20servis%20perangkat%20saya"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 w-full py-2.5 px-4 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-sky-600 to-teal-500 shadow-md shadow-cyan-500/20"
              >
                <FaWhatsapp className="text-lg" />
                <span>Chat WhatsApp Sekarang</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}

