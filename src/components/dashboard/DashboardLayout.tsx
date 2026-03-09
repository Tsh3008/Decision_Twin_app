import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  LayoutDashboard, Cpu, FolderOpen, TrendingUp, Network, Lightbulb,
  BarChart3, Bell, User, LogOut, ChevronDown, Sparkles
} from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/dashboard" },
  { icon: Cpu, label: "Simulator", path: "/dashboard/simulator" },
  { icon: FolderOpen, label: "Scenarios", path: "/dashboard/scenarios" },
  { icon: TrendingUp, label: "Trends", path: "/dashboard/trends" },
  { icon: Network, label: "Mind Map", path: "/dashboard/mindmap" },
  { icon: Lightbulb, label: "AI Insights", path: "/dashboard/recommendations" },
  { icon: BarChart3, label: "Analytics", path: "/dashboard/analytics" },
];

export const DashboardLayout = () => {
  const [profileOpen, setProfileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      {/* Floating Navbar */}
      <motion.nav
        className="fixed top-5 z-50 flex items-center gap-4 px-6 py-2.5 rounded-full backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_15px_rgba(45,212,191,0.08)]"
        style={{ background: "rgba(0,0,0,0.45)",transform: "translateX(-50%)" }}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ type: "spring", damping: 20, stiffness: 120 }}
      >
        {/* Logo */}
        <div className="flex items-center gap-1.5 px-3 pr-4 border-r border-white/10 mr-1">
          <Sparkles className="w-4 h-4 text-primary" />
          <span className="text-xs font-bold tracking-wide hidden lg:block">DecisionTwin</span>
        </div>

        {/* Nav Items */}
        {navItems.map((item) => {
          const active = location.pathname === item.path;
          return (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={cn(
                "relative flex items-center gap-1.5 px-3 py-2 rounded-full text-xs font-medium transition-all duration-200",
                active
                  ? "bg-primary/15 text-primary shadow-[0_0_12px_rgba(45,212,191,0.2)]"
                  : "text-muted-foreground hover:text-foreground hover:bg-white/5"
              )}
            >
              <item.icon className="w-3.5 h-3.5" />
              <span className="hidden xl:inline">{item.label}</span>
              {active && (
                <motion.div
                  className="absolute inset-0 rounded-full border border-primary/30"
                  layoutId="navbar-active"
                  transition={{ type: "spring", damping: 25, stiffness: 200 }}
                />
              )}
            </button>
          );
        })}

        {/* Divider */}
        <div className="w-px h-6 bg-white/10 mx-1" />

        {/* Notification */}
        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
        </button>

        {/* Profile dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={() => setProfileOpen(!profileOpen)}
            className="flex items-center gap-2 pl-2 pr-3 py-1.5 rounded-full hover:bg-white/5 transition-colors"
          >
            <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-primary-foreground">
              A
            </div>
            <ChevronDown className={cn("w-3 h-3 text-muted-foreground transition-transform", profileOpen && "rotate-180")} />
          </button>

          <AnimatePresence>
            {profileOpen && (
              <motion.div
                className="absolute right-0 top-full mt-2 w-48 rounded-xl border border-white/10 backdrop-blur-2xl shadow-xl overflow-hidden"
                style={{ background: "rgba(15,15,15,0.9)" }}
                initial={{ opacity: 0, y: -8, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -8, scale: 0.95 }}
                transition={{ duration: 0.15 }}
              >
                <div className="px-4 py-3 border-b border-white/5">
                  <p className="text-sm font-medium">Alex Chen</p>
                  <p className="text-xs text-muted-foreground">Career Explorer</p>
                </div>
                {[
                  { icon: User, label: "Profile", action: () => {} },
                  { icon: LogOut, label: "Logout", action: () => navigate("/") },
                ].map((item, i) => (
                  <button
                    key={i}
                    onClick={() => { item.action(); setProfileOpen(false); }}
                    className="w-full flex items-center gap-2.5 px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-white/5 transition-colors"
                  >
                    <item.icon className="w-3.5 h-3.5" />
                    {item.label}
                  </button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.nav>

      {/* Main content */}
      <main className="pt-[120px] px-4 md:px-6 lg:px-8 pb-8 max-w-[1600px] mx-auto">
        <Outlet />
      </main>
    </div>
  );
};
