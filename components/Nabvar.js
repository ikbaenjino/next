import Link from 'next/link'
import Image from 'next/image'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <Link href="/">
          <a className="flex items-center">
            <Image src="/logo.svg" alt="Koding Next" width={120} height={32} />
          </a>
        </Link>
        <div className="hidden md:flex space-x-8">
          {['Beranda','Holiday Camp','Kursus','Program Sekolah','Franchise','Kompetisi','Lokasi','Tentang Kami']
            .map(label => (
              <Link key={label} href={`/${label.toLowerCase().replace(/ /g,'-')}`}>
                <a className="nav-link">{label}</a>
              </Link>
            ))
          }
        </div>
        <div className="flex items-center space-x-4">
          <button className="btn-primary hidden md:block">Hubungi Kami</button>
          {/* Language selector placeholder */}
          <div className="border border-gray-300 rounded px-2 py-1 text-sm">ID</div>
        </div>
      </div>
    </nav>
  )
}
