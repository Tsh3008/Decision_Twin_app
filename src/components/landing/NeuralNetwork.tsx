import { motion } from "framer-motion";
import { Brain, GitBranch, Zap } from "lucide-react";

const nodes = [
  { x: 200, y: 200, size: 80, icon: Brain, label: "AI Brain", delay: 0 },
  { x: 80, y: 80, size: 40, label: "Career", delay: 0.2 },
  { x: 320, y: 60, size: 40, label: "Income", delay: 0.4 },
  { x: 350, y: 200, size: 45, icon: GitBranch, label: "Paths", delay: 0.3 },
  { x: 60, y: 280, size: 35, label: "Risk", delay: 0.5 },
  { x: 300, y: 330, size: 40, label: "Growth", delay: 0.6 },
  { x: 160, y: 360, size: 35, icon: Zap, label: "Impact", delay: 0.7 },
  { x: 100, y: 170, size: 30, delay: 0.8 },
  { x: 280, y: 150, size: 30, delay: 0.9 },
];

const connections = [
  [0, 1], [0, 2], [0, 3], [0, 4], [0, 5], [0, 6],
  [1, 7], [2, 8], [3, 8], [4, 7], [5, 6],
];

export const NeuralNetwork = () => {
  return (
    <div className="relative w-[420px] h-[420px]">
      {/* Outer glow ring */}
      <motion.div
        className="absolute inset-4 rounded-full border border-primary/20"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute inset-12 rounded-full border border-neon-purple/15"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
      />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 420 420">
        {connections.map(([a, b], i) => (
          <motion.line
            key={i}
            x1={nodes[a].x} y1={nodes[a].y}
            x2={nodes[b].x} y2={nodes[b].y}
            stroke="url(#lineGradient)"
            strokeWidth="1.5"
            strokeOpacity="0.4"
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.5, delay: 0.5 + i * 0.1 }}
          />
        ))}
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(174, 72%, 56%)" />
            <stop offset="100%" stopColor="hsl(265, 60%, 55%)" />
          </linearGradient>
        </defs>
      </svg>

      {nodes.map((node, i) => {
        const Icon = node.icon;
        return (
          <motion.div
            key={i}
            className="absolute flex flex-col items-center justify-center"
            style={{
              left: node.x - node.size / 2,
              top: node.y - node.size / 2,
              width: node.size,
              height: node.size,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: node.delay }}
          >
            <motion.div
              className={`glass-card rounded-full w-full h-full flex items-center justify-center ${i === 0 ? 'glow-teal border-primary/30' : 'border-white/10'}`}
              animate={{ y: [0, -4, 0] }}
              transition={{ duration: 3 + i * 0.5, repeat: Infinity, ease: "easeInOut" }}
            >
              {Icon && <Icon className={`${i === 0 ? 'w-8 h-8 text-primary' : 'w-4 h-4 text-primary/80'}`} />}
              {!Icon && <div className="w-2 h-2 rounded-full bg-primary/60" />}
            </motion.div>
            {node.label && (
              <span className={`text-[10px] mt-1 text-muted-foreground whitespace-nowrap ${i === 0 ? 'text-xs text-primary font-medium' : ''}`}>
                {node.label}
              </span>
            )}
          </motion.div>
        );
      })}
    </div>
  );
};
