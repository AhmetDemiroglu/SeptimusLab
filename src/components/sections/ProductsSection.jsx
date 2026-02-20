import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="products-section" id="products">
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="products-label">Ürünlerimiz</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="products-title">Fark yaratan uygulamalar</h2>
                <p class="section-desc reveal reveal-delay-2" data-tr="products-desc">
                    Her uygulama özenle tasarlanmış, yapay zeka ile güçlendirilmiş ve kullanıcı deneyimi odaklı geliştirilmiştir.
                </p>
            </div>

            <div class="products-grid">
                <!-- PureScan Cosmetics -->
                <div class="product-card reveal">
                    <div class="product-preview preview-bg-turquoise">
                        <div class="product-status">
                            <span class="status-dot" style="background: var(--turquoise);"></span>
                            <span style="color: var(--turquoise);" data-tr="status-android">Android'de Mevcut</span>
                        </div>
                        <div class="preview-phone">
                            <div class="preview-phone-inner">
                                <img src="assets/purescan-screen.png" alt="PureScan Cosmetics">
                            </div>
                        </div>
                    </div>
                    <div class="product-body">
                        <div class="product-icon-small bg-turquoise">
                            <img src="assets/purescan.png" alt="">
                        </div>
                        <h3 class="product-name">PureScan Cosmetics</h3>
                        <p class="product-tagline" data-tr="purescan-tagline">
                            AI destekli kozmetik içerik analizörü. Ürün etiketlerini tarayın ve cilt bakım ürünlerinizin içinde ne olduğunu anında öğrenin.
                        </p>
                        <div class="product-features">
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--turquoise);"></span>
                                <span data-tr="purescan-f1">Akıllı Tarama</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--turquoise);"></span>
                                <span data-tr="purescan-f2">AI Derecelendirme</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--turquoise);"></span>
                                <span data-tr="purescan-f3">Cilt Analizi</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--turquoise);"></span>
                                <span data-tr="purescan-f4">AI Asistan</span>
                            </div>
                        </div>
                        <a href="https://play.google.com/store/apps/details?id=com.septimuslab.purescan" target="_blank" rel="noopener noreferrer" class="product-cta">
                            <span data-tr="cta-google-play">Google Play'de Gör</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- Fintel -->
                <div class="product-card reveal reveal-delay-1">
                    <div class="product-preview preview-bg-orange">
                        <div class="product-status">
                            <span class="status-dot" style="background: var(--accent);"></span>
                            <span style="color: var(--accent);" data-tr="status-android">Android'de Mevcut</span>
                        </div>
                        <div class="preview-phone">
                            <div class="preview-phone-inner">
                                <img src="assets/fintel-screen.png" alt="Fintel">
                            </div>
                        </div>
                    </div>
                    <div class="product-body">
                        <div class="product-icon-small bg-orange">
                            <img src="assets/fintel.png" alt="">
                        </div>
                        <h3 class="product-name">Fintel</h3>
                        <p class="product-tagline" data-tr="fintel-tagline">
                            AI destekli akıllı bütçe asistanı. Dönem bazlı bütçeler oluşturun ve Nova AI'dan kişiselleştirilmiş finansal bilgiler alın.
                        </p>
                        <div class="product-features">
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--accent);"></span>
                                <span data-tr="fintel-f1">Dönem Bütçeleri</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--accent);"></span>
                                <span data-tr="fintel-f2">Günlük Limitler</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--accent);"></span>
                                <span data-tr="fintel-f3">Nova AI</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--accent);"></span>
                                <span data-tr="fintel-f4">Performans</span>
                            </div>
                        </div>
                        <a href="https://play.google.com/store/apps/details?id=com.fintel.app" target="_blank" rel="noopener noreferrer" class="product-cta">
                            <span data-tr="cta-google-play">Google Play'de Gör</span>
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M5 12h14M12 5l7 7-7 7"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <!-- PureScan Foods -->
                <div class="product-card reveal reveal-delay-2">
                    <div class="product-preview preview-bg-amber">
                        <div class="product-status" style="background: var(--amber); color: white;">
                            <span data-tr="status-dev">Geliştirme Aşamasında</span>
                        </div>
                        <div class="preview-phone">
                            <div class="preview-phone-inner">
                                <img src="assets/purescan-foods-screen.png" alt="PureScan Foods">
                            </div>
                        </div>
                    </div>
                    <div class="product-body">
                        <div class="product-icon-small bg-amber">
                            <img src="assets/purescan2.png" alt="">
                        </div>
                        <h3 class="product-name">PureScan Foods</h3>
                        <p class="product-tagline" data-tr="purescan-foods-tagline">
                            PureScan'ın yeni bölümü. Daha sağlıklı beslenme tercihleri için AI destekli gıda içerik analizi.
                        </p>
                        <div class="product-features">
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--amber);"></span>
                                <span data-tr="purescan-foods-f1">Gıda Tarama</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--amber);"></span>
                                <span data-tr="purescan-foods-f2">Alerjen Uyarıları</span>
                            </div>
                            <div class="feature-tag">
                                <span class="feature-tag-dot" style="background: var(--amber);"></span>
                                <span data-tr="purescan-foods-f3">Besin Değerleri</span>
                            </div>
                        </div>
                        <span class="product-cta" style="color: var(--amber); cursor: default;">
                            <span data-tr="coming-soon">Yakında</span>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

export default function ProductsSection() {
  return <HtmlBlock html={html} />;
}
