export const navItems = [
  { title: 'Beranda', href: '/' },
  {
    title: 'Program',
    href: '/program',
    hasDropdown: true,
    children: [
      { title: 'Detail Program', href: '/program/namaprogram' },
      { title: 'Blog', href: '/program/blog' },
      { title: 'Karir', href: '/program/karir' },
    ],
  },
  { title: 'Franchise', href: '/franchise' },
  {
    title: 'Tentang Kami',
    href: '/tentang-kami',
    hasDropdown: true,
    children: [
      { title: 'Sejarah', href: '/tentang-kami/sejarah' },
      { title: 'Visi & Misi', href: '/tentang-kami/visi-misi' },
    ],
  },
  { title: 'Lokasi', href: '/lokasi' },
];
