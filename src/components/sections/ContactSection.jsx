import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="contact-section" id="contact">
        <div class="contact-glow contact-glow-1" aria-hidden="true" data-parallax="0.06"></div>
        <div class="contact-glow contact-glow-2" aria-hidden="true" data-parallax="0.1"></div>

        <div class="container">
            <div class="contact-content">
                <div class="reveal">
                    <span class="section-label contact-overline" data-tr="contact-label">İletişime Geçin</span>
                </div>
                <h2 class="contact-title reveal reveal-delay-1" data-tr="contact-title">Aklınızda bir fikir mi var? Konuşalım</h2>
                <p class="contact-desc reveal reveal-delay-2" data-tr="contact-desc">
                    Bir soru, bir iş birliği önerisi ya da sadece merhaba demek için: yazın, her mesajı okuyoruz.
                </p>
                <div class="contact-buttons reveal reveal-delay-3">
                    <a href="mailto:info@septimuslab.com" class="btn-primary btn-lg">
                        <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                            <polyline points="22,6 12,13 2,6"/>
                        </svg>
                        <span data-tr="contact-email">E-posta Gönder</span>
                    </a>
                    <a href="https://ahmetdemiroglu.dev" target="_blank" rel="noopener noreferrer" class="btn-ghost btn-lg">
                        <span data-tr="contact-founder">Kurucuyla Tanışın</span>
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true">
                            <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                            <polyline points="15 3 21 3 21 9"/>
                            <line x1="10" y1="14" x2="21" y2="3"/>
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    </section>`;

export default function ContactSection() {
    return <HtmlBlock html={html} />;
}
