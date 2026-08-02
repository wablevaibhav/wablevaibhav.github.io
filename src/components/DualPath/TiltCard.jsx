import { useEffect, useRef, useState } from "react";

function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReduced(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return reduced;
}

function useCoarsePointer() {
  const [coarse, setCoarse] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia("(pointer: coarse)");
    const update = () => setCoarse(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);
  return coarse;
}

export default function TiltCard({
  children,
  className = "",
  maxTilt = 10,
  disabled = false,
}) {
  const ref = useRef(null);
  const reducedMotion = usePrefersReducedMotion();
  const coarsePointer = useCoarsePointer();
  const tiltOff = disabled || reducedMotion || coarsePointer;

  const onMove = (e) => {
    if (tiltOff || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width;
    const py = (e.clientY - rect.top) / rect.height;
    const rotateY = (px - 0.5) * (maxTilt * 2);
    const rotateX = (0.5 - py) * (maxTilt * 2);
    ref.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const onLeave = () => {
    if (!ref.current) return;
    ref.current.style.transform = "rotateX(0deg) rotateY(0deg) translateZ(0)";
  };

  return (
    <div className="[perspective:1000px]" style={{ perspective: "1000px" }}>
      <div
        ref={ref}
        className={`transition-transform duration-200 ease-out will-change-transform [transform-style:preserve-3d] ${className}`}
        onPointerMove={onMove}
        onPointerLeave={onLeave}
      >
        {children}
      </div>
    </div>
  );
}
