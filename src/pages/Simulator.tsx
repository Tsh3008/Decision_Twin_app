import { useState } from "react";
import { motion } from "framer-motion";
import { Cpu, ArrowRight, TrendingUp, Heart, Shield, Smile } from "lucide-react";
import { Button } from "@/components/ui/button";
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip, BarChart, Bar } from "recharts";

const mockResults = {
  salaryA: [
    { year: "Y1", val: 65 }, { year: "Y2", val: 72 }, { year: "Y3", val: 85 }, { year: "Y4", val: 95 }, { year: "Y5", val: 115 },
  ],
  salaryB: [
    { year: "Y1", val: 55 }, { year: "Y2", val: 60 }, { year: "Y3", val: 68 }, { year: "Y4", val: 74 }, { year: "Y5", val: 82 },
  ],
  metrics: [
    { name: "Salary Growth", a: 85, b: 62 },
    { name: "Job Stability", a: 90, b: 78 },
    { name: "Satisfaction", a: 75, b: 82 },
    { name: "Stress Level", a: 45, b: 65 },
  ],
};

const Simulator = () => {
  const [hasResults, setHasResults] = useState(false);
  const [careerA, setCareerA] = useState("Data Science");
  const [careerB, setCareerB] = useState("Software Engineering");

  const inputClass = "w-full h-10 rounded-lg bg-white/5 border border-white/10 px-4 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-primary/50";

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Decision Simulator</h1>
        <p className="text-sm text-muted-foreground">Compare two career paths and see AI-predicted outcomes.</p>
      </div>

      <div className="grid lg:grid-cols-5 gap-6">
        {/* Input Panel */}
        <motion.div className="lg:col-span-2 glass-card p-6 space-y-5" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
          <h3 className="text-sm font-semibold flex items-center gap-2"><Cpu className="w-4 h-4 text-primary" /> Simulation Parameters</h3>

          <div className="space-y-4">
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Career Option A</label>
              <input className={inputClass} value={careerA} onChange={(e) => setCareerA(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Career Option B</label>
              <input className={inputClass} value={careerB} onChange={(e) => setCareerB(e.target.value)} />
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Education Level</label>
              <select className={inputClass}>
                <option>Bachelor's Degree</option>
                <option>Master's Degree</option>
                <option>PhD</option>
                <option>Self-taught</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Location Preference</label>
              <select className={inputClass}>
                <option>San Francisco</option>
                <option>New York</option>
                <option>Austin</option>
                <option>Remote</option>
              </select>
            </div>
            <div>
              <label className="text-xs text-muted-foreground mb-1.5 block">Risk Tolerance</label>
              <input type="range" min="1" max="10" defaultValue="5" className="w-full accent-primary" />
              <div className="flex justify-between text-xs text-muted-foreground mt-1">
                <span>Conservative</span><span>Aggressive</span>
              </div>
            </div>
          </div>

          <Button className="w-full bg-primary text-primary-foreground glow-teal" onClick={() => setHasResults(true)}>
            Run Simulation <ArrowRight className="ml-2 w-4 h-4" />
          </Button>
        </motion.div>

        {/* Results Panel */}
        <motion.div className="lg:col-span-3 space-y-6" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
          {!hasResults ? (
            <div className="glass-card p-16 text-center">
              <Cpu className="w-12 h-12 text-muted-foreground/30 mx-auto mb-4" />
              <p className="text-muted-foreground">Configure your parameters and run a simulation to see predicted outcomes.</p>
            </div>
          ) : (
            <>
              {/* Comparison cards */}
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: careerA, salary: "$115K", stability: "90%", stress: "Low", icon: TrendingUp, highlight: true },
                  { label: careerB, salary: "$82K", stability: "78%", stress: "Medium", icon: TrendingUp, highlight: false },
                ].map((c, i) => (
                  <div key={i} className={`glass-card p-5 ${c.highlight ? 'border-primary/30 glow-teal' : ''}`}>
                    <h4 className="text-sm font-semibold mb-3">{c.label}</h4>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between"><span className="text-muted-foreground">5Y Salary</span><span className="font-medium">{c.salary}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Stability</span><span className="font-medium">{c.stability}</span></div>
                      <div className="flex justify-between"><span className="text-muted-foreground">Stress</span><span className="font-medium">{c.stress}</span></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Salary chart */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-medium mb-4 text-muted-foreground">Predicted Salary Growth (K$)</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <AreaChart data={mockResults.salaryA.map((d, i) => ({ year: d.year, a: d.val, b: mockResults.salaryB[i].val }))}>
                    <defs>
                      <linearGradient id="simGradA" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(174,72%,56%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(174,72%,56%)" stopOpacity={0} />
                      </linearGradient>
                      <linearGradient id="simGradB" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(265,60%,55%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(265,60%,55%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="year" tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <Tooltip contentStyle={{ background: 'hsl(0,0%,7%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }} />
                    <Area type="monotone" dataKey="a" stroke="hsl(174,72%,56%)" fill="url(#simGradA)" strokeWidth={2} name={careerA} />
                    <Area type="monotone" dataKey="b" stroke="hsl(265,60%,55%)" fill="url(#simGradB)" strokeWidth={2} name={careerB} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Metrics comparison */}
              <div className="glass-card p-6">
                <h3 className="text-sm font-medium mb-4 text-muted-foreground">Metric Comparison</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={mockResults.metrics} layout="vertical">
                    <XAxis type="number" tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} />
                    <YAxis dataKey="name" type="category" tick={{ fill: '#666', fontSize: 11 }} axisLine={false} tickLine={false} width={90} />
                    <Tooltip contentStyle={{ background: 'hsl(0,0%,7%)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 8 }} />
                    <Bar dataKey="a" fill="hsl(174,72%,56%)" radius={[0, 4, 4, 0]} name={careerA} />
                    <Bar dataKey="b" fill="hsl(265,60%,55%)" radius={[0, 4, 4, 0]} name={careerB} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Simulator;
