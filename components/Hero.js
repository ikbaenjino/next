import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Persiapkan Anak Anda <br /> Untuk Masa Depan
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Saatnya anak Anda memulai perjalanan pendidikan digital mereka di Sekolah Coding dan Teknologi Terbaik di Asia Tenggara!
          </p>
          <button className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-3 rounded-xl text-lg font-semibold transition duration-300">
            GRATIS! Kelas Pertama
          </button>
        </div>
        <div className="relative w-full h-96 overflow-hidden rounded-xl shadow-md">
          <Image
            src="https://res.cloudinary.com/dowrfl4lt/image/upload/v1749774491/hero-banner_ui0o1q.jpg"
            alt="Anak Belajar Coding"
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 50vw"
            className="object-cover w-full h-full"
            priority
          />
        </div>
      </div>
    </section>
  );
}