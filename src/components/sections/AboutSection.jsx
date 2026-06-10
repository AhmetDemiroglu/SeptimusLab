import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="about-section" id="about">
        <span class="ghost-index ghost-left" data-parallax="0.05" aria-hidden="true">01</span>
        <div class="container">
            <div class="about-grid">
                <div class="about-copy">
                    <span class="section-label reveal" data-tr="about-label">Biz Kimiz</span>
                    <h2 class="section-title reveal reveal-delay-1" data-tr="about-title">Geleceği, uygulama uygulama inşa ediyoruz</h2>
                    <p class="section-desc reveal reveal-delay-2" data-tr="about-desc">
                        SeptimusLab, İzmir'de kurulmuş bağımsız bir mobil yazılım stüdyosu. Kalabalık ekipler yerine özenli işlere inanıyoruz; yapay zekayı gösteriş için değil, insanların daha bilinçli seçimler yapabilmesi için kullanıyoruz. Her ürünümüz, gerçek bir günlük sorunun cevabı olarak doğdu.
                    </p>

                    <div class="stat-strip reveal reveal-delay-3">
                        <div class="stat-item">
                            <div class="stat-value">3</div>
                            <div class="stat-label" data-tr="stat-apps">Yayınlanan Uygulama</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">AI</div>
                            <div class="stat-label" data-tr="stat-ai">Yapay Zeka</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">2025</div>
                            <div class="stat-label" data-tr="stat-founded">Kuruluş</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">&#8734;</div>
                            <div class="stat-label" data-tr="stat-passion">Tutku</div>
                        </div>
                    </div>
                </div>

                <div class="about-visual reveal reveal-delay-2">
                    <div class="studio-card" data-tilt="4">
                        <header class="studio-card-head">
                            <img src="/assets/septimuslab.png" alt="SeptimusLab" class="studio-card-logo">
                            <div class="studio-card-id">
                                <span class="brand-wordmark studio-card-name">
                                    <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                                </span>
                                <span class="studio-card-est" data-tr="card-est">KURULUŞ 2025</span>
                            </div>
                        </header>

                        <blockquote class="studio-card-quote" data-tr="card-quote">
                            "İyi bir uygulama, siz sormadan cevap verir."
                        </blockquote>

                        <ul class="studio-card-specs">
                            <li>
                                <span data-tr="card-row-loc-label">Konum</span>
                                <strong data-tr="card-row-loc">İzmir, Türkiye</strong>
                            </li>
                            <li>
                                <span data-tr="card-row-focus-label">Odak</span>
                                <strong data-tr="card-row-focus">AI &times; Mobil</strong>
                            </li>
                            <li>
                                <span data-tr="card-row-platform-label">Platform</span>
                                <strong data-tr="card-row-platform">Android &middot; iOS</strong>
                            </li>
                        </ul>

                        <div class="studio-stamp" aria-hidden="true">
                            <svg viewBox="0 0 120 120" class="studio-stamp-ring">
                                <defs>
                                    <path id="stampCircle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                                </defs>
                                <text>
                                    <textPath href="#stampCircle" textLength="288" lengthAdjust="spacingAndGlyphs">SEPTIMUSLAB &#8226; IZMIR &#8226; EST. 2025 &#8226;</textPath>
                                </text>
                            </svg>
                            <img src="/assets/septimuslab.png" alt="" class="studio-stamp-logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function AboutSection() {
    return <HtmlBlock html={html} />;
}
