import { motion } from "framer-motion";

interface BirthdayButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const BirthdayButton = ({ onClick, children }: BirthdayButtonProps) => {
  return (
    <motion.button
      onClick={onClick}
      className="px-8 py-4 bg-primary text-primary-foreground font-body font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow text-lg"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.5 }}
    >
      {children}
    </motion.button>
  );
};

export default BirthdayButton;
