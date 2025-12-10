import { useState } from "react";
import { useParams, useLocation } from "wouter";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Grid3x3 } from "lucide-react";

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

interface ProductData {
  id: string;
  name: string;
  description: string;
  images: string[];
  shortDescription: string;
  features: string[];
}

const productDatabase: Record<string, ProductData> = {
  "paving-pattern": {
    id: "paving-pattern",
    name: "Paving Pattern",
    shortDescription: "Premium natural stone paving with timeless elegance",
    description: "Our paving patterns are crafted from the finest natural sandstone, offering timeless elegance and durability. Each stone is carefully selected and processed to provide a beautiful finish that enhances any outdoor space.",
    images: [paving1, paving2, paving3, paving4],
    features: [
      "Natural stone material",
      "Weather resistant",
      "Easy to maintain",
      "Available in various finishes",
      "Eco-friendly option",
      "Ideal for patios and pathways"
    ]
  },
  "wall-copings": {
    id: "wall-copings",
    name: "Wall Copings",
    shortDescription: "Premium architectural stone coping solutions",
    description: "Wall copings provide both functional protection and aesthetic appeal to your walls. Our premium selection offers superior quality and craftsmanship, designed to withstand weather conditions while adding architectural beauty.",
    images: [wallCoping1, wallCoping2, wallCoping3, wallCoping4],
    features: [
      "Architectural grade",
      "Weather protection",
      "Uniform finish",
      "Custom sizing available",
      "Professional installation",
      "Lifetime durability"
    ]
  },
  "column-caps": {
    id: "column-caps",
    name: "Column Caps / Pier Caps",
    shortDescription: "Elegant stone caps for structural elements",
    description: "Transform your architectural elements with our elegant column and pier caps. These carefully crafted stone pieces add sophistication and protection to structural columns and piers.",
    images: [pierCap1, pierCap2, pierCap3, pierCap4],
    features: [
      "Precision engineered",
      "Multiple styles available",
      "Load bearing",
      "Aesthetic appeal",
      "Custom dimensions",
      "Premium finish options"
    ]
  },
  "treads": {
    id: "treads",
    name: "Treads",
    shortDescription: "Safe and stylish stair solutions",
    description: "Our stone treads combine safety with style, providing durable stair solutions for both indoor and outdoor applications. Each tread is precision-cut for perfect fit and optimal safety.",
    images: [tread1, tread2, tread3, tread4],
    features: [
      "Anti-slip surface",
      "Durable construction",
      "Precision cut",
      "Multiple finishes",
      "Indoor and outdoor use",
      "Professional grade"
    ]
  },
  "jumbo-slab": {
    id: "jumbo-slab",
    name: "Jumbo Slab",
    shortDescription: "Large format natural stone slabs",
    description: "Our jumbo slabs offer large-format natural stone solutions perfect for countertops, flooring, and architectural features. These premium quality slabs showcase natural beauty with minimal seaming.",
    images: [slab1, slab2, slab3, slab4],
    features: [
      "Large format options",
      "Minimal seaming",
      "Premium quality",
      "Natural variations",
      "Versatile applications",
      "Professional polishing"
    ]
  },
  "steps": {
    id: "steps",
    name: "Steps",
    shortDescription: "Custom stone steps for indoor and outdoor use",
    description: "Crafted with precision and elegance, our stone steps provide safe and beautiful transitions. Each step is engineered for durability and designed to enhance your architectural vision.",
    images: [step1, step2, step3, step4],
    features: [
      "Custom sizing",
      "Anti-slip finish",
      "Structural integrity",
      "Elegant design",
      "Multiple materials",
      "Professional installation support"
    ]
  },
  "cobbles": {
    id: "cobbles",
    name: "Cobbles",
    shortDescription: "Traditional stone cobblestones for timeless paths",
    description: "Traditional and timeless, our cobblestones add charm and durability to any outdoor space. Perfect for driveways, pathways, and courtyards, these stones offer authentic beauty.",
    images: [cobble1, cobble2, cobble3, cobble4],
    features: [
      "Traditional design",
      "Durable material",
      "Excellent drainage",
      "Natural appearance",
      "Low maintenance",
      "Versatile applications"
    ]
  },
  "wall-cladding": {
    id: "wall-cladding",
    name: "Wall Cladding",
    shortDescription: "Premium stone cladding for stunning facades",
    description: "Enhance your walls with premium stone cladding. Our selection offers various textures and finishes that create stunning architectural facades while providing protection and durability.",
    images: [cladding1, cladding2, cladding3, cladding4],
    features: [
      "Multiple finishes",
      "Weather resistant",
      "Easy installation",
      "Thermal insulation",
      "Fire resistant",
      "Professional appearance"
    ]
  }
};

export default function ProductDetail() {
  const { t } = useTranslation();
  const { productId } = useParams();
  const [, setLocation] = useLocation();
  const [showGallery, setShowGallery] = useState(false);

  const product = productDatabase[productId || ""];

  if (!product) {
    return (
      <div className="pt-20 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-3xl font-bold mb-4">Product not found</h1>
          <Button onClick={() => setLocation("/gallery")}>Back to Gallery</Button>
        </div>
      </div>
    );
  }

  if (showGallery) {
    return (
      <div className="pt-20">
        <div className="py-6 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
          <div className="max-w-7xl mx-auto">
            <button
              onClick={() => setShowGallery(false)}
              className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
            >
              <ArrowLeft className="h-5 w-5" />
              Back to product overview
            </button>
            <h1 className="text-4xl md:text-5xl font-bold heading-color">{product.name}</h1>
          </div>
        </div>

        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {product.images.map((image, index) => (
                <div
                  key={index}
                  className="group relative rounded-2xl overflow-hidden cursor-pointer"
                >
                  <div className="aspect-square">
                    <img
                      src={image}
                      alt={`${product.name} - View ${index + 1}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm font-semibold">View {index + 1}</p>
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

  return (
    <div className="pt-20">
      <section className="py-12 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setLocation("/gallery")}
            className="flex items-center gap-2 text-primary hover:text-primary/80 mb-6"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Gallery
          </button>
          <h1 className="text-5xl md:text-6xl font-bold heading-color mb-4">{product.name}</h1>
          <p className="text-lg text-muted-foreground">{product.shortDescription}</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Product Image */}
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={product.images[0]}
              alt={product.name}
              className="w-full h-96 md:h-full object-cover"
            />
          </div>

          {/* Product Info */}
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-semibold mb-4 heading-color">About This Product</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4 heading-color">Key Features</h3>
              <ul className="grid grid-cols-2 gap-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Explore Button */}
            <Button
              onClick={() => setShowGallery(true)}
              size="lg"
              className="w-full md:w-auto bg-primary text-primary-foreground hover:bg-primary/90"
            >
              <Grid3x3 className="h-5 w-5 mr-2" />
              Explore All Images
            </Button>
          </div>
        </div>
      </section>

      {/* Additional Info Section */}
      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5]">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl font-semibold mb-6 heading-color">Why Choose Our {product.name}?</h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Premium quality, sustainable sourcing, and expert craftsmanship combine to deliver 
            products that exceed expectations. We're committed to providing the finest natural 
            stone solutions for your projects.
          </p>
          <Button
            onClick={() => setLocation("/contact")}
            variant="outline"
            size="lg"
          >
            Get a Quote
          </Button>
        </div>
      </section>
    </div>
  );
}
