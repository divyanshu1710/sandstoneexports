import HeroCarousel from "../HeroCarousel";
import marbleImage from "@assets/generated_images/White_marble_stone_slab_1ec7fa2c.png";
import graniteImage from "@assets/generated_images/Black_granite_stone_surface_bf42a48b.png";
import sandstoneImage from "@assets/generated_images/Beige_sandstone_texture_surface_f7619517.png";
import carraraImage from "@assets/generated_images/Carrara_marble_premium_slab_39580ea6.png";

export default function HeroCarouselExample() {
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

  return <HeroCarousel slides={slides} />;
}
