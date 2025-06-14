import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "KodingNext",
  description: "Belajar koding untuk anak-anak dan remaja",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
