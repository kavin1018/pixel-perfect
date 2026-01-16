import { motion } from "framer-motion";
import BirthdayButton from "../BirthdayButton";

interface VideoSectionProps {
  onContinue: () => void;
}

const VideoSection = ({ onContinue }: VideoSectionProps) => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-rose-light py-16 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.h2
        className="text-2xl md:text-3xl font-display font-semibold text-foreground mb-8 flex items-center gap-2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        🎁 A Small Video Just for You
      </motion.h2>

      <motion.div
        className="w-full max-w-md aspect-[9/16] bg-card rounded-3xl overflow-hidden shadow-xl relative"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
      >
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-b from-primary/20 to-accent/20">
          <div className="text-6xl mb-4 animate-pulse">🎬</div>
          <p className="font-body text-foreground text-lg">Your special video</p>
          <p className="font-body text-muted-foreground text-sm mt-2">(Add your video here)</p>
        </div>
        
        {/* Floating hearts overlay */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(8)].map((_, i) => (
            <motion.span
              key={i}
              className="absolute text-primary/50"
              style={{
                left: `${Math.random() * 80 + 10}%`,
                top: `${Math.random() * 80 + 10}%`,
              }}
              animate={{
                y: [-5, 5, -5],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.3,
              }}
            >
              💗
            </motion.span>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="mt-10"
      >
        <BirthdayButton onClick={onContinue}>
          Final Surprise 💕
        </BirthdayButton>
      </motion.div>
    </motion.section>
  );
};

export default VideoSection;
