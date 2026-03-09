import { motion } from "framer-motion";
import { Upload, Cpu, BarChart3 } from "lucide-react";
import { AnimatedStepCard } from "./AnimatedStepCard";

const steps = [
  { icon: Upload, title: "Enter Your Situation", desc: "Input your career choice, education decision, or relocation plans.", num: "01" },
  { icon: Cpu, title: "AI Analyzes Data", desc: "Our AI processes market data, trends, and your personal preferences.", num: "02" },
  { icon: BarChart3, title: "Compare Outcomes", desc: "View predicted outcomes across multiple scenarios and choose wisely.", num: "03" },
];

export const HowItWorksSection = () => (
  <section className="py-32 relative bg-black overflow-hidden">
    {/* Subtle center glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.05),transparent_70%)] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          How It <span className="gradient-text">Works</span>
        </h2>
        <p className="text-white/40 text-lg">Three simple steps to simulate your future.</p>
      </motion.div>

      <div className="flex flex-col lg:flex-row items-stretch gap-8 max-w-5xl mx-auto">
        {steps.map((s, i) => (
          <motion.div
            key={i}
            className="flex-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
          >
            <AnimatedStepCard
              number={s.num}
              title={s.title}
              description={s.desc}
            />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
