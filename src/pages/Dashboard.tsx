import { motion } from "framer-motion";
import {
  TrendingUp, DollarSign, Heart, Shield, ArrowUpRight, Sparkles, Brain,
  Zap
} from "lucide-react";
import {
  BarChart, Bar, PieChart, Pie, Cell, LineChart, Line, XAxis, YAxis,
  ResponsiveContainer, Tooltip, AreaChart, Area
} from "recharts";

const stats = [
  { label: "Career Prediction Score", value: "87%", change: "+12%", icon: TrendingUp, color: "text-primary" },
  { label: "Future Income Estimate", value: "$95K", change: "+24%", icon: DollarSign, color: "text-neon-blue" },
  { label: "Stress Level Index", value: "Low", change: "-18%", icon: Heart, color: "text-neon-purple" },
  { label: "Job Stability Score", value: "94%", change: "+8%", icon: Shield, color: "text-primary" },
];

const salaryLine = [
  { year: "2024", salary: 55 }, { year: "2025", salary: 62 }, { year: "2026", salary: 71 },
  { year: "2027", salary: 85 }, { year: "2028", salary: 98 }, { year: "2029", salary: 115 },
];

const skillDemand = [
  { name: "AI/ML", value: 92 }, { name: "Data", value: 85 }, { name: "Cloud", value: 78 },
  { name: "Web", value: 65 }, { name: "DevOps", value: 72 },
];

const pieData = [
  { name: "Data Science", value: 40 }, { name: "Software Eng", value: 30 },
  { name: "Product Mgmt", value: 20 }, { name: "Other", value: 10 },
];
const COLORS = ["hsl(174,72%,56%)", "hsl(200,100%,60%)", "hsl(265,60%,55%)", "hsl(220,10%,30%)"];

const incomeSparkline = [
  { v: 40 }, { v: 45 }, { v: 42 }, { v: 55 }, { v: 60 }, { v: 58 }, { v: 72 }, { v: 80 },
];

const tooltipStyle = {
  background: "hsl(0,0%,7%)",
  border: "1px solid rgba(255,255,255,0.1)",
  borderRadius: 8,
};

const anim = (delay: number) => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.4 },
});

