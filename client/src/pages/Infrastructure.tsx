import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import machineryImage from "@assets/generated_images/Stone_cutting_machinery_equipment_f594776a.png";
import qualityImage from "@assets/generated_images/Quality_control_stone_inspection_d9c9f334.png";

const infrastructureData = [
  {
    id: 1,
    title: "State-of-the-Art Manufacturing Facility",
    description: "Our modern 50,000 sq ft manufacturing facility is equipped with the latest technology and machinery. Designed for optimal workflow efficiency, our facility ensures precision in every stage of stone processing while maintaining the highest safety and environmental standards.",
    image: facilityImage,
  },
  {
    id: 2,
    title: "Advanced Stone Cutting Equipment",
    description: "We utilize cutting-edge CNC machinery and diamond wire saws for precision cutting and shaping. Our advanced equipment allows us to handle various stone types and sizes, ensuring minimal waste and maximum accuracy in dimensions and finishes.",
    image: machineryImage,
  },
  {
    id: 3,
    title: "Quality Control & Inspection Center",
    description: "Every stone undergoes rigorous quality inspection in our dedicated QC center. Our experienced team uses advanced testing equipment to verify structural integrity, finish quality, and dimensional accuracy, ensuring only the finest products reach our customers.",
    image: qualityImage,
  },
  {
    id: 4,
    title: "Warehousing & Storage Facilities",
    description: "Our climate-controlled warehouses can store over 10,000 cubic meters of stone. Organized with modern inventory management systems, we ensure safe storage and quick retrieval of materials, ready for processing or dispatch at any time.",
    image: facilityImage,
  },
  {
    id: 5,
    title: "Finishing & Polishing Units",
    description: "Specialized polishing and finishing units equipped with multi-head polishing machines deliver mirror finishes and custom textures. Our finishing capabilities range from high-gloss polishing to honed, brushed, and flamed finishes.",
    image: machineryImage,
  },
  {
    id: 6,
    title: "Packaging & Export Division",
    description: "Our dedicated packaging facility ensures safe transit of stones worldwide. Using heavy-duty wooden crates, fumigation chambers, and modern loading bays, we prepare each shipment to arrive in perfect condition at its destination.",
    image: qualityImage,
  },
];

export default function Infrastructure() {
  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-infrastructure-title">
            Our Infrastructure
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-infrastructure-subtitle">
            World-class facilities equipped with modern technology to deliver excellence in every stone
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-20">
            {infrastructureData.map((item, index) => (
              <div
                key={item.id}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "" : ""
                }`}
                data-testid={`infrastructure-item-${item.id}`}
              >
                <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                  <h2 className="font-serif text-3xl md:text-4xl font-semibold mb-6" data-testid={`text-infra-title-${item.id}`}>
                    {item.title}
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed" data-testid={`text-infra-desc-${item.id}`}>
                    {item.description}
                  </p>
                </div>

                <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                  <div className="relative group rounded-2xl overflow-hidden shadow-lg">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-96 object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl font-semibold mb-6" data-testid="text-capacity-heading">
              Production Capacity
            </h2>
            <div className="w-20 h-0.5 bg-primary mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-white rounded-xl p-8 text-center hover-elevate transition-all duration-300">
              <div className="font-serif text-5xl font-bold text-primary mb-3">50,000</div>
              <div className="text-muted-foreground">Sq Ft Facility</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center hover-elevate transition-all duration-300">
              <div className="font-serif text-5xl font-bold text-primary mb-3">10,000+</div>
              <div className="text-muted-foreground">Cubic Meters Storage</div>
            </div>
            <div className="bg-white rounded-xl p-8 text-center hover-elevate transition-all duration-300">
              <div className="font-serif text-5xl font-bold text-primary mb-3">24/7</div>
              <div className="text-muted-foreground">Operations</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
