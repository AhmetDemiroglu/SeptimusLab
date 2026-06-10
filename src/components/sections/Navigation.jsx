import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<nav class="nav-wrapper" role="navigation" aria-label="Ana navigasyon">
        <div class="container nav-bar">
            <a href="#" class="nav-brand" aria-label="SeptimusLab Ana Sayfa">
                <img src="/assets/septimus-footer.png" alt="SeptimusLab Logo" class="nav-brand-logo">
                <span class="brand-wordmark">
                    <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                </span>
            </a>

            <div class="nav-links">
                <a href="#about" class="nav-link" data-tr="nav-about">Hakkımızda</a>
                <a href="#products" class="nav-link" data-tr="nav-products">Ürünler</a>
                <a href="#technology" class="nav-link" data-tr="nav-technology">Teknoloji</a>
                <a href="#vision" class="nav-link" data-tr="nav-vision">Vizyon</a>
                <a href="#contact" class="nav-link" data-tr="nav-contact">İletişim</a>
            </div>

            <div class="nav-actions">
                <div class="lang-toggle" role="group" aria-label="Dil seçimi">
                    <button class="lang-btn active" data-lang="tr" aria-pressed="true" aria-label="Türkçe">
                        <svg class="flag-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <mask id="tr-mask">
                                <circle cx="256" cy="256" r="256" fill="white" />
                            </mask>
                            <g mask="url(#tr-mask)">
                                <rect width="512" height="512" fill="#E30A17" />
                                <circle cx="215" cy="256" r="128" fill="#fff" />
                                <circle cx="245" cy="256" r="102" fill="#E30A17" />
                                <polygon fill="#fff" points="314,256 428,293 358,196 358,316 428,219" />
                            </g>
                        </svg>
                    </button>
                    <button class="lang-btn" data-lang="en" aria-pressed="false" aria-label="English">
                        <svg class="flag-icon" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                            <mask id="us-mask">
                                <circle cx="256" cy="256" r="256" fill="white" />
                            </mask>
                            <g mask="url(#us-mask)">
                                <rect width="512" height="512" fill="#fff" />
                                <rect y="39" width="512" height="39" fill="#D52B1E" />
                                <rect y="118" width="512" height="39" fill="#D52B1E" />
                                <rect y="196" width="512" height="39" fill="#D52B1E" />
                                <rect y="275" width="512" height="39" fill="#D52B1E" />
                                <rect y="354" width="512" height="39" fill="#D52B1E" />
                                <rect y="433" width="512" height="39" fill="#D52B1E" />
                                <rect width="256" height="275" fill="#00205B" />
                                <g fill="#fff">
                                    <circle cx="45" cy="45" r="12" />
                                    <circle cx="105" cy="45" r="12" />
                                    <circle cx="165" cy="45" r="12" />
                                    <circle cx="225" cy="45" r="12" />
                                    <circle cx="75" cy="90" r="12" />
                                    <circle cx="135" cy="90" r="12" />
                                    <circle cx="195" cy="90" r="12" />
                                    <circle cx="45" cy="135" r="12" />
                                    <circle cx="105" cy="135" r="12" />
                                    <circle cx="165" cy="135" r="12" />
                                    <circle cx="225" cy="135" r="12" />
                                </g>
                            </g>
                        </svg>
                    </button>
                </div>
                <button class="mobile-menu-btn" aria-label="Menüyü aç" aria-expanded="false">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                        <line x1="4" y1="7" x2="20" y2="7"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="17" x2="14" y2="17"></line>
                    </svg>
                </button>
            </div>
        </div>
    </nav>`;

export default function Navigation() {
    return <HtmlBlock html={html} />;
}
