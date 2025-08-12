import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import Stats from "@/components/about/Stats";
import CTA from "@/components/about/CTA";

export const metadata = {
  title: "Hakkımızda - Hitit Yalıtım",
  description: "2008'den beri ısı yalıtımı, strafor koruyucular ve ısıtma panellerinde güvenilir üretim.",
};

export default function AboutPage() {
  return (
    <main className="pt-16 bg-white text-gray-900 dark:bg-red-50 dark:text-red-900">
      <AboutHero />
      <MissionVision />
      <Values />
      <Timeline />
      <Stats />
      <CTA />
    </main>
  );
}
