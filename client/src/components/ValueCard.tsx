interface ValueCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export default function ValueCard({ icon, title, description }: ValueCardProps) {
  return (
    <div
      className="bg-white rounded-xl p-10 hover-elevate transition-all duration-300"
      data-testid={`card-value-${title.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="flex justify-center mb-6 text-primary">{icon}</div>
      <h3 className="font-serif text-2xl font-semibold text-center mb-4" data-testid={`text-value-title-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        {title}
      </h3>
      <p className="text-muted-foreground text-center leading-relaxed" data-testid={`text-value-desc-${title.toLowerCase().replace(/\s+/g, "-")}`}>
        {description}
      </p>
    </div>
  );
}
