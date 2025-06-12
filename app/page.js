import Hero from "../components/Hero";
import Programs from "../components/Programs";
import Methods from "../components/Methods";
import Stats from "../components/Stats";
import dynamic from "next/dynamic";
import Footer from "../components/Footer";

const Testimonials = dynamic(() => import("../components/Testimonials"), { ssr: false });
const Events = dynamic(() => import("../components/Events"), { ssr: false });
const FAQ = dynamic(() => import("../components/FAQ"), { ssr: false });
const Locations = dynamic(() => import("../components/Locations"), { ssr: false });

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
      <Locations />      
    </main>
  );
}
