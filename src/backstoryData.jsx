import React from 'react';
import { FaFeatherAlt, FaChessRook, FaTrophy, FaRocket } from 'react-icons/fa';

const FeatherIcon = () => <FaFeatherAlt size={16} />;
const RookIcon = () => <FaChessRook size={16} />;
const TrophyIcon = () => <FaTrophy size={16} />;
const RocketIcon = () => <FaRocket size={16} />;

export const storyChapters = [
  {
    id: 1,
    era: 'Tahun Pertama',
    title: 'Awal Mula Sebuah Dunia',
    content: ' DeltCraft lahir dari ide sederhana di antara sekelompok sahabat: menciptakan dunia tanpa batas di mana kreativitas adalah raja. Dengan sumber daya terbatas namun semangat yang membara, blok pertama diletakkan, menandai dimulainya sebuah era baru.',
    icon: <FeatherIcon />,
  },
  {
    id: 2,
    era: 'Era Pembangunan',
    title: 'Kebangkitan Para Arsitek',
    content: ' Komunitas mulai tumbuh. Para pemain berbakat dari berbagai penjuru datang dan mulai membangun mahakarya mereka. Spawn utama yang megah dan kota-kota yang ramai mulai terbentuk. Ini adalah masa di mana DeltCraft menemukan identitas visualnya.',
    icon: <RookIcon />,
  },
  {
    id: 3,
    era: 'Masa Event',
    title: 'Perayaan & Pertarungan',
    content: ' Untuk mempererat komunitas, kami mulai mengadakan event rutin. Mulai dari kontes membangun hingga pertarungan PVP epik di arena. Setiap event menciptakan kenangan tak terlupakan bagi semua pemain yang berpartisipasi.',
    icon: <TrophyIcon />,
  },
  {
    id: 4,
    era: 'Masa Depan',
    title: 'Menuju Cakrawala Baru',
    content: ' Kini, DeltCraft terus berkembang. Dengan rencana update besar dan komitmen untuk selalu mendengarkan komunitas, kami siap menyambut petualangan yang lebih besar lagi. Sejarah DeltCraft masih ditulis, dan kami ingin Anda menjadi bagian darinya.',
    icon: <RocketIcon />,
  }
];