// Translation data
const translations = {
    tr: {
        "nav-about": "Hakkımızda",
        "nav-products": "Ürünler",
        "nav-technology": "Teknoloji",
        "nav-vision": "Vizyon",
        "nav-contact": "İletişim",
        "hero-title-1": "Fikirden mağazaya,",
        "hero-title-2": "akıllı mobil uygulamalar.",
        "hero-subtitle":
            "Yaratıcı fikirlerinizi iOS ve Android'de yaşayan, yapay zeka destekli mobil ürünlere dönüştürüyoruz. Tasarım, mühendislik ve mağaza yayını tek çatı altında.",
        "hero-cta-google-play": "Google Play",
        "hero-cta-discover": "Uygulamaları Keşfet",
        "marquee-soon": "Yakında",
        "about-label": "Stüdyo",
        "about-title": "Bağımsız stüdyo, uçtan uca üretim",
        "about-desc":
            "SeptimusLab bağımsız bir mobil ürün stüdyosu. Fikirden arayüz tasarımına, yapay zeka mimarisinden mağaza yayınına kadar tüm süreci kendi bünyemizde yürütüyoruz. Hantal süreçler yerine doğrudan ürüne odaklanıyor; kendi kullandığımız ve arkasında durduğumuz uygulamalar geliştiriyoruz.",
        "stat-apps": "Yayında uygulama",
        "stat-ai": "Platform",
        "stat-founded": "Kuruluş",
        "card-est": "KURULUŞ 2025",
        "card-quote":
            "Eylül (September), Ocak ve Şubat takvime eklenmeden önce antik Roma yılının yedinci ayıydı. Takvim değişip dokuzuncu sıraya geçse de kökü değişmedi; Latince “yedinci” anlamına gelen Septimus, stüdyomuzun adı oldu.",
        "card-row-loc-label": "Ürünler",
        "card-row-loc": "4 uygulama",
        "card-row-focus-label": "Odak",
        "card-row-focus": "AI destekli mobil ürünler",
        "card-row-platform-label": "Platform",
        "card-row-platform": "iOS · Android",
        "store-get": "İNDİR",
        "store-soon": "YAKINDA",
        "products-label": "Ürünlerimiz",
        "products-title": "Yayındaki uygulamalar",
        "products-desc":
            "Gıdadan finansa, kozmetikten oyun dünyasına uzanan dört farklı mobil ürün. Tamamı aynı mühendislik ve tasarım anlayışıyla geliştirildi.",
        "status-android": "Android'de Mevcut",
        "status-play": "Google Play'de Mevcut",
        "purescan-tagline":
            "Kozmetik etiketlerindeki karmaşık içerik listelerini saniyeler içinde çözümler. Tek bir fotoğrafla formülü analiz eder; cildinize neyin iyi geldiğini netleştirir.",
        "purescan-f1": "Akıllı Tarama",
        "purescan-f2": "AI Derecelendirme",
        "purescan-f3": "Cilt Analizi",
        "purescan-f4": "AI Asistan",
        "fintel-tagline":
        "Maaş dönemini, günlük limitini ve taksitlerini tek yerde takip eder. Fişi okur, Nova ile sorularını yanıtlar.",
        "fintel-f1": "Dönem Bütçeleri",
        "fintel-f2": "Günlük Limitler",
        "fintel-f3": "Fiş Okuma",
        "fintel-f4": "Nova",
        "cta-google-play": "Google Play'de Gör",
        "purescan-foods-tagline":
            "PureScan ailesinin yeni üyesi. Market rafındaki ürünün etiketini tarar; alerjenleri, katkıları ve besin değerlerini saniyeler içinde önünüze serer.",
        "purescan-foods-f1": "Gıda Tarama",
        "purescan-foods-f2": "Alerjen Uyarıları",
        "purescan-foods-f3": "Besin Değerleri",
        "pausemenu-tagline":
            "Oyuncular için yeni nesil sosyal platform. Oyunları keşfedin, puanlayıp kendi listelerinizi oluşturun, incelemeler yazın ve farklı karakterlere sahip yapay zeka personalarının yer aldığı AI Kulübü'nde sohbete katılın. Web ve mobilde, tek çatı altında.",
        "pausemenu-f1": "Oyun Keşfi",
        "pausemenu-f2": "İnceleme & Puan",
        "pausemenu-f3": "AI Kulübü",
        "pausemenu-f4": "Canlı Mesajlaşma",
        "tech-label": "Altyapı",
        "tech-title": "Uygulamalarımıza güç veren mimari",
        "tech-1": "Tek kod tabanıyla iOS, Android ve web genelinde tutarlı deneyim",
        "tech-2": "Yüksek performans ve akıcı animasyon gerektiren ürünlerde yerel arayüz",
        "tech-3": "Kimlik doğrulama, bulut veritabanı ve gerçek zamanlı veri senkronizasyonu",
        "tech-4-name": "AI Orkestrasyon",
        "tech-4": "Göreve göre en uygun dil ve görsel modelini seçen akıllı yönlendirme katmanı",
        "tech-5-name": "Yerel API",
        "tech-5": "Kamera, barkod tarama ve cihaz içi seslendirme entegrasyonları",
        "vision-label": "Yolculuk & Vizyon",
        "vision-title": "Adım adım büyüyen ekosistem",
        "vision-desc": "Her yeni üründe altyapımızı ve tasarım dilimizi bir adım ileri taşıyoruz.",
        "timeline-2025-title": "Başlangıç",
        "timeline-2025-1": "SeptimusLab kuruldu",
        "timeline-2025-2": "Fintel Google Play'de yayınlandı",
        "timeline-2025-3": "İlk yapay zeka destekli analiz motoru devreye alındı",
        "timeline-2026-title": "iOS ve yeni uygulamalar",
        "timeline-2026-1": "PureScan Cosmetics yayınlandı",
        "timeline-2026-2": "PureScan Foods App Store ve Google Play'de",
        "timeline-2026-3": "Pause Menu web ve mobilde yayında",
        "timeline-future": "Sırada",
        "timeline-future-title": "Yol Haritası",
        "timeline-future-1": "Çoklu dil desteği ve küresel ölçekleme",
        "timeline-future-2": "Mevcut ürünlerde derinleşen yapay zeka yetenekleri",
        "timeline-future-3": "Yeni dikeylerde mobil ürünler",
        "contact-label": "İletişim",
        "contact-title": "Bir fikriniz mi var? Yazın.",
        "contact-desc": "Soru, iş birliği ya da sadece merhaba. Her mesajı okuyoruz.",
        "contact-email": "E-posta Gönder",
        "contact-founder": "Kurucuyla Tanışın",
        "footer-desc": "Bağımsız mobil uygulama stüdyosu. Fikirden mağazaya, iOS ve Android için akıllı uygulamalar.",
        "footer-products": "Ürünler",
        "footer-company": "Şirket",
        "footer-developer": "Kurucu",
        "footer-email": "E-posta",
        "footer-rights": "Tüm hakları saklıdır.",
        // [FEATURE-1 START]
        "f1-foods-chip1": "Gluten: Yok",
        "f1-foods-chip2": "Skor: 92/100",
        "f1-pause-chip1": "★ 9.4 İnceleme",
        "f1-pause-chip2": "AI Kulübü Aktif",
        "f1-cosm-chip1": "Cilt Uyumu: %96",
        "f1-cosm-chip2": "Temiz İçerik",
        "f1-fintel-chip1": "Nova: Durum iyi",
        "f1-fintel-chip2": "Limit içinde",
        // [FEATURE-1 END]
    },
    en: {
        "nav-about": "About",
        "nav-products": "Products",
        "nav-technology": "Technology",
        "nav-vision": "Vision",
        "nav-contact": "Contact",
        "hero-title-1": "From idea to store,",
        "hero-title-2": "smart mobile apps.",
        "hero-subtitle":
            "We turn your creative ideas into AI-powered mobile products on iOS and Android. Design, engineering, and store release, all under one roof.",
        "hero-cta-google-play": "Google Play",
        "hero-cta-discover": "Discover Apps",
        "marquee-soon": "Soon",
        "about-label": "The studio",
        "about-title": "Independent studio, end-to-end craft",
        "about-desc":
            "SeptimusLab is an independent mobile product studio. From concept and interface design to AI architecture and store release, we build everything in-house. Instead of heavy layers and long meetings, we focus directly on craft and ship products we use and stand behind.",
        "stat-apps": "Apps live",
        "stat-ai": "Platforms",
        "stat-founded": "Founded",
        "card-est": "EST. 2025",
        "card-quote":
            "Before January and February joined the calendar, September was the seventh month of the Roman year. Time moved it to the ninth, yet its root endured, giving our studio its name from Septimus, Latin for “the seventh.”",
        "card-row-loc-label": "Products",
        "card-row-loc": "4 apps",
        "card-row-focus-label": "Focus",
        "card-row-focus": "AI-powered mobile apps",
        "card-row-platform-label": "Platform",
        "card-row-platform": "iOS · Android",
        "store-get": "GET IT ON",
        "store-soon": "SOON",
        "products-label": "Our Products",
        "products-title": "Apps we have shipped",
        "products-desc":
            "Four distinct mobile products spanning food, finance, skincare, and gaming, all crafted under the same engineering and design standards.",
        "status-android": "Available on Android",
        "status-play": "Available on Google Play",
        "purescan-tagline":
            "Decodes complex cosmetic ingredient lists in seconds. Snap a photo to analyze the formula and understand what truly works for your skin.",
        "purescan-f1": "Smart Scanning",
        "purescan-f2": "AI Rating",
        "purescan-f3": "Skin Analysis",
        "purescan-f4": "AI Assistant",
        "fintel-tagline":
        "Tracks your pay period, daily limit and installments in one place. Reads receipts and answers your questions with Nova.",
        "fintel-f1": "Period Budgets",
        "fintel-f2": "Daily Limits",
        "fintel-f3": "Receipt Scan",
        "fintel-f4": "Nova",
        "cta-google-play": "View on Google Play",
        "purescan-foods-tagline":
            "The newest member of the PureScan family. Scan a product on the shelf and see allergens, additives and nutrition facts in seconds.",
        "purescan-foods-f1": "Food Scanning",
        "purescan-foods-f2": "Allergen Alerts",
        "purescan-foods-f3": "Nutrition Facts",
        "pausemenu-tagline":
            "The social platform built for gamers. Discover, rate, and curate games, write reviews, and join the conversation in the AI Club, home to AI personas with distinct personalities. Available on web and mobile, under one roof.",
        "pausemenu-f1": "Game Discovery",
        "pausemenu-f2": "Reviews & Ratings",
        "pausemenu-f3": "AI Club",
        "pausemenu-f4": "Live Messaging",
        "tech-label": "Under the hood",
        "tech-title": "The architecture behind our apps",
        "tech-1": "Unified codebase delivering a consistent experience across iOS, Android, and web",
        "tech-2": "True native interfaces where high performance and fluid motion matter most",
        "tech-3": "Authentication, cloud database, and real-time data synchronization",
        "tech-4-name": "AI Orchestration",
        "tech-4": "Intelligent routing layer that selects the optimal AI model for each task",
        "tech-5-name": "Native APIs",
        "tech-5": "Camera vision, barcode scanning, and on-device speech synthesis",
        "vision-label": "Journey & Vision",
        "vision-title": "Step by step, a growing ecosystem",
        "vision-desc": "With every release, we push our architecture and product craft one step further.",
        "timeline-2025-title": "The start",
        "timeline-2025-1": "SeptimusLab founded",
        "timeline-2025-2": "Fintel launched on Google Play",
        "timeline-2025-3": "First AI-powered analysis engine deployed in production",
        "timeline-2026-title": "iOS and new apps",
        "timeline-2026-1": "PureScan Cosmetics launched",
        "timeline-2026-2": "PureScan Foods on the App Store and Google Play",
        "timeline-2026-3": "Pause Menu live on web and mobile",
        "timeline-future": "Next",
        "timeline-future-title": "On the Roadmap",
        "timeline-future-1": "Multi-language expansion and global reach",
        "timeline-future-2": "Deeper AI capabilities across existing products",
        "timeline-future-3": "New mobile products in untapped verticals",
        "contact-label": "Contact",
        "contact-title": "Got an idea? Write to us.",
        "contact-desc": "A question, a collaboration or just a hello. We read every message.",
        "contact-email": "Send Email",
        "contact-founder": "Meet the Founder",
        "footer-desc": "Independent mobile app studio. Smart apps for iOS and Android, from idea to store.",
        "footer-products": "Products",
        "footer-company": "Company",
        "footer-developer": "Founder",
        "footer-email": "Email",
        "footer-rights": "All rights reserved.",
        // [FEATURE-1 START]
        "f1-foods-chip1": "Gluten: Free",
        "f1-foods-chip2": "Score: 92/100",
        "f1-pause-chip1": "★ 9.4 Review",
        "f1-pause-chip2": "AI Club Live",
        "f1-cosm-chip1": "Skin Match: 96%",
        "f1-cosm-chip2": "Clean Formula",
        "f1-fintel-chip1": "Nova: Status good",
        "f1-fintel-chip2": "Within limit",
        // [FEATURE-1 END]
    },
};

