"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Home() {
  // State for carousel API and tracking
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  // Setup carousel API listeners
  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <div className="flex flex-1 flex-col bg-gradient-to-br from-black via-[#1a1a1a] to-[#2d0b0b] min-h-screen">
      {/* Header */}
      <div className="sticky top-0 z-30 flex h-20 items-center justify-between bg-black/80 backdrop-blur-md px-4 md:px-20 shadow-md">
        <Image
          src="/images/logo.svg"
          alt="DMS S-Plus Logo"
          width={64}
          height={64}
          className="h-16 w-auto"
          priority
        />
        <div className="flex items-center gap-8">
          {[
            { href: "https://dmsplus.id/#about", label: "About Us" },
            { href: "https://dmsplus.id/#vp", label: "Viewplus" },
            { href: "https://dmsplus.id/#ec", label: "Exclusive Content" },
            { href: "https://splus.dmsplus.id", label: "S+" },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              className="font-semibold text-white transition-colors hover:text-red-600"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <div className="relative flex h-[350px] flex-col justify-end px-5 py-5 lg:h-[630px] lg:px-20 lg:py-12 shadow-2xl">
        {/* Background with opacity */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{ backgroundImage: "url('/images/bg.jpeg')" }}
        ></div>
        {/* Content with full opacity */}
        <div
          className="relative z-10 flex flex-col gap-2 lg:gap-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl pb-2 sm:pb-4 lg:pb-6"
          style={{ background: "rgba(0,0,0,0.0)" }}
        >
          <h1 className="font-sans text-xl leading-tight font-extrabold text-white drop-shadow-lg lg:text-5xl lg:leading-[60px] tracking-tight">
            BERGABUNG DENGAN S+
          </h1>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl mb-1">
            Gabung komunitas eksklusif, dapatkan akses VIP, event spesial, dan
            banyak keuntungan lainnya bersama{" "}
            <span className="text-red-400 font-semibold">DMS+</span>.
          </p>
          <a
            href="https://forum.dmsplus.id/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              size="lg"
              className="h-8 w-44 rounded-full bg-gradient-to-r from-red-700 to-red-500 text-white text-lg font-bold shadow-xl transition-transform hover:scale-105 hover:shadow-2xl"
            >
              Daftar Sekarang
            </Button>
          </a>
        </div>
      </div>

      {/* S+ Info Section */}
      <div className="flex flex-col-reverse lg:flex-row items-center gap-8 bg-gradient-to-r from-black via-[#250000] to-[#450101] px-5 py-10 lg:px-32 lg:py-24 shadow-2xl">
        <div className="flex-1 flex flex-col justify-center items-start gap-4">
          <h2 className="text-3xl lg:text-5xl font-extrabold text-white mb-2 drop-shadow">
            Apa itu S+?
          </h2>
          <p className="text-white/80 text-sm sm:text-base lg:text-lg text-justify leading-relaxed">
            Raih kesempatan untuk bertemu para host{" "}
            <span className="font-semibold text-red-400">
              Diary Misteri Sara
            </span>{" "}
            dan dapatkan akses{" "}
            <span className="font-semibold text-red-400">VIP ke backstage</span>{" "}
            untuk setiap event offline. Nikmati juga keuntungan lain seperti
            harga spesial untuk setiap event dan merchandise resmi{" "}
            <span className="font-semibold text-red-400">DiaryMisteriSara</span>{" "}
            & <span className="font-semibold text-red-400">DMS+</span>.
          </p>
        </div>
        <div className="flex-1 flex items-center justify-center">
          <Image
            src="/images/s.png"
            alt="S+"
            width={340}
            height={340}
            className="h-56 w-56 lg:h-[340px] lg:w-[340px]"
            sizes="(max-width: 1024px) 224px, 340px"
          />
        </div>
      </div>

      {/* Activity Section */}
      <div className="flex flex-col gap-6 bg-black px-5 py-10 lg:gap-10 lg:px-20 lg:py-16 shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-white tracking-tight">
          Our Activity
        </h1>
        <div className="flex justify-center">
          <div className="w-full max-w-4xl aspect-video overflow-hidden shadow-2xl rounded-2xl">
            <iframe
              className="w-full h-full rounded-2xl"
              src="https://www.youtube.com/embed/l7HOBQ-G6gE?si=NDtd4byGtx2TpSIJ"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>

      {/* Benefit Section */}
      <div className="flex flex-col gap-7 bg-gradient-to-br from-black via-[#2d0b0b] to-red-900/60 px-5 py-14 lg:px-20 lg:py-20 shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-white tracking-tight">
          Benefit
        </h1>
        <p className="text-center text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto">
          Nikmati berbagai keuntungan eksklusif sebagai anggota S+, mulai dari
          meet & greet, akses VIP event, hingga merchandise spesial!
        </p>
        {/* Carousel dari shadcn */}
        <div className="relative">
          <Carousel
            setApi={setApi}
            className="w-full max-w-md md:max-w-2xl lg:max-w-5xl xl:max-w-7xl mx-auto px-0"
            opts={{ loop: true }}
          >
            <CarouselContent className="ml-1">
              {[
                {
                  src: "/images/greet.jpg",
                  alt: "Meet and Greet",
                  label: "Meet & Greet Host DMS",
                },
                {
                  src: "/images/hf-2.jpg",
                  alt: "Horror Festival 2",
                  label: "VIP Horror Festival 2",
                },
                {
                  src: "/images/hf.jpg",
                  alt: "Horror Festival",
                  label: "VIP Horror Festival",
                },
                {
                  src: "/images/hf-3.jpeg",
                  alt: "Horror Festival 3",
                  label: "VIP Horror Festival 3",
                },
                {
                  src: "/images/cinepolis.jpg",
                  alt: "Cinepolis",
                  label: "Nonton Bareng Cinepolis",
                },
              ].map((image, i) => (
                <CarouselItem
                  key={i}
                  className="basis-full md:basis-1/2 lg:basis-1/3 pl-1 pr-4"
                >
                  {/* Modern Elegant Tile */}
                  <div className="relative group overflow-hidden shadow-lg hover:shadow-red-700/60 transition-shadow duration-300 rounded-2xl">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={600}
                      height={384}
                      className="w-full h-72 lg:h-96 object-cover transition-transform duration-300 group-hover:scale-105 rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 600px"
                      unoptimized
                    />
                    <div
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[90%] px-4 py-2 flex justify-center items-center
                    bg-black/40 backdrop-blur-md border border-red-700/60 rounded-lg
                    shadow-md"
                    >
                      <span className="text-white font-bold text-base lg:text-lg tracking-wide drop-shadow-sm">
                        {image.label}
                      </span>
                    </div>
                    <div className="absolute inset-0 pointer-events-none group-hover:ring-2 group-hover:ring-red-700/60 transition-all duration-300 rounded-2xl"></div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>

            {/* Arrows only visible on md and above screens */}
            <div className="hidden md:block">
              <CarouselPrevious />
              <CarouselNext />
            </div>

            {/* Mobile controls - arrows and dots in a single row */}
            <div className="flex justify-center items-center gap-4 mt-8 md:hidden h-10">
              <CarouselPrevious className="static transform-none shadow-xl flex-shrink-0" />

              {/* Dots indicator between arrows - perfectly centered */}
              <div className="flex items-center gap-2 h-full">
                {Array.from({ length: count }).map((_, index) => (
                  <button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      current === index ? "bg-red-500" : "bg-white/30"
                    }`}
                    onClick={() => api?.scrollTo(index)}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <CarouselNext className="static transform-none shadow-xl flex-shrink-0" />
            </div>
          </Carousel>
        </div>
      </div>

      {/* Testimoni Section */}
      <div className="flex flex-col gap-7 bg-black/95 px-5 py-14 lg:px-20 lg:py-20 shadow-2xl">
        <h1 className="text-center text-3xl font-bold text-white tracking-tight mb-2">
          Testimoni Anggota S+
        </h1>
        <p className="text-center text-white/80 text-sm sm:text-base lg:text-lg max-w-2xl mx-auto mb-8">
          Apa kata mereka yang sudah bergabung dengan S+?
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Testimoni 1 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-1.jpg"
                alt="Testimoni 1"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "S+ adalah rumah yang sudah lama aku tunggu. Di sini kita bisa
              berbagi cerita, kumpul bareng Saraddicts, dan makin dekat dengan
              para Host. Banyak hadiah, info eksklusif, dan kejutan seru! Semoga
              S+ terus bertumbuh bersama."
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Elsa
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2017</span>
          </div>
          {/* Testimoni 2 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-2.jpg"
                alt="Testimoni 2"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "Setelah gabung S+ Gold, aku dapat banyak manfaat—bisa Zoom meet
              bareng host DMS, ngobrol dengan Saraddicts dari berbagai negara,
              dan masih banyak keuntungan lainnya. Gak nyesel jadi member S+!
              🖤🌹"
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Alvian
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2018</span>
          </div>
          {/* Testimoni 3 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-3.jpg"
                alt="Testimoni 3"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "Gabung S+ seru banget! Banyak manfaat, dapat teman baru,
              info-info menarik, dan bisa ikut event bareng Saraddicts lain.
              Pokoknya nggak nyesel gabung S+! ❤"
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Meydita
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2022</span>
          </div>
          {/* Testimoni 4 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-4.jpg"
                alt="Testimoni 4"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "S+ keren banget! Mimpi ketemu host DMS akhirnya terwujud, dapat
              info terbaru, ikut event seru, dan punya keluarga baru yang asik.
              Kalau kamu Saraddicts, wajib gabung S+! ❤"
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Inez
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2020</span>
          </div>
          {/* Testimoni 5 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-5.jpg"
                alt="Testimoni 5"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "Jadi member S+ dapat banyak exclusive perks: update acara,
              komunikasi mudah dengan PIC, undangan event spesial, diskon
              merchandise, dan makin banyak teman Saraddicts dari berbagai
              tempat. Bangga jadi bagian S+! 🌹"
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Delillah, Saraddict Malaysia
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2021</span>
          </div>
          {/* Testimoni 6 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-6.jpg"
                alt="Testimoni 6"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "Bangga jadi bagian S+ Platinum. Banyak teman baru yang kini jadi
              keluarga, admin ramah dan selalu merangkul anggota. Sudah
              mengikuti DMS sejak kolaborasi dengan Teh Risa di Kota Tua, 9
              tahun lalu."
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Lidia
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2016</span>
          </div>
          {/* Testimoni 7 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-7.jpg"
                alt="Testimoni 7"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "Bangga jadi bagian S+. S+ itu rumah dan keluarga, tempat support
              Nyai, DMS, dan karya-karyanya. Banyak activity bikin makin akrab
              dan kompak. Semoga S+ makin solid, tambah anggota, dan tambah
              terus! ❤"
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Tatika
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2014</span>
          </div>
          {/* Testimoni 8 */}
          <div className="bg-gradient-to-br from-[#2d0b0b] via-black to-black rounded-3xl shadow-xl p-7 flex flex-col items-center text-center transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-red-900/30">
            <div className="relative w-full h-72 md:h-48 mb-5 rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/testimoni/testimoni-8.jpg"
                alt="Testimoni 8"
                fill
                className="object-cover w-full h-full transition-transform duration-300 hover:scale-105"
                style={{ objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 300px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <p className="text-white/90 text-base mb-3 italic leading-relaxed">
              "S+ komunitas paling bermanfaat untuk Saraddicts! Admin selalu
              siap bantu, dapat info DMS lebih awal, Zoom bareng host, banyak
              teman dari mana-mana, diskon event, bahkan free makanan/minuman.
              Setiap momen bareng S+ selalu seru dan nggak terlupakan."
            </p>
            <span className="text-red-400 font-semibold tracking-wide">
              Rismala
            </span>
            <span className="text-xs text-white/60">Bergabung sejak 2020</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full bg-black/95 border-t border-red-900 text-white py-12 px-5 lg:px-20 mt-8">
        <div className="flex flex-col md:flex-row gap-10 md:gap-5 justify-between">
          <div className="flex-1 flex flex-col gap-3 text-lg">
            <p className="font-bold text-xl text-red-600">
              PT Kreatif Berkah Abadi
            </p>
            <Separator className="bg-red-900/40 my-2" />
            <div className="flex items-start gap-4">
              <span className="mt-1">📍</span>
              <div>
                <p className="font-semibold">Alamat</p>
                <p className="text-white/80 text-base">
                  Jalan Wijaya Kusuma IB No. 20 Pondok Labu RT.6 / RW.4
                  <br />
                  Cilandak, Kecamatan Cilandak
                  <br />
                  Kota Jakarta Selatan
                  <br />
                  Daerah Khusus Ibukota Jakarta 12450
                  <br />
                  Indonesia
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>✉️</span>
              <div>
                <p className="font-semibold">Partnership / Marketing</p>
                <p className="text-white/80 text-base">kolaborasi@dmsplus.id</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <span>🎧</span>
              <div>
                <p className="font-semibold">Layanan Pengguna</p>
                <p className="text-white/80 text-base">dev@dmsplus.id</p>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-lg">
            <p className="font-bold text-xl text-red-600">Perusahaan</p>
            <Separator className="bg-red-900/40 my-2" />
            <div className="flex flex-col gap-2 text-base">
              <a
                href="https://dmsplus.id/"
                className="hover:text-red-500 transition-colors"
              >
                Home
              </a>
              <a
                href="https://dmsplus.id/#about"
                className="hover:text-red-500 transition-colors"
              >
                About Us
              </a>
              <a
                href="https://dmsplus.id/#vp"
                className="hover:text-red-500 transition-colors"
              >
                Viewplus
              </a>
              <a
                href="https://dmsplus.id/#ec"
                className="hover:text-red-500 transition-colors"
              >
                Exclusive Content
              </a>
            </div>
          </div>
          <div className="flex-1 flex flex-col gap-3 text-lg">
            <p className="font-bold text-xl text-red-600">Download Aplikasi</p>
            <Separator className="bg-red-900/40 my-2" />
            <div className="flex flex-col gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.cinematichororuniverse.dmsplus"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/google-play.png"
                  alt="Google Play"
                  width={150}
                  height={44}
                  className="h-[44px] w-[150px]"
                  sizes="150px"
                />
              </a>
              <a
                href="https://apps.apple.com/id/app/dms-plus/id6449019514"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:scale-105 transition-transform"
              >
                <Image
                  src="/images/app-store.png"
                  alt="App Store"
                  width={150}
                  height={44}
                  className="h-[44px] w-[150px]"
                  sizes="150px"
                />
              </a>
            </div>
          </div>
        </div>
        <Separator className="bg-red-900/20 my-8" />
        <div className="text-center text-white/60 text-sm">
          &copy; {new Date().getFullYear()} PT Kreatif Berkah Abadi. All rights
          reserved.
        </div>
      </footer>
    </div>
  );
}
