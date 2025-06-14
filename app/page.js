// app/page.js

'use client';

import Hero from '@/components/Hero';
import Events from '@/components/Events';
import FAQ from '@/components/FAQ';
import Locations from '@/components/Locations';
import Methods from '@/components/Methods';
import Programs from '@/components/Programs';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';
import Footer from '@/components/Footer';

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <Programs />
      <Stats />
      <Testimonials />
      <Methods />
      <Events />
      <FAQ />
      <Locations />
      <Footer />
    </main>
  );
}
