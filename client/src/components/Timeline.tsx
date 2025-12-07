interface TimelineItem {
  year: string;
  title: string;
  description: string;
  image?: string;
  imagePosition?: "left" | "right";
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative">
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-0.5 bg-primary" />

      <div className="space-y-20">
        {items.map((item, index) => (
          <div key={index} className="relative pl-8 md:pl-20" data-testid={`timeline-item-${index}`}>
            <div className="absolute left-0 md:left-8 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-background" />

            <div className={`grid grid-cols-1 ${item.image ? "md:grid-cols-2" : ""} gap-8 items-center`}>
              <div className={item.imagePosition === "left" && item.image ? "md:order-2" : ""}>
                <div className="inline-block px-4 py-1 bg-primary/10 text-primary font-serif text-lg font-semibold rounded-full mb-4" data-testid={`text-timeline-year-${index}`}>
                  {item.year}
                </div>
                <h3 className="text-2xl font-semibold mb-4 heading-color" data-testid={`text-timeline-title-${index}`}>
                  {item.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed text-lg" data-testid={`text-timeline-desc-${index}`}>
                  {item.description}
                </p>
              </div>

              {item.image && (
                <div className={item.imagePosition === "left" ? "md:order-1" : ""}>
                  <img
                    src={item.image}
                    alt={item.title}
                    className="rounded-xl shadow-lg w-full h-72 object-cover"
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
