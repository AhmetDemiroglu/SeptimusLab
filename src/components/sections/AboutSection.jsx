import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<section class="about-section" id="about">
        <div class="container">
            <div class="about-grid">
                <div class="reveal">
                    <span class="section-label" data-tr="about-label">Biz Kimiz</span>
                    <h2 class="section-title" style="text-align: left;" data-tr="about-title">Geleceği inşa ediyoruz, her seferinde bir uygulama</h2>
                    <p class="section-desc" data-tr="about-desc" style="text-align: left; margin: 0;">
                        İzmir merkezli bağımsız mobil yazılım stüdyosu. AI destekli uygulamalarla kullanıcıların bilinçli kararlar almasını sağlıyoruz. Her ürünümüz, teknoloji ile insan ihtiyaçlarını buluşturmak için özenle tasarlanmıştır.
                    </p>
                    <div class="stat-grid">
                        <div class="stat-card">
                            <div class="stat-value">2</div>
                            <div class="stat-label" data-tr="stat-apps">Yayınlanan Uygulama</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">AI</div>
                            <div class="stat-label" data-tr="stat-ai">Yapay Zeka</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">2025</div>
                            <div class="stat-label" data-tr="stat-founded">Kuruluş</div>
                        </div>
                        <div class="stat-card">
                            <div class="stat-value">∞</div>
                            <div class="stat-label" data-tr="stat-passion">Tutku</div>
                        </div>
                    </div>
                </div>

                <div class="reveal reveal-delay-2" style="position: relative; width: 100%; max-width: 380px; margin: 0 auto; display: flex; justify-content: center; align-items: center;">
                    <svg viewBox="0 0 400 600" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <!-- Realistic Phone Bezel (Dark) -->
                            <linearGradient id="phoneGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="#1A1F2C" />
                                <stop offset="100%" stop-color="#0F1219" />
                            </linearGradient>
                            <!-- Light Mode Screen Area -->
                            <linearGradient id="screenGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                                <stop offset="0%" stop-color="#FAFBFD" />
                                <stop offset="100%" stop-color="#EFF2F6" />
                            </linearGradient>
                            <linearGradient id="scanGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stop-color="rgba(33, 191, 150, 0)" />
                                <stop offset="50%" stop-color="rgba(33, 191, 150, 0.5)" />
                                <stop offset="100%" stop-color="rgba(33, 191, 150, 0)" />
                            </linearGradient>
                            <filter id="phoneShadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="20" stdDeviation="25" flood-color="var(--accent)" flood-opacity="0.12"/>
                            </filter>
                            <filter id="cardShadow" x="-20%" y="-20%" width="140%" height="140%">
                                <feDropShadow dx="0" dy="8" stdDeviation="12" flood-color="#000000" flood-opacity="0.06"/>
                            </filter>
                            <filter id="glowAccent" x="-20%" y="-20%" width="140%" height="140%">
                                <feGaussianBlur stdDeviation="6" result="blur" />
                                <feComposite in="SourceGraphic" in2="blur" operator="over" />
                            </filter>
                        </defs>

                        <!-- Floating Phone Group -->
                        <g transform="translate(60, 40)">
                            <!-- Gentle hovering animation for the entire phone -->
                            <animateTransform attributeName="transform" type="translate" values="60,40; 60,30; 60,40" dur="8s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0.4 0 0.2 1" />
                            
                            <!-- Phone Body (Bezel) -->
                            <rect x="0" y="0" width="280" height="520" rx="40" fill="url(#phoneGradient)" stroke="#2D3748" stroke-width="3" filter="url(#phoneShadow)"/>
                            
                            <!-- Phone Inner Bezel Border -->
                            <rect x="8" y="8" width="264" height="504" rx="32" fill="none" stroke="#000000" stroke-width="2"/>
                            
                            <!-- Phone Screen (Light Theme) -->
                            <rect x="10" y="10" width="260" height="500" rx="30" fill="url(#screenGradient)" />
                            
                            <!-- Dynamic UI Compilation (Code to UI) -->
                            <g transform="translate(20, 60)">
                                <!-- App Header Profile Area -->
                                <circle cx="16" cy="12" r="10" fill="#E5E7EB"/>
                                <path d="M16 16c-4 0-7 2-7 4v2h14v-2c0-2-3-4-7-4z" fill="#9CA3AF"/>
                                <circle cx="16" cy="9" r="4" fill="#9CA3AF"/>
                                
                                <rect x="36" y="6" width="60" height="6" rx="3" fill="#1F2937"/>
                                <rect x="36" y="16" width="40" height="4" rx="2" fill="#9CA3AF"/>
                                
                                <!-- Settings Icon -->
                                <circle cx="225" cy="12" r="8" fill="#F3F4F6"/>
                                <circle cx="225" cy="12" r="3" fill="#9CA3AF"/>

                                <!-- AI Processing State (Code Lines transforming into cards) -->
                                <g transform="translate(0, 45)">
                                    <!-- UI Card 1 Construction (Health Ring) -->
                                    <g>
                                        <animate attributeName="opacity" values="0.3; 1; 1" dur="10s" repeatCount="indefinite"/>
                                        <g opacity="0">
                                            <animate attributeName="opacity" values="1; 0; 0" dur="10s" repeatCount="indefinite"/>
                                            <text x="0" y="15" font-family="monospace" font-size="10" fill="#4B5563">const generateInsights = async () => {</text>
                                            <text x="10" y="30" font-family="monospace" font-size="10" fill="#4B5563">await AI.analyzeData();</text>
                                            <text x="0" y="45" font-family="monospace" font-size="10" fill="#4B5563">}</text>
                                        </g>
                                        <g opacity="0" transform="translate(0, 0)">
                                            <animate attributeName="opacity" values="0; 1; 1" dur="10s" repeatCount="indefinite"/>
                                            <rect width="240" height="70" rx="16" fill="#FFFFFF" stroke="#F3F4F6" stroke-width="1.5" filter="url(#cardShadow)"/>
                                            
                                            <circle cx="45" cy="35" r="20" fill="none" stroke="#F3F4F6" stroke-width="5"/>
                                            <circle cx="45" cy="35" r="20" fill="none" stroke="var(--turquoise)" stroke-width="5" stroke-dasharray="125" stroke-dashoffset="125" stroke-linecap="round" transform="rotate(-90 45 35)">
                                                <animate attributeName="stroke-dashoffset" values="125; 35; 35" dur="10s" repeatCount="indefinite" calcMode="spline" keySplines="0.4 0 0.2 1; 0 0 1 1"/>
                                            </circle>
                                            <text x="45" y="39" text-anchor="middle" font-family="'Plus Jakarta Sans', sans-serif" font-size="12" font-weight="800" fill="var(--fg)">92</text>
                                            
                                            <text x="80" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1F2937" data-tr="phone-ui-score">Mükemmel Skor</text>
                                            <text x="80" y="44" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#6B7280" data-tr="phone-ui-desc">AI analizine dayalı olarak</text>
                                            
                                            <!-- Tiny Green Arrow Up -->
                                            <path d="M215,35 L220,30 L225,35 M220,30 L220,40" fill="none" stroke="#16A34A" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                        </g>
                                    </g>

                                    <!-- UI Card 2 Construction (Line Chart) -->
                                    <g transform="translate(0, 85)">
                                        <animate attributeName="opacity" values="0.2; 1; 1" dur="10s" repeatCount="indefinite"/>
                                        <g opacity="0">
                                            <animate attributeName="opacity" values="1; 1; 0; 0" keyTimes="0; 0.2; 0.3; 1" dur="10s" repeatCount="indefinite"/>
                                            <text x="0" y="15" font-family="monospace" font-size="10" fill="#4B5563">import { Predictor } from '@core';</text>
                                            <text x="0" y="30" font-family="monospace" font-size="10" fill="#4B5563">Predictor.trackTrends();</text>
                                        </g>
                                        <g opacity="0" transform="translate(0, 0)">
                                            <animate attributeName="opacity" values="0; 0; 1; 1" keyTimes="0; 0.2; 0.3; 1" dur="10s" repeatCount="indefinite"/>
                                            <rect width="240" height="90" rx="16" fill="#FFFFFF" stroke="#F3F4F6" stroke-width="1.5" filter="url(#cardShadow)"/>
                                            
                                            <text x="20" y="25" font-family="'Plus Jakarta Sans', sans-serif" font-size="10" font-weight="700" fill="#1F2937" data-tr="phone-ui-chart">Performans Trendi</text>
                                            <rect x="200" y="15" width="20" height="12" rx="4" fill="#EEF2FF"/>
                                            <text x="210" y="23" text-anchor="middle" font-family="Inter, sans-serif" font-size="7" font-weight="700" fill="var(--accent)">AY</text>
                                            
                                            <!-- Grid lines -->
                                            <line x1="20" y1="40" x2="220" y2="40" stroke="#F3F4F6" stroke-width="1" stroke-dasharray="2 2"/>
                                            <line x1="20" y1="60" x2="220" y2="60" stroke="#F3F4F6" stroke-width="1" stroke-dasharray="2 2"/>
                                            <line x1="20" y1="80" x2="220" y2="80" stroke="#F3F4F6" stroke-width="1" stroke-dasharray="2 2"/>
                                            
                                            <!-- Animated Chart Path -->
                                            <path d="M20,70 Q50,60 80,75 T140,50 T180,35 T220,15" fill="none" stroke="var(--accent)" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                                                <animate attributeName="stroke-dasharray" values="0 500; 500 500" dur="2s" fill="freeze" />
                                            </path>
                                            
                                            <circle cx="220" cy="15" r="3" fill="#FFFFFF" stroke="var(--accent)" stroke-width="2" filter="url(#glowAccent)"/>
                                            
                                            <!-- Gradient Area under chart -->
                                            <path d="M20,70 Q50,60 80,75 T140,50 T180,35 T220,15 L220,80 L20,80 Z" fill="url(#scanGradient)" opacity="0.3"/>
                                        </g>
                                    </g>

                                    <!-- UI Card 3 Construction (List Items) -->
                                    <g transform="translate(0, 190)">
                                        <animate attributeName="opacity" values="0.1; 1; 1" dur="10s" repeatCount="indefinite"/>
                                        <g opacity="0">
                                            <animate attributeName="opacity" values="1; 1; 0; 0" keyTimes="0; 0.4; 0.5; 1" dur="10s" repeatCount="indefinite"/>
                                            <text x="0" y="15" font-family="monospace" font-size="10" fill="#4B5563">export const SafeList = [</text>
                                            <text x="10" y="30" font-family="monospace" font-size="10" fill="#4B5563">...verifiedItems</text>
                                            <text x="0" y="45" font-family="monospace" font-size="10" fill="#4B5563">];</text>
                                        </g>
                                        <g opacity="0" transform="translate(0, 0)">
                                            <animate attributeName="opacity" values="0; 0; 1; 1" keyTimes="0; 0.4; 0.5; 1" dur="10s" repeatCount="indefinite"/>
                                            <rect width="240" height="60" rx="16" fill="#FFFFFF" stroke="#F3F4F6" stroke-width="1.5" filter="url(#cardShadow)"/>
                                            
                                            <rect x="15" y="15" width="30" height="30" rx="10" fill="rgba(34, 197, 94, 0.1)"/>
                                            <path d="M24,30 L28,34 L36,26" fill="none" stroke="#22C55E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                            
                                            <text x="55" y="28" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#1F2937" data-tr="phone-ui-status">Sistem Güvenli</text>
                                            <text x="55" y="42" font-family="Inter, sans-serif" font-size="9" font-weight="500" fill="#6B7280" data-tr="phone-ui-status-desc">Tüm API servisleri aktif</text>
                                            
                                            <!-- Verification badge on final card -->
                                            <circle cx="215" cy="30" r="10" fill="#DCFCE7"/>
                                            <circle cx="215" cy="30" r="4" fill="#166534"/>
                                        </g>
                                    </g>
                                </g>

                                <!-- AI Scanner Laser sweeping the screen -->
                                <g>
                                    <animateTransform attributeName="transform" type="translate" values="0,35; 0,330; 0,35" dur="4.5s" repeatCount="indefinite" calcMode="linear"/>
                                    <rect x="-10" y="0" width="260" height="2" fill="var(--turquoise)"/>
                                    <rect x="-10" y="-40" width="260" height="40" fill="url(#scanGradient)"/>
                                    <!-- Edge highlights where laser touches screen edge -->
                                    <circle cx="-10" cy="1" r="2" fill="#FFFFFF" filter="url(#glowAccent)"/>
                                    <circle cx="250" cy="1" r="2" fill="#FFFFFF" filter="url(#glowAccent)"/>
                                </g>
                                
                                <!-- Compilation Logic Particles flowing to UI -->
                                <g transform="translate(120, 260)">
                                    <circle r="1" fill="var(--accent)" filter="url(#glowAccent)" opacity="0">
                                         <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite"/>
                                         <animateTransform attributeName="transform" type="translate" values="0,80; 0,0" dur="2s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle r="1" fill="var(--turquoise)" filter="url(#glowAccent)" opacity="0">
                                         <animate attributeName="opacity" values="0;1;0" dur="1.7s" begin="0.5s" repeatCount="indefinite"/>
                                         <animateTransform attributeName="transform" type="translate" values="-40,100; -20,20" dur="1.7s" begin="0.5s" repeatCount="indefinite"/>
                                    </circle>
                                    <circle r="1.5" fill="var(--amber)" filter="url(#glowAccent)" opacity="0">
                                         <animate attributeName="opacity" values="0;1;0" dur="2.3s" begin="1s" repeatCount="indefinite"/>
                                         <animateTransform attributeName="transform" type="translate" values="40,90; 10,10" dur="2.3s" begin="1s" repeatCount="indefinite"/>
                                    </circle>
                                </g>
                            </g>

                            <!-- Phone Notch Overlay -->
                            <g transform="translate(140, 10)">
                                <rect x="-35" y="0" width="70" height="22" rx="11" fill="#050505" stroke="#1A1A1A" stroke-width="1.5"/>
                                <!-- camera lens -->
                                <circle cx="15" cy="11" r="4.5" fill="#141414"/>
                                <circle cx="15" cy="10" r="1.5" fill="#243355"/>
                                <circle cx="16" cy="10" r="0.5" fill="#FFFFFF" opacity="0.4"/> <!-- lens reflection -->
                                <!-- sensor -->
                                <circle cx="-15" cy="11" r="2.5" fill="#141414"/>
                                <circle cx="-15" cy="11" r="0.5" fill="#4B2A5E" opacity="0.6"/> <!-- IR reflection -->
                            </g>
                            
                            <!-- Phone Home Indicator Bar -->
                            <rect x="85" y="495" width="110" height="4" rx="2" fill="#111827"/>
                            <!-- Shine on indicator -->
                            <rect x="95" y="495" width="20" height="4" rx="2" fill="#374151" opacity="0.5"/>
                            
                            <!-- Volume / Power buttons on bezel edge -->
                            <rect x="-2" y="120" width="2" height="30" rx="1" fill="#4B5563"/>
                            <rect x="-2" y="160" width="2" height="50" rx="1" fill="#4B5563"/>
                            <rect x="-2" y="220" width="2" height="50" rx="1" fill="#4B5563"/>
                            <rect x="280" y="150" width="2" height="70" rx="1" fill="#4B5563"/>
                        </g>

                        <!-- Floating Badges outside the phone (Contextual tags) -->
                        <!-- Badge 1: Top Left -->
                        <g transform="translate(15, 120)">
                            <animateTransform attributeName="transform" type="translate" values="15,120; 20,110; 15,120" dur="6s" repeatCount="indefinite" />
                            <rect width="130" height="34" rx="17" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5" filter="url(#cardShadow)"/>
                            <circle cx="17" cy="17" r="5" fill="var(--turquoise)" filter="url(#glowAccent)">
                                <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2s" repeatCount="indefinite" />
                            </circle>
                            <text x="30" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#111827" data-tr="badge-performance">Native Performans</text>
                        </g>

                        <!-- Badge 2: Mid Right -->
                        <g transform="translate(260, 200)">
                            <animateTransform attributeName="transform" type="translate" values="260,200; 250,210; 260,200" dur="7s" repeatCount="indefinite" />
                            <rect width="125" height="34" rx="17" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5" filter="url(#cardShadow)"/>
                            <circle cx="17" cy="17" r="5" fill="var(--accent)" filter="url(#glowAccent)">
                                <animate attributeName="opacity" values="0.4; 1; 0.4" dur="2.5s" repeatCount="indefinite" />
                            </circle>
                            <text x="30" y="22" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#111827" data-tr="badge-architecture">Temiz Mimari</text>
                        </g>

                        <!-- Badge 3: Bottom Right -->
                        <g transform="translate(250, 460)">
                            <animateTransform attributeName="transform" type="translate" values="250,460; 260,450; 250,460" dur="8s" repeatCount="indefinite" />
                            <rect width="130" height="34" rx="17" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5" filter="url(#cardShadow)"/>
                            <!-- Using a checkmark instead of just a dot -->
                            <circle cx="17" cy="17" r="8" fill="#DCFCE7"/>
                            <path d="M14,17 L16,19 L20,15" fill="none" stroke="#166534" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <text x="33" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#111827" data-tr="badge-backend">Güvenli Backend</text>
                        </g>
                        
                        <!-- Badge 4: Mid Left -->
                        <g transform="translate(10, 340)">
                            <animateTransform attributeName="transform" type="translate" values="10,340; 15,350; 10,340" dur="7.5s" repeatCount="indefinite" />
                            <rect width="135" height="34" rx="17" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5" filter="url(#cardShadow)"/>
                            <path d="M13,17 L17,13 L21,17 M17,13 L17,21" fill="none" stroke="var(--amber)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <text x="32" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#111827" data-tr="badge-aicore">Yapay Zeka Core</text>
                        </g>
                        
                        <!-- Badge 5: Top Right -->
                        <g transform="translate(265, 80)">
                            <animateTransform attributeName="transform" type="translate" values="265,80; 255,85; 265,80" dur="6.5s" repeatCount="indefinite" />
                            <rect width="130" height="34" rx="17" fill="#FFFFFF" stroke="#E5E7EB" stroke-width="1.5" filter="url(#cardShadow)"/>
                            <rect x="12" y="12" width="10" height="10" rx="2" fill="none" stroke="var(--accent)" stroke-width="2"/>
                            <rect x="15" y="15" width="10" height="10" rx="2" fill="none" stroke="var(--turquoise)" stroke-width="2"/>
                            <text x="33" y="21" font-family="'Plus Jakarta Sans', sans-serif" font-size="11" font-weight="700" fill="#111827" data-tr="badge-crossplatform">Çapraz Platform</text>
                        </g>

                        <!-- Connecting visual lines from badges to phone -->
                        <path d="M145,137 L170,137 M260,217 L240,217 M250,477 L230,477 M145,357 L165,357 M265,97 L245,97" fill="none" stroke="#D1D5DB" stroke-width="1" stroke-dasharray="2 2" opacity="0.6"/>
                    </svg>
                </div>
            </div>
        </div>
    </section>`;

export default function AboutSection() {
    return <HtmlBlock html={html} />;
}
