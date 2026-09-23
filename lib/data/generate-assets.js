const fs = require('fs');
const path = require('path');

const baseDir = 'C:\\Users\\Adarsh\\Downloads\\niamal';
const productsDir = path.join(baseDir, 'public', 'products');
const videosDir = path.join(baseDir, 'public', 'videos');

if (!fs.existsSync(productsDir)) fs.mkdirSync(productsDir, { recursive: true });
if (!fs.existsSync(videosDir)) fs.mkdirSync(videosDir, { recursive: true });

const items = [
  { file: 'product-01.webp', title: 'NOIR ABSOLU', sub: 'EAU DE PARFUM', type: 'perfume', color: '#090D14', accent: '#38BDF8' },
  { file: 'product-02.webp', title: 'AMBRE SACRÉ', sub: 'EXTRAIT DE PARFUM', type: 'perfume', color: '#0A0F1A', accent: '#7DD3FC' },
  { file: 'product-03.webp', title: 'CÈDRE DORÉ', sub: 'EAU DE PARFUM', type: 'perfume', color: '#080C14', accent: '#BAE6FD' },
  { file: 'product-04.webp', title: 'LUMIÈRE BLANCHE', sub: 'EAU DE TOILETTE', type: 'perfume', color: '#0A0E18', accent: '#E0F2FE' },
  { file: 'product-05.webp', title: 'OBSIDIAN CASE', sub: 'ITALIAN CALFSKIN', type: 'case', color: '#080B12', accent: '#94A3B8' },
  { file: 'product-06.webp', title: 'RIVIERA CABLE', sub: 'ARAMID FIBRE', type: 'cable', color: '#090C15', accent: '#38BDF8' },
  { file: 'product-07.webp', title: 'GLACÉ CASE', sub: 'SAPPHIRE OPTICAL', type: 'case', color: '#0A0E19', accent: '#E2F1FD' },
  { file: 'product-08.webp', title: 'AURUM CHARGER', sub: 'SOLID BRASS & LEATHER', type: 'charger', color: '#090D16', accent: '#38BDF8' },
];

function createProductSvg(item) {
  let illustration = '';
  if (item.type === 'perfume') {
    illustration = `
      <defs>
        <linearGradient id="glassGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B" stop-opacity="0.95"/>
          <stop offset="50%" stop-color="#0F172A" stop-opacity="0.98"/>
          <stop offset="100%" stop-color="#06080C" stop-opacity="1"/>
        </linearGradient>
        <linearGradient id="capGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" stop-color="#0369A1"/>
          <stop offset="50%" stop-color="#38BDF8"/>
          <stop offset="100%" stop-color="#075985"/>
        </linearGradient>
      </defs>

      <!-- Cap -->
      <rect x="345" y="160" width="110" height="90" rx="4" fill="url(#capGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')})" stroke="${item.accent}" stroke-width="2"/>
      <rect x="375" y="250" width="50" height="20" fill="#0B132B" stroke="${item.accent}" stroke-width="1.5"/>

      <!-- Bottle Body -->
      <rect x="250" y="270" width="300" height="420" rx="16" fill="url(#glassGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')})" stroke="rgba(255,255,255,0.18)" stroke-width="2"/>
      <rect x="260" y="280" width="280" height="400" rx="12" fill="none" stroke="rgba(56,189,248,0.25)" stroke-width="1"/>

      <!-- Glass reflections -->
      <line x1="280" y1="300" x2="280" y2="660" stroke="rgba(255,255,255,0.12)" stroke-width="3"/>
      <line x1="520" y1="300" x2="520" y2="660" stroke="rgba(255,255,255,0.08)" stroke-width="2"/>

      <!-- Azure Label Plate -->
      <rect x="290" y="420" width="220" height="130" rx="4" fill="#060911" stroke="${item.accent}" stroke-width="1.5"/>
      <text x="400" y="465" text-anchor="middle" font-family="Georgia, serif" font-size="16" fill="${item.accent}" letter-spacing="4">NIAMAL</text>
      <text x="400" y="495" text-anchor="middle" font-family="Georgia, serif" font-size="13" font-weight="bold" fill="#F0F6FC" letter-spacing="2">${item.title}</text>
      <text x="400" y="520" text-anchor="middle" font-family="system-ui, sans-serif" font-size="9" fill="#94A3B8" letter-spacing="3">100 ML • MAISON DE LUXE</text>
    `;
  } else if (item.type === 'case') {
    illustration = `
      <defs>
        <linearGradient id="leatherGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#1E293B"/>
          <stop offset="100%" stop-color="#080C14"/>
        </linearGradient>
      </defs>
      <rect x="280" y="160" width="240" height="490" rx="38" fill="url(#leatherGrad_${item.file.replace(/[^a-zA-Z0-9]/g, '')})" stroke="rgba(255,255,255,0.2)" stroke-width="2"/>
      <rect x="305" y="185" width="95" height="100" rx="20" fill="#0F172A" stroke="${item.accent}" stroke-width="1.5"/>
      <circle cx="330" cy="210" r="16" fill="#06080C" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="375" cy="210" r="16" fill="#06080C" stroke="#38BDF8" stroke-width="1.5"/>
      <circle cx="352" cy="255" r="16" fill="#06080C" stroke="#38BDF8" stroke-width="1.5"/>
      <text x="400" y="580" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="${item.accent}" letter-spacing="4">NIAMAL</text>
    `;
  } else {
    illustration = `
      <circle cx="400" cy="400" r="140" fill="#0B111E" stroke="${item.accent}" stroke-width="3"/>
      <circle cx="400" cy="400" r="110" fill="#060911" stroke="rgba(255,255,255,0.15)" stroke-width="1"/>
      <circle cx="400" cy="400" r="50" fill="none" stroke="${item.accent}" stroke-width="2" stroke-dasharray="4 6"/>
      <text x="400" y="405" text-anchor="middle" font-family="Georgia, serif" font-size="14" fill="${item.accent}" letter-spacing="3">NIAMAL</text>
    `;
  }

  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 800 800" width="800" height="800">
    <rect width="800" height="800" fill="${item.color}"/>
    <radialGradient id="bgGlow_${item.file.replace(/[^a-zA-Z0-9]/g, '')}" cx="50%" cy="50%" r="50%">
      <stop offset="0%" stop-color="${item.accent}" stop-opacity="0.18"/>
      <stop offset="100%" stop-color="${item.color}" stop-opacity="0"/>
    </radialGradient>
    <rect width="800" height="800" fill="url(#bgGlow_${item.file.replace(/[^a-zA-Z0-9]/g, '')})"/>
    <rect x="24" y="24" width="752" height="752" fill="none" stroke="rgba(255,255,255,0.06)" stroke-width="1"/>
    ${illustration}
    <text x="400" y="740" text-anchor="middle" font-family="system-ui, sans-serif" font-size="10" fill="#94A3B8" letter-spacing="4">EDITION 2026 • HANDCRAFTED</text>
  </svg>`;
}

items.forEach(item => {
  const svg = createProductSvg(item);
  fs.writeFileSync(path.join(productsDir, item.file), svg);
  fs.writeFileSync(path.join(productsDir, item.file.replace('.webp', '.svg')), svg);
});

console.log('Cleaned assets successfully.');
