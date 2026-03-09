import { motion } from "framer-motion";
import { Lightbulb, TrendingUp, ArrowRight } from "lucide-react";

const recommendations = [
  {
    title: "Switch to Data Science",
    explanation: "Based on current market trends, switching to Data Science has a 72% higher growth potential compared to your current path.",
    confidence: 92,
    impact: "High",
    category: "Career",
  },
  {
    title: "Upskill in Machine Learning",
    explanation: "ML skills are in top 3 demand across all tech sectors. Adding ML to your skillset increases earning potential by 35%.",
    confidence: 88,
    impact: "High",
    category: "Skills",
  },
  {
    title: "Consider Remote-First Roles",
    explanation: "Remote roles offer 15-20% higher savings potential and access to global job markets without relocation costs.",
    confidence: 85,
    impact: "Medium",
    category: "Lifestyle",
  },
  {
    title: "Pursue Cloud Certifications",
    explanation: "AWS/Azure certifications boost job stability score by 24% and open doors to high-growth cloud infrastructure roles.",
    confidence: 81,
    impact: "Medium",
    category: "Skills",
  },
  {
    title: "Network in AI Communities",
    explanation: "Active participation in AI communities correlates with 40% faster career advancement in tech roles.",
    confidence: 78,
    impact: "Medium",
    category: "Networking",
  },
];

const Recommendations = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-1">AI Recommendations</h1>
      <p className="text-sm text-muted-foreground">Personalized suggestions based on your profile and market data.</p>
    </div>

    <div className="space-y-4">
      {recommendations.map((r, i) => (
        <motion.div
          key={i}
          className="glass-card-hover p-6 group cursor-default"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
        >
          <div className="flex items-start gap-5">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:glow-teal transition-all">
              <Lightbulb className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h3 className="font-semibold">{r.title}</h3>
                <span className="text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">{r.category}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full ${r.impact === 'High' ? 'bg-neon-teal/10 text-neon-teal' : 'bg-neon-purple/10 text-neon-purple'}`}>
                  {r.impact} Impact
                </span>
              </div>
              <p className="text-sm text-muted-foreground mb-3">{r.explanation}</p>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Confidence:</span>
                  <div className="w-24 h-1.5 rounded-full bg-white/5 overflow-hidden">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${r.confidence}%` }} />
                  </div>
                  <span className="text-xs text-primary font-medium">{r.confidence}%</span>
                </div>
              </div>
            </div>
            <ArrowRight className="w-4 h-4 text-muted-foreground/30 group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Recommendations;
