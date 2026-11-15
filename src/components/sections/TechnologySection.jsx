import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="tech-section" id="technology">
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="tech-label">Altyapı</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="tech-title">Uygulamalarımıza güç veren mimari</h2>
            </div>

            <!-- [FEATURE-2 START: Unified Ecosystem Architecture Board] -->
            <div class="tech-board reveal reveal-delay-1">
            <!-- [FEATURE-2 END] -->

            <div class="tech-grid">
                <div class="tech-card reveal" data-tech-node="1">
                    <span class="tech-index">01</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g stroke="currentColor" stroke-width="2.4" stroke-linecap="round" fill="none">
                            <ellipse cx="50" cy="50" rx="37" ry="13" opacity="0.32">
                                <animateTransform attributeName="transform" type="rotate" values="0 50 50; 360 50 50" dur="16s" repeatCount="indefinite"/>
                            </ellipse>
                            <ellipse cx="50" cy="50" rx="37" ry="13" opacity="0.55">
                                <animateTransform attributeName="transform" type="rotate" values="60 50 50; 420 50 50" dur="13s" repeatCount="indefinite"/>
                            </ellipse>
                        </g>
                        <g stroke="#4F7CFF" stroke-width="2.8" stroke-linecap="round" fill="none">
                            <ellipse cx="50" cy="50" rx="37" ry="13" opacity="0.35" transform="rotate(120 50 50)" />
                            <ellipse cx="50" cy="50" rx="37" ry="13" stroke-dasharray="36 160">
                                <animateTransform attributeName="transform" type="rotate" values="120 50 50; 480 50 50" dur="6s" repeatCount="indefinite"/>
                            </ellipse>
                        </g>
                        <rect x="40" y="40" width="20" height="20" rx="5.5" fill="#0E1A33" />
                        <circle cx="50" cy="50" r="4.2" fill="#4F7CFF">
                            <animate attributeName="r" values="3.8;5.4;3.8" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="50" cy="50" r="13" stroke="#4F7CFF" stroke-width="1.5" opacity="0.5">
                            <animate attributeName="r" values="10;18" dur="2.4s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.65;0" dur="2.4s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                    <div class="tech-name">React &amp; Capacitor</div>
                    <div class="tech-desc" data-tr="tech-1">Tek kod tabanıyla iOS, Android ve web genelinde tutarlı deneyim</div>
                </div>

                <div class="tech-card reveal reveal-delay-1" data-tech-node="2">
                    <span class="tech-index">02</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <path d="M 18 76 A 40 40 0 1 1 82 76" stroke="currentColor" stroke-width="4.5" stroke-linecap="round" opacity="0.16"/>
                        <path d="M 18 76 A 40 40 0 1 1 82 76" stroke="#4F7CFF" stroke-width="4.5" stroke-linecap="round" stroke-dasharray="190" stroke-dashoffset="190">
                            <animate attributeName="stroke-dashoffset" values="150; 28; 46; 18; 150" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                        </path>
                        <g stroke="currentColor" stroke-width="2.2" opacity="0.45" stroke-linecap="round">
                            <line x1="16" y1="50" x2="23" y2="50" />
                            <line x1="84" y1="50" x2="77" y2="50" />
                            <line x1="50" y1="16" x2="50" y2="23" />
                            <line x1="26" y1="26" x2="31" y2="31" />
                            <line x1="74" y1="26" x2="69" y2="31" />
                        </g>
                        <path d="M34 74 L50 67 L66 74 L50 81 Z" fill="#E9EFFF" stroke="#4F7CFF" stroke-width="1.8" stroke-linejoin="round"/>
                        <path d="M34 81 L50 74 L66 81 L50 88 Z" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linejoin="round" opacity="0.45"/>
                        <g>
                            <animateTransform attributeName="transform" type="rotate" values="-35 50 52; 118 50 52; 98 50 52; 132 50 52; -35 50 52" dur="4.5s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1; 0.4 0 0.2 1"/>
                            <line x1="50" y1="52" x2="22" y2="52" stroke="#0E1A33" stroke-width="3.4" stroke-linecap="round" />
                            <circle cx="24" cy="52" r="2.5" fill="#4F7CFF"/>
                        </g>
                        <circle cx="50" cy="52" r="6" fill="#0E1A33"/>
                        <circle cx="50" cy="52" r="2.5" fill="#4F7CFF"/>
                    </svg>
                    <div class="tech-name">React Native</div>
                    <div class="tech-desc" data-tr="tech-2">Yüksek performans ve akıcı animasyon gerektiren ürünlerde yerel arayüz</div>
                </div>

                <div class="tech-card reveal reveal-delay-2" data-tech-node="3">
                    <span class="tech-index">03</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g stroke="currentColor" stroke-width="2.6" stroke-linejoin="round" fill="none">
                            <ellipse cx="50" cy="24" rx="26" ry="8" opacity="0.45"/>
                            <path d="M24 24 V64 C24 69 35.6 73 50 73 C64.4 73 76 69 76 64 V24" opacity="0.35"/>
                            <path d="M24 44 C24 49 35.6 53 50 53 C64.4 53 76 49 76 44" opacity="0.45"/>
                        </g>
                        <line x1="33" y1="68" x2="33" y2="26" stroke="#4F7CFF" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="6 14">
                            <animate attributeName="stroke-dashoffset" values="0;20" dur="1.4s" repeatCount="indefinite"/>
                        </line>
                        <line x1="67" y1="26" x2="67" y2="68" stroke="#4F7CFF" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="6 14">
                            <animate attributeName="stroke-dashoffset" values="20;0" dur="1.4s" repeatCount="indefinite"/>
                        </line>
                        <path d="M50 42 L66 48 V61 C66 74 50 84 50 84 C50 84 34 74 34 61 V48 Z" fill="#FFFFFF" stroke="#0E1A33" stroke-width="2.8" stroke-linejoin="round"/>
                        <path d="M45 59 V55 A5 5 0 0 1 55 55 V59" stroke="#0E1A33" stroke-width="2.4" stroke-linecap="round"/>
                        <rect x="42.5" y="59" width="15" height="11" rx="3" fill="#4F7CFF"/>
                        <circle cx="50" cy="64.5" r="2" fill="#FFFFFF">
                            <animate attributeName="opacity" values="1;0.4;1" dur="1.8s" repeatCount="indefinite"/>
                        </circle>
                    </svg>
                    <div class="tech-name">Firebase</div>
                    <div class="tech-desc" data-tr="tech-3">Kimlik doğrulama, bulut veritabanı ve gerçek zamanlı veri senkronizasyonu</div>
                </div>

                <div class="tech-card reveal reveal-delay-3" data-tech-node="4">
                    <span class="tech-index">04</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g stroke="currentColor" stroke-width="2" opacity="0.26" stroke-linecap="round">
                            <line x1="18" y1="50" x2="48" y2="22" />
                            <line x1="18" y1="50" x2="48" y2="50" />
                            <line x1="18" y1="50" x2="48" y2="78" />
                            <line x1="48" y1="22" x2="80" y2="50" />
                            <line x1="48" y1="50" x2="80" y2="50" />
                            <line x1="48" y1="78" x2="80" y2="50" />
                        </g>
                        <g fill="#4F7CFF">
                            <circle r="3.2">
                                <animateMotion path="M18 50 L48 22 L80 50" dur="2.1s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;1;0" dur="2.1s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3.2">
                                <animateMotion path="M18 50 L48 50 L80 50" dur="1.6s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;1;0" dur="1.6s" repeatCount="indefinite" />
                            </circle>
                            <circle r="3.2">
                                <animateMotion path="M18 50 L48 78 L80 50" dur="2.5s" repeatCount="indefinite" />
                                <animate attributeName="opacity" values="0;1;1;0" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                        </g>
                        <circle cx="18" cy="50" r="7" fill="#FFFFFF" stroke="#0E1A33" stroke-width="2.6" />
                        <circle cx="18" cy="50" r="2.5" fill="#0E1A33" />
                        <circle cx="48" cy="22" r="7.5" fill="#FFFFFF" stroke="#0E1A33" stroke-width="2.4" />
                        <circle cx="48" cy="50" r="8.5" fill="#E9EFFF" stroke="#4F7CFF" stroke-width="2.6" />
                        <circle cx="48" cy="78" r="7.5" fill="#FFFFFF" stroke="#0E1A33" stroke-width="2.4" />
                        <circle cx="80" cy="50" r="10.5" fill="#0E1A33" />
                        <circle cx="80" cy="50" r="4.5" fill="#4F7CFF">
                            <animate attributeName="r" values="3.8;5.5;3.8" dur="1.6s" repeatCount="indefinite" />
                        </circle>
                        <circle cx="80" cy="50" r="15" stroke="#4F7CFF" stroke-width="1.8" fill="none">
                            <animate attributeName="r" values="11;21" dur="1.6s" repeatCount="indefinite" />
                            <animate attributeName="opacity" values="0.65;0" dur="1.6s" repeatCount="indefinite" />
                        </circle>
                    </svg>
                    <div class="tech-name" data-tr="tech-4-name">AI Orkestrasyon</div>
                    <div class="tech-desc" data-tr="tech-4">Göreve göre en uygun dil ve görsel modelini seçen akıllı yönlendirme katmanı</div>
                </div>

                <div class="tech-card reveal reveal-delay-4" data-tech-node="5">
                    <span class="tech-index">05</span>
                    <svg class="tech-icon" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <g stroke="#0E1A33" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round">
                            <path d="M24 36 V26 H34" />
                            <path d="M66 26 H76 V36" />
                            <path d="M24 64 V74 H34" />
                            <path d="M66 74 H76 V64" />
                        </g>
                        <g stroke="currentColor" stroke-linecap="round" opacity="0.55">
                            <line x1="34" y1="36" x2="34" y2="64" stroke-width="2" />
                            <line x1="41" y1="36" x2="41" y2="64" stroke-width="3.2" />
                            <line x1="48" y1="36" x2="48" y2="64" stroke-width="1.8" />
                            <line x1="54" y1="36" x2="54" y2="64" stroke-width="3.6" />
                            <line x1="61" y1="36" x2="61" y2="64" stroke-width="2" />
                            <line x1="66" y1="36" x2="66" y2="64" stroke-width="2.6" />
                        </g>
                        <g>
                            <line x1="20" y1="32" x2="80" y2="32" stroke="#4F7CFF" stroke-width="2.8" stroke-linecap="round">
                                <animate attributeName="y1" values="30;70;30" dur="2.8s" repeatCount="indefinite" />
                                <animate attributeName="y2" values="30;70;30" dur="2.8s" repeatCount="indefinite" />
                            </line>
                            <rect x="24" y="30" width="52" height="8" fill="#4F7CFF" opacity="0.16">
                                <animate attributeName="y" values="26;66;26" dur="2.8s" repeatCount="indefinite" />
                            </rect>
                        </g>
                        <path d="M 14 41 Q 7 50 14 59" stroke="#4F7CFF" stroke-width="2.6" stroke-linecap="round" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" repeatCount="indefinite" />
                        </path>
                        <path d="M 86 41 Q 93 50 86 59" stroke="#4F7CFF" stroke-width="2.6" stroke-linecap="round" fill="none">
                            <animate attributeName="opacity" values="0.2;1;0.2" dur="1.4s" repeatCount="indefinite" />
                        </path>
                    </svg>
                    <div class="tech-name" data-tr="tech-5-name">Yerel API</div>
                    <div class="tech-desc" data-tr="tech-5">Kamera, barkod tarama ve cihaz içi seslendirme entegrasyonları</div>
                </div>
            </div>

            <!-- [FEATURE-2 START: Orthogonal Circuit Bus & Ecosystem App Dock] -->
            <div class="tech-bus-wrap" aria-hidden="true">
                <svg class="tech-bus-svg" viewBox="0 0 1000 112" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <!-- Base PCB traces from the 5 Tech Cards (top) into SeptimusLab Core (center) -->
                    <g class="bus-traces-base" stroke="currentColor" stroke-opacity="0.14" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                        <path id="traceIn1" d="M 94 0 V 36 Q 94 48 106 48 H 456" />
                        <path id="traceIn2" d="M 297 0 V 26 Q 297 38 309 38 H 456" />
                        <path id="traceIn3" d="M 500 0 V 30" />
                        <path id="traceIn4" d="M 703 0 V 26 Q 703 38 691 38 H 544" />
                        <path id="traceIn5" d="M 906 0 V 36 Q 906 48 894 48 H 544" />

                        <!-- Output traces from SeptimusLab Core (center) to the 4 Shipped Apps (bottom) -->
                        <path id="traceOut1" d="M 456 58 H 137 Q 125 58 125 70 V 112" />
                        <path id="traceOut2" d="M 482 68 V 78 Q 482 88 470 88 H 387 Q 375 88 375 98 V 112" />
                        <path id="traceOut3" d="M 518 68 V 78 Q 518 88 530 88 H 613 Q 625 88 625 98 V 112" />
                        <path id="traceOut4" d="M 544 58 H 863 Q 875 58 875 70 V 112" />
                    </g>

                    <!-- Animated energy pulses flowing along the exact PCB traces -->
                    <g class="bus-traces-pulse" stroke="#4F7CFF" stroke-width="2" stroke-linecap="round">
                        <use href="#traceIn1" class="bus-trace" data-trace-in="1" stroke-dasharray="44 380">
                            <animate attributeName="stroke-dashoffset" values="424;0" dur="3.4s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceIn2" class="bus-trace" data-trace-in="2" stroke-dasharray="36 220">
                            <animate attributeName="stroke-dashoffset" values="256;0" dur="2.6s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceIn3" class="bus-trace" data-trace-in="3" stroke-dasharray="16 60">
                            <animate attributeName="stroke-dashoffset" values="76;0" dur="1.8s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceIn4" class="bus-trace" data-trace-in="4" stroke-dasharray="36 220">
                            <animate attributeName="stroke-dashoffset" values="256;0" dur="2.8s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceIn5" class="bus-trace" data-trace-in="5" stroke-dasharray="44 380">
                            <animate attributeName="stroke-dashoffset" values="424;0" dur="3.6s" repeatCount="indefinite" />
                        </use>

                        <use href="#traceOut1" class="bus-trace" data-trace-out="1" stroke-dasharray="42 360">
                            <animate attributeName="stroke-dashoffset" values="402;0" dur="3.2s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceOut2" class="bus-trace" data-trace-out="2" stroke-dasharray="28 180">
                            <animate attributeName="stroke-dashoffset" values="208;0" dur="2.4s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceOut3" class="bus-trace" data-trace-out="3" stroke-dasharray="28 180">
                            <animate attributeName="stroke-dashoffset" values="208;0" dur="2.5s" repeatCount="indefinite" />
                        </use>
                        <use href="#traceOut4" class="bus-trace" data-trace-out="4" stroke-dasharray="42 360">
                            <animate attributeName="stroke-dashoffset" values="402;0" dur="3.3s" repeatCount="indefinite" />
                        </use>
                    </g>

                    <!-- Top card physical socket pins (aligned with cards 01..05) -->
                    <g class="bus-sockets-top">
                        <circle cx="94" cy="3" r="3.5" fill="#4F7CFF" />
                        <circle cx="297" cy="3" r="3.5" fill="#4F7CFF" />
                        <circle cx="500" cy="3" r="3.5" fill="#4F7CFF" />
                        <circle cx="703" cy="3" r="3.5" fill="#4F7CFF" />
                        <circle cx="906" cy="3" r="3.5" fill="#4F7CFF" />
                    </g>

                    <!-- Central SeptimusLab Core Hub -->
                    <g class="bus-core-node" transform="translate(500, 49)">
                        <rect x="-46" y="-19" width="92" height="38" rx="12" class="bus-core-pill" />
                        <rect x="-34" y="-7" width="14" height="14" rx="3.5" fill="#4F7CFF" opacity="0.2" />
                        <circle cx="-27" cy="0" r="3.5" fill="#4F7CFF">
                            <animate attributeName="r" values="3;4.5;3" dur="2.2s" repeatCount="indefinite" />
                        </circle>
                        <text x="6" y="4" text-anchor="middle" class="bus-core-text">CORE VII</text>
                    </g>

                    <!-- Bottom app physical socket pins (aligned with the 4 apps) -->
                    <g class="bus-sockets-bottom">
                        <circle cx="125" cy="109" r="3.5" fill="#4F7CFF" />
                        <circle cx="375" cy="109" r="3.5" fill="#4F7CFF" />
                        <circle cx="625" cy="109" r="3.5" fill="#4F7CFF" />
                        <circle cx="875" cy="109" r="3.5" fill="#4F7CFF" />
                    </g>
                </svg>
            </div>

            <div class="tech-apps-dock">
                <a href="#products" class="tech-dock-app" data-dock-app="1">
                    <img src="/assets/apps/purescan-foods-icon.png" alt="PureScan Foods" width="32" height="32">
                    <div class="tech-dock-meta">
                        <strong>PureScan Foods</strong>
                        <span>iOS · Android</span>
                    </div>
                </a>
                <a href="#products" class="tech-dock-app" data-dock-app="2">
                    <img src="/assets/apps/pausemenu-icon.png" alt="Pause Menu" width="32" height="32">
                    <div class="tech-dock-meta">
                        <strong>Pause Menu</strong>
                        <span>Web · Android</span>
                    </div>
                </a>
                <a href="#products" class="tech-dock-app" data-dock-app="3">
                    <img src="/assets/apps/purescan-icon.png" alt="PureScan Cosmetics" width="32" height="32">
                    <div class="tech-dock-meta">
                        <strong>PureScan Cosmetics</strong>
                        <span>Android</span>
                    </div>
                </a>
                <a href="#products" class="tech-dock-app" data-dock-app="4">
                    <img src="/assets/apps/fintel-icon.png" alt="Fintel" width="32" height="32">
                    <div class="tech-dock-meta">
                        <strong>Fintel</strong>
                        <span>Android</span>
                    </div>
                </a>
            </div>
            </div>
            <!-- [FEATURE-2 END] -->
        </div>
    </section>`;

export default function TechnologySection() {
    return <HtmlBlock html={html} />;
}
