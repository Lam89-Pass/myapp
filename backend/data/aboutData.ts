// data/aboutData.ts

export const aboutData = {
  profileText: "Saya adalah Mahasiswa Teknik Informatika di Universitas Pasundan yang aktif dalam ekosistem pengembang Google dan keamanan siber. Saya menggabungkan kompetensi teknis dengan pengalaman manajemen event teknologi. Berpengalaman menginisiasi dan mengelola seminar, talkshow, serta program edukatif yang tidak hanya informatif, tetapi juga berdampak dan aplikatif. Memiliki minat kuat pada Artificial Intelligence (AI) dan pemanfaatannya untuk meningkatkan produktivitas serta efektivitas pembelajaran. Saya senang belajar hal baru, membangun kolaborasi, dan membagikan wawasan teknologi agar lebih mudah dipahami dan dimanfaatkan secara nyata.",
  
  education: [
    {
      id: 1,
      title: "S1 Teknik Informatika",
      subtitle: "Universitas Pasundan",
      date: "2023 - Sekarang",
      icon: "🏫",
      highlight: "Indeks Prestasi Kumulatif (IPK): 3.55 / 4.00",
      listTitle: "Pencapaian & Organisasi:",
      listItems: [
        { icon: "🏆", text: "Google Developer Group (GDG) on Campus UNPAS - The Best Project (2025)" },
        { icon: "🏅", text: "HMTIF Universitas Pasundan - Web Terbaik (2025)" },
        { icon: "🤝", text: "Patriot Pelajar Mahasiswa - Volunteer KIP Kuliah (2025)" },
        { icon: "💡", text: "BYPAS Community - Founder & Mentor Study Club" },
      ]
    },
    {
      id: 2,
      title: "Teknik Komputer dan Jaringan",
      subtitle: "SMK Negeri 1 Cidaun",
      date: "Lulus 2023",
      icon: "🖥️",
      highlight: "Nilai Akhir: 87.42 / 100",
      description: "Mempelajari dasar-dasar infrastruktur jaringan, perakitan komputer, administrasi server, serta troubleshooting perangkat keras dan lunak."
    }
  ],

  experience: [
    {
      id: 1,
      title: "Game Developer",
      subtitle: "KDS Studios",
      date: "Work From Home",
      icon: "🎮",
      description: "Bertanggung jawab atas seluruh siklus pengembangan map game di platform Roblox.",
      listItems: [
        "Melakukan proses Building lingkungan game yang detail dan interaktif.",
        "Menulis dan mengoptimalkan Scripting (Luau) untuk mekanik game.",
        "Mengelola tahap rilis game ke publik dan memantau stabilitas server."
      ]
    },
    {
      id: 2,
      title: "Teknisi Komputer",
      subtitle: "Bandung Electronic Center",
      date: "Bandung, Indonesia",
      icon: "🔧",
      listItems: [
        "Melakukan diagnosa akurat, service, dan maintenance pada berbagai merek perangkat keras laptop maupun PC.",
        "Mengelola instalasi sistem operasi (Windows/Linux) serta konfigurasi perangkat lunak.",
        "Memberikan solusi optimasi performa perangkat pelanggan."
      ]
    }
  ],

  skills: {
    hardSkills: ['Web Development', 'Prompt Engineering', 'Network Infrastructure', 'Basic Penetration Testing', 'Desain Graphics'],
    softSkills: ['Research', 'Strong Communication', 'Event Management', 'Team Management', 'Problem Solving', 'Adaptability'],
    tools: ['Gemini', 'Claude', 'ChatGPT', 'Git/GitHub', 'Figma', 'Canva', 'Nmap', 'Roblox Studio', 'Wireshark']
  }
};