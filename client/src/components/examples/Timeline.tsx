import Timeline from "../Timeline";
import facilityImage from "@assets/generated_images/Stone_manufacturing_facility_interior_3d6147b5.png";

export default function TimelineExample() {
  const items = [
    {
      year: "EST. 1990",
      title: "The Beginning",
      description: "Founded with a vision to bring quality natural stones to the global market. Starting from a small warehouse, we built our foundation on trust and craftsmanship.",
      image: facilityImage,
      imagePosition: "right" as const
    },
    {
      year: "2005",
      title: "Growth & Evolution",
      description: "Expanded our operations internationally, establishing partnerships across 45 countries. Invested in modern machinery and quality control systems.",
      image: facilityImage,
      imagePosition: "left" as const
    },
    {
      year: "2025",
      title: "Today & Future",
      description: "Leading the industry with sustainable practices and innovative solutions. Our commitment to excellence continues to drive us forward.",
      image: facilityImage,
      imagePosition: "right" as const
    }
  ];

  return (
    <div className="p-12 bg-background">
      <Timeline items={items} />
    </div>
  );
}
