import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Methods from "@/components/Methods";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Programs />
      <Methods />
      <Stats />
      <Testimonials />
      {/* Berikutnya: Media Partners, Locations, FAQ, dll */}
    </main>
  );
}
