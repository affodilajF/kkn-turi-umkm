"use client";
import Image from "next/image";
import { Subheading } from "./subheading";
import Anim1 from "../../animations/anim1.js";

export default function HeroSection() {
  return (
    <section className="pt-16 min-h-[75vh] relative overflow-hidden dark:bg-[#171F2E] bg-white">
      <div className="max-w-[120rem] mx-auto relative">
        <div className="wrapper">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-0 sm:px-10 lg:px-36">
            {/* ==================== TEKS (Mobile di atas - Desktop kiri) ==================== */}
            <div className="text-left pb-0 relative z-20 order-1 lg:order-1">
              <Subheading text="Halo Para Pejuang UMKM" />

              <h1 className="text-gray-700 font-bold mb-4 text-4xl sm:text-[50px] dark:text-white/90 sm:leading-[64px] max-w-[700px]">
                Formalisasi UMKM
              </h1>

              <p className="max-w-[480px] dark:text-gray-400 text-gray-500 text-base leading-relaxed">
                Jelajahi Hukum Islam secara Terstruktur untuk Memahami Prinsip,
                Meningkatkan Literasi Syariah, dan Membangun Pemahaman yang
                Relevan dengan Kehidupan Modern.
              </p>

              <div className="mt-6 flex sm:flex-row flex-col gap-0 items-start justify-start relative z-30">
                <button
                  onClick={() =>
                    window.scrollBy({ top: 800, behavior: "smooth" })
                  }
                  className="bg-primary-500 transition h-12 inline-flex items-center justify-center hover:bg-primary-600 px-6 py-0 rounded-full text-white text-sm shadow-theme-md"
                >
                  Yuk belajar sekarang!
                </button>
              </div>
            </div>

            {/* ==================== LOTTIE (Mobile paling bawah) ==================== */}
            <div className="relative flex justify-center lg:justify-end z-10 order-2 lg:order-2 mt-0 lg:mt-0">
              <div className="w-[260px] sm:w-[300px] md:w-[320px] lg:w-[380px] mx-auto">
                <Anim1 />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Background glow tetap */}
      <div className="hero-glow-bg pointer-events-none w-full h-167.5 absolute z-10 -bottom-100"></div>
    </section>
  );
}
