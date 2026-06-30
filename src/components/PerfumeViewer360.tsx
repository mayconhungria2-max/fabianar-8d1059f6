import { useEffect, useRef, useState } from "react";
import bottle from "@/assets/perfume-bottle.png";

export function PerfumeViewer360() {
  const [angle, setAngle] = useState(0);
  const [dragging, setDragging] = useState(false);
  const [autoRotate, setAutoRotate] = useState(true);
  const startX = useRef(0);
  const startAngle = useRef(0);

  useEffect(() => {
    if (!autoRotate || dragging) return;
    let raf = 0;
    let last = performance.now();
    const tick = (now: number) => {
      const dt = now - last;
      last = now;
      setAngle((a) => a + dt * 0.04);
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [autoRotate, dragging]);

  const onPointerDown = (e: React.PointerEvent) => {
    setDragging(true);
    setAutoRotate(false);
    startX.current = e.clientX;
    startAngle.current = angle;
    (e.target as Element).setPointerCapture(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!dragging) return;
    const dx = e.clientX - startX.current;
    setAngle(startAngle.current + dx * 0.6);
  };
  const onPointerUp = () => setDragging(false);

  const norm = ((angle % 360) + 360) % 360;

  return (
    <div className="flex flex-col items-center gap-6 select-none">
      <div
        className="relative perspective-1000 w-[280px] h-[380px] sm:w-[360px] sm:h-[480px] cursor-grab active:cursor-grabbing touch-none"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
      >
        {/* soft halo */}
        <div
          className="absolute inset-x-8 bottom-4 h-10 rounded-[50%] blur-2xl opacity-50"
          style={{ background: "var(--rose-deep)" }}
        />
        <div className="preserve-3d w-full h-full" style={{ transform: `rotateY(${angle}deg)`, transition: dragging ? "none" : "transform 0.05s linear" }}>
          <img
            src={bottle}
            alt="Frasco Fabiana Rocha Fashion em 360 graus"
            draggable={false}
            className="w-full h-full object-contain backface-hidden"
            style={{ filter: `drop-shadow(0 25px 40px rgba(0,0,0,0.18)) brightness(${0.92 + 0.08 * Math.cos((angle * Math.PI) / 180)})` }}
          />
        </div>
        {/* angle indicator */}
        <div className="absolute left-1/2 -translate-x-1/2 bottom-[-2.5rem] flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-muted-foreground">
          <span className="inline-block w-12 h-px bg-foreground/30" />
          {Math.round(norm)}°
          <span className="inline-block w-12 h-px bg-foreground/30" />
        </div>
      </div>

      <div className="flex items-center gap-4 mt-6">
        <button
          onClick={() => { setAutoRotate(false); setAngle((a) => a - 30); }}
          className="size-11 rounded-full border border-foreground/15 hover:border-[var(--rose-deep)] hover:text-[var(--rose-deep)] transition"
          aria-label="Girar à esquerda"
        >‹</button>
        <button
          onClick={() => setAutoRotate((v) => !v)}
          className="px-5 py-2 rounded-full border border-foreground/15 text-[10px] tracking-[0.3em] uppercase hover:bg-foreground hover:text-background transition"
        >
          {autoRotate ? "Pausar" : "Girar"}
        </button>
        <button
          onClick={() => { setAutoRotate(false); setAngle((a) => a + 30); }}
          className="size-11 rounded-full border border-foreground/15 hover:border-[var(--rose-deep)] hover:text-[var(--rose-deep)] transition"
          aria-label="Girar à direita"
        >›</button>
      </div>
      <p className="text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Arraste para explorar</p>
    </div>
  );
}