import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<footer class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="assets/septimus-footer.png" alt="">
                        <span class="footer-logo-text brand-wordmark">
                            <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                        </span>
                    </div>
                    <p class="footer-tagline" data-tr="footer-desc">İzmir merkezli mobil yazılım stüdyosu. AI destekli uygulamalar geliştiriyoruz.</p>
                    <div class="footer-social">
                        <a href="https://play.google.com/store/apps/developer?id=SeptimusLab" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Google Play">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                <path d="M3.8 2.2C3.3 2.7 3 3.4 3 4.3v15.4c0 .9.3 1.6.8 2.1l9.1-9.8L3.8 2.2z" fill="#00A0FF"/>
                                <path d="M12.9 12L16 8.9l-8-4.5a2.2 2.2 0 0 0-2.3-.1L12.9 12z" fill="#EA4335"/>
                                <path d="M12.9 12l-7.2 7.7c.7.4 1.5.4 2.3 0l8-4.5-3.1-3.2z" fill="#34A853"/>
                                <path d="M16 8.9l2.9 1.7c1.5.8 1.5 2.3 0 3.1L16 15.2 12.9 12 16 8.9z" fill="#FBBC04"/>
                            </svg>
                        </a>
                        <a href="mailto:septimus.labb@gmail.com" class="social-link" aria-label="E-posta">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                                <polyline points="22,6 12,13 2,6"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/septimus.lab/" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Instagram">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="2.5" y="2.5" width="19" height="19" rx="5" ry="5"/>
                                <circle cx="12" cy="12" r="4.5"/>
                                <circle cx="17.5" cy="6.5" r="1"/>
                            </svg>
                        </a>
                        <a href="https://ahmetdemiroglu.dev" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Developer">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                                <polyline points="15 3 21 3 21 9"/>
                                <line x1="10" y1="14" x2="21" y2="3"/>
                            </svg>
                        </a>
                    </div>
                </div>

                <div>
                    <h4 class="footer-column-title" data-tr="footer-products">Ürünler</h4>
                    <div class="footer-links">
                        <a href="https://play.google.com/store/apps/details?id=com.septimuslab.purescan" target="_blank" rel="noopener noreferrer" class="footer-link">PureScan Cosmetics</a>
                        <a href="https://play.google.com/store/apps/details?id=com.fintel.app" target="_blank" rel="noopener noreferrer" class="footer-link">Fintel</a>
                        <a href="#products" class="footer-link">PureScan Foods</a>
                    </div>
                </div>

                <div>
                    <h4 class="footer-column-title" data-tr="footer-company">Şirket</h4>
                    <div class="footer-links">
                        <a href="#about" class="footer-link" data-tr="nav-about">Hakkımızda</a>
                        <a href="#vision" class="footer-link" data-tr="nav-vision">Vizyon</a>
                    </div>
                </div>

                <div>
                    <h4 class="footer-column-title" data-tr="footer-developer">Geliştirici</h4>
                    <div class="footer-links">
                        <a href="https://ahmetdemiroglu.dev" target="_blank" rel="noopener noreferrer" class="footer-link">ahmetdemiroglu.dev</a>
                        <a href="mailto:septimus.labb@gmail.com" class="footer-link" data-tr="footer-email">E-posta</a>
                    </div>
                </div>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-bottom">
                <p class="footer-copyright">2025 SeptimusLab. <span data-tr="footer-rights">Tüm hakları saklıdır.</span></p>
                <p class="footer-credit"><a href="https://ahmetdemiroglu.dev" target="_blank" rel="noopener noreferrer">Ahmet Demiroğlu</a></p>
            </div>
        </div>
    </footer>`;

export default function FooterSection() {
  return <HtmlBlock html={html} />;
}
