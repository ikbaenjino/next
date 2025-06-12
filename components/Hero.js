import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center gap-10">
        
        {/* Teks */}
        <div className="text-center md:text-left md:w-1/2">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Masa Depan Dimulai dari Sini
          </h1>
          <p className="mt-4 text-lg text-gray-600">
            Bergabunglah dalam program coding kreatif yang menyenangkan dan inspiratif!
          </p>
        </div>

        {/* Gambar Responsif */}
        <div className="md:w-1/2 w-full relative h-64 sm:h-96">
          <Image
            src="/images/hero-banner.jpg"
            alt="Ilustrasi Anak Belajar Coding"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            style={{ objectFit: 'cover' }}
            className="rounded-xl shadow-md"
            priority
            quality={85}
          />
        </div>
      </div>
    </section>
  );
}