import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="tech-section" id="technology">
        <span class="ghost-index ghost-left" data-parallax="0.05" aria-hidden="true">03</span>
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="tech-label">Teknoloji</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="tech-title">Sahne arkasında titiz mühendislik</h2>
            </div>

            <div class="tech-grid">
                <div class="tech-card reveal">
                    <span class="tech-index">01</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="8" fill="currentColor" opacity="0.9">
                            <animate attributeName="r" values="8;11;8" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.9;1;0.9" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <g stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
                            <ellipse cx="50" cy="50" rx="35" ry="12" opacity="0.4">
                                <animateTransform attributeName="transform" type="rotate" values="0 50 50; 360 50 50" dur="15s" repeatCount="indefinite"/>
                            </ellipse>
                            <ellipse cx="50" cy="50" rx="35" ry="12" opacity="0.6">
                                <animateTransform attributeName="transform" type="rotate" values="60 50 50; 420 50 50" dur="12s" repeatCount="indefinite"/>
                            </ellipse>
                            <ellipse cx="50" cy="50" rx="35" ry="12" opacity="0.8">
                                <animateTransform attributeName="transform" type="rotate" values="120 50 50; 480 50 50" dur="18s" repeatCount="indefinite"/>
                            </ellipse>
                        </g>
                    </svg>
                    <div class="tech-name">React &amp; Capacitor</div>
                    <div class="tech-desc" data-tr="tech-1">Çapraz platform mobil</div>
                </div>

                <div class="tech-card reveal reveal-delay-1">
                    <span class="tech-index">02</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M 20 80 A 45 45 0 1 1 80 80" stroke="currentColor" stroke-width="6" stroke-linecap="round" opacity="0.2"/>
                        <path d="M 20 80 A 45 45 0 1 1 80 80" stroke="currentColor" stroke-width="6" stroke-linecap="round" stroke-dasharray="212" stroke-dashoffset="212">
                            <animate attributeName="stroke-dashoffset" values="212; 40; 60; 20" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                        </path>
                        <g stroke="currentColor" stroke-width="3" opacity="0.5" stroke-linecap="round">
                            <line x1="15" y1="50" x2="25" y2="50" />
                            <line x1="85" y1="50" x2="75" y2="50" />
                            <line x1="50" y1="15" x2="50" y2="25" />
                            <line x1="25" y1="25" x2="32" y2="32" />
                            <line x1="75" y1="25" x2="68" y2="32" />
                        </g>
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="-45 50 50; 120 50 50; 100 50 50; 135 50 50" dur="4s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                            <line x1="50" y1="50" x2="20" y2="50" stroke="currentColor" stroke-width="4" stroke-linecap="round" />
                            <circle cx="50" cy="50" r="6" fill="currentColor"/>
                        </g>
                    </svg>
                    <div class="tech-name">React Native</div>
                    <div class="tech-desc" data-tr="tech-2">Yerel performans</div>
                </div>

                <div class="tech-card reveal reveal-delay-2">
                    <span class="tech-index">03</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="currentColor" stroke-width="4" stroke-linejoin="round" fill="none">
                            <path d="M20 30 C 20 20, 80 20, 80 30 C 80 40, 20 40, 20 30 Z" opacity="0.4"/>
                            <path d="M20 50 C 20 60, 80 60, 80 50" opacity="0.7"/>
                            <line x1="20" y1="30" x2="20" y2="70" opacity="0.4"/>
                            <line x1="80" y1="30" x2="80" y2="70" opacity="0.4"/>
                            <path d="M20 70 C 20 80, 80 80, 80 70"/>
                        </g>
                        <g fill="currentColor">
                            <circle cx="40" cy="30" r="3">
                                <animate attributeName="cy" values="70; 30; 70" dur="2s" repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0; 1; 0" dur="2s" repeatCount="indefinite"/>
                            </circle>
                            <circle cx="60" cy="50" r="3">
                                <animate attributeName="cy" values="70; 30; 70" dur="3s" repeatCount="indefinite"/>
                                <animate attributeName="opacity" values="0; 1; 0" dur="3s" repeatCount="indefinite"/>
                            </circle>
                            <path d="M50 40 L65 45 L65 60 C65 75, 50 85, 50 85 C50 85, 35 75, 35 60 L35 45 Z" fill="#FFFFFF" stroke="currentColor" stroke-width="3" stroke-linejoin="round"/>
                            <circle cx="50" cy="57" r="4" fill="currentColor">
                                 <animate attributeName="opacity" values="0.5; 1; 0.5" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                            <path d="M 45 52 A 5 5 0 0 1 55 52" stroke="currentColor" stroke-width="3" fill="none" stroke-linecap="round"/>
                        </g>
                    </svg>
                    <div class="tech-name">Firebase</div>
                    <div class="tech-desc" data-tr="tech-3">Auth &amp; Real-time DB</div>
                </div>

                <div class="tech-card reveal reveal-delay-3">
                    <span class="tech-index">04</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g stroke="currentColor" stroke-width="2" opacity="0.3" stroke-linecap="round">
                            <line x1="20" y1="50" x2="50" y2="20" />
                            <line x1="20" y1="50" x2="50" y2="80" />
                            <line x1="50" y1="20" x2="80" y2="50" />
                            <line x1="50" y1="80" x2="80" y2="50" />
                            <line x1="50" y1="20" x2="50" y2="80" />
                        </g>
                        <g fill="currentColor">
                            <circle r="3">
                                <animateMotion path="M20 50 L50 20" dur="1.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3">
                                <animateMotion path="M20 50 L50 80" dur="2s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3">
                                <animateMotion path="M50 20 L80 50" dur="1.8s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3">
                                <animateMotion path="M50 80 L80 50" dur="1.6s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;0" dur="1.6s" repeatCount="indefinite" />
                            </circle>
                        </g>
                        <circle cx="20" cy="50" r="8" fill="#FFFFFF" stroke="currentColor" stroke-width="3" />
                        <circle cx="50" cy="20" r="10" fill="#FFFFFF" stroke="currentColor" stroke-width="3">
                            <animate attributeName="r" values="10;12;10" dur="2s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="50" cy="80" r="10" fill="#FFFFFF" stroke="currentColor" stroke-width="3">
                            <animate attributeName="r" values="10;13;10" dur="3s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="50" r="12" fill="currentColor">
                            <animate attributeName="opacity" values="0.7;1;0.7" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="50" r="18" stroke="currentColor" stroke-width="2" opacity="0.5" fill="none">
                            <animate attributeName="r" values="12;24" dur="1.5s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.5;0" dur="1.5s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                    <div class="tech-name">AI Orkestrasyon</div>
                    <div class="tech-desc" data-tr="tech-4">Çoklu AI pipeline</div>
                </div>

                <div class="tech-card reveal reveal-delay-4">
                    <span class="tech-index">05</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="25" y="25" width="50" height="50" rx="10" stroke="currentColor" stroke-width="4" fill="none"/>
                        <line x1="20" y1="25" x2="80" y2="25" stroke="#C45D3E" stroke-width="3">
                            <animate attributeName="y1" values="25;75;25" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="y2" values="25;75;25" dur="3s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0;1;1;0;0" dur="3s" repeatCount="indefinite" />
                        </line>
                        <g stroke="currentColor" stroke-width="2" stroke-linecap="round" opacity="0.6">
                            <line x1="35" y1="35" x2="35" y2="65" />
                            <line x1="42" y1="35" x2="42" y2="65" stroke-width="3" />
                            <line x1="50" y1="35" x2="50" y2="65" />
                            <line x1="58" y1="35" x2="58" y2="65" stroke-width="4" />
                            <line x1="65" y1="35" x2="65" y2="65" />
                        </g>
                        <path d="M 15 40 Q 5 50 15 60" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
                        </path>
                        <path d="M 85 40 Q 95 50 85 60" stroke="currentColor" stroke-width="3" stroke-linecap="round" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.5s" repeatCount="indefinite" />
                        </path>
                    </svg>
                    <div class="tech-name">Yerel API</div>
                    <div class="tech-desc" data-tr="tech-5">Kamera, Barkod, TTS</div>
                </div>
            </div>
        </div>
    </section>`;

export default function TechnologySection() {
    return <HtmlBlock html={html} />;
}
