import { useEffect, useRef, useState } from "react";
import { Award, Layers, Globe, Users } from "lucide-react";

interface Stat {
  icon: React.ReactNode;
  number: number;
  suffix?: string;
  label: string;
}

export default function StatsSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats: Stat[] = [
    { icon: <Award className="h-12 w-12 text-primary" />, number: 30, suffix: "+", label: "Years of Experience" },
    { icon: <Layers className="h-12 w-12 text-primary" />, number: 150, suffix: "+", label: "Stone Varieties" },
    { icon: <Globe className="h-12 w-12 text-primary" />, number: 45, suffix: "+", label: "Countries Exported" },
    { icon: <Users className="h-12 w-12 text-primary" />, number: 1000, suffix: "+", label: "Satisfied Clients" },
  ];

  return (
    <div ref={sectionRef} className="bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5] py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              stat={stat}
              isVisible={isVisible}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function StatCard({ stat, isVisible, delay }: { stat: Stat; isVisible: boolean; delay: number }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    const duration = 2000;
    const steps = 60;
    const increment = stat.number / steps;
    let current = 0;

    const timer = setInterval(() => {
      current += increment;
      if (current >= stat.number) {
        setCount(stat.number);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [isVisible, stat.number]);

  return (
    <div
      className="bg-white rounded-xl p-8 text-center hover-elevate transition-all duration-500"
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transitionDelay: `${delay}ms`,
      }}
      data-testid={`card-stat-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex justify-center mb-4">{stat.icon}</div>
      <div className="font-serif text-5xl font-bold text-foreground mb-2" data-testid={`text-stat-number-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>
        {count}{stat.suffix}
      </div>
      <div className="text-muted-foreground" data-testid={`text-stat-label-${stat.label.toLowerCase().replace(/\s+/g, "-")}`}>{stat.label}</div>
    </div>
  );
}
