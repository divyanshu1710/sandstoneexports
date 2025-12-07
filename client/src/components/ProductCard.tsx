import { useState } from "react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  image: string;
  title: string;
  category: string;
}

export default function ProductCard({ image, title, category }: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="relative rounded-2xl overflow-hidden group cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-testid={`card-product-${category.toLowerCase().replace(/\s+/g, "-")}`}
    >
      <div className="aspect-square relative">
        <img
          src={image}
          alt={title}
          className={`w-full h-full object-cover transition-transform duration-700 ${
            isHovered ? "scale-110" : "scale-100"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        <div className="absolute bottom-6 left-6">
          <h3 className="text-2xl font-semibold text-white mb-1" data-testid={`text-product-title-${category.toLowerCase().replace(/\s+/g, "-")}`}>
            {title}
          </h3>
          <p className="text-white/80 text-sm" data-testid={`text-product-category-${category.toLowerCase().replace(/\s+/g, "-")}`}>{category}</p>
        </div>

        <div
          className={`absolute inset-x-0 bottom-6 flex justify-center transition-all duration-500 ${
            isHovered
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
        >
          {/* <Button
            variant="outline"
            className="bg-white/10 backdrop-blur-md text-white border-white/30 hover:bg-white/20"
            data-testid={`button-view-gallery-${category.toLowerCase().replace(/\s+/g, "-")}`}
          >
            View Products
          </Button> */}
        </div>
      </div>
    </div>
  );
}
