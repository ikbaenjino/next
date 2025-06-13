
// Metadata OG langsung diinject ke halaman ini
export const metadata = {
  title: "Engineer - Sekolah Coding & Teknologi",
  description: "Belajar coding, teknologi, dan inovasi untuk anak dan remaja. Program belajar interaktif di Asia Tenggara.",
  openGraph: {
    title: "Engineer - Sekolah Coding & Teknologi",
    description: "Program coding kreatif untuk anak dan remaja di Asia Tenggara.",
    url: "https://next-zttx.vercel.app",
    siteName: "Engineer",
    images: [
      {
        url: "https://res.cloudinary.com/dowrfl4lt/image/upload/v1749774491/hero-banner_ui0o1q.jpg",
        width: 1200,
        height: 630,
        alt: "Engineer - Sekolah Coding",
      },
    ],
    type: "website",
    locale: "id_ID",
  },
  twitter: {
    card: "summary_large_image",
    title: "Engineer - Sekolah Coding & Teknologi",
    description: "Belajar coding dan teknologi untuk masa depan.",
    images: ["https://res.cloudinary.com/dowrfl4lt/image/upload/v1749774491/hero-banner_ui0o1q.jpg"],
  },
};

import { useState } from "react";
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
    <main className="pt-20">
      <Hero />
      <Programs />
      <Methods />
      <Stats />
      <Testimonials />
      <Events />
      <FAQ />
      <Locations />

      {/* Komponen test untuk cek state React bekerja */}
      <div className="px-4 py-10">
        <ToggleTest />
      </div>
    </main>
  );
}

// Komponen test interaktif
function ToggleTest() {
  const [show, setShow] = useState(false);
  return (
    <>
      <button
        className="bg-indigo-600 text-white px-4 py-2 rounded"
        onClick={() => setShow(!show)}
      >
        Toggle Test
      </button>
      {show && <p className="mt-4 text-green-600">✅ State is working!</p>}
    </>
  );
}