import { 
  FaComments, 
  FaMagnifyingGlass, 
  FaWrench, 
  FaCertificate,
  FaArrowRight
} from "react-icons/fa6";

export default function Workflow() {
  const steps = [
    {
      step: "01",
      icon: <FaComments className="text-2xl text-cyan-500" />,
      title: "Konsultasi & Free Check",
      desc: "Hubungi kami via WhatsApp atau langsung bawa perangkat Anda ke lab. Ceritakan kendala yang dirasakan untuk konsultasi awal gratis.",
      tag: "Tanpa Biaya Awal",
    },
    {
      step: "02",
      icon: <FaMagnifyingGlass className="text-2xl text-blue-500" />,
      title: "Diagnosa & Estimasi Pasti",
      desc: "Teknisi melakukan pengetesan menyeluruh untuk menemukan sumber masalah. Kami menginformasikan estimasi biaya sebelum pengerjaan.",
      tag: "Persetujuan Pelanggan",
    },
    {
      step: "03",
      icon: <FaWrench className="text-2xl text-teal-500" />,
      title: "Pengerjaan Presisi & QC",
      desc: "Perangkat ditangani menggunakan perlengkapan berstandar ESD dengan komponen berkualitas, diakhiri pengujian fungsionalitas ketat.",
      tag: "Standar Teknisi Lab",
    },
    {
      step: "04",
      icon: <FaCertificate className="text-2xl text-emerald-500" />,
      title: "Serah Terima & Garansi",
      desc: "Perangkat diuji bersama di hadapan Anda. Anda menerima nota digital/fisik resmi dan garansi servis aktif hingga 30 hari penuh.",
      tag: "Garansi sd 30 Hari",
    },
  ];

  return (
    <section id="alur-kerja" className="py-24 relative overflow-hidden bg-tech-grid">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase font-mono">
            <FaWrench />
            <span>Alur Pengerjaan Transparan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            4 Langkah Mudah <span className="text-gradient-tech">Servis di Lab Kami</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Tidak perlu khawatir dibohongi atau ada biaya tersembunyi. Kami menerapkan SOP servis profesional yang transparan dari awal hingga selesai.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((item, index) => (
            <div
              key={index}
              className="relative glass-panel rounded-3xl p-6 sm:p-7 flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              {/* Step Number Watermark */}
              <div className="absolute top-4 right-5 text-4xl font-black font-mono text-slate-200 dark:text-slate-800/60 select-none group-hover:text-cyan-500/20 transition-colors">
                {item.step}
              </div>

              <div>
                <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>

                <span className="inline-block text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-200 dark:border-cyan-800/50 mb-3">
                  {item.tag}
                </span>

                <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-xs font-semibold text-cyan-600 dark:text-cyan-400">
                <span>Tahap {item.step}</span>
                <FaArrowRight className="text-xs group-hover:translate-x-1 transition-transform" />
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

