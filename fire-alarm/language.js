// Language system for fire-alarm project detail
const translations = {
    id: {
        'back-to-projects': 'Kembali ke Proyek',
        'category': 'Kategori',
        'year': 'Tahun',
        'about-project': 'Tentang Proyek Ini',
        'fire-alarm-desc1': 'Proyek "Fire Alarm" adalah sistem deteksi api berbasis mikrokontroler yang dirancang untuk memberikan peringatan dini terhadap potensi kebakaran. Alat ini memantau perubahan suhu dan konsentrasi gas di lingkungan sekitar.',
        'fire-alarm-desc2': 'Tujuannya adalah untuk meningkatkan keamanan di area tertentu (misalnya rumah, kantor kecil, atau gudang) dengan menyediakan sistem alarm yang responsif dan terjangkau. Proyek ini mengatasi kebutuhan akan sistem keamanan kebakaran dasar yang efektif dan mudah diimplementasikan.',
        'process-methodology': 'Proses dan Metodologi',
        'process1': 'Riset Komponen: Menentukan sensor yang tepat (MQ-2 untuk gas, DHT11 untuk suhu), mikrokontroler (ESP32/Arduino), dan modul alarm (buzzer, LED).',
        'process2': 'Perancangan Skema: Membuat desain sirkuit di EasyEda, termasuk koneksi sensor, modul Wi-Fi (jika ada notifikasi IoT), dan aktuator.',
        'process3': 'Pemrograman Mikrokontroler: Mengembangkan kode di Arduino IDE untuk membaca data sensor, memicu alarm jika ambang batas terlampaui, dan mengirim notifikasi (opsional, via IoT platform seperti Blynk/Thingspeak).',
        'process4': '3D Design (Opsional): Merancang casing atau enclosure alat menggunakan SketchUp atau Blender untuk tampilan yang lebih rapi.',
        'process5': 'Perakitan & Pengujian: Merakit semua komponen dan melakukan pengujian fungsional untuk memastikan akurasi deteksi dan respons alarm.',
        'results-impact': 'Hasil',
        'fire-alarm-results': 'Sistem "Fire Alarm" ini berhasil mendeteksi kenaikan suhu drastis dan keberadaan gas berbahaya dengan cepat. Alarm visual dan audio akan aktif, memberikan waktu yang lebih cepat untuk tindakan pencegahan. Potensi dampak positifnya adalah mengurangi risiko kerusakan properti dan melindungi nyawa melalui peringatan dini.'
    },
    en: {
        'back-to-projects': 'Back to Projects',
        'category': 'Category',
        'year': 'Year',
        'about-project': 'About This Project',
        'fire-alarm-desc1': 'The "Fire Alarm" project is a microcontroller-based fire detection system designed to provide early warning of potential fires. This device monitors temperature changes and gas concentrations in the surrounding environment.',
        'fire-alarm-desc2': 'Its purpose is to enhance safety in specific areas (such as homes, small offices, or warehouses) by providing a responsive and affordable alarm system. This project addresses the need for an effective and easy-to-implement basic fire safety system.',
        'process-methodology': 'Process and Methodology',
        'process1': 'Component Research: Determining appropriate sensors (MQ-2 for gas, DHT11 for temperature), microcontroller (ESP32/Arduino), and alarm modules (buzzer, LED).',
        'process2': 'Schematic Design: Creating circuit design in EasyEda, including sensor connections, Wi-Fi module (if IoT notifications are present), and actuators.',
        'process3': 'Microcontroller Programming: Developing code in Arduino IDE to read sensor data, trigger alarms if thresholds are exceeded, and send notifications (optional, via IoT platform like Blynk/Thingspeak).',
        'process4': '3D Design (Optional): Designing device casing or enclosure using SketchUp or Blender for a neater appearance.',
        'process5': 'Assembly & Testing: Assembling all components and performing functional testing to ensure detection accuracy and alarm response.',
        'results-impact': 'Results',
        'fire-alarm-results': 'This "Fire Alarm" system successfully detects drastic temperature increases and the presence of dangerous gases quickly. Visual and audio alarms will activate, providing faster time for preventive action. The potential positive impact is reducing property damage risk and protecting lives through early warning.'
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
