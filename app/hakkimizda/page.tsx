import AboutHero from "@/components/about/AboutHero";
import MissionVision from "@/components/about/MissionVision";
import Values from "@/components/about/Values";
import Timeline from "@/components/about/Timeline";
import Certificates from "@/components/about/Certificates";
import Stats from "@/components/about/Stats";
import CTA from "@/components/about/CTA";

export const metadata = {
  title: "Hakkımızda | Hitit Yalıtım",
  description:
    "Hitit Yalıtım: Isı, ses ve yangın yalıtımında yerli üretim, modern tesisler ve yüksek kalite standartları.",
};

export default function AboutPage() {
  return (
    <main className="pt-16 bg-white dark:bg-red-950">
      <AboutHero />
      <MissionVision />
      <Values />
      <Timeline />
      <Certificates />
      <Stats />
      <CTA />
    </main>
  );
}
