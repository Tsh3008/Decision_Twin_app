import { motion } from "framer-motion";
import { Sparkles, Bell, Settings, User } from "lucide-react";
import { useNavigate } from "react-router-dom";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Insights", href: "#insights" },
  { label: "Dashboard", href: "/dashboard", isRoute: true },
  { label: "Simulator", href: "/dashboard/simulator", isRoute: true },
];

export const Navbar = () => {
  const navigate = useNavigate();

  return (
  <motion.nav
  className="fixed top-6 left-1/2 -translate-x-1/2  z-50 flex items-center justify-between px-6 py-2.5 rounded-full backdrop-blur-2xl border border-white/[0.08] shadow-[0_10px_40px_rgba(0,0,0,0.6),0_0_15px_rgba(45,212,191,0.08)] w-[92%] max-w-[1000px]"
  style={{ background: "rgba(0,0,0,0.45)",transform: 'translateX(-50%)'}}
  initial={{ y: -80, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ type: "spring", damping: 20, stiffness: 120 }}
>

      {/* Logo */}
      <div
        className="flex items-center gap-2 cursor-pointer shrink-0"
        onClick={() => navigate("/")}
      >
        <Sparkles className="w-4 h-4 text-primary" />
        <span className="text-sm font-bold tracking-wide">DecisionTwin</span>
      </div>

      {/* Center links */}
      <div className="hidden md:flex items-center gap-1">
        {navLinks.map((link) => (
          <a
            key={link.label}
            href={link.isRoute ? undefined : link.href}
            onClick={
              link.isRoute
                ? (e) => {
                    e.preventDefault();
                    navigate(link.href);
                  }
                : undefined
            }
            className="px-3 py-1.5 rounded-full text-xs font-medium text-muted-foreground hover:text-foreground hover:bg-white/5 transition-all duration-200 hover:shadow-[0_0_8px_rgba(45,212,191,0.15)]"
          >
            {link.label}
          </a>
        ))}
      </div>

      {/* Right icons */}
      <div className="flex items-center gap-1 shrink-0">
        <button className="relative p-2 rounded-full hover:bg-white/5 transition-colors">
          <Bell className="w-4 h-4 text-muted-foreground" />
          <span className="absolute top-1.5 right-1.5 w-1.5 h-1.5 rounded-full bg-primary" />
        </button>
        <button className="p-2 rounded-full hover:bg-white/5 transition-colors">
          <Settings className="w-4 h-4 text-muted-foreground" />
        </button>
        <div className="w-7 h-7 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-[10px] font-bold text-primary-foreground ml-1 cursor-pointer">
          A
        </div>
      </div>
    </motion.nav>
  );
};
