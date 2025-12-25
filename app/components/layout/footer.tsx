export default function Footer() {
  return (
    <footer className="bg-[#0B2A45] dark:bg-[#E7F4FF]">
      <div className="max-w-6xl mx-auto px-6 py-4">
        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm">
          {/* LEFT */}
          <div className="leading-relaxed text-[#E6EEF6] dark:text-[#1E3A56]">
            <p className="font-semibold text-[#F2F7FB] dark:text-[#0B2A45]">
              KKN Turi Berdikari UGM
            </p>
            <p className="opacity-80">
              Platform informasi, edukasi, dan pendampingan masyarakat.
            </p>
          </div>

          {/* RIGHT */}
          <div className="md:text-right text-[#E6EEF6] dark:text-[#1E3A56]">
            <p className="font-semibold text-[#F2F7FB] dark:text-[#0B2A45]">
              Universitas Gadjah Mada
            </p>
            <p className="opacity-75">2025 – 2026</p>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="my-2 border-t border-white/15 dark:border-[#0B2A45]/20" />

        {/* BOTTOM */}
        <div className="text-xs text-center text-white/60 dark:text-[#0B2A45]/65">
          Pengembangan Masyarakat di Wilayah Geopark Jogja
        </div>
      </div>
    </footer>
  );
}