let currentLang = "tr";

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const hasFinePointer = window.matchMedia("(pointer: fine)").matches;

function setLanguage(lang) {
    currentLang = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-tr]").forEach((el) => {
        const key = el.getAttribute("data-tr");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    // Swap localized screenshots (e.g. PureScan Foods screen has a TR and an EN version)
    document.querySelectorAll("[data-img-" + lang + "]").forEach((img) => {
        const src = img.getAttribute("data-img-" + lang);
        if (src && img.getAttribute("src") !== src) img.setAttribute("src", src);
    });

    // Swap localized links (e.g. Pause Menu site -> /tr vs /en-US depending on page language)
    document.querySelectorAll("[data-href-" + lang + "]").forEach((a) => {
        const href = a.getAttribute("data-href-" + lang);
        if (href && a.getAttribute("href") !== href) a.setAttribute("href", href);
    });

    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.classList.toggle("active", btn.dataset.lang === lang);
        btn.setAttribute("aria-pressed", btn.dataset.lang === lang);
    });
}

// Scroll-linked parallax for elements tagged with data-parallax="speed".
// Each element drifts relative to its own section's progress through the viewport.
function setupScrollParallax() {
    if (prefersReducedMotion) return;

    const els = Array.from(document.querySelectorAll("[data-parallax]"));
    if (!els.length) return;

    const items = els.map((el) => ({
        el,
        speed: parseFloat(el.dataset.parallax) || 0.1,
        host: el.closest("section") || document.body,
    }));

    let ticking = false;

    function update() {
        const vh = window.innerHeight;
        items.forEach(({ el, speed, host }) => {
            const rect = host.getBoundingClientRect();
            if (rect.bottom < -200 || rect.top > vh + 200) return;
            const progress = vh - rect.top;
            el.style.translate = `0 ${(-progress * speed).toFixed(1)}px`;
        });
        ticking = false;
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!ticking) {
                requestAnimationFrame(update);
                ticking = true;
            }
        },
        { passive: true },
    );
    update();
}

