import Image from "next/image";

const testimonials = [
  {
    name: "Ibu Maria",
    role: "Orang Tua Murid",
    message:
      "Anak saya sangat antusias mengikuti kelas coding di KodingNext. Gurunya sabar dan materi sangat menarik!",
    image: "/images/testimoni/maria.jpg",
  },
  {
    name: "Pak Andi",
    role: "Kepala Sekolah Mitra",
    message:
      "Kami sangat terbantu dengan program ini. Anak-anak kami lebih kreatif dan percaya diri dengan teknologi.",
    image: "/images/testimoni/andi.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Apa Kata Mereka
        </h2>

        <div className="grid md:grid-cols-2 gap-10">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow flex flex-col items-center text-center"
            >
              <div className="mb-4">
                <Image
                  src={item.image}
                  alt={`Foto ${item.name}`}
                  width={80}
                  height={80}
                  className="rounded-full object-cover"
                  loading="lazy"
                />
              </div>
              <p className="text-gray-600 mb-4">“{item.message}”</p>
              <p className="font-semibold text-gray-900">{item.name}</p>
              <p className="text-sm text-primary">{item.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
