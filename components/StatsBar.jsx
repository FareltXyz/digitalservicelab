import { 
  FaLaptopCode, 
  FaAward, 
  FaShieldHalved, 
  FaClock 
} from "react-icons/fa6";

export default function StatsBar() {
  const stats = [
    {
      icon: <FaLaptopCode className="text-2xl text-cyan-500" />,
      value: "1.500+",
      label: "Perangkat Ditangani",
      desc: "Laptop, PC, & Handphone",
    },
    {
      icon: <FaAward className="text-2xl text-blue-500" />,
      value: "99.2%",
      label: "Tingkat Keberhasilan",
      desc: "Solusi tepat sasaran",
    },
    {
      icon: <FaShieldHalved className="text-2xl text-teal-500" />,
      value: "30 Hari",
      label: "Garansi Resmi Lab",
      desc: "Jaminan tanpa biaya tambahan",
    },
    {
      icon: <FaClock className="text-2xl text-amber-500" />,
      value: "30-60 Menit",
      label: "Servis Kilat / Bisa Ditunggu",
      desc: "Untuk maintenance & software",
    },
  ];

  const brandSupport = [
    "ASUS ROG / TUF", "Lenovo ThinkPad / IdeaPad", "Acer Predator / Nitro", 
    "HP Pavilion / Victus", "Dell Alienware", "Apple MacBook & iPhone", 
    "Samsung Galaxy", "Xiaomi & Poco", "TP-Link & MikroTik"
  ];

  return (
    <section className="relative -mt-6 sm:-mt-10 z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Stats Container */}
      <div className="glass-panel-glow rounded-3xl p-6 sm:p-8 border border-slate-200/80 dark:border-slate-800/80 shadow-xl">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200/80 dark:divide-slate-800/80">
          {stats.map((item, idx) => (
            <div 
              key={idx} 
              className={`flex flex-col items-center sm:items-start text-center sm:text-left ${
                idx > 0 ? "pt-6 lg:pt-0 lg:pl-8" : ""
              }`}
            >
              <div className="p-3 rounded-2xl bg-cyan-500/10 dark:bg-cyan-500/15 mb-3">
                {item.icon}
              </div>
              <span className="text-2xl sm:text-4xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                {item.value}
              </span>
              <span className="text-sm font-bold text-slate-800 dark:text-slate-200 mt-1">
                {item.label}
              </span>
              <span className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                {item.desc}
              </span>
            </div>
          ))}
        </div>

        {/* Brand compatibility ticker */}
        <div className="mt-8 pt-6 border-t border-slate-200/60 dark:border-slate-800/60 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono">
            Mendukung Servis Berbagai Brand Terkemuka:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {brandSupport.map((brand, i) => (
              <span
                key={i}
                className="text-[11px] font-medium px-2.5 py-1 rounded-md bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

