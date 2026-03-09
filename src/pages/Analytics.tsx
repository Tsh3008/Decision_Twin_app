import { motion, AnimatePresence } from "framer-motion";
import { AreaChart, Area, BarChart, Bar, LineChart, Line, XAxis, YAxis, ResponsiveContainer, Tooltip } from "recharts";
import { Globe, TrendingUp, MapPin, Users, Activity, Zap, GraduationCap, DollarSign, ChevronRight } from "lucide-react";
import { useState, useRef, useEffect, useCallback } from "react";

const countries = [
  {
    name: "United States", code: "US", lat: 38, lng: -97,
    x: 22, y: 38, growth: 92, salary: "$115K", demand: "High",
    universities: ["MIT", "Stanford University", "Harvard University"],
    salaryData: [
      { y: "20", v: 85 }, { y: "21", v: 90 }, { y: "22", v: 95 }, { y: "23", v: 102 }, { y: "24", v: 110 }, { y: "25", v: 115 },
    ],
    studentData: [
      { y: "20", v: 420 }, { y: "21", v: 460 }, { y: "22", v: 510 }, { y: "23", v: 545 }, { y: "24", v: 590 }, { y: "25", v: 620 },
    ],
  },
  {
    name: "United Kingdom", code: "UK", lat: 55, lng: -3,
    x: 48, y: 28, growth: 85, salary: "$98K", demand: "High",
    universities: ["University of Oxford", "University of Cambridge", "Imperial College London"],
    salaryData: [
      { y: "20", v: 72 }, { y: "21", v: 76 }, { y: "22", v: 82 }, { y: "23", v: 88 }, { y: "24", v: 93 }, { y: "25", v: 98 },
    ],
    studentData: [
      { y: "20", v: 310 }, { y: "21", v: 330 }, { y: "22", v: 360 }, { y: "23", v: 385 }, { y: "24", v: 410 }, { y: "25", v: 435 },
    ],
  },
  {
    name: "Canada", code: "CA", lat: 56, lng: -106,
    x: 18, y: 28, growth: 80, salary: "$92K", demand: "Medium",
    universities: ["University of Toronto", "McGill University", "UBC"],
    salaryData: [
      { y: "20", v: 68 }, { y: "21", v: 72 }, { y: "22", v: 78 }, { y: "23", v: 83 }, { y: "24", v: 88 }, { y: "25", v: 92 },
    ],
    studentData: [
      { y: "20", v: 250 }, { y: "21", v: 270 }, { y: "22", v: 295 }, { y: "23", v: 310 }, { y: "24", v: 340 }, { y: "25", v: 360 },
    ],
  },
  {
    name: "Germany", code: "DE", lat: 51, lng: 9,
    x: 52, y: 30, growth: 78, salary: "$88K", demand: "Medium",
    universities: ["TU Munich", "Heidelberg University", "LMU Munich"],
    salaryData: [
      { y: "20", v: 65 }, { y: "21", v: 69 }, { y: "22", v: 74 }, { y: "23", v: 79 }, { y: "24", v: 84 }, { y: "25", v: 88 },
    ],
    studentData: [
      { y: "20", v: 280 }, { y: "21", v: 295 }, { y: "22", v: 315 }, { y: "23", v: 330 }, { y: "24", v: 350 }, { y: "25", v: 370 },
    ],
  },
  {
    name: "India", code: "IN", lat: 20, lng: 78,
    x: 70, y: 48, growth: 90, salary: "$42K", demand: "Very High",
    universities: ["IIT Bombay", "IIT Delhi", "IISc Bangalore"],
    salaryData: [
      { y: "20", v: 22 }, { y: "21", v: 26 }, { y: "22", v: 30 }, { y: "23", v: 34 }, { y: "24", v: 38 }, { y: "25", v: 42 },
    ],
    studentData: [
      { y: "20", v: 680 }, { y: "21", v: 740 }, { y: "22", v: 810 }, { y: "23", v: 870 }, { y: "24", v: 940 }, { y: "25", v: 1010 },
    ],
  },
  {
    name: "Australia", code: "AU", lat: -25, lng: 133,
    x: 84, y: 70, growth: 74, salary: "$95K", demand: "Medium",
    universities: ["University of Melbourne", "ANU", "University of Sydney"],
    salaryData: [
      { y: "20", v: 70 }, { y: "21", v: 74 }, { y: "22", v: 79 }, { y: "23", v: 84 }, { y: "24", v: 90 }, { y: "25", v: 95 },
    ],
    studentData: [
      { y: "20", v: 180 }, { y: "21", v: 195 }, { y: "22", v: 215 }, { y: "23", v: 230 }, { y: "24", v: 248 }, { y: "25", v: 265 },
    ],
  },
  {
    name: "Singapore", code: "SG", lat: 1, lng: 103,
    x: 76, y: 55, growth: 88, salary: "$105K", demand: "High",
    universities: ["NUS", "NTU", "SMU"],
    salaryData: [
      { y: "20", v: 78 }, { y: "21", v: 83 }, { y: "22", v: 88 }, { y: "23", v: 94 }, { y: "24", v: 100 }, { y: "25", v: 105 },
    ],
    studentData: [
      { y: "20", v: 120 }, { y: "21", v: 130 }, { y: "22", v: 142 }, { y: "23", v: 155 }, { y: "24", v: 168 }, { y: "25", v: 180 },
    ],
  },
];

