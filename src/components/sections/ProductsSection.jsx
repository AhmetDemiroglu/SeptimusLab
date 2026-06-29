import { HtmlBlock } from "../HtmlBlock";

const playGlyph = String.raw`<svg class="store-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>`;
const appleGlyph = String.raw`<svg class="store-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>`;

// PureScan Foods has a dedicated marketing site; its card image + name link there.
const FOODS_SITE = "https://purescan-foods.septimuslab.com/marketing/";
const siteArrow = String.raw`<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M7 17 17 7"/><path d="M7 7h10v10"/></svg>`;

const playButton = (href) => String.raw`<a href="${href}" target="_blank" rel="noopener noreferrer" class="store-btn">
                            ${playGlyph}
                            <span class="store-btn-lines">
                                <small data-tr="store-get">İNDİR</small>
                                <strong>Google Play</strong>
                            </span>
                        </a>`;

const appleButton = (href) => String.raw`<a href="${href}" target="_blank" rel="noopener noreferrer" class="store-btn">
                            ${appleGlyph}
                            <span class="store-btn-lines">
                                <small data-tr="store-get">İNDİR</small>
                                <strong>App Store</strong>
                            </span>
                        </a>`;

// Google Play henüz onayda: pasif "yakında" butonu.
const playButtonSoon = () => String.raw`<span class="store-btn is-disabled" aria-disabled="true" title="Google Play'de çok yakında">
                            ${playGlyph}
                            <span class="store-btn-lines">
                                <small data-tr="store-soon">YAKINDA</small>
                                <strong>Google Play</strong>
                            </span>
                        </span>`;

// GGHub'ın kendi web sitesi var; kart görseli + adı oraya bağlanır, dile duyarlı.
const GGHUB_SITE_TR = "https://gghub.social/tr";
const GGHUB_SITE_EN = "https://gghub.social/en-US";
const APP_STORE_GGHUB = "https://apps.apple.com/us/app/gghub-games-community/id6781281375";

