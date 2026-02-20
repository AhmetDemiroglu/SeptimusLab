import { HtmlBlock } from "../HtmlBlock";

const html = String.raw`<div class="section-separator"></div>`;

export default function SectionSeparator() {
  return <HtmlBlock html={html} />;
}
