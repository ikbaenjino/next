// app/page.js
import Image from 'next/image';
import Link from 'next/link';
import Button from '@/components/ui/Button'; // Menggunakan komponen tombol

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="text-center py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Buka Potensi Anak Anda di Dunia Digital
        </h1>
        <p className="max-w-2xl mx-auto text-lg text-gray-600 mb-8">
          Koding Next adalah sekolah coding terdepan di Indonesia yang mengajarkan skill teknologi relevan untuk masa depan anak Anda.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/lokasi">
            <Button>Temukan Lokasi</Button>
          </Link>
          <Link href="/program">
            <Button variant="secondary">Lihat Program</Button>
          </Link>
        </div>
      </section>

      {/* Feature Section */}
      <section className="bg-gray-50 py-16">
         <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8">Mengapa Memilih Koding Next?</h2>
            {/* Di sini Anda bisa menambahkan beberapa kartu fitur */}
            <p>Kurikulum Berstandar Internasional, Pengajar Profesional, Lingkungan Belajar yang Menyenangkan.</p>
         </div>
      </section>
    </>
  );
}