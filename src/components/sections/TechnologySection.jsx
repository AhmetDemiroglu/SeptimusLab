import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="tech-section" id="technology">
        <div class="container">
            <div class="section-header">
                <span class="section-label reveal" data-tr="tech-label">Altyapı</span>
                <h2 class="section-title reveal reveal-delay-1" data-tr="tech-title">Uygulamalarımıza güç veren mimari</h2>
            </div>

            <!-- [FEATURE-2 START: Interactive SVG System Architecture Pipeline] -->
            <div class="tech-pipeline reveal reveal-delay-1" data-active-app="all">
                <div class="tech-pipeline-bar">
                    <div class="tech-pipeline-meta">
                        <span class="tech-pipeline-dot"></span>
                        <span class="tech-pipeline-title" data-tr="f2-pipe-label">CANLI VERİ HATTI</span>
                        <span class="tech-pipeline-status" id="techPipelineStatus" data-tr="f2-status-all">5 katmanlı birleşik mobil üretim hattı</span>
                    </div>
                    <div class="tech-pipeline-tabs" role="tablist" aria-label="Uygulama mimari rotası">
                        <button type="button" class="tech-pipe-tab active" data-pipe-app="all" data-nodes="1,2,3,4,5" data-tr="f2-tab-all">Tüm Ekosistem</button>
                        <button type="button" class="tech-pipe-tab" data-pipe-app="foods" data-nodes="1,3,4,5">PureScan Foods</button>
                        <button type="button" class="tech-pipe-tab" data-pipe-app="pause" data-nodes="1,3,4">Pause Menu</button>
                        <button type="button" class="tech-pipe-tab" data-pipe-app="cosmetics" data-nodes="2,3,4,5">PureScan Cosmetics</button>
                        <button type="button" class="tech-pipe-tab" data-pipe-app="fintel" data-nodes="2,3,4">Fintel</button>
                    </div>
                </div>

                <div class="tech-pipeline-canvas">
                    <svg class="tech-pipeline-svg" viewBox="0 0 1000 124" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                        <defs>
                            <linearGradient id="pipeBusGrad" x1="100" y1="54" x2="900" y2="54" gradientUnits="userSpaceOnUse">
                                <stop offset="0%" stop-color="#0E1A33" stop-opacity="0.15" />
                                <stop offset="50%" stop-color="#4F7CFF" stop-opacity="0.55" />
                                <stop offset="100%" stop-color="#0E1A33" stop-opacity="0.15" />
                            </linearGradient>
                            <path id="pipeMainTrack" d="M 100 54 L 300 54 L 500 54 L 700 54 L 900 54" />
                            <path id="pipeArc1" d="M 100 54 C 200 12, 400 12, 500 54 C 600 96, 800 96, 900 54" />
                            <path id="pipeArc2" d="M 300 54 C 400 18, 600 18, 700 54" />
                        </defs>

                        <!-- Background grid ticks -->
                        <g stroke="currentColor" stroke-opacity="0.08" stroke-width="1">
                            <line x1="40" y1="54" x2="960" y2="54" stroke-dasharray="3 6" />
                            <line x1="100" y1="16" x2="100" y2="122" />
                            <line x1="300" y1="16" x2="300" y2="122" />
                            <line x1="500" y1="16" x2="500" y2="122" />
                            <line x1="700" y1="16" x2="700" y2="122" />
                            <line x1="900" y1="16" x2="900" y2="122" />
                        </g>

                        <!-- Secondary curved architecture buses -->
                        <use href="#pipeArc1" stroke="url(#pipeBusGrad)" stroke-width="1.6" stroke-dasharray="5 7" />
                        <use href="#pipeArc2" stroke="#4F7CFF" stroke-opacity="0.28" stroke-width="1.5" />

                        <!-- Primary horizontal bus -->
                        <use href="#pipeMainTrack" stroke="currentColor" stroke-opacity="0.14" stroke-width="3" stroke-linecap="round" />
                        <use href="#pipeMainTrack" class="pipe-stream-line" stroke="#4F7CFF" stroke-width="2.6" stroke-linecap="round" stroke-dasharray="14 22">
                            <animate attributeName="stroke-dashoffset" values="72;0" dur="2.2s" repeatCount="indefinite" />
                        </use>

                        <!-- Traveling telemetry packets -->
                        <circle r="4" fill="#4F7CFF">
                            <animateMotion dur="4.2s" repeatCount="indefinite" path="M 100 54 L 300 54 L 500 54 L 700 54 L 900 54" />
                        </circle>
                        <circle r="3.2" fill="#0E1A33">
                            <animateMotion dur="5.4s" repeatCount="indefinite" path="M 900 54 C 800 96, 600 96, 500 54 C 400 12, 200 12, 100 54" />
                        </circle>
                        <circle r="3.5" fill="#4F7CFF">
                            <animateMotion dur="3.1s" repeatCount="indefinite" path="M 300 54 C 400 18, 600 18, 700 54" />
                        </circle>

                        <!-- Node 01 -->
                        <g class="pipe-node is-active" data-pipe-node="1">
                            <line x1="100" y1="54" x2="100" y2="122" class="pipe-drop" />
                            <circle cx="100" cy="54" r="18" class="pipe-node-halo" />
                            <rect x="86" y="40" width="28" height="28" rx="8" class="pipe-node-box" />
                            <text x="100" y="58" text-anchor="middle" class="pipe-node-num">01</text>
                            <circle cx="100" cy="118" r="3.5" class="pipe-drop-tip" />
                        </g>

                        <!-- Node 02 -->
                        <g class="pipe-node is-active" data-pipe-node="2">
                            <line x1="300" y1="54" x2="300" y2="122" class="pipe-drop" />
                            <circle cx="300" cy="54" r="18" class="pipe-node-halo" />
                            <rect x="286" y="40" width="28" height="28" rx="8" class="pipe-node-box" />
                            <text x="300" y="58" text-anchor="middle" class="pipe-node-num">02</text>
                            <circle cx="300" cy="118" r="3.5" class="pipe-drop-tip" />
                        </g>

                        <!-- Node 03 -->
                        <g class="pipe-node is-active" data-pipe-node="3">
                            <line x1="500" y1="54" x2="500" y2="122" class="pipe-drop" />
                            <circle cx="500" cy="54" r="18" class="pipe-node-halo" />
                            <rect x="486" y="40" width="28" height="28" rx="8" class="pipe-node-box" />
                            <text x="500" y="58" text-anchor="middle" class="pipe-node-num">03</text>
                            <circle cx="500" cy="118" r="3.5" class="pipe-drop-tip" />
                        </g>

                        <!-- Node 04 -->
                        <g class="pipe-node is-active" data-pipe-node="4">
                            <line x1="700" y1="54" x2="700" y2="122" class="pipe-drop" />
                            <circle cx="700" cy="54" r="18" class="pipe-node-halo" />
                            <rect x="686" y="40" width="28" height="28" rx="8" class="pipe-node-box" />
                            <text x="700" y="58" text-anchor="middle" class="pipe-node-num">04</text>
                            <circle cx="700" cy="118" r="3.5" class="pipe-drop-tip" />
                        </g>

                        <!-- Node 05 -->
                        <g class="pipe-node is-active" data-pipe-node="5">
                            <line x1="900" y1="54" x2="900" y2="122" class="pipe-drop" />
                            <circle cx="900" cy="54" r="18" class="pipe-node-halo" />
                            <rect x="886" y="40" width="28" height="28" rx="8" class="pipe-node-box" />
                            <text x="900" y="58" text-anchor="middle" class="pipe-node-num">05</text>
                            <circle cx="900" cy="118" r="3.5" class="pipe-drop-tip" />
                        </g>
                    </svg>
                </div>
            </div>
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
        </div>
    </section>`;

export default function TechnologySection() {
    return <HtmlBlock html={html} />;
}
