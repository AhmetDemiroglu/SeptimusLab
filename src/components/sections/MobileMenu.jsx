import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<div class="mobile-menu" role="dialog" aria-modal="true" aria-label="Mobil menü">
        <button class="mobile-menu-close" aria-label="Menüyü kapat">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
        </button>
        <a href="#about" data-tr="nav-about">Hakkımızda</a>
        <a href="#products" data-tr="nav-products">Ürünler</a>
        <a href="#technology" data-tr="nav-technology">Teknoloji</a>
        <a href="#vision" data-tr="nav-vision">Vizyon</a>
        <a href="#contact" data-tr="nav-contact">İletişim</a>
    </div>`;

export default function MobileMenu() {
  return <HtmlBlock html={html} />;
}
