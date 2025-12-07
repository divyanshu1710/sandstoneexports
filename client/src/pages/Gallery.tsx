import { useState } from "react";
import { Button } from "@/components/ui/button";

// Paving Pattern images
import paving1 from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0001.jpg";
import paving2 from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0002.jpg";
import paving3 from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0004.jpg";
import paving4 from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0005.jpg";

// Wall Copings images
import wallCoping1 from "@assets/Wall-Coping-_20251118_125334_0000/Wall Coping _20251118_125334_0000_page-0001.jpg";
import wallCoping2 from "@assets/Wall-Coping-_20251118_125334_0000/Wall Coping _20251118_125334_0000_page-0002.jpg";
import wallCoping3 from "@assets/Wall-Coping-_20251118_125334_0000/Wall Coping _20251118_125334_0000_page-0003.jpg";
import wallCoping4 from "@assets/Wall-Coping-_20251118_125334_0000/Wall Coping _20251118_125334_0000_page-0004.jpg";

// Column Caps / Pier Caps images
import pierCap1 from "@assets/Pier-caps_20251118_125450_0000/Pier caps_20251118_125450_0000_page-0001.jpg";
import pierCap2 from "@assets/Pier-caps_20251118_125450_0000/Pier caps_20251118_125450_0000_page-0002.jpg";
import pierCap3 from "@assets/Pier-caps_20251118_125450_0000/Pier caps_20251118_125450_0000_page-0003.jpg";
import pierCap4 from "@assets/Pier-caps_20251118_125450_0000/Pier caps_20251118_125450_0000_page-0001.jpg";

// Treads images
import tread1 from "@assets/Treads-_20251118_125522_0000/Treads _20251118_125522_0000_page-0001.jpg";
import tread2 from "@assets/Treads-_20251118_125522_0000/Treads _20251118_125522_0000_page-0002.jpg";
import tread3 from "@assets/Treads-_20251118_125522_0000/Treads _20251118_125522_0000_page-0003.jpg";
import tread4 from "@assets/Treads-_20251118_125522_0000/Treads _20251118_125522_0000_page-0004.jpg";

// Kerbstones images
import kerbstone1 from "@assets/generated_images/SEJEB_page-0005.jpg";
import kerbstone2 from "@assets/generated_images/SEJEB_page-0006.jpg";
import kerbstone3 from "@assets/generated_images/SEJEB_page-0007.jpg";
import kerbstone4 from "@assets/generated_images/SEJEB_page-0008.jpg";

// Jumbo Slab images
import slab1 from "@assets/generated_images/Slab_20251118_160715_0000_page-0001.jpg";
import slab2 from "@assets/generated_images/Slab_20251118_160715_0000_page-0002.jpg";
import slab3 from "@assets/generated_images/SEJE1_page-0006.jpg";
import slab4 from "@assets/generated_images/SEJEB_page-0009.jpg";

// Steps images
import step1 from "@assets/150-mm-steps-_20251118_151647_0000/150 mm steps _20251118_151647_0000_page-0001.jpg";
import step2 from "@assets/150-mm-steps-_20251118_151647_0000/150 mm steps _20251118_151647_0000_page-0002.jpg";
import step3 from "@assets/150-mm-steps-_20251118_151647_0000/150 mm steps _20251118_151647_0000_page-0003.jpg";
import step4 from "@assets/150-mm-steps-_20251118_151647_0000/150 mm steps _20251118_151647_0000_page-0004.jpg";

// Cobbles images
import cobble1 from "@assets/Cobbles-_20251118_125558_0000/Cobbles _20251118_125558_0000_page-0001.jpg";
import cobble2 from "@assets/Cobbles-_20251118_125558_0000/Cobbles _20251118_125558_0000_page-0002.jpg";
import cobble3 from "@assets/Cobbles-_20251118_125558_0000/Cobbles _20251118_125558_0000_page-0003.jpg";
import cobble4 from "@assets/Cobbles-_20251118_125558_0000/Cobbles _20251118_125558_0000_page-0004.jpg";

// Wall Cladding images
import cladding1 from "@assets/Cladding-_20251119_105251_0000/Cladding _20251119_105251_0000_page-0001.jpg";
import cladding2 from "@assets/Cladding-_20251119_105251_0000/Cladding _20251119_105251_0000_page-0002.jpg";
import cladding3 from "@assets/generated_images/SEJE1_page-0002.jpg";
import cladding4 from "@assets/generated_images/SEJE1_page-0003.jpg";

