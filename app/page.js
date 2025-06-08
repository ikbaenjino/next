import Hero from "@/components/Hero";
import Programs from "@/components/Programs";
import Methods from "@/components/Methods";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer"; // ✅ Tambahkan import Footer

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Programs />
      <Methods />
      <Stats />
      <Testimonials />
      <Footer /> {/* ✅ Tambahkan Footer di akhir */}
    </main>
  );
}
