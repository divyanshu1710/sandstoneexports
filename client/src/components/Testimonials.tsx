import React from "react";
import { useTranslation } from "react-i18next";

type Testimonial = {
  id: number;
  quote: string;
  name: string;
  role?: string;
};

export default function Testimonials() {
  const { t } = useTranslation();

  const testimonials: Testimonial[] = [1, 2, 3].map((i) => ({
    id: i,
    quote: t(`home.testimonials.items.${i}.quote`),
    name: t(`home.testimonials.items.${i}.name`),
    role: t(`home.testimonials.items.${i}.role`)
  }));

  return (
    <section className="py-20 px-6 bg-muted/10">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-semibold mb-3">{t("home.testimonials.title")}</h2>
          <p className="text-muted-foreground">{t("home.testimonials.subtitle")}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item) => (
            <blockquote
              key={item.id}
              className="bg-white/80 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <p className="text-lg leading-relaxed text-muted-foreground">“{item.quote}”</p>
              <footer className="mt-4 flex items-center">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                    {item.name.split(" ").map((s) => s[0]).slice(0, 2).join("")}
                  </div>
                  <div>
                    <div className="font-medium">{item.name}</div>
                    {item.role && <div className="text-sm text-muted-foreground">{item.role}</div>}
                  </div>
                </div>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
