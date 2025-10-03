import { CheckCircle2 } from "lucide-react";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import machineryImage from "@assets/generated_images/Stone_cutting_machinery_equipment_f594776a.png";
import qualityImage from "@assets/generated_images/Quality_control_stone_inspection_d9c9f334.png";

const processSteps = [
  {
    step: 1,
    title: "Sourcing & Selection",
    description: "We carefully select premium natural stones from the finest quarries around the world. Our expert team evaluates each stone for quality, durability, and aesthetic appeal.",
    image: facilityImage,
  },
  {
    step: 2,
    title: "Precision Cutting",
    description: "Using state-of-the-art machinery, we cut and shape each stone to exact specifications. Our advanced technology ensures minimal waste and maximum precision.",
    image: machineryImage,
  },
  {
    step: 3,
    title: "Quality Control",
    description: "Every piece undergoes rigorous quality inspection. We ensure each stone meets our strict standards for finish, dimensions, and structural integrity.",
    image: qualityImage,
  },
  {
    step: 4,
    title: "Packaging & Delivery",
    description: "Stones are carefully packaged to prevent damage during transit. We coordinate logistics to ensure timely delivery to destinations worldwide.",
    image: facilityImage,
  },
];

export default function Process() {
  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-serif text-5xl md:text-6xl font-bold mb-6" data-testid="text-process-title">
            Our Manufacturing Process
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
            From quarry to delivery, discover how we transform raw stone into premium products
          </p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={step.step}
                className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "md:flex-row-reverse" : ""
                }`}
                data-testid={`process-step-${step.step}`}
              >
                <div className={index % 2 === 1 ? "md:order-2" : ""}>
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-primary font-serif text-xl font-bold" data-testid={`text-step-number-${step.step}`}>
                        {step.step}
                      </span>
                    </div>
                    <h2 className="font-serif text-3xl font-semibold" data-testid={`text-step-title-${step.step}`}>
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid={`text-step-desc-${step.step}`}>
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">Industry-leading standards</span>
                  </div>
                </div>

                <div className={index % 2 === 1 ? "md:order-1" : ""}>
                  <img
                    src={step.image}
                    alt={step.title}
                    className="rounded-2xl shadow-lg w-full h-96 object-cover"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 px-6 bg-gradient-to-br from-[#F5F1ED] to-[#E6DDD5]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif text-4xl font-semibold mb-6" data-testid="text-quality-heading">
            Committed to Excellence
          </h2>
          <p className="text-lg text-muted-foreground mb-8" data-testid="text-quality-desc">
            Our comprehensive quality assurance process ensures that every stone we deliver 
            meets the highest standards of craftsmanship and durability. We take pride in our 
            attention to detail and commitment to customer satisfaction.
          </p>
          <div className="flex flex-wrap justify-center gap-8 mt-12">
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Quality Inspected</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-primary mb-2">ISO</div>
              <div className="text-sm text-muted-foreground">Certified Process</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-4xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-muted-foreground">Quality Monitoring</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
