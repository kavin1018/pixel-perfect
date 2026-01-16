import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";

interface IntroSectionProps {
  onContinue: () => void;
}

const IntroSection = ({ onContinue }: IntroSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-rose-medium to-rose-light px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h1
        className="text-2xl md:text-3xl font-body font-medium text-foreground mb-8 text-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        POV : It's Her birthday 😊❤️
      </motion.h1>

      <BirthdayButton onClick={onContinue}>
        Continue ✨
      </BirthdayButton>
    </motion.section>
  );
};

export default IntroSection;
