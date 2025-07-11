// Language system for monitoring-app project detail
const translations = {
    id: {
        'back-to-projects': 'Kembali ke Proyek',
        'category': 'Kategori',
        'year': 'Tahun',
        'project3-title': 'App Pemantau Suhu dan Kelembapan',
        'about-project': 'Tentang Proyek Ini',
        'monitoring-app-desc': 'Aplikasi mobile "Pemantau Suhu dan Kelembapan" adalah solusi IoT yang memungkinkan pengguna untuk memantau kondisi lingkungan secara real-time melalui smartphone. Aplikasi ini dikembangkan menggunakan MIT App Inventor dan terhubung dengan sensor melalui API.',
        'main-features': 'Fitur Utama',
        'realtime-monitoring': 'Real-time Monitoring:',
        'realtime-desc': 'Tampilan data suhu dan kelembapan secara langsung',
        'historical-chart': 'Grafik Historical:',
        'chart-desc': 'Visualisasi data dalam bentuk chart untuk analisis trend',
        'alert-system': 'Alert System:',
        'alert-desc': 'Notifikasi push saat kondisi melebihi batas normal',
        'data-export': 'Data Export:',
        'export-desc': 'Kemampuan export data untuk analisis lebih lanjut',
        'multi-device': 'Multi-device Support:',
        'multi-desc': 'Dapat menampilkan data dari beberapa sensor sekaligus',
        'tech-used': 'Teknologi yang Digunakan',
        'mit-desc': 'Platform pengembangan aplikasi mobile visual',
        'api-desc': 'Komunikasi data antara sensor dan aplikasi',
        'json-desc': 'Format pertukaran data yang efisien',
        'firebase-desc': 'Backend database untuk penyimpanan data',
        'chart-lib-desc': 'Library untuk visualisasi data',
        'system-architecture': 'Arsitektur Sistem',
        'arch1': 'Sensor DHT22 membaca data suhu dan kelembapan',
        'arch2': 'Mikrokontroler ESP32 mengirim data ke cloud database',
        'arch3': 'API endpoint menyediakan data dalam format JSON',
        'arch4': 'Aplikasi mobile mengambil data melalui HTTP request',
        'arch5': 'Interface menampilkan data dalam bentuk dashboard',
        'development-process': 'Proses Pengembangan',
        'dev1': 'Analisis kebutuhan dan perancangan UI/UX',
        'dev2': 'Pembuatan prototype aplikasi di MIT App Inventor',
        'dev3': 'Integrasi API untuk komunikasi data',
        'dev4': 'Implementasi fitur chart dan alert system',
        'dev5': 'Testing dan debugging aplikasi',
        'dev6': 'Deployment dan dokumentasi',
        'challenges': 'Tantangan & Solusi',
        'challenge1': 'Real-time Updates:',
        'solution1': 'Menggunakan timer dan HTTP polling untuk update berkala',
        'challenge2': 'Data Visualization:',
        'solution2': 'Implementasi chart library untuk grafik yang responsif',
        'challenge3': 'Error Handling:',
        'solution3': 'Sistem backup dan retry mechanism untuk koneksi yang stabil',
        'results': 'Hasil & Dampak',
        'results-desc': 'Aplikasi berhasil memberikan solusi monitoring yang user-friendly dengan interface yang intuitif. Pengguna dapat dengan mudah memantau kondisi lingkungan dari jarak jauh dan menerima notifikasi ketika terjadi perubahan yang signifikan.',
        'view-demo': 'Lihat Demo',
        'download-app': 'Download APK'
    },
    en: {
        'back-to-projects': 'Back to Projects',
        'category': 'Category',
        'year': 'Year',
        'project3-title': 'Temperature & Humidity Monitoring App',
        'about-project': 'About This Project',
        'monitoring-app-desc': 'The "Temperature & Humidity Monitoring" mobile application is an IoT solution that allows users to monitor environmental conditions in real-time through smartphones. This application was developed using MIT App Inventor and connected to sensors through API.',
        'main-features': 'Main Features',
        'realtime-monitoring': 'Real-time Monitoring:',
        'realtime-desc': 'Direct display of temperature and humidity data',
        'historical-chart': 'Historical Chart:',
        'chart-desc': 'Data visualization in chart form for trend analysis',
        'alert-system': 'Alert System:',
        'alert-desc': 'Push notifications when conditions exceed normal limits',
        'data-export': 'Data Export:',
        'export-desc': 'Ability to export data for further analysis',
        'multi-device': 'Multi-device Support:',
        'multi-desc': 'Can display data from multiple sensors simultaneously',
        'tech-used': 'Technologies Used',
        'mit-desc': 'Visual mobile application development platform',
        'api-desc': 'Data communication between sensors and application',
        'json-desc': 'Efficient data exchange format',
        'firebase-desc': 'Backend database for data storage',
        'chart-lib-desc': 'Library for data visualization',
        'system-architecture': 'System Architecture',
        'arch1': 'DHT22 sensor reads temperature and humidity data',
        'arch2': 'ESP32 microcontroller sends data to cloud database',
        'arch3': 'API endpoint provides data in JSON format',
        'arch4': 'Mobile application retrieves data through HTTP request',
        'arch5': 'Interface displays data in dashboard form',
        'development-process': 'Development Process',
        'dev1': 'Requirements analysis and UI/UX design',
        'dev2': 'Application prototype creation in MIT App Inventor',
        'dev3': 'API integration for data communication',
        'dev4': 'Implementation of chart and alert system features',
        'dev5': 'Application testing and debugging',
        'dev6': 'Deployment and documentation',
        'challenges': 'Challenges & Solutions',
        'challenge1': 'Real-time Updates:',
        'solution1': 'Using timer and HTTP polling for periodic updates',
        'challenge2': 'Data Visualization:',
        'solution2': 'Implementation of chart library for responsive graphs',
        'challenge3': 'Error Handling:',
        'solution3': 'Backup system and retry mechanism for stable connection',
        'results': 'Results & Impact',
        'results-desc': 'The application successfully provides a user-friendly monitoring solution with an intuitive interface. Users can easily monitor environmental conditions remotely and receive notifications when significant changes occur.',
        'view-demo': 'View Demo',
        'download-app': 'Download APK'
    }
};

function getSystemLanguage() {
    const browserLang = navigator.language || navigator.userLanguage;
    return browserLang.startsWith('id') ? 'id' : 'en';
}

function applyLanguage(lang) {
    document.querySelectorAll('[data-lang]').forEach(element => {
        const key = element.getAttribute('data-lang');
        if (translations[lang] && translations[lang][key]) {
            element.textContent = translations[lang][key];
        }
    });
}

// Apply language on page load
const savedLanguage = localStorage.getItem('language');
const currentLanguage = savedLanguage || getSystemLanguage();
applyLanguage(currentLanguage);
