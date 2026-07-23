import { readFileSync, writeFileSync } from 'fs';
import { join } from 'path';
import { marked } from 'marked';
import puppeteer from 'puppeteer';

const CHROME_PATH = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const DOCS_DIR = join(process.cwd(), 'docs');
const OUTPUT = join(DOCS_DIR, 'CAHIER_DE_CHARGES_COMPLET.pdf');

const files = [
  '00-cover.md',
  'chapters-1-4.md',
  'chapters-5-8.md',
  'chapters-9-12.md',
  'chapters-13-16.md',
  'chapters-17-20.md',
];

console.log('Reading markdown files...');
let fullMd = '';
for (const f of files) {
  const content = readFileSync(join(DOCS_DIR, f), 'utf-8');
  fullMd += content + '\n\n---\n\n';
  console.log(`  + ${f} (${(content.length / 1024).toFixed(1)} KB)`);
}

console.log('Converting markdown to HTML...');
marked.setOptions({
  gfm: true,
  breaks: true,
});

const htmlBody = marked.parse(fullMd);

const html = `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<title>Cahier des Charges - GlobalMarket Mondiale</title>
<style>
  @page {
    size: A4;
    margin: 2cm 2.5cm;
    @top-center {
      content: "GlobalMarket Mondiale - Cahier des Charges Frontend";
      font-size: 9px;
      color: #888;
    }
    @bottom-center {
      content: counter(page) " / " counter(pages);
      font-size: 9px;
      color: #888;
    }
  }
  @page :first {
    @top-center { content: none; }
    @bottom-center { content: none; }
  }
  * { box-sizing: border-box; }
  body {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-size: 11pt;
    line-height: 1.6;
    color: #1a1a1a;
    max-width: 100%;
  }
  h1 {
    font-size: 24pt;
    color: #0d6efd;
    border-bottom: 3px solid #0d6efd;
    padding-bottom: 8px;
    margin-top: 40px;
    page-break-after: avoid;
  }
  h2 {
    font-size: 18pt;
    color: #0d6efd;
    border-bottom: 1px solid #dee2e6;
    padding-bottom: 6px;
    margin-top: 30px;
    page-break-after: avoid;
  }
  h3 {
    font-size: 14pt;
    color: #333;
    margin-top: 24px;
    page-break-after: avoid;
  }
  h4 {
    font-size: 12pt;
    color: #555;
    margin-top: 20px;
    page-break-after: avoid;
  }
  h5, h6 {
    font-size: 11pt;
    color: #666;
    margin-top: 16px;
    page-break-after: avoid;
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin: 16px 0;
    font-size: 10pt;
    page-break-inside: auto;
  }
  thead { background-color: #0d6efd; color: white; }
  th { padding: 8px 10px; text-align: left; font-weight: 600; }
  td { padding: 6px 10px; border: 1px solid #dee2e6; }
  tr:nth-child(even) { background-color: #f8f9fa; }
  tr { page-break-inside: avoid; }
  code {
    background-color: #f1f3f5;
    padding: 2px 5px;
    border-radius: 3px;
    font-size: 10pt;
    font-family: 'Cascadia Code', 'Consolas', monospace;
  }
  pre {
    background-color: #1e1e1e;
    color: #d4d4d4;
    padding: 16px;
    border-radius: 8px;
    overflow-x: auto;
    font-size: 9pt;
    line-height: 1.5;
    page-break-inside: avoid;
  }
  pre code {
    background: none;
    padding: 0;
    color: inherit;
  }
  blockquote {
    border-left: 4px solid #0d6efd;
    margin: 16px 0;
    padding: 10px 20px;
    background-color: #f0f7ff;
    color: #333;
  }
  hr {
    border: none;
    border-top: 2px solid #dee2e6;
    margin: 30px 0;
  }
  ul, ol { padding-left: 24px; }
  li { margin-bottom: 4px; }
  a { color: #0d6efd; text-decoration: none; }
  a:hover { text-decoration: underline; }
  strong { color: #111; }
  .cover-page {
    text-align: center;
    padding-top: 120px;
    page-break-after: always;
  }
  .cover-page h1 { border: none; font-size: 36pt; margin-bottom: 20px; }
  .cover-page h2 { border: none; font-size: 20pt; color: #555; margin-top: 10px; }
  .cover-page table { margin: 40px auto; width: 70%; }
</style>
</head>
<body>
${htmlBody}
</body>
</html>`;

writeFileSync(join(DOCS_DIR, 'cahier-des-charges.html'), html, 'utf-8');
console.log('HTML file generated.');

console.log('Launching Chrome for PDF generation...');
const browser = await puppeteer.launch({
  executablePath: CHROME_PATH,
  headless: true,
  args: ['--no-sandbox', '--disable-setuid-sandbox'],
});

const page = await browser.newPage();
const htmlPath = join(DOCS_DIR, 'cahier-des-charges.html');
await page.goto('file:///' + htmlPath.replace(/\\/g, '/'), { waitUntil: 'networkidle0', timeout: 60000 });

console.log('Generating PDF...');
await page.pdf({
  path: OUTPUT,
  format: 'A4',
  printBackground: true,
  margin: { top: '2cm', bottom: '2cm', left: '2.5cm', right: '2.5cm' },
  displayHeaderFooter: true,
  headerTemplate: '<div style="font-size:9px; color:#888; text-align:center; width:100%; padding:0 2cm;">GlobalMarket Mondiale — Cahier des Charges Frontend — Version 1.0</div>',
  footerTemplate: '<div style="font-size:9px; color:#888; text-align:center; width:100%; padding:0 2cm;">Page <span class="pageNumber"></span> / <span class="totalPages"></span></div>',
});

await browser.close();

const stats = readFileSync(OUTPUT);
console.log(`\nPDF generated successfully!`);
console.log(`  Path: ${OUTPUT}`);
console.log(`  Size: ${(stats.length / 1024 / 1024).toFixed(2)} MB`);
