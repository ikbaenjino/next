import '../styles/globals.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

export const metadata = {
  title: 'Koding Next Clone',
  description: 'Sekolah Coding dan Teknologi Terbaik di Asia Tenggara',
}

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body className="font-sans bg-white text-gray-800">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
