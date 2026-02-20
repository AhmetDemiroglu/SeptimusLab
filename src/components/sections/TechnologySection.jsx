import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="tech-section" id="technology">
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="tech-label">Teknoloji</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="tech-title">Modern teknolojiyle güçlendirildi</h2>
            </div>

            <div class="tech-grid">
                <div class="tech-card reveal">
                    <svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="3"/>
                        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
                    </svg>
                    <div class="tech-name">React & Capacitor</div>
                    <div class="tech-desc" data-tr="tech-1">Çapraz platform mobil</div>
                </div>

                <div class="tech-card reveal reveal-delay-1">
                    <svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="5" y="2" width="14" height="20" rx="2"/>
                        <line x1="12" y1="18" x2="12.01" y2="18"/>
                    </svg>
                    <div class="tech-name">React Native</div>
                    <div class="tech-desc" data-tr="tech-2">Yerel performans</div>
                </div>

                <div class="tech-card reveal reveal-delay-2">
                    <svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <path d="M12 2L2 7l10 5 10-5-10-5z"/>
                        <path d="M2 17l10 5 10-5M2 12l10 5 10-5"/>
                    </svg>
                    <div class="tech-name">Firebase</div>
                    <div class="tech-desc" data-tr="tech-3">Auth & Real-time DB</div>
                </div>

                <div class="tech-card reveal reveal-delay-3">
                    <svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <circle cx="12" cy="12" r="10"/>
                        <path d="M12 16v-4M12 8h.01"/>
                    </svg>
                    <div class="tech-name">AI Orkestrasyon</div>
                    <div class="tech-desc" data-tr="tech-4">Çoklu AI pipeline</div>
                </div>

                <div class="tech-card reveal reveal-delay-4">
                    <svg class="tech-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                        <rect x="2" y="3" width="20" height="14" rx="2"/>
                        <line x1="8" y1="21" x2="16" y2="21"/>
                        <line x1="12" y1="17" x2="12" y2="21"/>
                    </svg>
                    <div class="tech-name">Yerel API</div>
                    <div class="tech-desc" data-tr="tech-5">Kamera, Barkod, TTS</div>
                </div>
            </div>
        </div>
    </section>`;

export default function TechnologySection() {
  return <HtmlBlock html={html} />;
}
