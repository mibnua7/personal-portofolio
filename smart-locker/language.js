// Language system for smart-locker project detail
const translations = {
    id: {
        'back-to-projects': 'Kembali ke Proyek',
        'category': 'Kategori',
        'year': 'Tahun',
        'about-project': 'Tentang Proyek Ini',
        'smart-locker-desc': 'Smart Locker adalah sistem keamanan modern yang menggabungkan teknologi RFID dan PIN untuk memberikan akses yang aman dan fleksibel. Sistem ini dirancang untuk aplikasi perkantoran, sekolah, gym, atau area publik yang membutuhkan penyimpanan personal yang aman.',
        'security-features': 'Fitur Keamanan',
        'dual-auth': 'Dual Authentication: Kombinasi RFID card dan PIN untuk keamanan berlapis',
        'user-reg': 'User Registration: Sistem pendaftaran pengguna baru dengan admin access',
        'access-log': 'Access Logging: Pencatatan setiap aktivitas buka/tutup locker',
        'emergency': 'Emergency Override: Master key untuk akses darurat',
        'auto-lock': 'Auto-lock Timer: Otomatis mengunci setelah periode tertentu',
        'system-components': 'Komponen Sistem',
        'microcontroller': 'Arduino Uno/ESP32: Microcontroller utama untuk mengontrol sistem',
        'rfid-reader': 'RFID Reader (RC522): Pembaca kartu RFID untuk identifikasi user',
        'keypad': 'Keypad 4x4: Input PIN dan navigasi menu',
        'lcd-display': 'LCD Display 16x2: Interface pengguna dan status informasi',
        'servo-motor': 'Servo Motor: Aktuator untuk mekanisme kunci',
        'buzzer': 'Buzzer: Feedback audio untuk status sistem',
        'led-indicators': 'LED Indicators: Status visual (hijau/merah)',
        'how-it-works': 'Cara Kerja Sistem',
        'step1': 'Pengguna menempelkan kartu RFID ke reader',
        'step2': 'Sistem memverifikasi ID kartu dengan database',
        'step3': 'Jika valid, sistem meminta input PIN',
        'step4': 'Setelah PIN benar, servo motor membuka kunci',
        'step5': 'LED hijau menyala dan buzzer berbunyi sebagai konfirmasi',
        'step6': 'Locker otomatis terkunci setelah waktu yang ditentukan',
        'technical-specs': 'Spesifikasi Teknis',
        'power-supply': 'Power Supply: 5V DC adapter atau baterai 9V',
        'operating-temp': 'Operating Temperature: -10°C hingga 60°C',
        'rfid-freq': 'RFID Frequency: 13.56 MHz',
        'reading-range': 'Reading Range: 0-60mm',
        'memory-capacity': 'Memory Capacity: Hingga 100 pengguna',
        'development-process': 'Proses Pengembangan',
        'dev1': 'Analisis kebutuhan dan perancangan sistem',
        'dev2': 'Pembuatan schematic dan PCB design',
        'dev3': 'Programming microcontroller dengan Arduino IDE',
        'dev4': 'Integrasi komponen hardware',
        'dev5': 'Testing keamanan dan fungsionalitas',
        'dev6': 'Desain casing dan finishing',
        'applications': 'Aplikasi Penggunaan',
        'app1': 'Locker karyawan di perkantoran',
        'app2': 'Locker siswa di sekolah/universitas',
        'app3': 'Locker gym dan fitness center',
        'app4': 'Locker bagasi di transportasi umum',
        'app5': 'Locker penyimpanan di area publik',
        'advantages': 'Keunggulan Sistem',
        'adv1': 'Keamanan tinggi dengan dual authentication',
        'adv2': 'User-friendly interface dengan LCD display',
        'adv3': 'Mudah instalasi dan maintenance',
        'adv4': 'Cost-effective dibanding sistem komersial',
        'adv5': 'Customizable sesuai kebutuhan',
        'results': 'Hasil & Dampak',
        'results-desc': 'Smart Locker ini berhasil memberikan solusi keamanan yang reliable dengan tingkat akurasi autentikasi 99.5%. Sistem ini dapat meningkatkan keamanan area penyimpanan sambil memberikan kemudahan akses bagi pengguna yang terotorisasi.',
        'view-demo': 'Lihat Demo',
        'download-code': 'Download Code'
    },
    en: {
        'back-to-projects': 'Back to Projects',
        'category': 'Category',
        'year': 'Year',
        'about-project': 'About This Project',
        'smart-locker-desc': 'Smart Locker is a modern security system that combines RFID technology and PIN to provide secure and flexible access. This system is designed for office applications, schools, gyms, or public areas that require secure personal storage.',
        'security-features': 'Security Features',
        'dual-auth': 'Dual Authentication: Combination of RFID card and PIN for layered security',
        'user-reg': 'User Registration: New user registration system with admin access',
        'access-log': 'Access Logging: Recording every locker open/close activity',
        'emergency': 'Emergency Override: Master key for emergency access',
        'auto-lock': 'Auto-lock Timer: Automatically locks after specified period',
        'system-components': 'System Components',
        'microcontroller': 'Arduino Uno/ESP32: Main microcontroller to control the system',
        'rfid-reader': 'RFID Reader (RC522): RFID card reader for user identification',
        'keypad': 'Keypad 4x4: PIN input and menu navigation',
        'lcd-display': 'LCD Display 16x2: User interface and status information',
        'servo-motor': 'Servo Motor: Actuator for locking mechanism',
        'buzzer': 'Buzzer: Audio feedback for system status',
        'led-indicators': 'LED Indicators: Visual status (green/red)',
        'how-it-works': 'How the System Works',
        'step1': 'User places RFID card on reader',
        'step2': 'System verifies card ID with database',
        'step3': 'If valid, system requests PIN input',
        'step4': 'After correct PIN, servo motor opens lock',
        'step5': 'Green LED lights up and buzzer sounds as confirmation',
        'step6': 'Locker automatically locks after specified time',
        'technical-specs': 'Technical Specifications',
        'power-supply': 'Power Supply: 5V DC adapter or 9V battery',
        'operating-temp': 'Operating Temperature: -10°C to 60°C',
        'rfid-freq': 'RFID Frequency: 13.56 MHz',
        'reading-range': 'Reading Range: 0-60mm',
        'memory-capacity': 'Memory Capacity: Up to 100 users',
        'development-process': 'Development Process',
        'dev1': 'Requirements analysis and system design',
        'dev2': 'Schematic and PCB design creation',
        'dev3': 'Microcontroller programming with Arduino IDE',
        'dev4': 'Hardware component integration',
        'dev5': 'Security and functionality testing',
        'dev6': 'Casing design and finishing',
        'applications': 'Usage Applications',
        'app1': 'Employee lockers in offices',
        'app2': 'Student lockers in schools/universities',
        'app3': 'Gym and fitness center lockers',
        'app4': 'Luggage lockers in public transportation',
        'app5': 'Storage lockers in public areas',
        'advantages': 'System Advantages',
        'adv1': 'High security with dual authentication',
        'adv2': 'User-friendly interface with LCD display',
        'adv3': 'Easy installation and maintenance',
        'adv4': 'Cost-effective compared to commercial systems',
        'adv5': 'Customizable according to needs',
        'results': 'Results & Impact',
        'results-desc': 'This Smart Locker successfully provides a reliable security solution with 99.5% authentication accuracy. This system can enhance storage area security while providing easy access for authorized users.',
        'view-demo': 'View Demo',
        'download-code': 'Download Code'
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
