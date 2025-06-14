export const metadata = {
    title: "Franchise • KodingNext",
    description: "Peluang Bisnis Franchise Sekolah Coding Masa Depan bersama Koding Next.",
  };
  
  export default function FranchisePage() {
    return (
      <main className="pt-24 px-6 max-w-4xl mx-auto space-y-8">
        <h1 className="text-3xl font-bold text-pink-600">Bisnis Franchise Masa Depan</h1>
        <p className="text-gray-700">
          Franchise atau waralaba adalah salah satu model bisnis yang sangat menguntungkan dan aman...
        </p>
  
        <section className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Kenapa Memilih Koding Next?</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Lebih dari 70% siswa kami mendaftar ulang setiap semester.</li>
            <li>Sekolah pertama di Asia Tenggara untuk usia 4‑16 tahun.</li>
            <li>Mendidik 20.000+ siswa di seluruh Indonesia.</li>
            <li>Buku kami dijual di &gt;16 negara.</li>
            <li>Kolaborasi dengan kementerian & sekolah internasional.</li>
          </ul>
        </section>
  
        <section className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Pendapatan & ROI</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Pendapatan bulan pertama hingga Rp150 juta.</li>
            <li>Investasi awal mulai Rp80 juta.</li>
            <li>Balik modal tercepat dalam 7 bulan.</li>
          </ul>
        </section>
  
        <section className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Tipe Waralaba</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Koding Room Learning Center (minimal 2 ruang).</li>
            <li>Satu gedung ruko/rumah di lokasi yang disetujui HQ.</li>
          </ul>
          <p className="text-gray-700 font-semibold">Jadi yang pertama di kotamu!</p>
        </section>
  
        <section className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Dengarkan Cerita Sukses Mitra Kami!</h2>
          {/* Placeholder testimonial atau video */}
        </section>
  
        <section className="bg-gray-50 p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold">Konsultasi Waralaba</h2>
          <form className="space-y-4">
            <input type="text" placeholder="Name" className="w-full p-2 border rounded"/>
            <input type="email" placeholder="Email" className="w-full p-2 border rounded"/>
            <input type="text" placeholder="Phone Number" className="w-full p-2 border rounded"/>
            <select className="w-full p-2 border rounded">
              <option>0–50 jt</option>
              <option>50–250 jt</option>
              <option>&gt;250 jt</option>
            </select>
            <button className="bg-pink-500 hover:bg-pink-600 text-white py-2 px-4 rounded">Konsultasi Sekarang</button>
          </form>
        </section>
      </main>
    );
  }