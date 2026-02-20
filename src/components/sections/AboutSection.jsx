import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="about-section" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="reveal">
                    <span class="section-label" data-tr="about-label">Biz Kimiz</span>
                    <h2 class="section-title" style="text-align: left;" data-tr="about-title">Geleceği inşa ediyoruz, her seferinde bir uygulama</h2>
                    <p class="section-desc" data-tr="about-desc" style="text-align: left; margin: 0;">
                        İzmir merkezli bağımsız mobil yazılım stüdyosu. AI destekli uygulamalarla kullanıcıların bilinçli kararlar almasını sağlıyoruz. Her ürünümüz, teknoloji ile insan ihtiyaçlarını buluşturmak için özenle tasarlanmıştır.
                    </p>
                    <div class="stat-grid">
                        <div class="stat-card">
                            <div class="stat-value">2</div>
                            <div class="stat-label" data-tr="stat-apps">Yayınlanan Uygulama</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">AI</div>
                            <div class="stat-label" data-tr="stat-ai">Yapay Zeka</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">2025</div>
                            <div class="stat-label" data-tr="stat-founded">Kuruluş</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">∞</div>
                            <div class="stat-label" data-tr="stat-passion">Tutku</div>
                        </div>
                    </div>
                </div>

                <div class="reveal reveal-delay-2">
                    <div class="phone-mockup">
                        <div class="phone-frame">
                            <div class="phone-screen">
                                <div class="phone-notch"></div>
                                <div class="scan-animation">
                                    <div class="scan-line"></div>
                                    <div class="scan-content">
                                        <div class="scan-icon">
                                            <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="2">
                                                <path d="M23 19a2 2 0 01-2 2H3a2 2 0 01-2-2V8a2 2 0 012-2h4l2-3h6l2 3h4a2 2 0 012 2z"/>
                                                <circle cx="12" cy="13" r="4"/>
                                            </svg>
                                        </div>
                                        <span style="font-size: 0.75rem; color: var(--muted);" data-tr="scan-scanning">Etiket Taranıyor...</span>
                                    </div>
                                </div>
                                <div class="scan-result">
                                    <div class="flex items-center justify-between mb-2">
                                        <span style="font-size: 0.7rem; font-weight: 600; color: var(--fg);" data-tr="scan-analysis">İçerik Analizi</span>
                                        <div class="result-badge">
                                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3">
                                                <polyline points="20 6 9 17 4 12"/>
                                            </svg>
                                            <span data-tr="scan-safe">Güvenli</span>
                                        </div>
                                    </div>
                                    <div style="height: 4px; background: var(--border); border-radius: 2px; overflow: hidden;">
                                        <div style="width: 92%; height: 100%; background: linear-gradient(90deg, var(--turquoise), #3AAF9B); border-radius: 2px;"></div>
                                    </div>
                                    <span style="font-size: 0.6rem; color: var(--muted); margin-top: 4px; display: block;">92% <span data-tr="scan-score">Güvenlik Skoru</span></span>
                                </div>
                            </div>
                        </div>
                        <div class="floating-badge" style="top: 55px; right: -20px; animation-delay: 0s;">
                            <div class="flex items-center gap-2">
                                <img src="assets/purescan.png" alt="" style="width: 18px; height: 18px;">
                                <span style="font-size: 0.7rem; font-weight: 600; color: var(--fg);">PureScan: Cosmetics</span>
                            </div>
                        </div>
                        <div class="floating-badge" style="top: 130px; left: -30px; animation-delay: 0.5s;">
                            <div class="flex items-center gap-2">
                                <img src="assets/fintel.png" alt="" style="width: 18px; height: 18px;">
                                <span style="font-size: 0.7rem; font-weight: 600; color: var(--fg);">Fintel</span>
                            </div>
                        </div>
                        <div class="floating-badge" style="top: 210px; right: -50px; animation-delay: 2s;">
                            <div class="flex items-center gap-2">
                                <img src="assets/purescan2.png" alt="" style="width: 18px; height: 18px;">
                                <span style="font-size: 0.7rem; font-weight: 600; color: var(--fg);">PureScan: Foods</span>
                                <span style="font-size: 0.55rem; background: var(--amber-light); color: var(--amber); padding: 2px 4px; border-radius: 3px;" data-tr="badge-soon">Yakında</span>
                            </div>
                        </div>
                        <div class="floating-badge" style="bottom: 150px; right: -25px; animation-delay: 1s;">
                            <div class="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <path d="M12 16v-4M12 8h.01"/>
                                </svg>
                                <span style="font-size: 0.7rem; color: var(--fg);" data-tr="badge-ai">AI Analizi</span>
                            </div>
                        </div>
                        <div class="floating-badge" style="bottom: 80px; left: -35px; animation-delay: 1.5s;">
                            <div class="flex items-center gap-2">
                                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--turquoise)" stroke-width="2">
                                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                                <span style="font-size: 0.7rem; color: var(--fg);" data-tr="badge-verified">Doğrulanmış</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function AboutSection() {
  return <HtmlBlock html={html} />;
}
