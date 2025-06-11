const locations = [
  {
    city: "Jakarta",
    branches: ["Kelapa Gading", "PIK", "Menteng"]
  },
  {
    city: "Tangerang",
    branches: ["BSD", "Alam Sutera"]
  },
  {
    city: "Bandung",
    branches: ["Cihampelas", "Dago"]
  },
  {
    city: "Surabaya",
    branches: ["Citraland", "Dharmahusada"]
  }
];

export default function Locations() {
  return (
    <section className="bg-white py-20" aria-labelledby="locations-heading">
  <h2 id="locations-heading" className="text-3xl font-bold text-center text-gray-900 mb-12">
    Lokasi Cabang Kami
  </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((loc, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl shadow p-6 hover:shadow-md transition"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {loc.city}
              </h3>
              <ul className="list-disc list-inside text-gray-600 text-sm space-y-1">
                {loc.branches.map((branch, i) => (
                  <li key={i}>{branch}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
