const events = [
  {
    title: "International Coding Competition 2025",
    date: "24 Mei 2025",
    description: "Kompetisi coding tahunan tingkat Asia Tenggara untuk anak-anak usia 8–16 tahun."
  },
  {
    title: "Grand Opening Manado",
    date: "10 Juni 2025",
    description: "Peresmian cabang terbaru Koding Next di Manado dengan demo kelas dan hadiah menarik."
  }
];

export default function Events() {
  return (
    <section className="bg-gray-100 py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Berita & Kegiatan Terbaru
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {events.map((event, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-1">
                {event.title}
              </h3>
              <p className="text-sm text-primary font-medium mb-2">{event.date}</p>
              <p className="text-gray-600 text-sm">{event.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
