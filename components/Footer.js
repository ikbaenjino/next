// components/Footer.js
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white mt-12 py-8">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Koding Next. All Rights Reserved.</p>
        <div className="flex justify-center gap-4 mt-4">
          <Link href="/tentang-kami" className="hover:underline">Tentang Kami</Link>
          <Link href="/kebijakan-privasi" className="hover:underline">Kebijakan Privasi</Link>
        </div>
      </div>
    </footer>
  );
}