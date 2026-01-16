import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import IntroSection from "@/components/sections/IntroSection";
import GreetingSection from "@/components/sections/GreetingSection";
import LoveNotesSection from "@/components/sections/LoveNotesSection";
import MemoriesSection from "@/components/sections/MemoriesSection";
import MessageSection from "@/components/sections/MessageSection";
import VideoSection from "@/components/sections/VideoSection";
import FinalSection from "@/components/sections/FinalSection";

type Section = "intro" | "greeting" | "loveNotes" | "memories" | "message" | "video" | "final";

const Index = () => {
  const [currentSection, setCurrentSection] = useState<Section>("intro");

  const goToSection = (section: Section) => {
    setCurrentSection(section);
  };

  const renderSection = () => {
    switch (currentSection) {
      case "intro":
        return <IntroSection onContinue={() => goToSection("greeting")} />;
      case "greeting":
        return <GreetingSection onContinue={() => goToSection("loveNotes")} />;
      case "loveNotes":
        return <LoveNotesSection onContinue={() => goToSection("memories")} />;
      case "memories":
        return <MemoriesSection onContinue={() => goToSection("message")} />;
      case "message":
        return <MessageSection onContinue={() => goToSection("video")} />;
      case "video":
        return <VideoSection onContinue={() => goToSection("final")} />;
      case "final":
        return <FinalSection />;
      default:
        return <IntroSection onContinue={() => goToSection("greeting")} />;
    }
  };

  return (
    <div className="min-h-screen font-body relative overflow-hidden">
      <FloatingHearts />
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSection}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        >
          {renderSection()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default Index;
