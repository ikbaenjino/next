// components/ui/Button.js

// Komponen ini menggunakan library `clsx` atau `tailwind-merge` untuk menggabungkan class dengan lebih baik,
// namun untuk simplisitas, kita gunakan logika dasar.

export default function Button({ children, variant = 'primary', ...props }) {
    const baseStyles = "px-6 py-2 font-semibold rounded-lg transition-transform transform active:scale-95";
  
    const variants = {
      primary: "bg-blue-600 text-white hover:bg-blue-700",
      secondary: "bg-gray-200 text-gray-800 hover:bg-gray-300",
    };
    
    return (
      <button className={`${baseStyles} ${variants[variant]}`} {...props}>
        {children}
      </button>
    );
  }