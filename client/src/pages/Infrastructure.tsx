import { useTranslation } from "react-i18next";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";
import machineryImage from "@assets/generated_images/Stone_cutting_machinery_equipment_f594776a.png";
import qualityImage from "@assets/generated_images/Quality_control_stone_inspection_d9c9f334.png";
import Infra1Image from "@assets/generated_images/SEJEB_page-0005.jpg";
import Infra2Image from "@assets/generated_images/SEJE1_page-0003.jpg";
import Infra3Image from "@assets/generated_images/SEJE1_page-0006.jpg";
import Infra4Image from "@assets/generated_images/SEJEB_page-0007.jpg";
import Infra5Image from "@assets/generated_images/SEJEB_page-0001.jpg";
import Infra6Image from "@assets/generated_images/SEJEB_page-0009.jpg";

export default function Infrastructure() {
  const { t } = useTranslation();

  const infrastructureData = [
    {
      id: 1,
      title: t("infrastructure.items.item1.title"),
      description: t("infrastructure.items.item1.description"),
      image: Infra1Image,
    },
    {
      id: 2,
      title: t("infrastructure.items.item2.title"),
      description: t("infrastructure.items.item2.description"),
      image: Infra5Image,
    },
    {
      id: 3,
      title: t("infrastructure.items.item3.title"),
      description: t("infrastructure.items.item3.description"),
      image: Infra3Image,
    },
    {
      id: 4,
      title: t("infrastructure.items.item4.title"),
      description: t("infrastructure.items.item4.description"),
      image: Infra4Image,
    },
    {
      id: 5,
      title: t("infrastructure.items.item5.title"),
      description: t("infrastructure.items.item5.description"),
      image: Infra2Image,
    },
    {
      id: 6,
      title: t("infrastructure.items.item6.title"),
      description: t("infrastructure.items.item6.description"),
      image: Infra6Image,
    },
  ];
  return (
    <div className="pt-20">
      <section className="py-16 px-6 bg-gradient-to-br from-[#FAFAFA] to-[#E8E8E8]">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 heading-color" data-testid="text-infrastructure-title">
            {t("infrastructure.hero.title")}
          </h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto" data-testid="text-infrastructure-subtitle">
            {t("infrastructure.hero.subtitle")}
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
                  <h2 className="text-3xl md:text-4xl font-semibold mb-6 heading-color" data-testid={`text-infra-title-${item.id}`}>
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
            <h2 className="text-4xl font-semibold mb-6 heading-color" data-testid="text-capacity-heading">
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
