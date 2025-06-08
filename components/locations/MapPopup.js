// components/locations/MapPopup.js

export default function MapPopup({ location, onClose }) {
    return (
      // Lapisan overlay
      <div 
        className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
        onClick={onClose} // Menutup pop-up saat area gelap diklik
      >
        {/* Kontainer Pop-up */}
        <div 
          className="bg-white p-4 rounded-lg shadow-xl relative w-11/12 md:w-3/4 lg:w-1/2"
          onClick={(e) => e.stopPropagation()} // Mencegah pop-up tertutup saat bagian dalamnya diklik
        >
          {/* Tombol Tutup */}
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-2xl text-gray-600 hover:text-gray-900"
          >
            &times;
          </button>
          
          <h3 className="text-2xl font-bold mb-4">{location.name}</h3>
          
          {/* Iframe untuk Google Maps */}
          <div className="aspect-w-16 aspect-h-9">
            <iframe
              src={location.gmapsUrl}
              width="100%"
              height="450"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    );
  }