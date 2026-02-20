import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const htmlPath = path.join(root, "index.html");
const html = fs.readFileSync(htmlPath, "utf8");

function extractBetween(start, end, source) {
  const startIndex = source.indexOf(start);
  if (startIndex === -1) {
    throw new Error(`Start marker not found: ${start}`);
  }

  const fromIndex = startIndex + start.length;
  const endIndex = source.indexOf(end, fromIndex);
  if (endIndex === -1) {
    throw new Error(`End marker not found: ${end}`);
  }

  return source.slice(fromIndex, endIndex);
}

function escapeTemplate(value) {
  return value.replace(/`/g, "\\`").replace(/\$\{/g, "\\${");
}

const style = extractBetween("<style>", "</style>", html).trim();
const body = extractBetween("<body>", "<script>", html);
const script = extractBetween("<script>", "</script>", html).trim();

fs.writeFileSync(path.join(root, "public", "styles", "landing.css"), `${style}\n`, "utf8");
fs.writeFileSync(path.join(root, "public", "scripts", "landing.js"), `${script}\n`, "utf8");

const sections = [
  { marker: "<!-- Navigation -->", name: "Navigation" },
  { marker: "<!-- Mobile Menu -->", name: "MobileMenu" },
  { marker: "<!-- Hero Section -->", name: "HeroSection" },
  { marker: "<!-- Marquee -->", name: "Marquee" },
  { marker: "<!-- About Section -->", name: "AboutSection" },
  { marker: "<!-- Products Section -->", name: "ProductsSection" },
  { marker: "<!-- Technology Section -->", name: "TechnologySection" },
  { marker: "<!-- Vision Section -->", name: "VisionSection" },
  { marker: "<!-- Contact Section -->", name: "ContactSection" },
  { marker: "<!-- Separator -->", name: "SectionSeparator" },
  { marker: "<!-- Footer -->", name: "FooterSection" }
];

for (let index = 0; index < sections.length; index += 1) {
  const current = sections[index];
  const next = sections[index + 1];

  const start = body.indexOf(current.marker);
  if (start === -1) {
    throw new Error(`Section marker not found: ${current.marker}`);
  }

  const contentStart = start + current.marker.length;
  const end = next ? body.indexOf(next.marker, contentStart) : body.length;
  if (end === -1) {
    throw new Error(`Next section marker not found: ${next?.marker}`);
  }

  const htmlBlock = body.slice(contentStart, end).trim();
  const escaped = escapeTemplate(htmlBlock);

  const componentSource = `import { HtmlBlock } from "../HtmlBlock";

const html = String.raw\`${escaped}\`;

export default function ${current.name}() {
  return <HtmlBlock html={html} />;
}
`;

  fs.writeFileSync(
    path.join(root, "src", "components", "sections", `${current.name}.jsx`),
    componentSource,
    "utf8"
  );
}

const htmlBlockSource = `export function HtmlBlock({ html }) {
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
}
`;

fs.writeFileSync(path.join(root, "src", "components", "HtmlBlock.jsx"), htmlBlockSource, "utf8");

const imports = sections
  .map((section) => `import ${section.name} from "../src/components/sections/${section.name}";`)
  .join("\n");

const componentTree = sections
  .map((section) => `      <${section.name} />`)
  .join("\n");

const pageSource = `${imports}

export default function HomePage() {
  return (
    <>
${componentTree}
      <script src="/scripts/landing.js"></script>
    </>
  );
}
`;

fs.writeFileSync(path.join(root, "app", "page.js"), pageSource, "utf8");
