import { Button } from "@/components/ui/button";
import Image from "next/image";

const programs = [
  {
    title: "Little Koders",
    age: "Usia 4–8 tahun",
    description: "Belajar logika dan pemrograman dengan cara menyenangkan menggunakan robot, game, dan alat bantu visual.",
    image: "/images/programs/little-koders.png",
  },
  {
    title: "Junior Koders",
    age: "Usia 8–16 tahun",
    description: "Membangun aplikasi, game, dan website dengan tools seperti Scratch, Python, JavaScript dan lainnya.",
    image: "/images/programs/junior-koders.png",
  },
  {
    title: "Holiday Camp",
    age: "Program Liburan",
    description: "Kegiatan coding dan teknologi kreatif selama liburan sekolah, cocok untuk pemula dan lanjutan.",
    image: "/images/programs/holiday-camp.png",
  },
];

export default function Programs() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pilihan Program Belajar
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {programs.map((program, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow p-6 flex flex-col items-center text-center">
              <div className="relative w-40 h-40 mb-4">
                <Image
                  src={program.image}
                  alt={program.title}
                  layout="fill"
                  objectFit="contain"
                  className="rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
              <p className="text-sm text-primary font-medium mb-2">{program.age}</p>
              <p className="text-gray-600 mb-4">{program.description}</p>
              <Button className="bg-red-500 hover:bg-red-600 text-white">Pelajari Lebih Lanjut</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
