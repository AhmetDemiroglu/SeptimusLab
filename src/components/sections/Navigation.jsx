import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<nav class="nav-wrapper" role="navigation" aria-label="Ana navigasyon">
        <div class="container flex items-center justify-between h-16">
            <a href="#" class="nav-brand flex items-center gap-2.5" aria-label="SeptimusLab Ana Sayfa">
                <img src="assets/septimus-footer.png" alt="" class="w-9 h-9 rounded-lg object-contain">
                <span class="brand-wordmark">
                    <span class="brand-septimus">Septimus</span><span class="brand-lab">Lab</span>
                </span>
            </a>

            <div class="nav-links hidden md:flex items-center gap-8">
                <a href="#about" class="nav-link" data-tr="nav-about">Hakkımızda</a>
                <a href="#products" class="nav-link" data-tr="nav-products">Ürünler</a>
                <a href="#technology" class="nav-link" data-tr="nav-technology">Teknoloji</a>
                <a href="#vision" class="nav-link" data-tr="nav-vision">Vizyon</a>
                <a href="#contact" class="nav-link" data-tr="nav-contact">İletişim</a>
            </div>

            <div class="flex items-center gap-3">
                <div class="lang-toggle" role="group" aria-label="Dil seçimi">
                    <button class="lang-btn active" data-lang="tr" aria-pressed="true">TR</button>
                    <button class="lang-btn" data-lang="en" aria-pressed="false">EN</button>
                </div>
                <button class="mobile-menu-btn" aria-label="Menüyü aç" aria-expanded="false">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <line x1="4" y1="6" x2="20" y2="6"></line>
                        <line x1="4" y1="12" x2="20" y2="12"></line>
                        <line x1="4" y1="18" x2="20" y2="18"></line>
                    </svg>
                </button>
            </div>
        </div>
    </nav>`;

export default function Navigation() {
  return <HtmlBlock html={html} />;
}
