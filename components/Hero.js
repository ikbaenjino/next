import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
            Coding untuk Anak <br className="hidden sm:inline" /> Persiapkan Masa Depannya
          </h1>
          <p className="text-lg text-gray-700">
            Program belajar coding untuk anak usia 4–16 tahun. Kurikulum modern, bilingual, dan berbasis project.
          </p>
          <Button className="bg-red-500 hover:bg-red-600 text-white text-lg px-6 py-3 rounded-xl">
            Daftar Trial Gratis
          </Button>
        </div>

        {/* Hero Image */}
        <div className="relative w-full h-80 md:h-[400px]">
          <Image
            src="/images/hero.png"
            alt="Hero Image"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
