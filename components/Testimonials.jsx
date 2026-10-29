import { 
  FaStar, 
  FaQuoteLeft, 
  FaCircleCheck,
  FaGoogle
} from "react-icons/fa6";

export default function Testimonials() {
  const testimonials = [
    {
      nama: "Andi Pratama",
      keterangan: "Mahasiswa Informatika",
      layanan: "Servis Laptop Asus & Upgrade SSD",
      pesan: "Pelayanannya sangat cepat dan rapi. Laptop yang tadinya lemot luar biasa untuk compiling coding sekarang jadi super kencang dan enteng dipakai. Teknisinya juga transparan soal biaya komponen.",
      rating: 5,
      initials: "AP",
      bgGradient: "from-blue-500 to-cyan-500",
    },
    {
      nama: "Rizky Maulana",
      keterangan: "Software Engineer / WFH",
      layanan: "Deep Cleaning Thermal Paste & Reballing",
      pesan: "Laptop kerja saya sering mati mendadak saat render dan panas parah. Setelah diservis dan diganti pasta pendingin premium di Digital Service Lab, suhunya turun drastis dan stabil seharian.",
      rating: 5,
      initials: "RM",
      bgGradient: "from-cyan-500 to-teal-500",
    },
    {
      nama: "Nabila Putri",
      keterangan: "Content Creator",
      layanan: "Servis Smartphone Mati Total",
      pesan: "HP saya sempat mati total kena tumpahan air dan panik karena data foto belum di-backup. Di sini bisa diselamatkan tanpa ada data yang hilang satu pun. Sangat amanah dan recommended banget!",
      rating: 5,
      initials: "NP",
      bgGradient: "from-teal-500 to-emerald-500",
    },
    {
      nama: "Budi Santoso",
      keterangan: "Owner Cafe & Co-working",
      layanan: "Instalasi Router & Setup Jaringan WiFi",
      pesan: "Sebelumnya sinyal WiFi di lantai 2 sering putus-nyambung dan diprotes customer. Tim Digital Service Lab bantu pasang access point baru dan manajemen bandwidth. Sekarang internet stabil dan kencang!",
      rating: 5,
      initials: "BS",
      bgGradient: "from-indigo-500 to-blue-600",
    },
    {
      nama: "Siti Rahmawati",
      keterangan: "Guru Sekolah Menengah",
      layanan: "Ganti Keyboard & Baterai Laptop Acer",
      pesan: "Harganya sangat masuk akal dibanding tempat lain. Pengerjaannya bisa ditunggu dan ada garansi resminya. Teknisinya menjelaskan dengan ramah dan sopan. Pasti akan langganan di sini.",
      rating: 5,
      initials: "SR",
      bgGradient: "from-amber-500 to-orange-500",
    },
    {
      nama: "Fajar Nugraha",
      keterangan: "Graphic Designer",
      layanan: "Ganti Layar LCD Laptop IPS 100% sRGB",
      pesan: "Layar laptop pecah karena tertindih buku tebal. Diganti di Digital Service Lab langsung presisi seperti baru, warna layarnya tajam dan akurat untuk desain. Garansi 30 hari bikin tenang.",
      rating: 5,
      initials: "FN",
      bgGradient: "from-purple-500 to-pink-500",
    },
  ];

  return (
    <section id="testimoni" className="py-24 relative overflow-hidden bg-tech-dots">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header with Google Rating Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-600 dark:text-cyan-400 text-xs font-bold tracking-wide uppercase font-mono">
            <FaStar className="text-amber-400" />
            <span>Kepuasan Pelanggan Nyata</span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight">
            Apa Kata Mereka Tentang <br className="hidden sm:inline" />
            <span className="text-gradient-tech">Digital Service Lab?</span>
          </h2>
          
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">
            Kepercayaan dan kepuasan pelanggan adalah prioritas utama kami dalam setiap baut yang kami pasang dan setiap sirkuit yang kami perbaiki.
          </p>

          {/* Rating Snapshot */}
          <div className="pt-2 flex items-center justify-center gap-3">
            <div className="flex items-center gap-1 text-amber-400 text-base">
              {[...Array(5)].map((_, i) => (
                <FaStar key={i} />
              ))}
            </div>
            <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
              4.9 / 5.0
            </span>
            <span className="text-xs text-slate-500 dark:text-slate-400">
              dari 320+ Ulasan Pelanggan
            </span>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="glass-panel rounded-3xl p-7 flex flex-col justify-between border border-slate-200/80 dark:border-slate-800/80 hover:border-cyan-500/40 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 group"
            >
              <div>
                {/* Header card with user avatar & rating */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-11 h-11 rounded-2xl bg-gradient-to-br ${item.bgGradient} flex items-center justify-center text-white font-extrabold text-sm shadow-md`}>
                      {item.initials}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-1.5">
                        {item.nama}
                        <FaCircleCheck className="text-cyan-500 text-xs" title="Verified Customer" />
                      </h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400">
                        {item.keterangan}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 text-amber-400 text-xs mb-3">
                  {[...Array(item.rating)].map((_, i) => (
                    <FaStar key={i} />
                  ))}
                </div>

                {/* Service Tag */}
                <span className="inline-block text-[11px] font-mono font-medium px-2.5 py-0.5 rounded-md bg-cyan-50 dark:bg-cyan-950/60 text-cyan-700 dark:text-cyan-300 border border-cyan-100 dark:border-cyan-900/40 mb-3">
                  {item.layanan}
                </span>

                {/* Quote Text */}
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 italic leading-relaxed">
                  &ldquo;{item.pesan}&rdquo;
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-slate-200/60 dark:border-slate-800/60 flex items-center justify-between text-[11px] text-slate-400">
                <span className="flex items-center gap-1">
                  <FaCircleCheck className="text-emerald-500" /> Ulasan Terverifikasi
                </span>
                <span>Servis Selesai & Bergaransi</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
