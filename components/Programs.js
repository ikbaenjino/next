import Image from 'next/image';

const programs = [
  {
    title: "Little Koders",
    age: "Usia 4–8 tahun",
    description:
      "Belajar logika dan pemrograman dengan cara menyenangkan menggunakan robot, game, dan alat bantu visual.",
    image: "https://res.cloudinary.com/dowrfl4lt/image/upload/v1749779570/little-koders_phb38k.jpg",
  },
  {
    title: "Junior Koders",
    age: "Usia 8–16 tahun",
    description:
      "Membangun aplikasi, game, dan website dengan tools seperti Scratch, Python, JavaScript dan lainnya.",
    image: "https://res.cloudinary.com/dowrfl4lt/image/upload/v1749779827/junior-koders_lissq9.jpg",
  },
  {
    title: "Holiday Camp",
    age: "Program Liburan",
    description:
      "Kegiatan coding dan teknologi kreatif selama libur sekolah, cocok untuk pemula dan lanjutan.",
    image: "https://res.cloudinary.com/dowrfl4lt/image/upload/v1749779853/holiday-camp_pq1czh.jpg",
  },
];

export default function Programs() {
  return (
    <section className="bg-white py-20" aria-labelledby="program-title">
      <div className="max-w-7xl mx-auto px-6">
        <h2
          id="program-title"
          className="text-3xl font-bold text-center text-gray-900 mb-12"
        >
          Pilihan Program Belajar
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center transition-transform hover:scale-105 duration-300"
            >
              {/* Container Gambar */}
              <div className="mb-4 w-24 h-24 md:w-32 md:h-32 relative">
                <Image
                  src={program.image}
                  alt={`Gambar program ${program.title}`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="rounded-lg object-cover"
                  priority={index === 0}
                />
              </div>

              {/* Judul Program */}
              <h3 className="text-xl font-semibold text-gray-800 mt-4">
                {program.title}
              </h3>

              {/* Usia */}
              <p className="text-sm text-red-500 font-medium mb-2">
                {program.age}
              </p>

              {/* Deskripsi */}
              <p className="text-gray-600 mb-4 text-sm">{program.description}</p>

              {/* Tombol CTA */}
              <button
                className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl text-sm mt-auto"
                aria-label={`Pelajari ${program.title}`}
              >
                Pelajari Lebih Lanjut
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}