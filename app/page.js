"use client"
import Image from "next/image";
import { Oswald, Poppins } from "next/font/google";
import { FaHouse, FaRegMessages, FaCircleInfo, FaPhone, FaMessage, FaCheck } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const poppinsFont= Poppins({ display: 'swap', weight: '800', subsets: ['latin']})
const services = [
  {
    name: "Perbaikan Laptop",
    harga: "75k-350k IDR",
    list: [
      "Ganti Ram", "Ganti SSD/HDD", "Ganti Keyboard", "Ganti Touchpad", "Ganti Speaker", "Ganti Baterai"
    ]
  },
  {
    name: "Perbaikan Hp",
    harga: "35k IDR",
    list: [
      "Pemasangan Tempered Glass", "Reset Setelan Pabrik", "Pembersihan Penyimpanan", "Reset Sandi"
    ]
  },
  {
    name: "Instalasi WIfi",
    harga: "350-400k IDR",
    list: [
      "Pasang Wifi Rumah", "Ganti Password Wifi", "Penggantian Perangkat Wifi"
    ]
  }
]


export default function Home() {
  return (
    <>
      <div className="min-h-screen min-w-screen flex flex-col relative">
        <nav className="fixed z-50 top-0 w-screen">
          <div className="w-screen h-22 bg-white max-md:shadow-md max-md:shadow-black/35  md:border flex items-center flex-row justify-between px-4 md:px-24">
            <div className="flex-1 flex items-center gap-3">
              <Image alt="logo" className="rounded-full border border-sky-500" width={50} height={50} src={"/logo.jpeg"}/>
              <p className={`text-sky-500 ${poppinsFont.className} font-bold text-xl`}> DIGITAL SERVICE LAB</p>
            </div>  
            <div className="hidden xl:flex">
              <ul className="flex  text-black gap-10">
                <li className="flex gap-3 items-center"> <FaHouse className="text-xl"/>  Beranda </li>
                <li className="flex gap-3 items-center"> <FaCircleInfo className="text-xl"/> Tentang  Kami</li>
                <li className="flex gap-3 items-center"> <FaMessage className="text-xl"/> Ulasan </li>
                <li className="flex gap-3 items-center"> <FaPhone className="text-xl"/> Hubungi </li>
              </ul>
            </div>
          </div>
        </nav>
        <main className="pt-24 md:pb-24 border-b border-black/40  md:border-b-2 flex h-auto md:min-h-screen w-full bg-white ">
          <div className="grid flex-1 grid-cols-1 xl:grid-cols-2 gap-16">
            <section className="flex gap-8 flex-col px-10 md:px-24 justify-center">
              <h1 className="max-w-3xl text-sky-500 text-4xl md:text-6xl font-extrabold">Digital Service Lab. Solusi Digital Cepat, Tepat, dan Terpercaya.</h1>
              <p className="text-lg md:text-xl text-sky-700">
                 Digital Service Lab adalah penyedia layanan servis laptop 
                 dan handphone yang fokus pada solusi cepat, rapi, dan terpercaya. 
                 Kami menangani berbagai kebutuhan mulai dari perbaikan hardware, perbaikan software, 
                 upgrade perangkat, hingga perawatan rutin agar perangkat kembali optimal.
              </p>
              <div>
                <button className="px-8 py-6 md:px-16 md:py-6 rounded-full bg-linear-to-r from-sky-500 to-teal-500 text-md md:text-xl"> Mulai Pesan Sekarang</button>
              </div>
            </section>
            <section className="relative flex flex-col items-center justify-center py-16 my-10">
              <div className="z-10 mx-auto inset-0 from-emerald-200 to-sky-100 bg-linear-to-t rounded-4xl w-auto max-w-sm md:max-w-xl absolute"></div>
              <div className="space-y-16 relative z-20 px-10">
                <h1 className="text-2xl max-w-sm max-md:px-1 md:text-3xl md:max-w-lg text-sky-900 font-bold mx-auto text-center"> Perangkat rusak, WiFi lemot? Kami solusinya</h1>
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                loop={true}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                autoplay={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper w-75 h-58.5 md:w-125 md:h-83.5 rounded-3xl flex"
                >
                  <SwiperSlide> 
                    <Image className="flex-none rounded-3xl" src={'/hero.jpg'} width={500} height={334} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image className="flex-none rounded-3xl" src={'/hero2.jpg'} width={500} height={334} alt="hero" />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image className="flex-none rounded-3xl" src={'/hero3.jpg'} width={500} height={334} alt="hero" />
                  </SwiperSlide>
                </Swiper>
              </div>
            </section>
          </div>
        </main>
        <section id="tentang" className="pt-24 max-md:pb-24 h-auto min-h-screen w-full bg-white px-10">
            <div className="w-full h-full gap-24 flex flex-col items-center">
                <div className="space-y-7">
                    <h1 className="text-4xl text-cyan-500 font-extrabold text-center">Tentang kami</h1>
                    <h2 className="max-w-7xl text-cyan-600 text-xl text-center"> Kami menangani berbagai jenis kerusakan, mulai dari permasalahan software, penggantian dan upgrade hardware, hingga perbaikan tingkat lanjut. Setiap perangkat yang masuk akan melalui proses pengecekan terlebih dahulu agar solusi yang diberikan tepat dan transparan.</h2>
                </div>
                <div className="space-y-7">
                    <h1 className="text-4xl text-teal-500 font-extrabold text-center"> Layanan Kami </h1>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      { services.map((data, i) => {
                        return (  
                          <div className="flex flex-col rounded-2xl shadow-md shadow-black/50 border p-6">
                            <div className="md:w-xs mx-auto rounded-full mb-5 h-2 bg-yellow-400 "></div>
                            <div className="flex max-md:flex-col justify-between">
                              <h3 className="text-2xl from-emerald-500 to-sky-500 bg-clip-text bg-linear-to-r md:mx-3 font-bold text-transparent flex-1">{data.name}</h3>
                              <p className="text-sm my-auto text-gray-600">{data.harga}</p>
                            </div>
                            <p className="text-gray-500 text-xl mt-8">Meliputi:</p>
                            <ul className="text-gray-500 flex-1 max-w-xs mb-4 space-y-2">
                              {data.list.map((list, i) => {return(<li className="flex items-center gap-3 italic"><FaCheck />{list}</li>)})}
                                
                            
                            </ul>
                        </div>
                        )
                      })}
                    </div>
                </div>
            </div>
        </section>
      </div>
    </>
  );
}