const categories = [
  "All",
  "Paving Pattern",
  "Wall Copings",
  "Column Caps / Pier Caps",
  "Treads",
  // "Kerbstones",
  "Jumbo Slab",
  "Steps",
  "Cobbles",
  "Wall Cladding",
];

const galleryItems = [
  // Paving Pattern
  { id: 1, image: paving1, title: "Paving Pattern", category: "Paving Pattern" },
  { id: 2, image: paving2, title: "Paving Pattern", category: "Paving Pattern" },
  { id: 3, image: paving3, title: "Paving Pattern", category: "Paving Pattern" },
  { id: 4, image: paving4, title: "Paving Pattern", category: "Paving Pattern" },
  
  // Wall Copings
  { id: 5, image: wallCoping1, title: "Wall Copings", category: "Wall Copings" },
  { id: 6, image: wallCoping2, title: "Wall Copings", category: "Wall Copings" },
  { id: 7, image: wallCoping3, title: "Wall Copings", category: "Wall Copings" },
  { id: 8, image: wallCoping4, title: "Wall Copings", category: "Wall Copings" },
  
  // Column Caps / Pier Caps
  { id: 9, image: pierCap1, title: "Column Caps / Pier Caps", category: "Column Caps / Pier Caps" },
  { id: 10, image: pierCap2, title: "Column Caps / Pier Caps", category: "Column Caps / Pier Caps" },
  { id: 11, image: pierCap3, title: "Column Caps / Pier Caps", category: "Column Caps / Pier Caps" },
  { id: 12, image: pierCap4, title: "Column Caps / Pier Caps", category: "Column Caps / Pier Caps" },
  
  // Treads
  { id: 13, image: tread1, title: "Treads", category: "Treads" },
  { id: 14, image: tread2, title: "Treads", category: "Treads" },
  { id: 15, image: tread3, title: "Treads", category: "Treads" },
  { id: 16, image: tread4, title: "Treads", category: "Treads" },
  
  // Kerbstones
  // { id: 17, image: kerbstone1, title: "Kerbstones", category: "Kerbstones" },
  // { id: 18, image: kerbstone2, title: "Kerbstones", category: "Kerbstones" },
  // { id: 19, image: kerbstone3, title: "Kerbstones", category: "Kerbstones" },
  // { id: 20, image: kerbstone4, title: "Kerbstones", category: "Kerbstones" },
  
  // Jumbo Slab
  { id: 21, image: slab1, title: "Jumbo Slab", category: "Jumbo Slab" },
  { id: 22, image: slab2, title: "Jumbo Slab", category: "Jumbo Slab" },
  { id: 23, image: slab3, title: "Jumbo Slab", category: "Jumbo Slab" },
  { id: 24, image: slab4, title: "Jumbo Slab", category: "Jumbo Slab" },
  
  // Steps
  { id: 25, image: step1, title: "Steps", category: "Steps" },
  { id: 26, image: step2, title: "Steps", category: "Steps" },
  { id: 27, image: step3, title: "Steps", category: "Steps" },
  { id: 28, image: step4, title: "Steps", category: "Steps" },
  
  // Cobbles
  { id: 29, image: cobble1, title: "Cobbles", category: "Cobbles" },
  { id: 30, image: cobble2, title: "Cobbles", category: "Cobbles" },
  { id: 31, image: cobble3, title: "Cobbles", category: "Cobbles" },
  { id: 32, image: cobble4, title: "Cobbles", category: "Cobbles" },
  
  // Wall Cladding
  { id: 33, image: cladding1, title: "Wall Cladding", category: "Wall Cladding" },
  { id: 34, image: cladding2, title: "Wall Cladding", category: "Wall Cladding" },
  { id: 35, image: cladding3, title: "Wall Cladding", category: "Wall Cladding" },
  { id: 36, image: cladding4, title: "Wall Cladding", category: "Wall Cladding" },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredItems = selectedCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-color" data-testid="text-gallery-title">
            Our Products
          </h1>
          <p className="text-lg text-muted-foreground" data-testid="text-gallery-subtitle">
            Explore our exquisite collection of premium natural stones
          </p>
        </div>
      </section>

      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                data-testid={`button-filter-${category.toLowerCase().replace(/\s+/g, "-").replace(/\//g, "-")}`}
                className={selectedCategory === category ? "bg-primary text-primary-foreground" : ""}
              >
                {category}
              </Button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="group relative rounded-2xl overflow-hidden cursor-pointer"
                data-testid={`card-gallery-${item.id}`}
              >
                <div className="aspect-square">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-2xl font-semibold heading-color" data-testid={`text-gallery-item-${item.id}`}>
                      {item.title}
                    </h3>
                    <p className="text-sm text-white/80 mt-1">{item.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
