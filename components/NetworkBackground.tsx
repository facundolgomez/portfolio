"use client";
import { useEffect, useRef } from "react";

type Node = { x: number; y: number; vx: number; vy: number };

const AREA_PER_NODE = 16000;
const MIN_NODES = 20;
const MAX_NODES = 90;

const SPEED = 0.12;
const MOUSE_RADIUS = 140;
const MOUSE_FORCE = 0.6;

export default function NetworkBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    if (!canvas || !ctx) return;

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let nodes: Node[] = [];
    let width = 0;
    let height = 0;
    let linkDistance = 130;
    let rafId = 0;
    let lastTime = 0;
    const mouse = { x: 0, y: 0, active: false };

    const createNodes = () => {
      const count = Math.round(
        Math.min(
          MAX_NODES,
          Math.max(MIN_NODES, (width * height) / AREA_PER_NODE),
        ),
      );
      nodes = Array.from({ length: count }, () => {
        const angle = Math.random() * Math.PI * 2;
        const speed = SPEED * (0.4 + Math.random() * 0.6);
        return {
          x: Math.random() * width,
          y: Math.random() * height,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
        };
      });
    };

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      linkDistance = width < 640 ? 100 : 130;
      createNodes();
    };

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      for (let i = 0; i < nodes.length; i++) {
        const a = nodes[i];
        for (let j = i + 1; j < nodes.length; j++) {
          const b = nodes[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist < linkDistance) {
            ctx.strokeStyle = `rgba(255,255,255,${0.22 * (1 - dist / linkDistance)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      ctx.fillStyle = "rgba(255,255,255,0.55)";
      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x, n.y, 1.5, 0, Math.PI * 2);
        ctx.fill();
      }
    };

    const update = (dt: number) => {
      for (const n of nodes) {
        let ox = 0;
        let oy = 0;
        // Leve repulsión del mouse, sin alterar la velocidad base
        if (mouse.active) {
          const dx = n.x - mouse.x;
          const dy = n.y - mouse.y;
          const dist = Math.hypot(dx, dy);
          if (dist > 0 && dist < MOUSE_RADIUS) {
            const force = (1 - dist / MOUSE_RADIUS) * MOUSE_FORCE;
            ox = (dx / dist) * force;
            oy = (dy / dist) * force;
          }
        }

        n.x += (n.vx + ox) * dt;
        n.y += (n.vy + oy) * dt;

        if (n.x < 0 || n.x > width) {
          n.vx *= -1;
          n.x = Math.min(Math.max(n.x, 0), width);
        }
        if (n.y < 0 || n.y > height) {
          n.vy *= -1;
          n.y = Math.min(Math.max(n.y, 0), height);
        }
      }
    };

    const loop = (time: number) => {
      // dt normalizado a 60fps y acotado para evitar saltos tras pausas
      const dt = lastTime ? Math.min((time - lastTime) / 16.67, 3) : 1;
      lastTime = time;
      update(dt);
      draw();
      rafId = requestAnimationFrame(loop);
    };

    const start = () => {
      if (rafId || reducedMotion.matches || document.hidden) return;
      lastTime = 0;
      rafId = requestAnimationFrame(loop);
    };

    const stop = () => {
      cancelAnimationFrame(rafId);
      rafId = 0;
    };

    const onResize = () => {
      resize();

      if (!rafId) draw();
    };

    const onVisibility = () => (document.hidden ? stop() : start());

    const onMotionChange = () => {
      if (reducedMotion.matches) {
        stop();
        draw();
      } else {
        start();
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const onPointerLeave = () => {
      mouse.active = false;
    };

    resize();
    draw();
    start();

    window.addEventListener("resize", onResize);
    window.addEventListener("pointermove", onPointerMove);
    document.documentElement.addEventListener("pointerleave", onPointerLeave);
    document.addEventListener("visibilitychange", onVisibility);
    reducedMotion.addEventListener("change", onMotionChange);

    return () => {
      stop();
      window.removeEventListener("resize", onResize);
      window.removeEventListener("pointermove", onPointerMove);
      document.documentElement.removeEventListener(
        "pointerleave",
        onPointerLeave,
      );
      document.removeEventListener("visibilitychange", onVisibility);
      reducedMotion.removeEventListener("change", onMotionChange);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 -z-10 h-full w-full pointer-events-none"
    />
  );
}
