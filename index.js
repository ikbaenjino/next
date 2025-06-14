// index.js
import Head from 'next/head';
import Header from './Header'; // Import dari root

export default function Home() {
  return (
    <div>
      <Header />
      {/* Konten lainnya */}
    </div>
  );
}