const regionDemand = [
  { name: "N.America", value: 92 },
  { name: "Europe", value: 78 },
  { name: "Asia", value: 88 },
  { name: "Oceania", value: 72 },
];

const globalSalary = [
  { y: "2020", v: 62 }, { y: "2021", v: 68 }, { y: "2022", v: 74 },
  { y: "2023", v: 80 }, { y: "2024", v: 87 }, { y: "2025", v: 94 },
];

// Interactive 3D Globe component using CSS
const Globe3D = ({ countries: countryList, selected, onSelect }: { countries: typeof countries; selected: number; onSelect: (i: number) => void }) => {
  const [rotation, setRotation] = useState(0);
  const animRef = useRef<number>();

  const animate = useCallback(() => {
    setRotation(r => (r + 0.15) % 360);
    animRef.current = requestAnimationFrame(animate);
  }, []);

  useEffect(() => {
    animRef.current = requestAnimationFrame(animate);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [animate]);

  return (
    <div className="relative w-full aspect-square max-w-[500px] mx-auto">
      {/* Outer glow */}
      <div className="absolute inset-[-20%] rounded-full bg-gradient-radial from-purple-500/10 via-primary/5 to-transparent blur-3xl" />
      
      {/* Globe container */}
      <div className="relative w-full h-full rounded-full overflow-hidden">
        {/* Globe sphere */}
        <div
          className="absolute inset-0 rounded-full border border-white/[0.06]"
          style={{
            background: "radial-gradient(circle at 35% 35%, rgba(139,92,246,0.15), rgba(45,212,191,0.08) 40%, rgba(10,10,10,0.9) 70%)",
            boxShadow: "inset 0 0 80px rgba(139,92,246,0.1), inset 0 0 40px rgba(45,212,191,0.05), 0 0 60px rgba(139,92,246,0.15), 0 0 120px rgba(45,212,191,0.08)",
          }}
        />

        {/* Grid lines - latitude */}
        {[20, 35, 50, 65, 80].map((t, i) => (
          <div
            key={`lat-${i}`}
            className="absolute left-1/2 -translate-x-1/2 rounded-full border border-white/[0.04]"
            style={{
              top: `${t - (100 - t) * 0.3}%`,
              width: `${Math.sin((t / 100) * Math.PI) * 100}%`,
              height: "1px",
            }}
          />
        ))}

        {/* Grid lines - longitude (rotating) */}
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={`lng-${i}`}
            className="absolute top-0 left-1/2 w-px h-full origin-center border-l border-white/[0.03]"
            style={{
              transform: `rotateY(${rotation + i * 30}deg) rotateZ(0deg)`,
              opacity: Math.abs(Math.cos(((rotation + i * 30) * Math.PI) / 180)) * 0.5 + 0.1,
            }}
          />
        ))}

        {/* Dotted grid pattern */}
        <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 400">
          <defs>
            <radialGradient id="sphere-mask" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="white" stopOpacity="1" />
              <stop offset="85%" stopColor="white" stopOpacity="0.5" />
              <stop offset="100%" stopColor="white" stopOpacity="0" />
            </radialGradient>
            <mask id="globe-mask">
              <circle cx="200" cy="200" r="195" fill="url(#sphere-mask)" />
            </mask>
          </defs>
          <g mask="url(#globe-mask)">
            {Array.from({ length: 15 }).map((_, row) =>
              Array.from({ length: 20 }).map((_, col) => {
                const cx = 20 + ((col * 20 + rotation * 0.5) % 400);
                const cy = 20 + row * 25;
                const distFromCenter = Math.sqrt((cx - 200) ** 2 + (cy - 200) ** 2);
                if (distFromCenter > 190) return null;
                return (
                  <circle
                    key={`${row}-${col}`}
                    cx={cx > 400 ? cx - 400 : cx}
                    cy={cy}
                    r="1.5"
                    fill="rgba(139,92,246,0.25)"
                    opacity={Math.max(0, 1 - distFromCenter / 200)}
                  />
                );
              })
            )}
          </g>
        </svg>

        {/* Country pins */}
        {countryList.map((c, i) => {
          const isSelected = selected === i;
          return (
            <motion.button
              key={i}
              className="absolute z-10 group"
              style={{ left: `${c.x}%`, top: `${c.y}%` }}
              onClick={() => onSelect(i)}
              whileHover={{ scale: 1.3 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className={`relative w-3 h-3 rounded-full transition-all duration-300 ${isSelected ? "bg-purple-400 shadow-[0_0_20px_rgba(139,92,246,0.6)]" : "bg-primary shadow-[0_0_10px_rgba(45,212,191,0.4)]"}`}>
                <div className={`absolute -inset-1.5 rounded-full animate-ping ${isSelected ? "bg-purple-400/30" : "bg-primary/20"}`} style={{ animationDuration: "2.5s" }} />
                {isSelected && <div className="absolute -inset-3 rounded-full border border-purple-400/40 animate-pulse" />}
              </div>
              {/* Label on hover */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                <div className="glass-card px-2 py-1 rounded-md text-[10px] font-medium whitespace-nowrap">{c.name}</div>
              </div>
            </motion.button>
          );
        })}

        {/* Atmosphere ring */}
        <div className="absolute inset-[-2px] rounded-full border border-white/[0.03]" />
        <div className="absolute inset-[-6px] rounded-full border border-purple-500/[0.04]" />
      </div>
    </div>
  );
};

const Analytics = () => {
  const [selectedCountry, setSelectedCountry] = useState(0);
  const country = countries[selectedCountry];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold mb-1">Analytics</h1>
        <p className="text-sm text-muted-foreground">Global career analytics and market intelligence.</p>
      </div>

      {/* Main layout: Left stats | Globe | Right panel */}
      <div className="grid lg:grid-cols-[280px_1fr_300px] gap-6">
        {/* Left side - Stats widgets */}
        <motion.div className="space-y-4" initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          {/* Total students */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Users className="w-4 h-4 text-primary" />
              <span className="text-xs text-muted-foreground">Global Students Analyzed</span>
            </div>
            <p className="text-2xl font-bold">2,847,390</p>
            <p className="text-[10px] text-primary mt-1">↑ 12% from last year</p>
          </div>

          {/* Active simulations */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Activity className="w-4 h-4 text-purple-400" />
              <span className="text-xs text-muted-foreground">Active Simulations</span>
            </div>
            <p className="text-2xl font-bold">18,420</p>
            <p className="text-[10px] text-purple-400 mt-1">↑ 8% this month</p>
          </div>

          {/* Career demand index */}
          <div className="glass-card p-4">
            <div className="flex items-center gap-2 mb-2">
              <Zap className="w-4 h-4 text-yellow-400" />
              <span className="text-xs text-muted-foreground">Career Demand Index</span>
            </div>
            <p className="text-2xl font-bold">94.2</p>
            <div className="w-full h-1.5 rounded-full bg-white/5 mt-2">
              <div className="h-full rounded-full bg-gradient-to-r from-primary to-purple-400" style={{ width: "94%" }} />
            </div>
          </div>

          {/* Region demand bar chart */}
          <div className="glass-card p-4">
            <h4 className="text-xs text-muted-foreground mb-3">Demand by Region</h4>
            <ResponsiveContainer width="100%" height={120}>
              <BarChart data={regionDemand}>
                <XAxis dataKey="name" tick={{ fill: "#666", fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(0,0%,7%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 11 }} />
                <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                  {regionDemand.map((_, i) => (
                    <motion.rect key={i} fill={i % 2 === 0 ? "hsl(174,72%,56%)" : "hsl(265,60%,55%)"} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Global salary trend */}
          <div className="glass-card p-4">
            <h4 className="text-xs text-muted-foreground mb-3">Global Salary Growth (K)</h4>
            <ResponsiveContainer width="100%" height={100}>
              <LineChart data={globalSalary}>
                <XAxis dataKey="y" tick={{ fill: "#666", fontSize: 9 }} axisLine={false} tickLine={false} />
                <Tooltip contentStyle={{ background: "hsl(0,0%,7%)", border: "1px solid rgba(255,255,255,0.1)", borderRadius: 8, fontSize: 11 }} />
                <Line type="monotone" dataKey="v" stroke="hsl(174,72%,56%)" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        {/* Center - 3D Globe */}
        <motion.div className="glass-card p-6 flex items-center justify-center" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2, duration: 0.6 }}>
          <Globe3D countries={countries} selected={selectedCountry} onSelect={setSelectedCountry} />
        </motion.div>

        {/* Right side - Country details panel */}
        <motion.div className="space-y-4" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.3 }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedCountry}
              className="glass-card p-5"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25 }}
            >
              {/* Country header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-purple-500/20 border border-white/10 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold">{country.name}</h3>
                  <p className="text-[10px] text-muted-foreground">Market Intelligence</p>
                </div>
              </div>

              {/* Stats grid */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">Growth Index</p>
                  <p className="text-lg font-bold text-primary">{country.growth}%</p>
                </div>
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">Avg Salary</p>
                  <p className="text-lg font-bold">{country.salary}</p>
                </div>
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">Demand</p>
                  <p className="text-sm font-semibold text-purple-400">{country.demand}</p>
                </div>
                <div className="bg-white/[0.03] rounded-lg p-3">
                  <p className="text-[10px] text-muted-foreground mb-1">Opportunity</p>
                  <div className="w-full h-1.5 rounded-full bg-white/5 mt-1">
                    <div className="h-full rounded-full bg-primary" style={{ width: `${country.growth}%` }} />
                  </div>
                </div>
              </div>

              {/* Universities */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <GraduationCap className="w-3.5 h-3.5 text-primary" />
                  <h4 className="text-xs font-medium">Top Universities</h4>
                </div>
                <div className="space-y-1.5">
                  {country.universities.map((uni, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-muted-foreground bg-white/[0.02] rounded-lg px-3 py-2">
                      <ChevronRight className="w-3 h-3 text-primary" />
                      {uni}
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary growth chart */}
              <div className="mb-4">
                <div className="flex items-center gap-1.5 mb-2">
                  <DollarSign className="w-3.5 h-3.5 text-primary" />
                  <h4 className="text-xs font-medium">Salary Growth</h4>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <AreaChart data={country.salaryData}>
                    <defs>
                      <linearGradient id="salaryGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(174,72%,56%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(174,72%,56%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="hsl(174,72%,56%)" fill="url(#salaryGrad)" strokeWidth={1.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              {/* Student demand chart */}
              <div>
                <div className="flex items-center gap-1.5 mb-2">
                  <TrendingUp className="w-3.5 h-3.5 text-purple-400" />
                  <h4 className="text-xs font-medium">Student Demand Trend</h4>
                </div>
                <ResponsiveContainer width="100%" height={80}>
                  <AreaChart data={country.studentData}>
                    <defs>
                      <linearGradient id="studentGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="hsl(265,60%,55%)" stopOpacity={0.3} />
                        <stop offset="100%" stopColor="hsl(265,60%,55%)" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <Area type="monotone" dataKey="v" stroke="hsl(265,60%,55%)" fill="url(#studentGrad)" strokeWidth={1.5} />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};

export default Analytics;
