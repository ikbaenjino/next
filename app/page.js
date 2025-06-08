import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Methods from "@/components/Methods";
import Stats from "@/components/Stats";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Programs />
      <Methods />
      <Stats />
      {/* Lanjutkan ke FAQ, Events, Footer, dst */}
    </main>
  );
}
