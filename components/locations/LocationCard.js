// components/locations/LocationCard.js

export default function LocationCard({ location, onMapClick }) {
    return (
      <div className="border rounded-lg p-6 shadow-md flex flex-col">
        <p className="text-sm font-semibold text-gray-500">{location.city}</p>
        <h3 className="text-xl font-bold mb-2">{location.name}</h3>
        <p className="text-gray-700 mb-1">{location.address}</p>
        <p className="text-gray-700 mb-4">Telp: {location.phone}</p>
        
        <div className="mt-auto"> {/* Mendorong tombol ke bawah */}
          <button 
            onClick={onMapClick} // Saat diklik, panggil fungsi yang diberikan oleh parent
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Lihat di Peta
          </button>
        </div>
      </div>
    );
  }