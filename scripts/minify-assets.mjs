// public/styles/landing.css ve public/scripts/landing.js kaynaktir; sayfa .min kopyalarini yukler.
// npm run dev/build oncesinde kendiliginden calisir (predev/prebuild). Cikti commit edilir: derleme
// komutu prebuild atlasa bile site bozulmaz. Kaynagi degistirince bu dosyayi da calistir. Next in kendi paketledigi
// terser ve cssnano kullanilir, ek bagimlilik yok.
import fs from "node:fs";
import path from "node:path";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const root = process.cwd();
const postcss = require("postcss");
const cssnano = require("next/dist/compiled/cssnano-simple");
const { minify } = require("next/dist/compiled/terser");

const cssIn = path.join(root, "public/styles/landing.css");
const jsIn = path.join(root, "public/scripts/landing.js");

const css = await postcss([cssnano]).process(fs.readFileSync(cssIn, "utf8"), { from: cssIn });
fs.writeFileSync(path.join(root, "public/styles/landing.min.css"), css.css);

const js = await minify(fs.readFileSync(jsIn, "utf8"), { compress: true, mangle: true });
fs.writeFileSync(path.join(root, "public/scripts/landing.min.js"), js.code);

console.log("minify:", fs.statSync(cssIn).size, "->", css.css.length, "css |", fs.statSync(jsIn).size, "->", js.code.length, "js");