// Pointer tilt for 3D scenes (hero phone stack, studio card).
function setupTilt() {
    if (prefersReducedMotion || !hasFinePointer) return;

    document.querySelectorAll("[data-tilt]").forEach((el) => {
        const strength = parseFloat(el.dataset.tilt) || 5;
        const zone = el.parentElement || el;

        zone.addEventListener("mousemove", (e) => {
            const rect = zone.getBoundingClientRect();
            const x = (e.clientX - rect.left) / rect.width - 0.5;
            const y = (e.clientY - rect.top) / rect.height - 0.5;
            el.style.transform = `rotateY(${(x * strength).toFixed(2)}deg) rotateX(${(-y * strength).toFixed(2)}deg)`;
        });

        zone.addEventListener("mouseleave", () => {
            el.style.transform = "";
        });
    });
}

function setupRevealAnimations() {
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                entry.target.classList.toggle("visible", entry.isIntersecting);
            });
        },
        { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
}

// Üst şeridin kaydırmaya bağlı davranışı:
//  - 12px'den sonra `.scrolled` ile yüzen cam kapsül görünümü,
//  - kapsülü uçtan uca geçen ilerleme çubuğu (transform tabanlı, layout tetiklemez),
//  - görünürdeki bölümün bağlantısına `.is-spy-active` (scrollspy).
function setupNavigation() {
    const nav = document.querySelector(".nav-wrapper");
    if (!nav) return;

    const bar = nav.querySelector(".scroll-progress");

    let raf = 0;
    function update() {
        raf = 0;
        nav.classList.toggle("scrolled", window.scrollY > 12);
        if (bar) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            const progress = max > 0 ? Math.min(1, window.scrollY / max) : 0;
            bar.style.transform = `scaleX(${progress})`;
        }
    }

    window.addEventListener(
        "scroll",
        () => {
            if (!raf) raf = requestAnimationFrame(update);
        },
        { passive: true },
    );
    update();

    const links = Array.from(nav.querySelectorAll('.nav-link[href^="#"]')).filter((link) => link.getAttribute("href").length > 1);
    const sections = links.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
    if (!sections.length) return;

    const spy = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (!entry.isIntersecting) return;
                links.forEach((link) => {
                    link.classList.toggle("is-spy-active", link.getAttribute("href") === `#${entry.target.id}`);
                });
            });
        },
        { rootMargin: "-25% 0px -65% 0px" },
    );
    sections.forEach((section) => spy.observe(section));
}

