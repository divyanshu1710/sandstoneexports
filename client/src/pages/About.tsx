import Timeline from "@/components/Timeline";
import ValueCard from "@/components/ValueCard";
import { Award, Leaf, Heart } from "lucide-react";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import machineryImage from "@assets/generated_images/Stone_cutting_machinery_equipment_f594776a.png";
import qualityImage from "@assets/generated_images/Quality_control_stone_inspection_d9c9f334.png";
import Infra2Image from "@assets/generated_images/SEJE1_page-0002.jpg";
import Infra3Image from "@assets/generated_images/SEJE1_page-0005.jpg";
import sandstoneImage from "@assets/generated_images/SEJEB_page-0007.jpg";
import FacImage from "@assets/generated_images/SEJEB_page-0003.jpg";
import Fac2Image from "@assets/generated_images/SEJE1_page-0003.jpg";
import Fac3Image from "@assets/generated_images/SEJEB_page-0004.jpg";

export default function About() {
  const timelineItems = [
    {
      year: "EST. 1990",
      title: "The Beginning",
      description: "Founded with a vision to bring quality natural stones to the global market. Starting from a small warehouse, we built our foundation on trust and craftsmanship.",
      image: Infra2Image,
      imagePosition: "right" as const
    },
    {
      year: "2005",
      title: "Growth & Evolution",
      description: "Expanded our operations internationally, establishing partnerships across 45 countries. Invested in modern machinery and quality control systems to ensure consistent excellence.",
      image: sandstoneImage,
      imagePosition: "left" as const
    },
    {
      year: "2025",
      title: "Today & Future",
      description: "Leading the industry with sustainable practices and innovative solutions. Our commitment to excellence and customer satisfaction continues to drive us forward into the future.",
      image: Infra3Image,
      imagePosition: "right" as const
    }
  ];

  return (
    <div className="pt-20">
      <section
        className="relative h-[500px] bg-cover bg-center"
        style={{ backgroundImage: `url(${facilityImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/40" />
        <div className="relative h-full flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-6xl font-bold mb-4 heading-color" data-testid="text-about-hero-title">
              About Jain Enterprises
            </h1>
            <p className="text-sm tracking-wider" data-testid="text-breadcrumb">
              Home &gt; About
            </p>
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-story-heading">
              Our Story
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <Timeline items={timelineItems} />
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-values-heading">
              What Drives Us
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<Award className="h-16 w-16" />}
              title="Quality Craftsmanship"
              description="Every stone is carefully selected and processed to meet the highest standards of quality and durability. Our expert craftsmen ensure perfection in every detail."
            />
            <ValueCard
              icon={<Leaf className="h-16 w-16" />}
              title="Sustainable Practices"
              description="We are committed to environmentally responsible sourcing and processing. Our sustainable practices ensure we preserve nature for future generations."
            />
            <ValueCard
              icon={<Heart className="h-16 w-16" />}
              title="Customer Commitment"
              description="Your satisfaction is our priority. We build lasting relationships through reliability, transparency, and exceptional service at every step."
            />
          </div>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-semibold mb-6 heading-color" data-testid="text-facilities-heading">
              Our Facilities & Process
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={FacImage}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold" data-testid="text-gallery-caption-0">
                </p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={Fac2Image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold" data-testid="text-gallery-caption-1">
                </p>
              </div>
            </div>

            <div className="relative h-80 rounded-xl overflow-hidden group cursor-pointer">
              <img
                src={Fac3Image}
                alt=""
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                <p className="text-white font-semibold" data-testid="text-gallery-caption-2">
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
