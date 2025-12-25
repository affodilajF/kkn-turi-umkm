import HeroSection from "./components/sections/hero-section";
import ToolsTab from "./components/sections/tools-tab";
import Footer from "./components/layout/footer";
import Header from "./components/layout/header/header";

export default function Home() {
  return (
    <div className="dark:bg-[rgb(16,24,40)] flex flex-col flex-1">
      {/* Header */}
      <Header />

      {/* Main content */}
      <div className="isolate flex-1 flex flex-col">
        <HeroSection />
        <ToolsTab />
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