function setupMobileMenu() {
    const menuBtn = document.querySelector(".mobile-menu-btn");
    const mobileMenu = document.querySelector(".mobile-menu");
    const closeBtn = document.querySelector(".mobile-menu-close");
    const menuLinks = mobileMenu.querySelectorAll("a");

    menuBtn.addEventListener("click", () => {
        mobileMenu.classList.add("active");
        menuBtn.setAttribute("aria-expanded", "true");
        document.body.style.overflow = "hidden";
    });

    function closeMenu() {
        mobileMenu.classList.remove("active");
        menuBtn.setAttribute("aria-expanded", "false");
        document.body.style.overflow = "";
    }

    closeBtn.addEventListener("click", closeMenu);
    menuLinks.forEach((link) => link.addEventListener("click", closeMenu));
}

function setupLanguageToggle() {
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
    });
}

function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const href = this.getAttribute("href");
            if (href === "#") {
                window.scrollTo({ top: 0, behavior: "smooth" });
                return;
            }
            const target = document.querySelector(href);
            if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });
}

// [FEATURE-2 START: Unified Ecosystem Architecture Board]
function setupFeature2Pipeline() {
    const board = document.querySelector(".tech-board");
    if (!board) return;

    const cards = Array.from(board.querySelectorAll(".tech-card[data-tech-node]"));
    const dockApps = Array.from(board.querySelectorAll(".tech-dock-app[data-dock-app]"));

    cards.forEach((card) => {
        const id = card.dataset.techNode;
        card.addEventListener("mouseenter", () => {
            const trace = board.querySelector(`.bus-trace[data-trace-in="${id}"]`);
            if (trace) trace.classList.add("is-boosted");
        });
        card.addEventListener("mouseleave", () => {
            const trace = board.querySelector(`.bus-trace[data-trace-in="${id}"]`);
            if (trace) trace.classList.remove("is-boosted");
        });
    });

    dockApps.forEach((app) => {
        const id = app.dataset.dockApp;
        app.addEventListener("mouseenter", () => {
            const trace = board.querySelector(`.bus-trace[data-trace-out="${id}"]`);
            if (trace) trace.classList.add("is-boosted");
        });
        app.addEventListener("mouseleave", () => {
            const trace = board.querySelector(`.bus-trace[data-trace-out="${id}"]`);
            if (trace) trace.classList.remove("is-boosted");
        });
    });
}
// [FEATURE-2 END]

