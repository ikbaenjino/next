// app/lokasi/page.js
'use client'; 

import { useState } from 'react';
import { getLocations } from '../../lib/locations'; // <-- Impor data dari file terpisah
import LocationCard from '../../components/locations/LocationCard';
import MapPopup from '../../components/locations/MapPopup';
import styles from '../../styles/lokasi.module.css'; // <-- Contoh impor CSS Module

// Ambil data dengan memanggil fungsi
const locationsData = getLocations();

export default function LokasiPage() {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleOpenMap = (location) => setSelectedLocation(location);
  const handleCloseMap = () => setSelectedLocation(null);

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Menggunakan class dari CSS Module dan class dari Tailwind */}
      <h1 className={`${styles.pageTitle} text-3xl font-bold text-center mb-8`}>
        Lokasi Kami
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {locationsData.map((location) => (
          <LocationCard 
            key={location.id} 
            location={location} 
            onMapClick={() => handleOpenMap(location)}
          />
        ))}
      </div>

      {selectedLocation && (
        <MapPopup 
          location={selectedLocation} 
          onClose={handleCloseMap} 
        />
      )}
    </div>
  );
}
