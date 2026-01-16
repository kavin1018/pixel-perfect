import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";
import memory1 from "@/assets/memory-1.jpg";
import memory2 from "@/assets/memory-2.jpg";
import memory3 from "@/assets/memory-3.jpg";
import memory4 from "@/assets/memory-4.jpg";

interface MemoriesSectionProps {
  onContinue: () => void;
}

const memories = [memory1, memory2, memory3, memory4];

const MemoriesSection = ({ onContinue }: MemoriesSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-cream py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🥰 Our Beautiful Memories
      </motion.h2>

      <div className="flex flex-wrap justify-center gap-4 max-w-4xl mb-10">
        {memories.map((memory, index) => (
          <motion.div
            key={index}
            className="relative group"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.15 + 0.2 }}
          >
            <div className="w-40 h-56 md:w-48 md:h-64 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={memory}
                alt={`Memory ${index + 1}`}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <span className="absolute -top-2 -right-2 text-xl animate-pulse">💗</span>
          </motion.div>
        ))}
      </div>

      <BirthdayButton onClick={onContinue}>
        A Message for You 🌙
      </BirthdayButton>
    </motion.section>
  );
};

export default MemoriesSection;
