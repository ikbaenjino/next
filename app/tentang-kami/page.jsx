import Image from "next/image";

export const metadata = {
  title: "Tentang Kami - KodingNext",
  description: "Cerita tentang bagaimana KodingNext dimulai dan berkembang.",
};

export default function TentangKami() {
  return (
    <main className="bg-white px-6 pt-24 pb-12 max-w-6xl mx-auto">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4 text-pink-600">Cerita Kami</h1>
        <p className="text-lg text-gray-700">
          Cerita berawal dari dua orang Polandia yang tinggal di Jakarta bertemu, berteman, dan memutuskan
          untuk mengubah cara pandang kita terhadap pendidikan teknologi. <br />
          Dan lahirlah <span className="font-semibold text-pink-600">KodingNext!</span>
        </p>
        <button className="mt-6 bg-pink-500 hover:bg-pink-600 text-white font-semibold py-2 px-4 rounded-lg">
          Pelajari Selengkapnya
        </button>
      </section>

      <section className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="relative h-64">
          <Image
            src="https://res.cloudinary.com/dowrfl4lt/image/upload/v1749789876/tentang1_gmkv3k.jpg"
            alt="Foto 1"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-64">
          <Image
            src="https://res.cloudinary.com/dowrfl4lt/image/upload/v1749789876/tentang2_phqdrq.jpg"
            alt="Foto 2"
            fill
            className="object-cover rounded-lg"
          />
        </div>
        <div className="relative h-64">
          <Image
            src="https://res.cloudinary.com/dowrfl4lt/image/upload/v1749789876/tentang3_t9oyzh.jpg"
            alt="Foto 3"
            fill
            className="object-cover rounded-lg"
          />
        </div>
      </section>
    </main>
  );
}