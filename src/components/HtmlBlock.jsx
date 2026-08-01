// landing.js bu blokların içini hidrasyondan önce değiştirebiliyor (dil metinleri,
// navbar cam merceğinin data URI'si). React'in "server/client eşleşmedi" uyarısı
// burada beklenen durum, bastırıyoruz.
export function HtmlBlock({ html }) {
  return <div style={{ display: "contents" }} suppressHydrationWarning dangerouslySetInnerHTML={{ __html: html }} />;
}
