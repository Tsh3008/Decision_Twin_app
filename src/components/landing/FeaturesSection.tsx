import { motion } from "framer-motion";
import { Brain, TrendingUp, Eye, Network, Activity, Lightbulb } from "lucide-react";

const features = [
  { icon: Brain, title: "AI Decision Simulation", desc: "Run intelligent simulations on your life choices and see predicted outcomes before committing." },
  { icon: TrendingUp, title: "Career Path Predictor", desc: "Compare career trajectories with AI-driven market analysis and growth forecasts." },
  { icon: Eye, title: "Future Outcome Visualization", desc: "See your possible futures visualized across income, satisfaction, and stability metrics." },
  { icon: Network, title: "Mind Map Generator", desc: "Auto-generate decision trees that map every possibility and its long-term impact." },
  { icon: Activity, title: "Stress & Income Predictions", desc: "Get personalized stress levels and income projections for each career path." },
  { icon: Lightbulb, title: "AI Recommendation Engine", desc: "Receive actionable suggestions backed by real market data and trend analysis." },
];

export const FeaturesSection = () => (
  <section className="py-32 relative bg-black">
    {/* Subtle radial glows */}
    <div className="absolute top-0 left-1/4 w-[500px] h-[500px] rounded-full bg-[radial-gradient(circle,rgba(100,140,255,0.04),transparent_70%)] pointer-events-none" />
    <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(139,92,246,0.04),transparent_70%)] pointer-events-none" />

    <div className="container mx-auto px-6 relative z-10">
      <motion.div
        className="text-center mb-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          Powered by <span className="gradient-text">Intelligence</span>
        </h2>
        <p className="text-white/40 text-lg max-w-2xl mx-auto">
          Six core AI modules working together to predict your optimal future.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={i}
            className="group cursor-default relative rounded-2xl p-8 transition-all duration-500 hover:-translate-y-1"
            style={{
              background: "linear-gradient(145deg, rgba(15,15,15,0.9), rgba(8,8,8,0.95))",
              border: "1px solid rgba(255,255,255,0.06)",
              boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
            }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            whileHover={{
              boxShadow: "0 8px 40px rgba(100,140,255,0.1), 0 0 1px rgba(100,140,255,0.3)",
              borderColor: "rgba(100,140,255,0.15)",
            }}
          >
            {/* Shine effect */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.03) 0%, transparent 50%, rgba(255,255,255,0.01) 100%)",
              }}
            />
            <div className="relative z-10">
              <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300"
                style={{ background: "rgba(100,140,255,0.08)" }}
              >
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-white">{f.title}</h3>
              <p className="text-sm text-white/35 leading-relaxed">{f.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);
