import { useState, useEffect } from "react";
import { Link } from "wouter";
import { useTranslation } from "react-i18next";
import HeroCarousel from "@/components/HeroCarousel";
import StatsSection from "@/components/StatsSection";
import ProductCard from "@/components/ProductCard";
import LogoAnimation from "@/components/LogoAnimation";
import Testimonials from "@/components/Testimonials";
import { Button } from "@/components/ui/button";
import marbleImage from "@assets/generated_images/SEJE1_page-0001.jpg";
import graniteImage from "@assets/generated_images/Cobbles _20251118_125558_0000_page-0004.jpg";
import sandstoneImage from "@assets/generated_images/SEJEB_page-0007.jpg";
import carraraImage from "@assets/generated_images/Wall Coping _20251118_125334_0000_page-0004.jpg";
import facilityImage from "@assets/generated_images/SEJEB_page-0008.jpg";
import interiorImage from "@assets/generated_images/Luxury_marble_interior_installation_fe0251a3.png";
import sandstoneProductImage from "@assets/generated_images/Natural Sandstone Paving _20251116_155721_0000_page-0002.jpg";
import cobblesProductImage from "@assets/generated_images/Cobbles _20251118_125558_0000_page-0002.jpg";
import slabImage from "@assets/generated_images/Slab_20251118_160715_0000_page-0001.jpg";
import wallCopingProductImage from "@assets/generated_images/Wall Coping _20251118_125334_0000_page-0004.jpg";
import TransformationImage from "@assets/generated_images/SEJEB_page-0008.jpg";
import videoSource from "@assets/video.mp4";

export default function Home() {
  const [showLogo, setShowLogo] = useState(true);
  const { t } = useTranslation();

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
      title: t("home.hero.premiumSandstone"),
      subtitle: t("home.hero.premiumSandstoneSubtitle")
    },
    {
      id: 2,
      image: graniteImage,
      title: t("home.hero.luxuryCobbles"),
      subtitle: t("home.hero.luxuryCobblesSubtitle")
    },
    {
      id: 3,
      image: sandstoneImage,
      title: t("home.hero.naturalSandstone"),
      subtitle: t("home.hero.naturalSandstoneSubtitle")
    },
    {
      id: 4,
      image: carraraImage,
      title: t("home.hero.premiumWallCoping"),
      subtitle: t("home.hero.premiumWallCopingSubtitle")
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
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-intro-heading">
              {t("home.craftingExcellence.title")}
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg leading-relaxed text-muted-foreground mb-6" data-testid="text-intro-para1">
                {t("home.craftingExcellence.para1")}
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground mb-8" data-testid="text-intro-para2">
                {t("home.craftingExcellence.para2")}
              </p>
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  data-testid="button-learn-more"
                >
                  {t("home.craftingExcellence.learnMore")}
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

      <section className="py-24 px-6 bg-muted/30">
        <div className="max-w-md mx-auto">
          <div className="relative w-full" style={{ aspectRatio: '9/16' }}>
            <video
              className="w-full h-full rounded-2xl shadow-lg object-cover"
              controls
              autoPlay
              muted
              loop
              playsInline
            >
              <source src={videoSource} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </section>

      <Testimonials />

      <StatsSection />

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-collections-heading">
              {t("home.collections.title")}
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <ProductCard
              image={sandstoneProductImage}
              title={t("home.collections.premiumSandstone")}
              category={t("home.collections.premiumSandstoneCategory")}
            />
            <ProductCard
              image={cobblesProductImage}
              title={t("home.collections.cobblesStone")}
              category={t("home.collections.cobblesStoneCategory")}
            />
            <ProductCard
              image={slabImage}
              title={t("home.collections.naturalSlabs")}
              category={t("home.collections.naturalSlabsCategory")}
            />
            <ProductCard
              image={wallCopingProductImage}
              title={t("home.collections.customWallCoping")}
              category={t("home.collections.customWallCopingCategory")}
            />
          </div>
        </div>
      </section>

      <section
        className="relative py-32 px-6 bg-cover bg-center"
        style={{ backgroundImage: `url(${TransformationImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/60" />
        <div className="relative max-w-4xl mx-auto text-center text-white">
          <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-cta-heading">
            {t("home.cta.title")}
          </h2>
          <p className="text-xl mb-10 font-light" data-testid="text-cta-subtitle">
            {t("home.cta.subtitle")}
          </p>
          <Link href="/contact">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-14 py-6 text-lg"
              data-testid="button-contact-cta"
            >
              {t("home.cta.button")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
