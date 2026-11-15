import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="about-section" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="about-copy">
                    <span class="section-label reveal" data-tr="about-label">Stüdyo</span>
                    <h2 class="section-title reveal reveal-delay-1" data-tr="about-title">Bağımsız stüdyo, uçtan uca üretim</h2>
                    <p class="section-desc reveal reveal-delay-2" data-tr="about-desc">SeptimusLab bağımsız bir mobil ürün stüdyosu. Fikirden arayüz tasarımına, yapay zeka mimarisinden mağaza yayınına kadar tüm süreci kendi bünyemizde yürütüyoruz. Hantal süreçler yerine doğrudan ürüne odaklanıyor; kendi kullandığımız ve arkasında durduğumuz uygulamalar geliştiriyoruz.</p>

                    <div class="stat-strip reveal reveal-delay-3">
                        <div class="stat-item">
                            <div class="stat-value">4</div>
                            <div class="stat-label" data-tr="stat-apps">Yayında uygulama</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">2</div>
                            <div class="stat-label" data-tr="stat-ai">Platform</div>
                        </div>
                        <div class="stat-item">
                            <div class="stat-value">2025</div>
                            <div class="stat-label" data-tr="stat-founded">Kuruluş</div>
                        </div>
                    </div>

                    <!-- [FEATURE-4 START: Interactive 3x3 Septimus Roman Calendar Matrix] -->
                    <div class="septimus-matrix reveal reveal-delay-3" data-era="roman">
                        <div class="matrix-head">
                            <div class="matrix-title-group">
                                <span class="matrix-dot"></span>
                                <span class="matrix-eyebrow" data-tr="f4-eyebrow">ETKİLEŞİMLİ KÖKEN MATRİSİ</span>
                            </div>
                            <div class="matrix-era-switch" role="group" aria-label="Takvim dönemi seçimi">
                                <button type="button" class="matrix-era-btn active" data-era-btn="roman" data-tr="f4-era-roman">Roma Takvimi (7. Ay)</button>
                                <button type="button" class="matrix-era-btn" data-era-btn="modern" data-tr="f4-era-modern">+Ocak &amp; Şubat (9. Ay)</button>
                            </div>
                        </div>

                        <div class="matrix-body">
                            <div class="matrix-grid" id="septimusMatrixGrid" role="grid" aria-label="Septimus 3x3 Takvim Matrisi">
                                <button type="button" class="matrix-cell" data-slot="1">
                                    <span class="matrix-roman">I</span>
                                    <span class="matrix-month">Martius</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="2">
                                    <span class="matrix-roman">II</span>
                                    <span class="matrix-month">Aprilis</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="3">
                                    <span class="matrix-roman">III</span>
                                    <span class="matrix-month">Maius</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="4">
                                    <span class="matrix-roman">IV</span>
                                    <span class="matrix-month">Iunius</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="5">
                                    <span class="matrix-roman">V</span>
                                    <span class="matrix-month">Quintilis</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="6">
                                    <span class="matrix-roman">VI</span>
                                    <span class="matrix-month">Sextilis</span>
                                </button>
                                <button type="button" class="matrix-cell is-septimus" data-slot="7">
                                    <span class="matrix-roman">VII</span>
                                    <span class="matrix-month">Septimus</span>
                                    <svg class="matrix-seven-glyph" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                                        <path d="M5 6 H22 V23" stroke="currentColor" stroke-width="5.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="8">
                                    <span class="matrix-roman">VIII</span>
                                    <span class="matrix-month">October</span>
                                </button>
                                <button type="button" class="matrix-cell" data-slot="9">
                                    <span class="matrix-roman">IX</span>
                                    <span class="matrix-month">November</span>
                                </button>
                            </div>

                            <div class="matrix-info">
                                <div class="matrix-badge" id="matrixBadge" data-tr="f4-badge-roman">7. KARE · SEPTIMUS</div>
                                <p class="matrix-readout" id="matrixReadout" data-tr="f4-readout-roman">Logomuzdaki 3x3 dizilimin 7. karesi (sol alt), eski Roma takviminde yılın 7. ayı olan Eylül'ü (Septimus) temsil eder.</p>
                            </div>
                        </div>
                    </div>
                    <!-- [FEATURE-4 END] -->
                </div>

                <div class="about-visual reveal reveal-delay-2">
                    <div class="studio-card" data-tilt="4">
                        <header class="studio-card-head">
                            <img src="/assets/brand/septimuslab-isaret-acik-zemin.svg" data-logo-light="/assets/brand/septimuslab-isaret-acik-zemin.svg" data-logo-dark="/assets/brand/septimuslab-isaret-koyu-zemin.svg" alt="SeptimusLab" class="studio-card-logo">
                            <div class="studio-card-id">
                                <span class="brand-wordmark studio-card-name">
                                    <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                                </span>
                                <span class="studio-card-est" data-tr="card-est">KURULUŞ 2025</span>
                            </div>
                        </header>

                        <blockquote class="studio-card-quote" data-tr="card-quote">Eylül (September), Ocak ve Şubat takvime eklenmeden önce antik Roma yılının yedinci ayıydı. Takvim değişip dokuzuncu sıraya geçse de kökü değişmedi; Latince “yedinci” anlamına gelen Septimus, stüdyomuzun adı oldu.</blockquote>

                        <ul class="studio-card-specs">
                            <li>
                                <span data-tr="card-row-loc-label">Ürünler</span>
                                <strong data-tr="card-row-loc">4 uygulama</strong>
                            </li>
                            <li>
                                <span data-tr="card-row-focus-label">Odak</span>
                                <strong data-tr="card-row-focus">AI destekli mobil ürünler</strong>
                            </li>
                            <li>
                                <span data-tr="card-row-platform-label">Platform</span>
                                <strong data-tr="card-row-platform">iOS · Android</strong>
                            </li>
                        </ul>

                        <div class="studio-stamp" aria-hidden="true">
                            <svg viewBox="0 0 120 120" class="studio-stamp-ring">
                                <defs>
                                    <path id="stampCircle" d="M60,60 m-46,0 a46,46 0 1,1 92,0 a46,46 0 1,1 -92,0" />
                                </defs>
                                <text>
                                    <textPath href="#stampCircle" textLength="288" lengthAdjust="spacingAndGlyphs">SEPTIMUSLAB &#8226; VII &#8226; EST. 2025 &#8226;</textPath>
                                </text>
                            </svg>
                            <img src="/assets/brand/septimuslab-isaret-acik-zemin.svg" data-logo-light="/assets/brand/septimuslab-isaret-acik-zemin.svg" data-logo-dark="/assets/brand/septimuslab-isaret-koyu-zemin.svg" alt="" class="studio-stamp-logo">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function AboutSection() {
    return <HtmlBlock html={html} />;
}
