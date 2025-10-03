import { useEffect, useState } from "react";

interface LogoAnimationProps {
  onComplete: () => void;
}

export default function LogoAnimation({ onComplete }: LogoAnimationProps) {
  const [scale, setScale] = useState(0.5);
  const [opacity, setOpacity] = useState(0);

  useEffect(() => {
    const scaleTimer = setTimeout(() => {
      setScale(1.2);
      setOpacity(1);
    }, 100);

    const settleTimer = setTimeout(() => {
      setScale(1);
    }, 1000);

    const completeTimer = setTimeout(() => {
      onComplete();
    }, 2000);

    return () => {
      clearTimeout(scaleTimer);
      clearTimeout(settleTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8] flex items-center justify-center z-50">
      <div
        className="text-center transition-all duration-1000 ease-out"
        style={{
          transform: `scale(${scale})`,
          opacity,
        }}
      >
        <div className="font-serif text-6xl font-bold text-foreground tracking-wide">
          JAIN ENTERPRISES
        </div>
        <div className="text-xl text-muted-foreground tracking-widest mt-4">
          Stone Exporters
        </div>
      </div>
    </div>
  );
}
