// app/page.js

import Image from 'next/image';

export default function HomePage() {
  return (
    <main>
      <section className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col-reverse lg:flex-row items-center gap-12">
          
          {/* Teks & Button */}
          <div className="flex-1 text-center lg:text-left">
            <h1 className="text-5xl font-bold text-accent leading-tight mb-4">
              Persiapkan <br />
              Anak Anda <br />
              <span className="text-primary">Untuk Masa Depan</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Saatnya anak Anda memulai perjalanan pendidikan digital mereka di Sekolah Coding
              dan Teknologi Terbaik di Asia Tenggara!
            </p>
            <button className="btn-primary">
              GRATIS! Kelas Pertama
            </button>
          </div>

          {/* Gambar Hero */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <Image
              src="/hero.png"
              alt="Anak belajar dengan tablet"
              width={600}
              height={400}
              className="rounded-xl shadow-xl"
              priority
            />
          </div>

        </div>
      </section>
    </main>
  );
}
