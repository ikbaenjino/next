const faqs = [
  {
    question: "Apakah ada kelas gratis untuk mencoba?",
    answer: "Ya, kami menyediakan kelas trial gratis agar anak dapat merasakan pengalaman belajar sebelum mendaftar."
  },
  {
    question: "Apakah kelas dilakukan secara online atau offline?",
    answer: "Kelas tersedia secara offline di cabang kami dan juga online secara live melalui platform Zoom."
  },
  {
    question: "Berapa usia minimal untuk ikut kelas coding?",
    answer: "Program kami dimulai dari usia 4 tahun (Little Koders)."
  },
  {
    question: "Apakah ada sertifikat setelah menyelesaikan kelas?",
    answer: "Ya, anak akan mendapatkan sertifikat resmi setelah menyelesaikan kursus."
  }
];

export default function FAQ() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Pertanyaan yang Sering Diajukan
        </h2>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b pb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                {faq.question}
              </h3>
              <p className="text-gray-600 text-sm">{faq.answer}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
