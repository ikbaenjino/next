import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10 mt-20">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-3 gap-8">

        {/* Company Info */}
        <div>
          <h4 className="text-lg font-bold mb-3">© 2025 Koding Next.</h4>
          <p className="text-sm text-gray-400">All Rights Reserved.</p>
        </div>

        {/* Navigation Links */}
        <div className="space-y-2">
          <h5 className="font-semibold text-white mb-2">Navigasi</h5>
          <ul className="text-sm space-y-1">
            <li><Link href="/" className="hover:underline">Beranda</Link></li>
            <li><Link href="/program" className="hover:underline">Program</Link></li>
            <li><Link href="/lokasi" className="hover:underline">Lokasi</Link></li>
            <li><Link href="/blog" className="hover:underline">Blog</Link></li>
          </ul>
        </div>

        {/* Legal Links */}
        <div className="space-y-2">
          <h5 className="font-semibold text-white mb-2">Informasi</h5>
          <ul className="text-sm space-y-1">
            <li><Link href="/tentang" className="hover:underline">Tentang Kami</Link></li>
            <li><Link href="/kebijakan-privasi" className="hover:underline">Kebijakan Privasi</Link></li>
          </ul>
        </div>

      </div>
    </footer>
  );
}
