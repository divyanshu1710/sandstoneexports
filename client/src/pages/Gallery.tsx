import { useState } from "react";
import { Button } from "@/components/ui/button";
import marbleImage from "@assets/generated_images/White_marble_stone_slab_1ec7fa2c.png";
import graniteImage from "@assets/generated_images/Black_granite_stone_surface_bf42a48b.png";
import sandstoneImage from "@assets/generated_images/Beige_sandstone_texture_surface_f7619517.png";
import carraraImage from "@assets/generated_images/Carrara_marble_premium_slab_39580ea6.png";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import interiorImage from "@assets/generated_images/Luxury_marble_interior_installation_fe0251a3.png";

const categories = ["All", "Marble", "Granite", "Sandstone"];

const galleryItems = [
  { id: 1, image: marbleImage, title: "Premium White Marble", category: "Marble" },
  { id: 2, image: graniteImage, title: "Black Granite", category: "Granite" },
  { id: 3, image: sandstoneImage, title: "Natural Sandstone", category: "Sandstone" },
  { id: 4, image: carraraImage, title: "Carrara Marble", category: "Marble" },
  { id: 5, image: facilityImage, title: "Stone Processing", category: "Marble" },
  { id: 6, image: interiorImage, title: "Luxury Installation", category: "Marble" },
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
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-gallery-title">
            Stone Gallery
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
                data-testid={`button-filter-${category.toLowerCase()}`}
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
                    <h3 className="font-serif text-2xl font-semibold" data-testid={`text-gallery-item-${item.id}`}>
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
