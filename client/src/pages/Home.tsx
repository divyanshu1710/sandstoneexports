import { useState, useEffect } from "react";
import { Link } from "wouter";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import ProductCard from "@/components/ProductCard";
import LogoAnimation from "@/components/LogoAnimation";
import { Button } from "@/components/ui/button";
import marbleImage from "@assets/generated_images/White_marble_stone_slab_1ec7fa2c.png";
import graniteImage from "@assets/generated_images/Black_granite_stone_surface_bf42a48b.png";
import sandstoneImage from "@assets/generated_images/Beige_sandstone_texture_surface_f7619517.png";
import carraraImage from "@assets/generated_images/Carrara_marble_premium_slab_39580ea6.png";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import interiorImage from "@assets/generated_images/Luxury_marble_interior_installation_fe0251a3.png";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);

  useEffect(() => {
    const visited = sessionStorage.getItem("hasVisited");
    if (visited) {
      setShowLogo(false);
    } else {
      sessionStorage.setItem("hasVisited", "true");
    }
  }, []);

  const slides = [
    {
      id: 1,
      image: marbleImage,
      title: "Premium Marble Collection",
      subtitle: "Timeless elegance in every slab"
    },
    {
      id: 2,
      image: graniteImage,
      title: "Luxury Granite Selection",
      subtitle: "Strength meets sophistication"
    },
    {
      id: 3,
      image: sandstoneImage,
      title: "Natural Sandstone",
      subtitle: "Bringing warmth to your spaces"
    },
    {
      id: 4,
      image: carraraImage,
      title: "Italian Carrara Marble",
      subtitle: "The pinnacle of luxury stone"
    }
  ];

  if (showLogo) {
    return <LogoAnimation onComplete={() => setShowLogo(false)} />;
  }

  return (
    <div>
      <HeroCarousel slides={slides} />

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6" data-testid="text-intro-heading">
              Crafting Excellence in Stone
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6" data-testid="text-intro-para1">
                For over three decades, Jain Enterprises has been a trusted name in premium stone exports. 
                We specialize in sourcing, processing, and delivering the finest natural stones from around the world.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8" data-testid="text-intro-para2">
                Our commitment to quality, sustainable practices, and customer satisfaction has made us a 
                preferred partner for architects, designers, and construction companies globally.
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-learn-more"
                >
                  Learn More About Us
                </Button>
              </Link>
            </div>
            <div>
              <img
                src={facilityImage}
                alt="Jain Enterprises Facility"
                className="rounded-2xl shadow-lg w-full h-96 object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6" data-testid="text-collections-heading">
              Our Premium Collections
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image={marbleImage}
              title="Premium Marble"
              category="Luxury Collection"
            />
            <ProductCard
              image={graniteImage}
              title="Granite Selection"
              category="Strength & Beauty"
            />
            <ProductCard
              image={sandstoneImage}
              title="Natural Sandstone"
              category="Earthy Elegance"
            />
            <ProductCard
              image={interiorImage}
              title="Custom Installations"
              category="Tailored Solutions"
            />
          </div>
        </div>
      </section>

      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${carraraImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="font-serif text-4xl md:text-5xl font-semibold mb-6" data-testid="text-cta-heading">
            Ready to Transform Your Space?
          </h2>
          <p className="text-xl mb-10 font-light" data-testid="text-cta-subtitle">
            Get in touch with our stone experts
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-14 py-6 text-lg"
              data-testid="button-contact-cta"
            >
              Contact Us Today
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
