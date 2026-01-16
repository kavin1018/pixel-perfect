import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";

interface MessageSectionProps {
  onContinue: () => void;
}

const MessageSection = ({ onContinue }: MessageSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-rose-light py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="bg-card rounded-3xl p-8 md:p-12 shadow-xl max-w-lg text-center"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, type: "spring" }}
      >
        <motion.h2
          className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          A Special Message 🥰
        </motion.h2>

        <motion.div
          className="space-y-4 font-body text-muted-foreground text-lg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <p>Happy Birthday to the most beautiful soul in my life.</p>
          <p>Every smile of yours feels like magic to me.</p>
          <p>You make my ordinary days feel extraordinary.</p>
          <div className="flex justify-center gap-2 text-xl my-4">
            <span>💗</span>
            <span>💗</span>
            <span>💗</span>
          </div>
          <p>Thank you for being you.</p>
          <p>I wish you endless happiness, today and always 💕</p>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-10"
      >
        <BirthdayButton onClick={onContinue}>
          One Last Surprise 🎁
        </BirthdayButton>
      </motion.div>
    </motion.section>
  );
};

export default MessageSection;
