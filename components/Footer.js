import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className="mb-4">© {new Date().getFullYear()} Koding Next. All Rights Reserved.</p>
        <div className="space-x-6">
          <Link href="/tentang-kami"><a className="hover:text-primary">Tentang Kami</a></Link>
          <Link href="/kebijakan-privasi"><a className="hover:text-primary">Kebijakan Privasi</a></Link>
        </div>
      </div>
    </footer>
  )
}
