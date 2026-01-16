import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";

interface GreetingSectionProps {
  onContinue: () => void;
}

const GreetingSection = ({ onContinue }: GreetingSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-cream px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-4xl md:text-6xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-gold mb-6 text-center tracking-wide"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        HAPPY BIRTHDAY PAPA 💕
      </motion.h1>

      <motion.p
        className="text-lg md:text-xl font-body text-muted-foreground mb-10 text-center max-w-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        Today is all about celebrating you and the happiness you bring into my life ✨
      </motion.p>

      <BirthdayButton onClick={onContinue}>
        Start the Celebration ✨
      </BirthdayButton>
    </motion.section>
  );
};

export default GreetingSection;
