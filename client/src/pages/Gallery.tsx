import { useState } from "react";
import { useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

// Paving Pattern images
import paving1 from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0001.jpg";

// Wall Copings images
import wallCoping1 from "@assets/Wall-Coping-_20251118_125334_0000/Wall Coping _20251118_125334_0000_page-0001.jpg";

// Column Caps / Pier Caps images
import pierCap1 from "@assets/Pier-caps_20251118_125450_0000/Pier caps_20251118_125450_0000_page-0001.jpg";

// Treads images
import tread1 from "@assets/Treads-_20251118_125522_0000/Treads _20251118_125522_0000_page-0001.jpg";

// Jumbo Slab images
import slab1 from "@assets/generated_images/Slab_20251118_160715_0000_page-0001.jpg";

// Steps images
import step1 from "@assets/150-mm-steps-_20251118_151647_0000/150 mm steps _20251118_151647_0000_page-0001.jpg";

// Cobbles images
import cobble1 from "@assets/Cobbles-_20251118_125558_0000/Cobbles _20251118_125558_0000_page-0001.jpg";

// Wall Cladding images
import cladding1 from "@assets/Cladding-_20251119_105251_0000/Cladding _20251119_105251_0000_page-0001.jpg";

interface Product {
  id: string;
  name: string;
  shortDescription: string;
  image: string;
  category: string;
}

const products: Product[] = [
  {
    id: "paving-pattern",
    name: "Paving Pattern",
    shortDescription: "Premium natural stone paving with timeless elegance",
    image: paving1,
    category: "Paving Pattern"
  },
  {
    id: "wall-copings",
    name: "Wall Copings",
    shortDescription: "Premium architectural stone coping solutions",
    image: wallCoping1,
    category: "Wall Copings"
  },
  {
    id: "column-caps",
    name: "Column Caps / Pier Caps",
    shortDescription: "Elegant stone caps for structural elements",
    image: pierCap1,
    category: "Column Caps / Pier Caps"
  },
  {
    id: "treads",
    name: "Treads",
    shortDescription: "Safe and stylish stair solutions",
    image: tread1,
    category: "Treads"
  },
  {
    id: "jumbo-slab",
    name: "Jumbo Slab",
    shortDescription: "Large format natural stone slabs",
    image: slab1,
    category: "Jumbo Slab"
  },
  {
    id: "steps",
    name: "Steps",
    shortDescription: "Custom stone steps for indoor and outdoor use",
    image: step1,
    category: "Steps"
  },
  {
    id: "cobbles",
    name: "Cobbles",
    shortDescription: "Traditional stone cobblestones for timeless paths",
    image: cobble1,
    category: "Cobbles"
  },
  {
    id: "wall-cladding",
    name: "Wall Cladding",
    shortDescription: "Premium stone cladding for stunning facades",
    image: cladding1,
    category: "Wall Cladding"
  }
];

export default function Gallery() {
  const { t } = useTranslation();
  const [, setLocation] = useLocation();

  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-color" data-testid="text-gallery-title">
            {t("nav.gallery")}
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-gallery-subtitle">
            Explore our exquisite collection of premium natural stones
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product) => (
              <div
                key={product.id}
                className="group rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col"
                data-testid={`card-product-${product.id}`}
              >
                {/* Product Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Product Info */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold heading-color mb-2">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 flex-grow">
                    {product.shortDescription}
                  </p>
                  <Button
                    onClick={() => setLocation(`/product/${product.id}`)}
                    variant="default"
                    size="sm"
                    className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    Explore
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
