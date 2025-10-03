import ProductCard from "../ProductCard";
import marbleImage from "@assets/generated_images/White_marble_stone_slab_1ec7fa2c.png";

export default function ProductCardExample() {
  return (
    <div className="p-8 bg-background">
      <ProductCard
        image={marbleImage}
        title="Premium Marble"
        category="Luxury Collection"
      />
    </div>
  );
}
