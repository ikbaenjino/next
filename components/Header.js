// components/Header.js
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="shadow-md py-4">
      <nav className="container mx-auto flex justify-between items-center px-4">
        <Link href="/">
          <Image src="/images/logo-kodingnext.svg" alt="Koding Next Logo" width={150} height={40} />
        </Link>
        <div className="flex gap-6">
          <Link href="/program" className="hover:text-blue-600">Program</Link>
          <Link href="/lokasi" className="text-blue-600 font-semibold">Lokasi</Link>
          <Link href="/blog" className="hover:text-blue-600">Blog</Link>
        </div>
      </nav>
    </header>
  );
}

