import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="vision-section" id="vision">
        <div class="container">
            <div class="vision-grid">
                <div>
                    <span class="section-label reveal" data-tr="vision-label">Yol Haritamız</span>
                    <h2 class="section-title reveal reveal-delay-1" style="text-align: left;" data-tr="vision-title">Nereye gidiyoruz</h2>
                    <p class="section-desc reveal reveal-delay-2" style="text-align: left; margin: 0;">
                        Sürekli inovasyon ve büyüme yolculuğumuzda önemli kilometre taşları.
                    </p>
                </div>

                <div class="timeline">
                    <div class="timeline-item reveal">
                        <div class="timeline-dot"></div>
                        <div class="timeline-year">2025</div>
                        <div class="timeline-title" data-tr="timeline-2025-title">Kuruluş</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-2025-1">SeptimusLab kuruldu</li>
                            <li data-tr="timeline-2025-2">Fintel Google Play'de yayınlandı</li>
                            <li data-tr="timeline-2025-3">AI destekli mobil deneyimlerle temeller atıldı</li>
                        </ul>
                    </div>

                    <div class="timeline-item reveal reveal-delay-1">
                        <div class="timeline-dot" style="border-color: var(--turquoise);"></div>
                        <div class="timeline-year" style="color: var(--turquoise);">2026</div>
                        <div class="timeline-title" data-tr="timeline-2026-title">Büyüme ve iOS</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-2026-1">PureScan Cosmetics yayınlandı</li>
                            <li data-tr="timeline-2026-2">PureScan Foods geliştirme aşamasında</li>
                            <li data-tr="timeline-2026-3">Apple ekosistemine genişleme</li>
                        </ul>
                    </div>

                    <div class="timeline-item reveal reveal-delay-2">
                        <div class="timeline-dot" style="border-color: #7C3AED;"></div>
                        <div class="timeline-year" style="color: #7C3AED;" data-tr="timeline-future">Ötesi</div>
                        <div class="timeline-title" data-tr="timeline-future-title">Küresel Erişim</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-future-1">Çoklu dil desteği</li>
                            <li data-tr="timeline-future-2">Küresel pazar genişlemesi</li>
                            <li data-tr="timeline-future-3">Öncü AI çözümleri</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function VisionSection() {
  return <HtmlBlock html={html} />;
}
