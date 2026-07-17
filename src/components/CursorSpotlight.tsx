import { useEffect, useRef } from "react";

export default function CursorSpotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      if (ref.current) {
        ref.current.style.left = `${e.clientX}px`;
        ref.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed z-0 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full"
      style={{
        background:
          "radial-gradient(circle, rgba(56,189,248,0.07) 0%, rgba(139,92,246,0.04) 40%, transparent 70%)",
        transition: "left 0.1s ease-out, top 0.1s ease-out",
      }}
    />
  );
}
