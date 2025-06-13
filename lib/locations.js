// lib/locations.js

// Di aplikasi nyata, fungsi ini bisa mengambil data dari database atau API eksternal.
// Untuk contoh ini, kita mengembalikan data statis.
const locationsData = [
    {
      id: 1,
      city: 'Jakarta Selatan',
      name: 'Engineer Pondok Indah',
      address: 'Jl. Sultan Iskandar Muda No.Kav. V-TA, RT.5/RW.9, Pd. Pinang',
      phone: '0812-8888-1234',
      gmapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.017772242371!2d106.78208171534283!3d-6.261271995466822!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f1a87a224fd3%3A0x13346e0e588435cc!2sKoding%20Next%20Pondok%20Indah!5e0!3m2!1sen!2sid!4v1678886454321!5m2!1sen!2sid'
    },
    {
      id: 2,
      city: 'Jakarta Utara',
      name: 'Engineer Kelapa Gading',
      address: 'Jl. Boulevard Raya Blok QJ1 No. 1, Kelapa Gading',
      phone: '0812-8888-5678',
      gmapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.576883253247!2d106.9089763153427!3d-6.187311995520865!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f52899185a73%3A0xe6f54f7663d2706!2sKoding%20Next%20Kelapa%20Gading!5e0!3m2!1sen!2sid!4v1678886512345!5m2!1sen!2sid'
    },
    {
      id: 3,
      city: 'Surabaya',
      name: 'Engineer Surabaya Barat',
      address: 'Pakuwon Mall, Jl. Puncak Indah Lontar No.2, Babatan',
      phone: '0812-8888-9101',
      gmapsUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.57142078652!2d112.6738533153457!3d-7.28918299473952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fc1a52c3b1e1%3A0x6a61d1887e1a3b3e!2sKoding%20Next%20Surabaya!5e0!3m2!1sen!2sid!4v1678886554321!5m2!1sen!2sid'
    }
  ];
  
  export function getLocations() {
    // Anda bisa menambahkan logika sorting atau filtering di sini jika perlu
    return locationsData;
  }