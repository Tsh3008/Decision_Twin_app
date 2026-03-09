import { motion } from "framer-motion";
import { FolderOpen, Clock, TrendingUp } from "lucide-react";

const scenarios = [
  { title: "Data Science vs Software Engineering", date: "2 hours ago", score: "87%", status: "Completed" },
  { title: "NYC vs Austin Relocation", date: "Yesterday", score: "72%", status: "Completed" },
  { title: "MBA vs Work Experience", date: "3 days ago", score: "91%", status: "Completed" },
  { title: "Startup vs Corporate", date: "1 week ago", score: "68%", status: "Completed" },
  { title: "Freelance vs Full-time", date: "2 weeks ago", score: "79%", status: "Draft" },
];

const Scenarios = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-1">My Scenarios</h1>
      <p className="text-sm text-muted-foreground">View and manage your saved decision simulations.</p>
    </div>

    <div className="space-y-3">
      {scenarios.map((s, i) => (
        <motion.div
          key={i}
          className="glass-card-hover p-5 flex items-center justify-between cursor-pointer"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.08 }}
        >
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
              <FolderOpen className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h3 className="text-sm font-semibold">{s.title}</h3>
              <div className="flex items-center gap-2 text-xs text-muted-foreground mt-1">
                <Clock className="w-3 h-3" /> {s.date}
              </div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <span className={`text-xs px-2 py-0.5 rounded-full ${s.status === 'Completed' ? 'bg-primary/10 text-primary' : 'bg-white/5 text-muted-foreground'}`}>
              {s.status}
            </span>
            <div className="flex items-center gap-1">
              <TrendingUp className="w-3 h-3 text-primary" />
              <span className="text-sm font-medium text-primary">{s.score}</span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Scenarios;
