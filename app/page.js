import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Methods from "@/components/Methods";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Programs />
      <Methods />
      {/* Tambahkan Stats, FAQ, dll di bawahnya nanti */}
    </main>
  );
}
