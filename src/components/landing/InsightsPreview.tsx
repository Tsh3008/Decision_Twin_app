import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3 } from "lucide-react";
import { AreaChart, Area, BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";

const salaryData = [
  { year: "2024", a: 55, b: 50 },
  { year: "2025", a: 62, b: 54 },
  { year: "2026", a: 71, b: 58 },
  { year: "2027", a: 85, b: 63 },
  { year: "2028", a: 98, b: 70 },
  { year: "2029", a: 115, b: 75 },
];

const skillData = [
  { name: "AI/ML", value: 92 },
  { name: "Data Sci", value: 85 },
  { name: "Cloud", value: 78 },
  { name: "Web Dev", value: 65 },
  { name: "DevOps", value: 72 },
];

export const InsightsPreview = () => (
  <section className="py-32 relative bg-black">
    <div className="container mx-auto px-6">
      <motion.div
        className="text-center mb-16"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
          AI Insights <span className="gradient-text">Preview</span>
        </h2>
        <p className="text-white/40 text-lg">Real-time analytics powering your decisions.</p>
      </motion.div>

      <motion.div
        className="rounded-2xl p-8 max-w-6xl mx-auto"
        style={{
          background: "linear-gradient(145deg, rgba(15,15,15,0.9), rgba(8,8,8,0.95))",
          border: "1px solid rgba(255,255,255,0.06)",
          boxShadow: "0 4px 24px rgba(0,0,0,0.4)",
        }}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        {/* Top stat cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Career Score", value: "87%", icon: TrendingUp, change: "+12%" },
            { label: "Income Estimate", value: "$95K", icon: TrendingUp, change: "+24%" },
            { label: "Stress Index", value: "Low", icon: TrendingDown, change: "-18%" },
            { label: "Job Stability", value: "94%", icon: BarChart3, change: "+8%" },
          ].map((s, i) => (
            <div
              key={i}
              className="rounded-xl p-4"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
              }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-white/35">{s.label}</span>
                <s.icon className="w-4 h-4 text-primary" />
              </div>
              <div className="text-2xl font-bold text-white">{s.value}</div>
              <span className="text-xs text-primary">{s.change}</span>
            </div>
          ))}
        </div>

        {/* Charts */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 className="text-sm font-medium mb-4 text-white/35">Salary Growth Comparison (K$)</h4>
            <ResponsiveContainer width="100%" height={200}>
              <AreaChart data={salaryData}>
                <defs>
                  <linearGradient id="gradA" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(174, 72%, 56%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(174, 72%, 56%)" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="gradB" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="hsl(265, 60%, 55%)" stopOpacity={0.3} />
                    <stop offset="100%" stopColor="hsl(265, 60%, 55%)" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="year" tick={{ fill: '#444', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#444', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#fff' }} />
                <Area type="monotone" dataKey="a" stroke="hsl(174, 72%, 56%)" fill="url(#gradA)" strokeWidth={2} name="Path A" />
                <Area type="monotone" dataKey="b" stroke="hsl(265, 60%, 55%)" fill="url(#gradB)" strokeWidth={2} name="Path B" />
              </AreaChart>
            </ResponsiveContainer>
          </div>

          <div className="rounded-xl p-6" style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)" }}>
            <h4 className="text-sm font-medium mb-4 text-white/35">Skill Demand Index</h4>
            <ResponsiveContainer width="100%" height={200}>
              <BarChart data={skillData}>
                <XAxis dataKey="name" tick={{ fill: '#444', fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: '#444', fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: '#0a0a0a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, color: '#fff' }} />
                <Bar dataKey="value" fill="hsl(174, 72%, 56%)" radius={[4, 4, 0, 0]} opacity={0.8} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </motion.div>
    </div>
  </section>
);
