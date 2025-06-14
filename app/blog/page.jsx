export const metadata = {
    title: "Blog - KodingNext",
    description: "Artikel dan informasi seputar coding untuk anak & remaja.",
  };
  
  export default function BlogPage() {
    return (
      <main className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-3xl font-bold mb-6 text-pink-600">Blog KodingNext</h1>
        <p className="text-gray-700 mb-8">
          Temukan berbagai artikel menarik seputar coding, teknologi, dan pendidikan digital untuk anak dan remaja.
        </p>
  
        {/* Placeholder untuk daftar artikel */}
        <ul className="space-y-4">
          <li className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">Tips Belajar Coding untuk Anak Usia Dini</h2>
            <p className="text-sm text-gray-600">Dipublikasikan: 10 Juni 2025</p>
          </li>
          <li className="p-4 bg-white rounded-lg shadow">
            <h2 className="text-xl font-semibold">Kenapa Python Cocok untuk Pemula?</h2>
            <p className="text-sm text-gray-600">Dipublikasikan: 3 Juni 2025</p>
          </li>
        </ul>
      </main>
    );
  }
  