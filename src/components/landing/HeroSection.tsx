import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { BlackHoleCanvas } from "./BlackHoleCanvas";
import { StartSimulationButton } from "./StartSimulationButton";

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="relative min-h-screen flex items-end justify-center overflow-hidden bg-black pb-32">
      {/* Animated black hole background */}
      <BlackHoleCanvas />

      {/* Dark overlay for text readability */}
      <div className="absolute inset-0 bg-black/45 z-[1]" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-[900px] mx-auto px-6">
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-5 py-2 rounded-full border border-white/10 bg-white/[0.04] backdrop-blur-md mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs tracking-[0.2em] uppercase text-white/60 font-medium">
              AI Decision Intelligence
            </span>
          </motion.div>

          {/* Main heading */}
          <motion.h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.9 }}
          >
            DecisionTwin
            <span className="gradient-text"> AI</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-xl md:text-2xl font-light text-white/50 mb-4 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            Simulate Your Future Decisions
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-sm md:text-base text-white/30 max-w-lg mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
          >
            AI-powered simulations and predictive analytics to explore career choices,
            education paths, and life decisions.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap justify-center gap-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
          >
            <StartSimulationButton onClick={() => navigate("/dashboard")} />
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-[2]" />
    </section>
  );
};
