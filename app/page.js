import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Methods from "../components/Methods";
import Stats from "../components/Stats";
import Testimonials from "../components/Testimonials";
import Locations from "../components/Locations";
import Events from "../components/Events"; 
import FAQ from "../components/FAQ";
// ✅ Tambahkan ini
// ✅ Tambahkan baris ini
import Footer from "../components/Footer";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Programs />
      <Methods />
      <Stats />
      <Testimonials />
      <Events />
      <FAQ />
      <Locations /> {/* ✅ Tambahkan baris ini */}
      <Footer />
    </main>
  );
}
