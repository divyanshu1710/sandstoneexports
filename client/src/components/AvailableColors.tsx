import { useTranslation } from "react-i18next";

const COLORS = [
  "Kandla Grey",
  "Buff",
  "Autumn Brown",
  "Raj Green",
  "Raj Blend",
  "Raveena",
  "Slate Grey",
  "White",
  "Two Tone",
  "Fossil Mint",
  "Black Basalt",
  "Rainbow",
  "Teakwood",
  "Bansi Pink",
];

// Split colors into 3 sections
const COLORS_PER_SECTION = Math.ceil(COLORS.length / 3);
const section1 = COLORS.slice(0, COLORS_PER_SECTION);
const section2 = COLORS.slice(COLORS_PER_SECTION, COLORS_PER_SECTION * 2);
const section3 = COLORS.slice(COLORS_PER_SECTION * 2);

export default function AvailableColors() {
  const { t } = useTranslation();

  const ColorSection = ({ colors }: { colors: string[] }) => (
    <ul className="list-disc ml-5 text-muted-foreground space-y-2">
      {colors.map((color) => (
        <li key={color} className="text-lg">
          {color}
        </li>
      ))}
    </ul>
  );

  return (
    <div className="mb-12">
      <h3 className="text-2xl font-semibold mb-6 heading-color">
        {t("product.availableColors.title")}
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <ColorSection colors={section1} />
        <ColorSection colors={section2} />
        <ColorSection colors={section3} />
      </div>
    </div>
  );
}
