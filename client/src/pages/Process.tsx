import { CheckCircle2 } from "lucide-react";
import { useTranslation } from "react-i18next";
import facilityImage from "@assets/generated_images/SEJE1_page-0001.jpg";
import machineryImage from "@assets/generated_images/Stone_cutting_machinery_equipment_f594776a.png";
import qualityImage from "@assets/generated_images/Quality_control_stone_inspection_d9c9f334.png";
import Infra5Image from "@assets/generated_images/SEJEB_page-0001.jpg";
import Infra6Image from "@assets/generated_images/SEJEB_page-0009.jpg";
import Infra2Image from "@assets/generated_images/SEJE1_page-0002.jpg";

export default function Process() {
  const { t } = useTranslation();

  const processSteps = [
    {
      step: 1,
      title: t("process.steps.step1.title"),
      description: t("process.steps.step1.description"),
      image: facilityImage,
    },
    {
      step: 2,
      title: t("process.steps.step2.title"),
      description: t("process.steps.step2.description"),
      image: Infra5Image,
    },
    {
      step: 3,
      title: t("process.steps.step3.title"),
      description: t("process.steps.step3.description"),
      image: Infra2Image,
    },
    {
      step: 4,
      title: t("process.steps.step4.title"),
      description: t("process.steps.step4.description"),
      image: Infra6Image,
    },
  ];
  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-color" data-testid="text-process-title">
            {t("process.hero.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-process-subtitle">
            {t("process.hero.subtitle")}
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
                    <h2 className="text-3xl font-semibold heading-color" data-testid={`text-step-title-${step.step}`}>
                      {step.title}
                    </h2>
                  </div>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6" data-testid={`text-step-desc-${step.step}`}>
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary">
                    <CheckCircle2 className="h-5 w-5" />
                    <span className="font-medium">{t("process.standardsLabel")}</span>
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
          <h2 className="text-4xl font-semibold mb-6 heading-color" data-testid="text-quality-heading">
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
