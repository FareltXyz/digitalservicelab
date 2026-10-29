import { 
  FaMicrochip, 
  FaShieldHalved, 
  FaAward, 
  FaFileInvoiceDollar, 
  FaBolt, 
  FaHeadset 
} from "react-icons/fa6";

export default function WhyChooseUs() {
  const advantages = [
    {
      icon: <FaMicrochip className="text-2xl text-cyan-500" />,
      title: "Peralatan Diagnosa Presisi",
      desc: "Menggunakan instrumen modern seperti mikroskop digital, multimeter presisi, dan thermal imaging untuk mendeteksi kerusakan motherboard hingga ke level komponen mikro.",
    },
    {
      icon: <FaShieldHalved className="text-2xl text-emerald-500" />,
      title: "Jaminan Privasi & Keamanan Data",
      desc: "Kami sangat menghormati privasi Anda. Data dokumen kerja, file pribadi, dan foto dalam perangkat dijamin 100% aman tanpa diakses sembarangan.",
    },
    {
      icon: <FaAward className="text-2xl text-blue-500" />,
      title: "Suku Cadang Grade A & Original",
      desc: "Hanya menggunakan sparepart berkualitas tinggi (RAM, SSD, LCD, Baterai) yang sudah melalui uji kelayakan guna memastikan masa pakai perangkat tahan lama.",
    },
    {
      icon: <FaFileInvoiceDollar className="text-2xl text-amber-500" />,
      title: "Biaya Transparan Tanpa Jebakan",
      desc: "Tidak ada biaya terselubung. Teknisi menguraikan rincian biaya secara jelas di awal dan hanya mulai mengerjakan setelah mendapat persetujuan Anda.",
    },
    {
      icon: <FaBolt className="text-2xl text-teal-500" />,
      title: "Servis Kilat & Bisa Ditunggu",
      desc: "Untuk penanganan software, instalasi OS, deep cleaning, ganti baterai atau RAM, dapat ditunggu di tempat dalam waktu 30 hingga 60 menit.",
    },
    {
      icon: <FaHeadset className="text-2xl text-indigo-500" />,
      title: "After-Sales & Konsultasi Ramah",
      desc: "Dukungan konsultasi berkelanjutan pasca perbaikan melalui WhatsApp. Layanan garansi 30 hari kami proses dengan cepat dan tanpa birokrasi rumit.",
    },
  ];

  return (
    <section id="keunggulan" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase font-mono">
            <FaAward />
            <span>Standar Mutu Layanan</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Kenapa Memilih <span className="text-gradient-tech">Digital Service Lab?</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-base sm:text-lg">
            Kami memadukan keahlian teknisi profesional dengan peralatan modern untuk memberikan pengalaman servis yang aman, transparan, dan memuaskan.
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {advantages.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-8 border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/50 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                {item.icon}
              </div>

              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {item.title}
              </h3>

              <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

