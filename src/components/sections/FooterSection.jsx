import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<footer class="footer">
        <div class="container">
            <div class="footer-main">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="/assets/septimus-footer.png" alt="SeptimusLab Logo">
                        <span class="footer-logo-text brand-wordmark">
                            <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                        </span>
                    </div>
                    <p class="footer-tagline" data-tr="footer-desc">İzmir'den, bağımsız bir stüdyodan: gündelik hayata dokunan, yapay zeka destekli uygulamalar.</p>
                    <div class="footer-social">
                        <a href="https://play.google.com/store/apps/developer?id=SeptimusLab" target="_blank" rel="noopener noreferrer" class="social-link" aria-label="Google Play">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
                            </svg>
                        </a>
                        <a href="mailto:info@septimuslab.com" class="social-link" aria-label="E-posta">
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
                        <a href="mailto:info@septimuslab.com" class="footer-link" data-tr="footer-email">E-posta</a>
                    </div>
                </div>
            </div>

            <div class="footer-divider"></div>

            <div class="footer-bottom">
                <p class="footer-copyright">&copy; 2025 &middot; <span data-tr="footer-rights">Tüm hakları saklıdır.</span></p>
                <span class="brand-wordmark footer-bottom-brand">
                    <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                </span>
            </div>
        </div>
    </footer>`;

export default function FooterSection() {
    return <HtmlBlock html={html} />;
}
