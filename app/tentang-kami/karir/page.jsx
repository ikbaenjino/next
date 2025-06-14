export const metadata = {
    title: "Karir - KodingNext",
    description: "Bergabunglah bersama tim KodingNext dan bantu revolusi pendidikan teknologi.",
  };
  
  export default function KarirPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">Karir di KodingNext</h1>
        <p className="text-gray-700 mb-8">
          Kami mencari individu berbakat dan berdedikasi untuk bergabung dengan tim kami. Jika Anda memiliki semangat dalam pendidikan dan teknologi, mari tumbuh bersama kami.
        </p>
  
        {/* Placeholder posisi */}
        <ul className="space-y-6">
          <li className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">Instruktur Coding untuk Anak</h2>
            <p className="text-sm text-gray-600">Lokasi: Jakarta, Surabaya, Bandung</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">Content Creator Edukasi</h2>
            <p className="text-sm text-gray-600">Remote / Hybrid</p>
          </li>
        </ul>
      </main>
    );
  }