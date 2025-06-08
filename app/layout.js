// app/layout.js

import '../styles/globals.css';          // <- path ke styles/globals.css
import Header from '../components/Header';  // <- path ke components/Header.js
import Footer from '../components/Footer';  // <- path ke components/Footer.js

export const metadata = {
  title: 'KodingNext Clone',
  description: 'A simple Next.js project',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