const html = String.raw`<section class="products-section" id="products">
        <span class="ghost-index ghost-right" data-parallax="0.05" aria-hidden="true">02</span>
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="products-label">Ürünlerimiz</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="products-title">Fark yaratan uygulamalar</h2>
                <p class="section-desc reveal reveal-delay-2" data-tr="products-desc">
                    Her biri farklı bir ihtiyaçtan doğdu: kimi günlük bir kararı kolaylaştırmak, kimi bir oyuncu topluluğunu bir araya getirmek için. Hepsi özenle tasarlandı ve gerçek hayatta sınandı.
                </p>
            </div>

            <div class="products-grid">
                <!-- PureScan Foods -->
                <article class="product-card product-amber reveal">
                    <div class="product-visual">
                        <div class="product-stores">
                            <span class="store-chip" title="Google Play" aria-label="Google Play'de mevcut">${playGlyph}</span>
                            <span class="store-chip" title="App Store" aria-label="App Store'da mevcut">${appleGlyph}</span>
                        </div>
                        <a class="product-site-cue" href="${FOODS_SITE}" target="_blank" rel="noopener noreferrer" aria-label="PureScan Foods tanıtım sayfası">${siteArrow}</a>
                        <a class="product-phone product-site" href="${FOODS_SITE}" target="_blank" rel="noopener noreferrer" aria-label="PureScan Foods tanıtım sayfası" tabindex="-1">
                            <img src="/assets/purescan-foods-screen.webp" data-img-tr="/assets/purescan-foods-screen.webp" data-img-en="/assets/purescan-foods-en.webp" alt="PureScan Foods uygulama ekranı" loading="lazy">
                        </a>
                    </div>
                    <div class="product-body">
                        <header class="product-head">
                            <span class="product-icon">
                                <img src="/assets/purescan2.png" alt="PureScan Foods uygulama ikonu">
                            </span>
                            <h3 class="product-name"><a class="product-name-link" href="${FOODS_SITE}" target="_blank" rel="noopener noreferrer">PureScan Foods<span class="ext-arrow">${siteArrow}</span></a></h3>
                        </header>
                        <p class="product-tagline" data-tr="purescan-foods-tagline">
                            PureScan ailesinin yeni üyesi. Market rafındaki ürünün etiketini tarar; alerjenleri, katkıları ve besin değerlerini saniyeler içinde önünüze serer.
                        </p>
                        <div class="product-features">
                            <span class="feature-tag" data-tr="purescan-foods-f1">Gıda Tarama</span>
                            <span class="feature-tag" data-tr="purescan-foods-f2">Alerjen Uyarıları</span>
                            <span class="feature-tag" data-tr="purescan-foods-f3">Besin Değerleri</span>
                        </div>
                        <div class="product-actions">
                            ${playButton("https://play.google.com/store/apps/details?id=com.purescan.foods")}
                            ${appleButton("https://apps.apple.com/app/id6778348937")}
                        </div>
                    </div>
                </article>

                <!-- PureScan Cosmetics -->
                <article class="product-card product-teal reveal reveal-delay-1">
                    <div class="product-visual">
                        <div class="product-stores">
                            <span class="store-chip" title="Google Play" aria-label="Google Play'de mevcut">${playGlyph}</span>
                        </div>
                        <div class="product-phone">
                            <img src="/assets/purescan-screen.webp" alt="PureScan Cosmetics uygulama ekranı" loading="lazy">
                        </div>
                    </div>
                    <div class="product-body">
                        <header class="product-head">
                            <span class="product-icon">
                                <img src="/assets/purescan.png" alt="PureScan Cosmetics uygulama ikonu">
                            </span>
                            <h3 class="product-name">PureScan Cosmetics</h3>
                        </header>
                        <p class="product-tagline" data-tr="purescan-tagline">
                            Kozmetik etiketlerindeki o okunmaz listeyi sizin için okur. Bir fotoğrafla içerikleri analiz eder; cildinize neyin iyi geldiğini anlamanıza yardımcı olur.
                        </p>
                        <div class="product-features">
                            <span class="feature-tag" data-tr="purescan-f1">Akıllı Tarama</span>
                            <span class="feature-tag" data-tr="purescan-f2">AI Derecelendirme</span>
                            <span class="feature-tag" data-tr="purescan-f3">Cilt Analizi</span>
                            <span class="feature-tag" data-tr="purescan-f4">AI Asistan</span>
                        </div>
                        <div class="product-actions">
                            ${playButton("https://play.google.com/store/apps/details?id=com.septimuslab.purescan")}
                        </div>
                    </div>
                </article>

                <!-- GGHub -->
                <article class="product-card product-violet reveal reveal-delay-2">
                    <div class="product-visual">
                        <div class="product-stores">
                            <span class="store-chip" title="App Store" aria-label="App Store'da mevcut">${appleGlyph}</span>
                            <span class="store-chip is-soon" title="Google Play (yakında)" aria-label="Google Play'de çok yakında">${playGlyph}</span>
                        </div>
                        <a class="product-site-cue" href="${GGHUB_SITE_TR}" data-href-tr="${GGHUB_SITE_TR}" data-href-en="${GGHUB_SITE_EN}" target="_blank" rel="noopener noreferrer" aria-label="GGHub web sitesi">${siteArrow}</a>
                        <a class="product-phone product-site" href="${GGHUB_SITE_TR}" data-href-tr="${GGHUB_SITE_TR}" data-href-en="${GGHUB_SITE_EN}" target="_blank" rel="noopener noreferrer" aria-label="GGHub web sitesi" tabindex="-1">
                            <img src="/assets/gghub-screen.jpg" data-img-tr="/assets/gghub-screen.jpg" data-img-en="/assets/gghub-en.jpg" alt="GGHub uygulama ekranı" loading="lazy">
                        </a>
                    </div>
                    <div class="product-body">
                        <header class="product-head">
                            <span class="product-icon">
                                <img src="/assets/gghub.png" alt="GGHub uygulama ikonu">
                            </span>
                            <h3 class="product-name"><a class="product-name-link" href="${GGHUB_SITE_TR}" data-href-tr="${GGHUB_SITE_TR}" data-href-en="${GGHUB_SITE_EN}" target="_blank" rel="noopener noreferrer">GGHub<span class="ext-arrow">${siteArrow}</span></a></h3>
                        </header>
                        <p class="product-tagline" data-tr="gghub-tagline">
                            Oyuncular için sosyal platform. Oyunları keşfet, puanla ve listele; incelemeler yaz, liderlik tablolarında yarış ve topluluğun nabzını tut. Web'de ve mobilde, tek çatı altında.
                        </p>
                        <div class="product-features">
                            <span class="feature-tag" data-tr="gghub-f1">Oyun Keşfi</span>
                            <span class="feature-tag" data-tr="gghub-f2">İnceleme & Puan</span>
                            <span class="feature-tag" data-tr="gghub-f3">Liderlik Tablosu</span>
                            <span class="feature-tag" data-tr="gghub-f4">Canlı Mesajlaşma</span>
                        </div>
                        <div class="product-actions">
                            ${appleButton(APP_STORE_GGHUB)}
                            ${playButtonSoon()}
                        </div>
                    </div>
                </article>

                <!-- Fintel -->
                <article class="product-card product-orange reveal reveal-delay-3">
                    <div class="product-visual">
                        <div class="product-stores">
                            <span class="store-chip" title="Google Play" aria-label="Google Play'de mevcut">${playGlyph}</span>
                        </div>
                        <div class="product-phone">
                            <img src="/assets/fintel-screen.webp" alt="Fintel uygulama ekranı" loading="lazy">
                        </div>
                    </div>
                    <div class="product-body">
                        <header class="product-head">
                            <span class="product-icon">
                                <img src="/assets/fintel.webp" alt="Fintel uygulama ikonu">
                            </span>
                            <h3 class="product-name">Fintel</h3>
                        </header>
                        <p class="product-tagline" data-tr="fintel-tagline">
                            Bütçenizi dönemler halinde planlar, harcamalarınızı sessizce takip eder. Nova AI, ay sonu sürprizlerini zamanında gelen küçük önerilere dönüştürür.
                        </p>
                        <div class="product-features">
                            <span class="feature-tag" data-tr="fintel-f1">Dönem Bütçeleri</span>
                            <span class="feature-tag" data-tr="fintel-f2">Günlük Limitler</span>
                            <span class="feature-tag" data-tr="fintel-f3">Nova AI</span>
                            <span class="feature-tag" data-tr="fintel-f4">Performans</span>
                        </div>
                        <div class="product-actions">
                            ${playButton("https://play.google.com/store/apps/details?id=com.fintel.app")}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    </section>`;

export default function ProductsSection() {
  return <HtmlBlock html={html} />;
}
