// Import semua gambar Anda di sini
import gallery1 from './assets/gallery1.jpg';
import gallery2 from './assets/gallery2.jpg';
import gallery3 from './assets/gallery3.jpg';
import gallery4 from './assets/gallery4.jpg';
// Tambahkan lebih banyak gambar jika ada
import backstory1 from './assets/backstory1.jpg';
import backstory2 from './assets/backstory2.jpg';

export const galleryData = [
  {
    id: 1,
    image: gallery1,
    title: 'Kastil Awan Eloria',
    description: 'Dibangun oleh tim arsitek kami selama event musim panas.',
    category: 'Bangunan',
  },
  {
    id: 2,
    image: backstory1,
    title: 'Perayaan Ulang Tahun Server',
    description: 'Pesta kembang api dan bagi-bagi hadiah di Spawn utama.',
    category: 'Event',
  },
  {
    id: 3,
    image: gallery3,
    title: 'Pasar Terapung',
    description: 'Pusat ekonomi server tempat para pemain berjual-beli.',
    category: 'Bangunan',
  },
  {
    id: 4,
    image: backstory2,
    title: 'Selfie Kemenangan',
    description: 'Tim Merah setelah memenangkan event Spleef mingguan.',
    category: 'Komunitas',
  },
  {
    id: 5,
    image: gallery2,
    title: 'Portal Nether Kustom',
    description: 'Pintu gerbang utama menuju dimensi Nether yang baru.',
    category: 'Bangunan',
  },
  {
    id: 6,
    image: gallery4,
    title: 'Foto Keluarga',
    description: 'Para staff dan pemain setia berkumpul bersama di akhir tahun.',
    category: 'Komunitas',
  },
];

// Definisikan kategori yang ada untuk tombol filter
export const categories = ['Semua', 'Bangunan', 'Event', 'Komunitas'];