// [FEATURE-3 START: Night-Navy Dark Theme & Web Audio Micro-Haptics]
function setupFeature3ThemeAndAudio() {
    const themeBtn = document.getElementById("themeToggleBtn");
    const soundBtn = document.getElementById("soundToggleBtn");
    const root = document.documentElement;

    let isDark = false;
    try {
        isDark = localStorage.getItem("septimus-theme") === "dark";
    } catch (_) {}

    let soundEnabled = true;
    try {
        const savedSound = localStorage.getItem("septimus-sound");
        if (savedSound !== null) soundEnabled = savedSound === "1";
    } catch (_) {}

    let audioCtx = null;

    function playMicroTick(freq = 680, duration = 0.022, gainVal = 0.025) {
        if (!soundEnabled || prefersReducedMotion) return;
        try {
            const Ctx = window.AudioContext || window.webkitAudioContext;
            if (!Ctx) return;
            if (!audioCtx) audioCtx = new Ctx();
            if (audioCtx.state === "suspended") audioCtx.resume();

            const osc = audioCtx.createOscillator();
            const gain = audioCtx.createGain();
            osc.type = "triangle";
            osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
            osc.frequency.exponentialRampToValueAtTime(freq * 0.45, audioCtx.currentTime + duration);

            gain.gain.setValueAtTime(gainVal, audioCtx.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + duration);

            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            osc.stop(audioCtx.currentTime + duration);
        } catch (_) {}
    }

    function applyTheme(dark) {
        isDark = dark;
        if (dark) {
            root.setAttribute("data-theme", "dark");
        } else {
            root.removeAttribute("data-theme");
        }

        if (themeBtn) {
            themeBtn.classList.toggle("active", dark);
            themeBtn.setAttribute("aria-pressed", String(dark));
        }

        document.querySelectorAll("[data-logo-light][data-logo-dark]").forEach((img) => {
            const targetSrc = dark ? img.getAttribute("data-logo-dark") : img.getAttribute("data-logo-light");
            if (targetSrc && img.getAttribute("src") !== targetSrc) {
                img.setAttribute("src", targetSrc);
            }
        });

        try {
            localStorage.setItem("septimus-theme", dark ? "dark" : "light");
        } catch (_) {}
    }

    function applySoundState(enabled) {
        soundEnabled = enabled;
        if (soundBtn) {
            soundBtn.classList.toggle("active", enabled);
            soundBtn.setAttribute("aria-pressed", String(enabled));
        }
        try {
            localStorage.setItem("septimus-sound", enabled ? "1" : "0");
        } catch (_) {}
    }

    applyTheme(isDark);
    applySoundState(soundEnabled);

    if (themeBtn) {
        themeBtn.addEventListener("click", () => {
            applyTheme(!isDark);
            playMicroTick(isDark ? 520 : 760, 0.035, 0.035);
        });
    }

    if (soundBtn) {
        soundBtn.addEventListener("click", () => {
            const next = !soundEnabled;
            applySoundState(next);
            if (next) playMicroTick(840, 0.03, 0.035);
        });
    }

    document.addEventListener("click", (e) => {
        const interactive = e.target.closest("a, button, .tech-card, .product-card, .matrix-cell");
        if (interactive && interactive !== themeBtn && interactive !== soundBtn) {
            playMicroTick(720, 0.024, 0.028);
        }
    });
}
// [FEATURE-3 END]

