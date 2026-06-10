import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="hero-section" id="hero">
        <div class="hero-bg" aria-hidden="true">
            <div class="hero-haze hero-haze-1" data-parallax="0.08"></div>
            <div class="hero-haze hero-haze-2" data-parallax="0.14"></div>
            <span class="hero-seven" data-parallax="0.05">7</span>
        </div>

        <div class="container hero-layout">
            <div class="hero-copy">
                <p class="hero-overline reveal">
                    <span data-tr="hero-badge">Mobil İnovasyon Stüdyosu · İzmir</span>
                </p>
                <h1 class="hero-title reveal reveal-delay-1">
                    <span data-tr="hero-title-1">Akıllı Mobil</span><br>
                    <em class="hero-title-accent" data-tr="hero-title-2">Deneyimler Üretiyoruz</em>
                </h1>
                <p class="hero-subtitle reveal reveal-delay-2" data-tr="hero-subtitle">
                    Cebinizdeki kararları ciddiye alıyoruz. Bir kozmetik etiketinin arkasında ne olduğunu, bütçenizin ay sonunda nereye gittiğini yapay zekayla saniyeler içinde görünür kılıyoruz.
                </p>
                <div class="hero-actions reveal reveal-delay-3">
                    <a href="https://play.google.com/store/apps/developer?id=SeptimusLab" target="_blank" rel="noopener noreferrer" class="store-btn store-btn-solid" aria-label="SeptimusLab Google Play Mağazası">
                        <svg class="store-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                        </svg>
                        <span class="store-btn-lines">
                            <small data-tr="store-get">İNDİR</small>
                            <strong>Google Play</strong>
                        </span>
                    </a>
                    <span class="store-btn is-disabled" aria-disabled="true" role="link">
                        <svg class="store-glyph" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                        </svg>
                        <span class="store-btn-lines">
                            <small data-tr="store-soon">YAKINDA</small>
                            <strong>App Store</strong>
                        </span>
                    </span>
                </div>
            </div>

            <div class="hero-stage reveal reveal-delay-2">
                <div class="hero-scene" data-tilt="5">
                    <div class="h-phone h-phone-left">
                        <img src="/assets/fintel-screen.webp" alt="Fintel uygulama arayüzü" loading="eager">
                    </div>
                    <div class="h-phone h-phone-right">
                        <img src="/assets/purescan-screen.webp" alt="PureScan Cosmetics uygulama arayüzü" loading="eager">
                    </div>
                    <div class="h-phone h-phone-front">
                        <img src="/assets/purescan-foods-screen.webp" data-img-tr="/assets/purescan-foods-screen.webp" data-img-en="/assets/purescan-foods-en.webp" alt="PureScan Foods uygulama arayüzü" loading="eager">
                    </div>
                    <div class="hero-ground"></div>
                </div>
            </div>
        </div>

        <div class="hero-scroll-hint" aria-hidden="true">
            <span class="hero-scroll-line"></span>
            <span data-tr="hero-scroll">Keşfetmek için kaydırın</span>
        </div>
    </section>`;

export default function HeroSection() {
    return <HtmlBlock html={html} />;
}
