import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";

interface LoveNotesSectionProps {
  onContinue: () => void;
}

const loveNotes = [
  { emoji: "🥰", text: "I need U till my last breath" },
  { emoji: "❤️", text: "You are my favourite person" },
  { emoji: "🏠", text: "My safe place" },
  { emoji: "😊", text: "The reason behind my smile" },
  { emoji: "🥰", text: "My today, tomorrow & forever" },
  { emoji: "💗", text: "I'll always there for u my child" },
];

const LoveNotesSection = ({ onContinue }: LoveNotesSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-rose-light py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-10 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        💗 Little Things I Love About You
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mb-10">
        {loveNotes.map((note, index) => (
          <motion.div
            key={index}
            className="bg-card rounded-2xl p-6 shadow-md hover:shadow-lg transition-shadow text-center relative"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <span className="absolute -top-3 left-1/2 transform -translate-x-1/2 text-xl">
              💗
            </span>
            <span className="text-xl mr-2">{note.emoji}</span>
            <span className="font-body text-foreground">{note.text}</span>
          </motion.div>
        ))}
      </div>

      <BirthdayButton onClick={onContinue}>
        Our Memories 👆
      </BirthdayButton>
    </motion.section>
  );
};

export default LoveNotesSection;
