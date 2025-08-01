import { useState } from "react";
import Header from "./components/Header";
import HomeTab from "./components/HomeTab";
import DirectoryTab from "./components/DirectoryTab/DirectoryTab";
import SMVTab from "./components/SMVProfilingTab/SMVTab";
import Footer from "./components/Footer";
import HeroSection from "./components/Homepage/PersonSection/HeroSection";
import Credentials from "./components/Homepage/Credentials/Credentials";
import ServicesSection from "./components/Homepage/ServiceSection/ServiceSection";
import CurrentSection from "./components/Homepage/CurrentSection/CurrentSection";
import QRRPATab from "./components/QRRPATab/QRRPATab";

export default function App() {
  const [activeTab, setActiveTab] = useState("home");

  return (
    <div className="bg-gray-50 font-sans min-h-screen flex flex-col">
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />
      <main class="container mx-auto px-4 py-8">
        <div id="home" class="tab-content active">
          <HeroSection/>
          <Credentials/>
          <ServicesSection/>
          <CurrentSection/>
          {activeTab === "home" && <HomeTab />}
          {activeTab === "directory" && <DirectoryTab />}
          {activeTab === "smv" && <SMVTab />}
          {activeTab === "qrrpa" && <QRRPATab />}
        </div>
      </main>
      <Footer />
    </div>
  );
}
