import { motion } from "framer-motion";
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { TrendingUp } from "lucide-react";

const trendData = [
  { month: "Jan", ai: 85, cloud: 72, data: 90, web: 60 },
  { month: "Feb", ai: 88, cloud: 75, data: 88, web: 58 },
  { month: "Mar", ai: 92, cloud: 78, data: 91, web: 62 },
  { month: "Apr", ai: 90, cloud: 80, data: 93, web: 59 },
  { month: "May", ai: 95, cloud: 82, data: 92, web: 61 },
  { month: "Jun", ai: 98, cloud: 85, data: 95, web: 63 },
];

const topCareers = [
  { name: "AI Engineer", growth: 34, demand: 95 },
  { name: "Data Scientist", growth: 28, demand: 90 },
  { name: "Cloud Architect", growth: 25, demand: 85 },
  { name: "ML Engineer", growth: 31, demand: 92 },
  { name: "DevOps Lead", growth: 22, demand: 78 },
];

const Trends = () => (
  <div className="space-y-6">
    <div>
      <h1 className="text-2xl font-bold mb-1">Career Trends</h1>
      <p className="text-sm text-muted-foreground">Real-time market trends and career growth data.</p>
    </div>

    <motion.div className="glass-card p-6" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
      <h3 className="text-sm font-medium mb-4 text-muted-foreground">Career Demand Trends (2026)</h3>
      <ResponsiveContainer width="100%" height={280}>
        <LineChart data={trendData}>
          <XAxis dataKey="month" tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} />
          <YAxis tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} />
          <Tooltip contentStyle={{ background: 'hsl(0,0%,7%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }} />
          <Line type="monotone" dataKey="ai" stroke="hsl(174,72%,56%)" strokeWidth={2} dot={false} name="AI/ML" />
          <Line type="monotone" dataKey="cloud" stroke="hsl(200,100%,60%)" strokeWidth={2} dot={false} name="Cloud" />
          <Line type="monotone" dataKey="data" stroke="hsl(265,60%,55%)" strokeWidth={2} dot={false} name="Data" />
          <Line type="monotone" dataKey="web" stroke="hsl(220,10%,55%)" strokeWidth={2} dot={false} name="Web" />
        </LineChart>
      </ResponsiveContainer>
    </motion.div>

    <div className="space-y-3">
      <h3 className="text-sm font-medium text-muted-foreground">Top Growing Careers</h3>
      {topCareers.map((c, i) => (
        <motion.div key={i} className="glass-card p-4 flex items-center gap-4" initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.08 }}>
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            <TrendingUp className="w-4 h-4 text-primary" />
          </div>
          <div className="flex-1">
            <span className="text-sm font-medium">{c.name}</span>
            <div className="w-full h-1.5 rounded-full bg-white/5 mt-2">
              <div className="h-full rounded-full bg-primary" style={{ width: `${c.demand}%` }} />
            </div>
          </div>
          <span className="text-sm text-primary font-medium">+{c.growth}%</span>
        </motion.div>
      ))}
    </div>
  </div>
);

export default Trends;
