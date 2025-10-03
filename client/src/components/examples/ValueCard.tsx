import ValueCard from "../ValueCard";
import { Award } from "lucide-react";

export default function ValueCardExample() {
  return (
    <div className="p-8 bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5]">
      <ValueCard
        icon={<Award className="h-16 w-16" />}
        title="Quality Craftsmanship"
        description="Every stone is carefully selected and processed to meet the highest standards of quality and durability."
      />
    </div>
  );
}
