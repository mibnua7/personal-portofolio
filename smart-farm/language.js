// Language system for smart-farm project detail
const translations = {
    id: {
        'back-to-projects': 'Kembali ke Proyek',
        'category': 'Kategori',
        'year': 'Tahun',
        'about-project': 'Tentang Proyek Ini',
        'smart-farm-desc': 'Proyek "Smart Farm" adalah sistem pemantauan dan otomasi pertanian berbasis IoT yang dirancang untuk mengoptimalkan kondisi pertumbuhan tanaman melalui monitoring kelembapan tanah dan suhu lingkungan secara real-time.',
        'main-features': 'Fitur Utama',
        'feature1': 'Sensor kelembapan tanah untuk monitoring kondisi media tanam',
        'feature2': 'Sensor suhu dan kelembapan udara (DHT22)',
        'feature3': 'Sistem penyiraman otomatis berdasarkan kondisi tanah',
        'feature4': 'Notifikasi IoT melalui aplikasi mobile',
        'feature5': 'Data logging untuk analisis pertumbuhan',
        'tech-used': 'Teknologi yang Digunakan',
        'as-main-controller': 'sebagai mikrokontroler utama',
        'soil-sensor': 'Sensor kelembapan tanah kapasitif',
        'for-temp-humidity': 'untuk suhu dan kelembapan',
        'for-pump-control': 'untuk kontrol pompa air',
        'for-monitoring': 'untuk monitoring',
        'status': 'Status',
        'status-desc': 'Halaman detail sedang dalam pengembangan.'
    },
    en: {
        'back-to-projects': 'Back to Projects',
        'category': 'Category',
        'year': 'Year',
        'about-project': 'About This Project',
        'smart-farm-desc': 'The "Smart Farm" project is an IoT-based agricultural monitoring and automation system designed to optimize plant growth conditions through real-time monitoring of soil moisture and environmental temperature.',
        'main-features': 'Main Features',
        'feature1': 'Soil moisture sensor for monitoring growing media conditions',
        'feature2': 'Temperature and humidity sensor (DHT22)',
        'feature3': 'Automatic watering system based on soil conditions',
        'feature4': 'IoT notifications through mobile application',
        'feature5': 'Data logging for growth analysis',
        'tech-used': 'Technologies Used',
        'as-main-controller': 'as main microcontroller',
        'soil-sensor': 'Capacitive soil moisture sensor',
        'for-temp-humidity': 'for temperature and humidity',
        'for-pump-control': 'for water pump control',
        'for-monitoring': 'for monitoring',
        'status': 'Status',
        'status-desc': 'Detail page is under development.'
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
