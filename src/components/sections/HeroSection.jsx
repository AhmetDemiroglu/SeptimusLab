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
                        <a href="https://play.google.com/store/apps/developer?id=SeptimusLab" target="_blank" rel="noopener noreferrer" class="btn-primary" aria-label="SeptimusLab Google Play Mağazası">
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
                    <div class="hero-animation-container" style="position: relative; width: 100%; max-width: 500px; margin: 0 auto; display: flex; justify-content: center; align-items: center;">
                        <svg viewBox="0 0 500 500" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                            <defs>
                                <linearGradient id="primaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="var(--accent)" />
                                    <stop offset="100%" stop-color="var(--accent-dark)" />
                                </linearGradient>
                                <linearGradient id="secondaryGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                                    <stop offset="0%" stop-color="var(--turquoise)" />
                                    <stop offset="100%" stop-color="#1F6659" />
                                </linearGradient>
                                <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feGaussianBlur stdDeviation="8" result="blur" />
                                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                                </filter>
                                <filter id="drop-shadow" x="-20%" y="-20%" width="140%" height="140%">
                                    <feDropShadow dx="0" dy="8" stdDeviation="8" flood-color="#000000" flood-opacity="0.08"/>
                                </filter>
                            </defs>

                            <!-- Orbital Rings -->
                            <g transform="translate(250, 250)" fill="none" stroke="var(--border)" stroke-width="1.5" opacity="0.4">
                                <circle rx="160" ry="160" r="160" stroke-dasharray="4 12">
                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="60s" repeatCount="indefinite" />
                                </circle>
                                <ellipse rx="210" ry="90" transform="rotate(30)">
                                    <animateTransform attributeName="transform" type="rotate" from="30" to="390" dur="40s" repeatCount="indefinite" />
                                </ellipse>
                                <ellipse rx="210" ry="90" transform="rotate(-30)">
                                    <animateTransform attributeName="transform" type="rotate" from="-30" to="-390" dur="45s" repeatCount="indefinite" />
                                </ellipse>
                                <ellipse rx="180" ry="180" stroke-dasharray="2 10" opacity="0.5"/>
                            </g>

                            <!-- Central Core (SeptimusLab Logo) -->
                            <g transform="translate(250, 250)">
                                <!-- Swaying Animation for Logo -->
                                <g>
                                    <animateTransform attributeName="transform" type="rotate" values="-5; 5; -5" dur="6s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                                    <animateTransform attributeName="transform" type="translate" values="0,-5; 0,5; 0,-5" dur="4s" repeatCount="indefinite" additive="sum" />
                                    <circle r="45" fill="var(--bg-white)" filter="url(#drop-shadow)" />
                                    <image href="assets/septimuslab.png" x="-35" y="-35" width="70" height="70" />
                                </g>
                                
                                <circle r="60" fill="none" stroke="url(#secondaryGrad)" stroke-width="2" stroke-dasharray="10 15" opacity="0.6">
                                    <animateTransform attributeName="transform" type="rotate" from="0" to="360" dur="20s" repeatCount="indefinite" />
                                </circle>
                                <circle r="80" fill="none" stroke="url(#primaryGrad)" stroke-width="1.5" stroke-dasharray="20 10" opacity="0.4">
                                    <animateTransform attributeName="transform" type="rotate" from="360" to="0" dur="30s" repeatCount="indefinite" />
                                </circle>
                            </g>

                            <!-- Connection Lines (Data Streams) -->
                            <g fill="none" stroke="var(--turquoise)" stroke-width="1.5" stroke-dasharray="6 6" opacity="0.4">
                                <!-- Core to PureScan -->
                                <path d="M 230,220 Q 150,160 80,110">
                                    <animate attributeName="stroke-dashoffset" values="40; 0" dur="3s" repeatCount="indefinite" />
                                </path>
                                <!-- Core to Fintel -->
                                <path d="M 270,220 Q 340,160 400,100">
                                    <animate attributeName="stroke-dashoffset" values="40; 0" dur="2.5s" repeatCount="indefinite" />
                                </path>
                                <!-- Core to Foods -->
                                <path d="M 230,270 Q 150,330 90,400">
                                    <animate attributeName="stroke-dashoffset" values="40; 0" dur="3.5s" repeatCount="indefinite" />
                                </path>
                                <!-- Core to Validation -->
                                <path d="M 280,270 Q 320,300 370,360">
                                    <animate attributeName="stroke-dashoffset" values="40; 0" dur="2s" repeatCount="indefinite" />
                                </path>
                            </g>

                            <!-- Moving Data Packets on paths -->
                            <circle r="4" fill="var(--accent)" filter="url(#glow)">
                                <animateMotion path="M 230,220 Q 150,160 80,110" dur="3s" repeatCount="indefinite" />
                            </circle>
                            <circle r="4" fill="var(--turquoise)" filter="url(#glow)">
                                <animateMotion path="M 270,220 Q 340,160 400,100" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <circle r="4" fill="var(--amber)" filter="url(#glow)">
                                <animateMotion path="M 230,270 Q 150,330 90,400" dur="3.5s" repeatCount="indefinite" />
                            </circle>

                            <!-- Floating Holographic Data Nodes (Apps) -->
                            <!-- Node 1: PureScan -->
                            <g transform="translate(80, 110)">
                                <animateTransform attributeName="transform" type="translate" values="80,110; 80,100; 80,110" dur="6s" repeatCount="indefinite" />
                                <rect x="-40" y="-30" width="190" height="55" rx="14" fill="var(--bg-white)" stroke="var(--border)" stroke-width="1" filter="url(#drop-shadow)" />
                                <image href="assets/brand-logo-cosmetic.png" x="-32" y="-18" width="30" height="30" />
                                <text x="6" y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="var(--fg)">PureScan: Cosmetics</text>
                                <text x="6" y="12" font-family="Inter, sans-serif" font-size="11" fill="var(--muted)" data-tr="orbit-ps-desc">AI Label Analysis</text>
                            </g>

                            <!-- Node 2: Fintel -->
                            <g transform="translate(400, 100)">
                                <animateTransform attributeName="transform" type="translate" values="400,100; 410,100; 400,100" dur="8s" repeatCount="indefinite" />
                                <rect x="-170" y="-30" width="190" height="55" rx="14" fill="var(--bg-white)" stroke="var(--border)" stroke-width="1" filter="url(#drop-shadow)" />
                                <image href="assets/fintel.png" x="-162" y="-18" width="30" height="30" />
                                <text x="-124" y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="var(--fg)">Fintel</text>
                                <text x="-124" y="12" font-family="Inter, sans-serif" font-size="11" fill="var(--muted)" data-tr="orbit-fintel-desc">Smart Finance</text>
                            </g>

                            <!-- Node 3: Future Apps (Foods) -->
                            <g transform="translate(90, 400)">
                                <animateTransform attributeName="transform" type="translate" values="90,400; 100,390; 90,400" dur="7s" repeatCount="indefinite" />
                                <rect x="-40" y="-30" width="200" height="55" rx="14" fill="var(--bg-white)" stroke="var(--border)" stroke-width="1" filter="url(#drop-shadow)" />
                                <image href="assets/brand-logo-food.png" x="-32" y="-18" width="30" height="30" />
                                <text x="6" y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="var(--fg)">PureScan: Foods</text>
                                <text x="6" y="12" font-family="Inter, sans-serif" font-size="11" fill="var(--muted)" data-tr="orbit-foods-desc">AI Food Scanner</text>
                            </g>

                            <!-- Node 4: Validation -->
                            <g transform="translate(370, 360)">
                                <animateTransform attributeName="transform" type="translate" values="370,360; 360,370; 370,360" dur="9s" repeatCount="indefinite" />
                                <rect x="-100" y="-30" width="180" height="40" rx="20" fill="#DCFCE7" stroke="#166534" stroke-width="1" stroke-opacity="0.2" filter="drop-shadow(0px 4px 8px rgba(22, 101, 52, 0.1))" />
                                <svg x="-87" y="-22" width="24" height="24" viewBox="0 0 24 24" fill="#166534">
                                    <path fill-rule="evenodd" d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clip-rule="evenodd" />
                                </svg>
                                <text x="-52" y="-5" font-family="'Plus Jakarta Sans', sans-serif" font-size="13" font-weight="700" fill="#166534" data-tr="verified-label">100% Verified</text>
                            </g>
                        </svg>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function HeroSection() {
    return <HtmlBlock html={html} />;
}