// [FEATURE-4 START: Single-Row Roman Numeral Strip]
function setupFeature4Matrix() {
    const strip = document.getElementById("romanStrip");
    if (!strip) return;

    const steps = Array.from(strip.querySelectorAll(".roman-step"));
    const romanLabels = ["I", "II", "III", "IV", "V", "VI", "VII · Septimus", "VIII", "IX"];
    const modernLabels = ["+I", "+II", "III", "IV", "V", "VI", "VII", "VIII", "IX · Septimus"];

    function setEra(era) {
        strip.dataset.era = era;
        const labels = era === "modern" ? modernLabels : romanLabels;
        steps.forEach((el, idx) => {
            el.textContent = labels[idx];
            const isSept = (era === "roman" && idx === 6) || (era === "modern" && idx === 8);
            const isAdded = era === "modern" && (idx === 0 || idx === 1);
            el.classList.toggle("is-septimus", isSept);
            el.classList.toggle("is-added", isAdded);
        });
    }

    strip.addEventListener("click", () => {
        setEra(strip.dataset.era === "roman" ? "modern" : "roman");
    });
}
// [FEATURE-4 END]

// [FEATURE-5 START: Vision Scroll-Linked Logo-Blue Timeline Beam]
function setupVisionTimelineBeam() {
    const timeline = document.querySelector(".timeline");
    if (!timeline) return;

    const items = Array.from(timeline.querySelectorAll(".timeline-item"));
    let targetProgress = 0;
    let currentProgress = 0;
    let rafId = 0;

    function computeTarget() {
        const rect = timeline.getBoundingClientRect();
        const vh = window.innerHeight;
        const startY = vh * 0.68;
        const raw = (startY - rect.top) / Math.max(1, rect.height - 20);
        targetProgress = Math.max(0, Math.min(1, raw));
        if (!rafId) {
            rafId = requestAnimationFrame(step);
        }
    }

    function step() {
        const diff = targetProgress - currentProgress;
        if (Math.abs(diff) > 0.0008) {
            currentProgress += diff * 0.14;
            rafId = requestAnimationFrame(step);
        } else {
            currentProgress = targetProgress;
            rafId = 0;
        }

        timeline.style.setProperty("--tl-progress", currentProgress.toFixed(4));

        const rect = timeline.getBoundingClientRect();
        const beamTipY = rect.top + 10 + (rect.height - 20) * currentProgress;
        items.forEach((item) => {
            const dot = item.querySelector(".timeline-dot");
            if (!dot) return;
            const dotRect = dot.getBoundingClientRect();
            const dotCenter = dotRect.top + dotRect.height * 0.5;
            item.classList.toggle("is-lit", currentProgress > 0.015 && beamTipY >= dotCenter - 4);
        });
    }

    window.addEventListener("scroll", computeTarget, { passive: true });
    window.addEventListener("resize", computeTarget, { passive: true });
    computeTarget();
}
// [FEATURE-5 END]

document.addEventListener("DOMContentLoaded", () => {
    // Auto-detect and set initial language
    const userLang = navigator.language || navigator.userLanguage;
    const defaultLang = userLang.toLowerCase().startsWith("tr") ? "tr" : "en";
    setLanguage(defaultLang);

    setupScrollParallax();
    setupTilt();
    setupRevealAnimations();
    setupNavigation();
    setupMobileMenu();
    setupLanguageToggle();
    setupSmoothScroll();
    // [FEATURE-2 START]
    setupFeature2Pipeline();
    // [FEATURE-2 END]
    // [FEATURE-3 START]
    setupFeature3ThemeAndAudio();
    // [FEATURE-3 END]
    // [FEATURE-4 START]
    setupFeature4Matrix();
    // [FEATURE-4 END]
    // [FEATURE-5 START]
    setupVisionTimelineBeam();
    // [FEATURE-5 END]
});
