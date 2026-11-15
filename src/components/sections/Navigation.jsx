import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<nav class="nav-wrapper" role="navigation" aria-label="Ana navigasyon">
        <div class="container nav-bar">
            <span class="glass-stack" aria-hidden="true">
                <span class="glass-base"></span>
                <span class="glass-shine"></span>
            </span>

            <a href="#" class="nav-brand" aria-label="SeptimusLab Ana Sayfa">
                <img src="/assets/brand/septimuslab-lockup-yatay-acik-zemin.svg" data-logo-light="/assets/brand/septimuslab-lockup-yatay-acik-zemin.svg" data-logo-dark="/assets/brand/septimuslab-lockup-yatay-koyu-zemin.svg" alt="SeptimusLab" class="nav-brand-logo" width="184" height="27">
            </a>

            <div class="nav-links">
                <a href="#about" class="nav-link" data-tr="nav-about">Hakkımızda</a>
                <a href="#products" class="nav-link" data-tr="nav-products">Ürünler</a>
                <a href="#technology" class="nav-link" data-tr="nav-technology">Teknoloji</a>
                <a href="#vision" class="nav-link" data-tr="nav-vision">Vizyon</a>
                <a href="#contact" class="nav-link" data-tr="nav-contact">İletişim</a>
            </div>

            <div class="nav-actions">
                <!-- [FEATURE-3 START: Night-Navy Dark Theme & Web Audio Micro-Haptics] -->
                <div class="lab-controls" role="group" aria-label="Stüdyo görünüm ve ses kontrolleri">
                    <button type="button" class="lab-ctrl-btn" id="themeToggleBtn" aria-pressed="false" aria-label="Gece Mavisi Modu" title="Gece Mavisi Modu (#0E1A33)">
                        <svg class="lab-icon lab-icon-moon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
                        </svg>
                        <svg class="lab-icon lab-icon-sun" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="4"></circle>
                            <line x1="12" y1="2" x2="12" y2="4"></line>
                            <line x1="12" y1="20" x2="12" y2="22"></line>
                            <line x1="4.93" y1="4.93" x2="6.34" y2="6.34"></line>
                            <line x1="17.66" y1="17.66" x2="19.07" y2="19.07"></line>
                            <line x1="2" y1="12" x2="4" y2="12"></line>
                            <line x1="20" y1="12" x2="22" y2="12"></line>
                            <line x1="4.93" y1="19.07" x2="6.34" y2="17.66"></line>
                            <line x1="17.66" y1="6.34" x2="19.07" y2="4.93"></line>
                        </svg>
                    </button>
                    <button type="button" class="lab-ctrl-btn active" id="soundToggleBtn" aria-pressed="true" aria-label="Mikro Ses Efektleri" title="Mikro Ses Efektleri">
                        <svg class="lab-icon lab-icon-sound-on" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                            <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                        </svg>
                        <svg class="lab-icon lab-icon-sound-off" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
                            <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                            <line x1="23" y1="9" x2="17" y2="15"></line>
                            <line x1="17" y1="9" x2="23" y2="15"></line>
                        </svg>
                    </button>
                </div>
                <!-- [FEATURE-3 END] -->
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

            <span class="scroll-progress-track" aria-hidden="true"><span class="scroll-progress"></span></span>
        </div>
    </nav>`;

export default function Navigation() {
    return <HtmlBlock html={html} />;
}