const Dashboard = () => (
  <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
    {/* Left main content */}
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Welcome back, Alex</h1>
        <p className="text-sm text-muted-foreground">
          Here's your AI-powered decision insights overview.
        </p>
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 xl:grid-cols-4 gap-4">
        {stats.map((s, i) => (
          <motion.div key={i} className="glass-card-hover p-4" {...anim(i * 0.08)}>
            <div className="flex items-center justify-between mb-2">
              <span className="text-[11px] text-muted-foreground">{s.label}</span>
              <s.icon className={`w-4 h-4 ${s.color}`} />
            </div>
            <div className="text-2xl font-bold mb-1">{s.value}</div>
            <div className="flex items-center gap-1 text-[11px] text-primary">
              <ArrowUpRight className="w-3 h-3" />
              {s.change} from last month
            </div>
          </motion.div>
        ))}
      </div>

      {/* Charts row */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div className="glass-card p-5" {...anim(0.35)}>
          <h3 className="text-xs font-medium mb-4 text-muted-foreground">
            Salary Growth Over Time (K$)
          </h3>
          <ResponsiveContainer width="100%" height={200}>
            <AreaChart data={salaryLine}>
              <defs>
                <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(174,72%,56%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(174,72%,56%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Area type="monotone" dataKey="salary" stroke="hsl(174,72%,56%)" strokeWidth={2} fill="url(#salaryGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </motion.div>

        <motion.div className="glass-card p-5" {...anim(0.4)}>
          <h3 className="text-xs font-medium mb-4 text-muted-foreground">Skill Demand Trends</h3>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart data={skillDemand}>
              <defs>
                <linearGradient id="barGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(200,100%,60%)" />
                  <stop offset="100%" stopColor="hsl(174,72%,56%)" />
                </linearGradient>
              </defs>
              <XAxis dataKey="name" tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fill: "#555", fontSize: 10 }} axisLine={false} tickLine={false} />
              <Tooltip contentStyle={tooltipStyle} />
              <Bar dataKey="value" fill="url(#barGrad)" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Bottom row */}
      <div className="grid md:grid-cols-2 gap-6">
        <motion.div className="glass-card p-5" {...anim(0.5)}>
          <h3 className="text-xs font-medium mb-4 text-muted-foreground">Career Path Comparison</h3>
          <ResponsiveContainer width="100%" height={180}>
            <PieChart>
              <Pie data={pieData} innerRadius={45} outerRadius={68} dataKey="value" stroke="none">
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i]} />)}
              </Pie>
              <Tooltip contentStyle={tooltipStyle} />
            </PieChart>
          </ResponsiveContainer>
          <div className="flex flex-wrap gap-3 justify-center mt-2">
            {pieData.map((d, i) => (
              <div key={i} className="flex items-center gap-1.5 text-[10px] text-muted-foreground">
                <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS[i] }} />
                {d.name}
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div className="glass-card p-5" {...anim(0.55)}>
          <h3 className="text-xs font-medium mb-4 text-muted-foreground">Recent Simulations</h3>
          <div className="space-y-2">
            {[
              { title: "Data Science vs Software Eng", time: "2h ago", score: "87%" },
              { title: "NYC vs Austin relocation", time: "Yesterday", score: "72%" },
              { title: "MBA vs Work Experience", time: "3 days ago", score: "91%" },
              { title: "Startup vs Corporate", time: "1 week ago", score: "68%" },
            ].map((item, i) => (
              <div key={i} className="flex items-center justify-between py-2 border-b border-white/5 last:border-0">
                <div>
                  <p className="text-sm font-medium">{item.title}</p>
                  <p className="text-[10px] text-muted-foreground">{item.time}</p>
                </div>
                <span className="text-sm text-primary font-semibold">{item.score}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>

    {/* Right profile analytics panel */}
    <motion.aside className="space-y-4" {...anim(0.2)}>
      {/* Profile card */}
      <div className="glass-card p-5">
        <div className="flex flex-col items-center text-center mb-5">
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-xl font-bold text-primary-foreground mb-3 shadow-[0_0_20px_rgba(45,212,191,0.3)]">
            A
          </div>
          <h3 className="text-sm font-bold">Alex Chen</h3>
          <p className="text-[11px] text-muted-foreground">Student · Career Explorer</p>
        </div>

        {/* Career Match Score - circular */}
        <div className="flex justify-center mb-4">
          <div className="relative w-24 h-24">
            <svg className="w-24 h-24 -rotate-90" viewBox="0 0 96 96">
              <circle cx="48" cy="48" r="40" fill="none" stroke="hsl(220,10%,14%)" strokeWidth="6" />
              <circle
                cx="48" cy="48" r="40" fill="none"
                stroke="hsl(174,72%,56%)"
                strokeWidth="6" strokeLinecap="round"
                strokeDasharray={`${72 * 2.51} 251`}
                className="drop-shadow-[0_0_6px_rgba(45,212,191,0.5)]"
              />
            </svg>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <span className="text-lg font-bold">72%</span>
              <span className="text-[9px] text-muted-foreground">Match</span>
            </div>
          </div>
        </div>
        <p className="text-[10px] text-center text-muted-foreground mb-4">Career Match Score</p>

        {/* Income Growth sparkline */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-muted-foreground">Income Growth</span>
            <span className="text-[11px] font-semibold text-primary">+34%</span>
          </div>
          <ResponsiveContainer width="100%" height={50}>
            <AreaChart data={incomeSparkline}>
              <defs>
                <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="hsl(200,100%,60%)" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="hsl(200,100%,60%)" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area type="monotone" dataKey="v" stroke="hsl(200,100%,60%)" strokeWidth={1.5} fill="url(#sparkGrad)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Stress Level bar */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-muted-foreground">Stress Level</span>
            <span className="text-[11px] font-semibold text-neon-purple">32%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full"
              style={{ background: "linear-gradient(90deg, hsl(265,60%,55%), hsl(200,100%,60%))" }}
              initial={{ width: 0 }}
              animate={{ width: "32%" }}
              transition={{ delay: 0.6, duration: 0.8 }}
            />
          </div>
        </div>

        {/* Job Stability radial */}
        <div className="mb-2">
          <div className="flex items-center justify-between mb-2">
            <span className="text-[11px] text-muted-foreground">Market Stability</span>
            <span className="text-[11px] font-semibold text-primary">88%</span>
          </div>
          <div className="h-2 rounded-full bg-secondary overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-primary"
              initial={{ width: 0 }}
              animate={{ width: "88%" }}
              transition={{ delay: 0.7, duration: 0.8 }}
            />
          </div>
        </div>
      </div>

      {/* AI Recommendation card */}
      <div className="glass-card p-5 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-20 h-20 bg-primary/5 rounded-full blur-2xl" />
        <div className="flex items-center gap-2 mb-3">
          <div className="w-7 h-7 rounded-lg bg-primary/10 flex items-center justify-center">
            <Brain className="w-3.5 h-3.5 text-primary" />
          </div>
          <span className="text-xs font-semibold">AI Insight</span>
        </div>
        <p className="text-[12px] text-muted-foreground leading-relaxed mb-3">
          "Based on market trends, pursuing <span className="text-foreground font-medium">Data Science</span> has a{" "}
          <span className="text-primary font-semibold">68% higher</span> growth potential over the next 5 years."
        </p>
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <Zap className="w-3 h-3 text-primary" />
            <span className="text-[10px] text-muted-foreground">Confidence: <span className="text-primary font-medium">92%</span></span>
          </div>
          <ResponsiveContainer width={60} height={24}>
            <LineChart data={[{ v: 20 }, { v: 35 }, { v: 28 }, { v: 45 }, { v: 42 }, { v: 58 }]}>
              <Line type="monotone" dataKey="v" stroke="hsl(174,72%,56%)" strokeWidth={1.5} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Quick actions */}
      <div className="glass-card p-4">
        <h4 className="text-xs font-semibold mb-3">Quick Actions</h4>
        <div className="grid grid-cols-2 gap-2">
          {[
            { icon: Sparkles, label: "New Simulation" },
            { icon: TrendingUp, label: "View Trends" },
          ].map((a, i) => (
            <button
              key={i}
              className="flex items-center gap-2 px-3 py-2.5 rounded-lg bg-white/5 border border-white/5 text-[11px] text-muted-foreground hover:text-foreground hover:bg-white/10 hover:border-white/10 transition-all"
            >
              <a.icon className="w-3.5 h-3.5" />
              {a.label}
            </button>
          ))}
        </div>
      </div>
    </motion.aside>
  </div>
);

export default Dashboard;
