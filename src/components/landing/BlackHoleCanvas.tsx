import { useEffect, useRef } from "react";

export const BlackHoleCanvas = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    interface Particle {
      angle: number;
      radius: number;
      speed: number;
      size: number;
      opacity: number;
      hue: number;
    }

    // Particles orbiting the black hole
    const particles: Particle[] = Array.from({ length: 200 }, () => ({
      angle: Math.random() * Math.PI * 2,
      radius: 80 + Math.random() * 300,
      speed: 0.001 + Math.random() * 0.004,
      size: Math.random() * 2,
      opacity: Math.random() * 0.6,
      hue: 200 + Math.random() * 80, // blue to purple range
    }));

    // Background stars
    const stars = Array.from({ length: 150 }, () => ({
      x: Math.random() * 2000,
      y: Math.random() * 2000,
      size: Math.random() * 1.5,
      opacity: Math.random() * 0.4 + 0.1,
      twinkleSpeed: 0.005 + Math.random() * 0.01,
    }));

    const draw = () => {
      time += 0.01;
      const w = canvas.width;
      const h = canvas.height;
      const cx = w / 2;
      const cy = h / 2;

      // Clear
      ctx.fillStyle = "#000000";
      ctx.fillRect(0, 0, w, h);

      // Background stars
      stars.forEach((s) => {
        const twinkle = Math.sin(time * s.twinkleSpeed * 100) * 0.3 + 0.7;
        ctx.beginPath();
        ctx.arc(s.x % w, s.y % h, s.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${s.opacity * twinkle})`;
        ctx.fill();
      });

      // Accretion disk glow rings
      for (let r = 120; r < 350; r += 2) {
        const intensity = Math.max(0, 1 - Math.abs(r - 200) / 150);
        const pulse = Math.sin(time * 2 + r * 0.02) * 0.15 + 0.85;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(100, 140, 255, ${intensity * 0.08 * pulse})`;
        ctx.lineWidth = 2;
        ctx.stroke();
      }

      // Purple outer glow
      for (let r = 200; r < 400; r += 3) {
        const intensity = Math.max(0, 1 - (r - 200) / 200);
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(139, 92, 246, ${intensity * 0.04})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }

      // Orbiting particles
      particles.forEach((p) => {
        p.angle += p.speed;
        const wobble = Math.sin(time * 3 + p.angle * 5) * 8;
        const x = cx + Math.cos(p.angle) * (p.radius + wobble);
        const y = cy + Math.sin(p.angle) * (p.radius * 0.4 + wobble * 0.3);

        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        const fade = Math.sin(p.angle + time) * 0.3 + 0.7;
        ctx.fillStyle = `hsla(${p.hue}, 80%, 65%, ${p.opacity * fade})`;
        ctx.fill();
      });

      // Central black hole (dark circle with edge glow)
      const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, 100);
      gradient.addColorStop(0, "rgba(0,0,0,1)");
      gradient.addColorStop(0.6, "rgba(0,0,0,0.98)");
      gradient.addColorStop(0.85, "rgba(60,80,200,0.15)");
      gradient.addColorStop(1, "rgba(100,140,255,0)");
      ctx.beginPath();
      ctx.arc(cx, cy, 100, 0, Math.PI * 2);
      ctx.fillStyle = gradient;
      ctx.fill();

      // Event horizon ring
      const ringPulse = Math.sin(time * 1.5) * 0.2 + 0.8;
      ctx.beginPath();
      ctx.arc(cx, cy, 80, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(100, 160, 255, ${0.3 * ringPulse})`;
      ctx.lineWidth = 1.5;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(cx, cy, 82, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(139, 92, 246, ${0.2 * ringPulse})`;
      ctx.lineWidth = 1;
      ctx.stroke();

      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full"
      style={{ display: "block" }}
    />
  );
};
