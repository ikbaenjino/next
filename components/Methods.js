const methods = [
  {
    icon: "🧩",
    title: "Kurikulum Handmade",
    desc: "Disusun oleh tim ahli, kurikulum kami menyesuaikan perkembangan anak dan teknologi terkini."
  },
  {
    icon: "🌐",
    title: "Pengajar Bilingual",
    desc: "Semua guru mampu mengajar dalam bahasa Indonesia dan Inggris secara interaktif dan mudah dipahami."
  },
  {
    icon: "💡",
    title: "Berbasis Proyek",
    desc: "Anak akan membuat proyek nyata seperti game, aplikasi, dan robot yang dapat langsung digunakan."
  },
  {
    icon: "👥",
    title: "Pendekatan Personal",
    desc: "Pengajaran disesuaikan dengan minat dan gaya belajar masing-masing anak."
  },
];

export default function Methods() {
  return (
    <section className="bg-gray-50 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Metode Belajar KodingNext
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {methods.map((method, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow text-center">
              <div className="mb-4 text-4xl">{method.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-600 text-sm">{method.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
