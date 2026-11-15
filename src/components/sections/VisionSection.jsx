import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="vision-section" id="vision">
        <div class="container">
            <div class="vision-grid">
                <div class="vision-copy">
                    <span class="section-label reveal" data-tr="vision-label">Yolculuk &amp; Vizyon</span>
                    <h2 class="section-title reveal reveal-delay-1" data-tr="vision-title">Adım adım büyüyen ekosistem</h2>
                    <p class="section-desc reveal reveal-delay-2" data-tr="vision-desc">Her yeni üründe altyapımızı ve tasarım dilimizi bir adım ileri taşıyoruz.</p>
                </div>

                <div class="timeline">
                    <div class="timeline-item reveal">
                        <div class="timeline-dot"></div>
                        <div class="timeline-year">2025</div>
                        <div class="timeline-title" data-tr="timeline-2025-title">Başlangıç</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-2025-1">SeptimusLab kuruldu</li>
                            <li data-tr="timeline-2025-2">Fintel Google Play'de yayınlandı</li>
                            <li data-tr="timeline-2025-3">İlk yapay zeka destekli analiz motoru devreye alındı</li>
                        </ul>
                    </div>

                    <div class="timeline-item timeline-teal reveal reveal-delay-1">
                        <div class="timeline-dot"></div>
                        <div class="timeline-year">2026</div>
                        <div class="timeline-title" data-tr="timeline-2026-title">iOS ve yeni uygulamalar</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-2026-1">PureScan Cosmetics yayınlandı</li>
                            <li data-tr="timeline-2026-2">PureScan Foods App Store ve Google Play'de</li>
                            <li data-tr="timeline-2026-3">Pause Menu web ve mobilde yayında</li>
                        </ul>
                    </div>

                    <div class="timeline-item timeline-navy reveal reveal-delay-2">
                        <div class="timeline-dot"></div>
                        <div class="timeline-year" data-tr="timeline-future">Sırada</div>
                        <div class="timeline-title" data-tr="timeline-future-title">Yol Haritası</div>
                        <ul class="timeline-list">
                            <li data-tr="timeline-future-1">Çoklu dil desteği ve küresel ölçekleme</li>
                            <li data-tr="timeline-future-2">Mevcut ürünlerde derinleşen yapay zeka yetenekleri</li>
                            <li data-tr="timeline-future-3">Yeni dikeylerde mobil ürünler</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function VisionSection() {
  return <HtmlBlock html={html} />;
}
