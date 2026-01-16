import { motion } from "framer-motion";

const FinalSection = () => {
  return (
    <motion.section
      className="min-h-screen flex flex-col items-center justify-center bg-dark-romantic py-16 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Floating hearts on dark background */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <motion.span
            key={i}
            className="absolute text-primary"
            style={{
              left: `${Math.random() * 90 + 5}%`,
              fontSize: `${Math.random() * 12 + 10}px`,
            }}
            initial={{ y: "100vh", opacity: 0 }}
            animate={{
              y: "-100vh",
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: Math.random() * 5 + 8,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          >
            💗
          </motion.span>
        ))}
      </div>

      <motion.h1
        className="text-3xl md:text-5xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-primary via-gold to-accent mb-6 text-center z-10"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5, type: "spring" }}
      >
        💕 I Love You Always & Forever 💕
      </motion.h1>

      <motion.p
        className="text-lg font-body text-rose-medium mb-10 text-center z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
      >
        You are my safe place and my forever 💗
      </motion.p>

      <motion.div
        className="bg-cream/95 rounded-2xl p-6 md:p-8 max-w-md text-center z-10 shadow-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2 }}
      >
        <p className="font-body text-foreground text-lg italic">
          "Even on your worst days, you are still my best choice 💕"
        </p>
        <div className="flex justify-center gap-2 mt-4 text-xl">
          <motion.span
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          >
            💗
          </motion.span>
        </div>
      </motion.div>

      <motion.p
        className="text-rose-medium/70 font-body text-sm mt-12 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Made with ❤️ just for you
      </motion.p>
    </motion.section>
  );
};

export default FinalSection;
