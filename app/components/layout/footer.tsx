export default function Footer() {
  return (
    <footer className="bg-[#0B2A45] dark:bg-[#E7F4FF] text-white dark:text-[#0B2A45]">
      <div className="max-w-6xl mx-auto px-6 pt-4 pb-4">
        {/* Grid Bagian Utama */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          {/* Kiri */}
          <div className="text-sm leading-relaxed text-white dark:text-[#0B2A45]">
            <p className="font-semibold">KKN Turi Berdikari UGM</p>
            <p>Platform informasi, edukasi, dan pendampingan masyarakat.</p>
          </div>

          {/* Kanan */}
          <div className="text-sm md:text-right text-white dark:text-[#0B2A45]">
            <p className="font-semibold">Universitas Gadjah Mada</p>
            <p>2025 – 2026</p>
          </div>
        </div>

        {/* Garis */}
        <div className="my-1 border-t border-white/30 dark:border-[#0B2A45]/30"></div>

        {/* Bagian Bawah */}
        <div className="text-xs text-white/80 dark:text-[#0B2A45]/80 text-center">
          Pengembangan Masyarakat di Wilayah Geopark Jogja
        </div>
      </div>
    </footer>
  );
}
