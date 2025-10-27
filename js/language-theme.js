// BASIC LANGUAGE & THEME SYSTEM
const translations = {
  id: {
    "nav-home": "Beranda",
    "nav-projects": "Proyek",
    "nav-about": "Tentang",
    "nav-contact": "Kontak",
    "section-projects": "Proyek Saya",
    "section-about": "Tentang Saya",
    "section-contact": "Kontak",
    "project1-desc":
      "Mengembangkan sistem deteksi kebakaran berbasis sensor suhu dan gas dengan mikrokontroler.",
    "project2-desc":
      "Merancang sistem monitoring kelembapan tanah dan suhu otomatis untuk pertanian pintar.",
    "project3-title": "App Pemantau Suhu dan Kelembapan",
    "project3-desc":
      "Mengembangkan aplikasi mobile monitoring suhu dan kelembapan menggunakan MIT App Inventor dengan integrasi API.",
    "project4-desc":
      "Merancang sistem keamanan locker pintar dengan fitur autentikasi PIN dan teknologi RFID.",
    "about-desc1":
      "Saya adalah mahasiswa Teknik Elektro semester 7 dengan konsentrasi Elektronika Kendali. Memiliki passion dalam pengembangan teknologi IoT dan berpengalaman dalam merancang sistem elektronik berbasis mikrokontroler ESP32 dan Arduino, serta kompeten dalam Research and Development, perancangan Schematic, dan 3D Design.",
    "about-skills": "Keahlian Teknis:",
    "contact-desc":
      "Saya terbuka untuk peluang kolaborasi profesional dan diskusi mengenai proyek-proyek inovatif. Silakan hubungi saya melalui kontak di bawah ini.",
  },
  en: {
    "nav-home": "Home",
    "nav-projects": "Projects",
    "nav-about": "About",
    "nav-contact": "Contact",
    "section-projects": "My Projects",
    "section-about": "About Me",
    "section-contact": "Contact",
    "project1-desc":
      "Developing a fire detection system based on temperature and gas sensors with microcontroller.",
    "project2-desc":
      "Designing an automatic soil moisture and temperature monitoring system for smart farming.",
    "project3-title": "Temperature & Humidity Monitoring App",
    "project3-desc":
      "Developing a mobile application for temperature and humidity monitoring using MIT App Inventor with API integration.",
    "project4-desc":
      "Designing a smart locker security system with PIN authentication and RFID technology features.",
    "about-desc1":
      "I am a 6th semester Electrical Engineering student with a concentration in Control Electronics. I have a passion for IoT technology development and experience in designing electronic systems based on ESP32 and Arduino microcontrollers, as well as competence in Research and Development, Schematic design, and 3D Design.",
    "about-skills": "Technical Skills:",
    "contact-desc":
      "I am open to professional collaboration opportunities and discussions about innovative projects. Please contact me through the contacts below.",
  },
};

// Language system
const languageToggle = document.getElementById("language-toggle");
const langText = document.getElementById("lang-text");

function getSystemLanguage() {
  const browserLang = navigator.language || navigator.userLanguage;
  return browserLang.startsWith("id") ? "id" : "en";
}

function applyLanguage(lang) {
  document.querySelectorAll("[data-lang]").forEach((element) => {
    const key = element.getAttribute("data-lang");
    if (translations[lang] && translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });
  langText.textContent = lang === "id" ? "EN" : "ID";
}

const savedLanguage = localStorage.getItem("language");
const currentLanguage = savedLanguage || getSystemLanguage();
applyLanguage(currentLanguage);

languageToggle.addEventListener("click", () => {
  const currentLang = langText.textContent === "EN" ? "id" : "en";
  const newLang = currentLang === "id" ? "en" : "id";
  applyLanguage(newLang);
  localStorage.setItem("language", newLang);
});

// Theme system
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;
const icon = themeToggle.querySelector("i");

function getSystemTheme() {
  if (
    window.matchMedia &&
    window.matchMedia("(prefers-color-scheme: dark)").matches
  ) {
    return "dark";
  }
  return "light";
}

function applyTheme(theme) {
  if (theme === "light") {
    body.classList.add("light-mode");
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    body.classList.remove("light-mode");
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

const savedTheme = localStorage.getItem("theme");
const currentTheme = savedTheme || getSystemTheme();
applyTheme(currentTheme);

themeToggle.addEventListener("click", () => {
  const isLightMode = body.classList.contains("light-mode");
  const newTheme = isLightMode ? "dark" : "light";
  applyTheme(newTheme);
  localStorage.setItem("theme", newTheme);
});
