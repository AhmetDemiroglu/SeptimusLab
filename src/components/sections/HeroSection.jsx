import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="hero-section" id="hero">
        <div class="parallax-container">
            <div class="parallax-layer" data-depth="0.1">
                <div class="parallax-shape shape-1"></div>
            </div>
            <div class="parallax-layer" data-depth="0.2">
                <div class="parallax-shape shape-2"></div>
            </div>
            <div class="parallax-layer" data-depth="0.15">
                <div class="parallax-shape shape-3"></div>
            </div>
        </div>

        <div class="container">
            <div class="grid lg:grid-cols-2 gap-12 items-center">
                <div class="reveal">
                    <div class="hero-badge">
                        <span class="pulse-dot"></span>
                        <span data-tr="hero-badge">Mobil İnovasyon Stüdyosu - İzmir, Turkey</span>
                    </div>
                    <h1 class="hero-title">
                        <span data-tr="hero-title-1">Akıllı Mobil</span><br>
                        <span class="accent" data-tr="hero-title-2">Deneyimler Üretiyoruz</span>
                    </h1>
                    <p class="hero-subtitle" data-tr="hero-subtitle">
                        Yapay zeka destekli mobil uygulamalar geliştiriyoruz. Kozmetik güvenliğinden finansal sağlığa, günlük kararlarınızı daha akıllı hale getiriyoruz.
                    </p>
                    <div class="flex flex-wrap gap-3">
                        <a href="https://play.google.com/store/apps/developer?id=SeptimusLab" target="_blank" rel="noopener noreferrer" class="btn-primary">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                            </svg>
                            <span data-tr="hero-cta-google-play">Google Play</span>
                        </a>
                        <a href="#products" class="btn-secondary">
                            <span data-tr="hero-cta-discover">Uygulamaları Keşfet</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div class="reveal reveal-delay-2">
                    <div class="hero-animation-container">
                        <div class="orbit-system">
                            <div class="center-orb">
                                <img src="assets/septimuslab.png" alt="SeptimusLab">
                            </div>
                            <div class="orbit-ring orbit-ring-1"></div>
                            <div class="orbit-ring orbit-ring-2"></div>
                            <div class="orbit-ring orbit-ring-3"></div>

                            <div class="orbit-item" style="animation-delay: 0s;">
                                <div class="orbit-icon" style="transform: translate(140px, -20px);">
                                    <img src="assets/brand-logo-cosmetic.png" alt="">
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -5s;">
                                <div class="orbit-icon" style="transform: translate(-100px, 100px); background: var(--accent-light);">
                                    <img src="assets/fintel.png" alt="">
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -10s;">
                                <div class="orbit-icon" style="transform: translate(60px, 160px); background: var(--amber-light);">
                                    <img src="assets/brand-logo-food.png" alt="">
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -15s;">
                                <div class="orbit-icon" style="transform: translate(-160px, -60px);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <path d="M12 16v-4M12 8h.01"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -20s;">
                                <div class="orbit-icon" style="transform: translate(120px, 100px);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2">
                                        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -8s;">
                                <div class="orbit-icon" style="transform: translate(-140px, 40px); background: var(--turquoise-light);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="2">
                                        <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                                        <line x1="3" y1="9" x2="21" y2="9"/>
                                        <line x1="9" y1="21" x2="9" y2="9"/>
                                    </svg>
                                </div>
                            </div>
                            <div class="orbit-item" style="animation-delay: -18s;">
                                <div class="orbit-icon" style="transform: translate(40px, -140px); background: var(--accent-light);">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2">
                                        <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                                        <circle cx="12" cy="13" r="4"/>
                                    </svg>
                                </div>
                            </div>

                            <div class="data-line" style="width: 140px; top: 50%; left: 50%; transform: rotate(45deg);"></div>
                            <div class="data-line" style="width: 190px; top: 50%; left: 50%; transform: rotate(135deg);"></div>
                            <div class="data-line" style="width: 240px; top: 50%; left: 50%; transform: rotate(225deg);"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function HeroSection() {
  return <HtmlBlock html={html} />;
}
