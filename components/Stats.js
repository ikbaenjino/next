const stats = [
  { label: "Murid Aktif", value: "20.000+" },
  { label: "Kursus Terjual", value: "22.000+" },
  { label: "Lokasi Cabang", value: "25+" },
  { label: "Mitra Sekolah", value: "40+" },
];

export default function Stats() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-12">
          Dipercaya oleh Ribuan Keluarga & Sekolah
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
          {stats.map((stat, index) => (
            <div key={index} className="bg-gray-50 rounded-xl shadow p-6">
              <p className="text-3xl font-bold text-red-500">{stat.value}</p>
              <p className="text-gray-700 text-sm mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
