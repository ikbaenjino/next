// components/ui/Button.js

// Komponen ini menggunakan library `clsx` atau `tailwind-merge` untuk menggabungkan class dengan lebih baik,
// namun untuk simplisitas, kita gunakan logika dasar.

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={`bg-red-500 hover:bg-red-600 text-white px-6 py-2 rounded-xl ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
