import { useEffect, useRef } from "react";
import "./BackgroundEffects.css";

function BackgroundEffects() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    // Generate subtle particles
    const particleCount = Math.min(width > 768 ? 45 : 20, 50);
    const particles = [];

    const colors = [
      "rgba(139, 92, 246, ", // Violet
      "rgba(34, 211, 238, ",  // Cyan
      "rgba(196, 181, 253, ", // Lavender
    ];

    for (let i = 0; i < particleCount; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 1.5 + 0.5,
        colorPrefix: colors[Math.floor(Math.random() * colors.length)],
        alpha: Math.random() * 0.4 + 0.1,
        vx: (Math.random() - 0.5) * 0.25,
        vy: (Math.random() - 0.5) * 0.25,
      });
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize, { passive: true });

    if (prefersReducedMotion) {
      // Static render for users who prefer reduced motion
      ctx.clearRect(0, 0, width, height);
      particles.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
        ctx.fill();
      });
      return () => window.removeEventListener("resize", handleResize);
    }

    let lastTime = 0;
    const animate = (time) => {
      // Throttle rendering slightly to save battery on laptops/phones
      if (time - lastTime > 24) {
        lastTime = time;
        ctx.clearRect(0, 0, width, height);

        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += p.vx;
          p.y += p.vy;

          if (p.x < 0) p.x = width;
          else if (p.x > width) p.x = 0;
          if (p.y < 0) p.y = height;
          else if (p.y > height) p.y = 0;

          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
          ctx.fillStyle = `${p.colorPrefix}${p.alpha})`;
          ctx.fill();
        }
      }

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="background-effects" aria-hidden="true">
      <div className="ambient-glow glow-top-left" />
      <div className="ambient-glow glow-top-right" />
      <div className="ambient-glow glow-bottom-center" />
      <div className="cyber-grid" />
      <canvas ref={canvasRef} className="particles-canvas" />
    </div>
  );
}

export default BackgroundEffects;
