"use strict";

// Bloques de conversión: "Elige rápido" (arriba de cada guía) y "Sigue con la
// guía" (al final de cada artículo). Todo sale de data.js, nada se escribe a mano.

const { GUIDES } = require("./data");
const { escapeHtml, amazonProductUrl, productUrl, ratingNumber, icon, priceTier, altOf, priceNum } = require("./lib");

const fmtPrice = (p) => `${String(p.price).replace(".", ",")} €`;

// Devuelve { choice, value, cheap } con productos distintos de la guía.
function pickWinners(products) {
  const list = (products || []).filter((p) => ratingNumber(p.rating) !== null && !isNaN(priceNum(p)));
  if (list.length < 3) return null;
  const prices = list.map((p) => priceNum(p)).sort((a, b) => a - b);
  const median = prices[Math.floor(prices.length / 2)];
  const used = new Set();
  const take = (arr, key) => {
    const c = arr.filter((p) => !used.has(p.asin)).sort(key)[0];
    if (c) used.add(c.asin);
    return c;
  };
  // Nuestra elección: la mejor valoración; si empatan, la más cercana a la gama media.
  const choice = take(
    list,
    (a, b) =>
      ratingNumber(b.rating) - ratingNumber(a.rating) ||
      Math.abs(priceNum(a) - median) - Math.abs(priceNum(b) - median)
  );
  // Mejor calidad-precio: más valoración por euro (con raíz para no premiar solo lo barato).
  const good = list.filter((p) => ratingNumber(p.rating) >= 4.2);
  const value = take(
    good.length ? good : list,
    (a, b) =>
      (ratingNumber(b.rating) - 3.5) / Math.sqrt(priceNum(b)) -
      (ratingNumber(a.rating) - 3.5) / Math.sqrt(priceNum(a))
  );
  // Más económico: el más barato con valoración decente.
  const okCheap = list.filter((p) => ratingNumber(p.rating) >= 4.0);
  const cheap = take(okCheap.length ? okCheap : list, (a, b) => priceNum(a) - priceNum(b));
  return choice && value && cheap ? { choice, value, cheap } : null;
}

function quickPicks(g) {
  const w = pickWinners(g.products);
  if (!w) return "";
  const rows = [
    ["Nuestra elección", w.choice],
    ["Mejor calidad-precio", w.value],
    ["Más económico", w.cheap],
  ]
    .map(
      ([label, p]) => `<tr>
          <td data-label="Elección"><span class="quickpick-badge">${label}</span></td>
          <td data-label="Producto"><a class="quickpick-product" href="${productUrl(p)}"><img src="${p.img}" alt="${escapeHtml(altOf(p.title))}" loading="lazy" width="56" height="56"><span>${escapeHtml(p.title)}</span></a></td>
          <td data-label="Valoración">${escapeHtml(p.rating)}</td>
          <td data-label="Gama">${escapeHtml(priceTier(p, g.products) || "—")}</td>
          <td class="quickpick-cta"><a class="btn btn-accent" href="${amazonProductUrl(p.asin)}" target="_blank" rel="nofollow sponsored noopener">Ver en Amazon ${icon("arrow")}</a></td>
        </tr>`
    )
    .join("\n");
  return `<div class="content-section quickpicks">
        <h2>Elige rápido</h2>
        <p class="quickpicks-note">Si tienes prisa: estas son las tres opciones que mejor se defienden en esta guía según su valoración en Amazon y su gama de precio. El precio actual, en Amazon.</p>
        <div class="quickpicks-scroll"><table class="quickpicks-table">
          <thead><tr><th>Elección</th><th>Producto</th><th>Valoración</th><th>Gama</th><th></th></tr></thead>
          <tbody>
        ${rows}
          </tbody>
        </table></div>
      </div>`;
}

// ---- Guías relacionadas con cada artículo (asignadas a mano por slug) ----
const ARTICLE_GUIDES = {
  "mejor-silla-para-teletrabajar-8-horas": [
    "sillas-ergonomicas"
  ],
  "silla-de-malla-o-tapizada-cual-elegir": [
    "sillas-ergonomicas"
  ],
  "silla-gaming-o-silla-ergonomica-para-teletrabajar": [
    "sillas-ergonomicas",
    "mesas-de-escritorio"
  ],
  "como-elegir-una-mesa-elevable-electrica": [
    "mesas-elevables"
  ],
  "monitor-27-pulgadas-qhd-o-4k-para-teletrabajar": [
    "monitores"
  ],
  "monitor-para-teletrabajo-por-menos-de-150-euros": [
    "monitores"
  ],
  "teclado-ergonomico-para-principiantes": [
    "teclados-y-raton"
  ],
  "teclado-mecanico-o-de-membrana-para-la-oficina": [
    "teclados-y-raton"
  ],
  "como-elegir-un-raton-para-trabajar-muchas-horas": [
    "teclados-y-raton"
  ],
  "como-elegir-un-flexo-led-para-el-escritorio": [
    "iluminacion-escritorio"
  ],
  "auriculares-con-microfono-para-videollamadas-como-elegir": [
    "auriculares-videollamadas"
  ],
  "que-necesito-para-ordenar-los-cables-del-escritorio": [
    "organizacion-cables-y-espacio"
  ],
  "reposapies-para-el-escritorio-merece-la-pena": [
    "reposapies-y-accesorios-ergonomicos",
    "sillas-ergonomicas"
  ],
  "elevador-de-monitor-o-brazo-articulado-cual-elegir": [
    "soportes-para-portatil-y-elevadores",
    "organizacion-cables-y-espacio"
  ],
  "que-necesito-para-montar-una-oficina-en-casa": [
    "mesas-de-escritorio",
    "sillas-ergonomicas"
  ],
  "que-medidas-de-escritorio-necesitas-segun-tu-espacio": [
    "mesas-de-escritorio"
  ],
  "escritorio-en-l-o-recto-cual-elegir": [
    "mesas-de-escritorio"
  ],
  "escritorio-pequeno-para-teletrabajar-en-un-piso": [
    "mesas-de-escritorio",
    "organizacion-cables-y-espacio"
  ],
  "material-del-tablero-del-escritorio": [
    "mesas-de-escritorio"
  ],
  "soporte-para-portatil-cuando-merece-la-pena": [
    "soportes-para-portatil-y-elevadores"
  ],
  "escritorio-con-cajones-o-sin-cajones": [
    "mesas-de-escritorio"
  ],
  "escritorio-gaming-o-de-oficina": [
    "mesas-de-escritorio",
    "sillas-ergonomicas"
  ],
  "mesa-fija-o-mesa-elevable": [
    "mesas-elevables",
    "mesas-de-escritorio"
  ],
  "como-montar-un-escritorio-sin-fallos": [
    "mesas-de-escritorio"
  ],
  "como-montar-tu-escritorio-de-teletrabajo": [
    "mesas-de-escritorio",
    "sillas-ergonomicas"
  ],
  "errores-comunes-ergonomia-oficina": [
    "sillas-ergonomicas",
    "reposapies-y-accesorios-ergonomicos"
  ],
  "cuanto-gastar-en-una-silla-de-oficina": [
    "sillas-ergonomicas"
  ],
  "ilumina-tu-escritorio-sin-deslumbrar": [
    "iluminacion-escritorio"
  ],
  "como-ajustar-la-altura-de-tu-silla-ergonomica": [
    "sillas-ergonomicas",
    "reposapies-y-accesorios-ergonomicos"
  ],
  "cuanto-tiempo-de-pie-al-dia-con-mesa-elevable": [
    "mesas-elevables"
  ],
  "monitor-para-trabajar-muchas-horas-sin-fatiga-visual": [
    "monitores"
  ],
  "organizacion-de-cables-guia-practica-paso-a-paso": [
    "organizacion-cables-y-espacio"
  ],
  "auriculares-cancelacion-de-ruido-casa-compartida": [
    "auriculares-videollamadas"
  ],
  "senales-de-que-toca-cambiar-de-teclado": [
    "teclados-y-raton"
  ],
  "preparar-el-escritorio-para-el-otono": [
    "iluminacion-escritorio",
    "mesas-de-escritorio"
  ],
  "checklist-de-ergonomia-en-10-minutos": [
    "sillas-ergonomicas",
    "reposapies-y-accesorios-ergonomicos"
  ],
  "raton-vertical-ventajas-y-cuando-cambiar": [
    "teclados-y-raton"
  ],
  "doble-monitor-o-ultrawide-cual-rinde-mas": [
    "monitores"
  ]
};

function relatedGuides(a, n = 2) {
  return (ARTICLE_GUIDES[a.slug] || [])
    .map((slug) => GUIDES.find((g) => g.slug === slug))
    .filter(Boolean)
    .slice(0, n);
}

function relatedBlock(a) {
  const gs = relatedGuides(a);
  if (!gs.length) return "";
  const items = gs
    .map((g) => {
      const w = pickWinners(g.products);
      return `<li>
          <a class="related-guide-title" href="/guias/${g.slug}.html">${escapeHtml(g.title)}</a>
          <span class="related-guide-dek">${escapeHtml(g.dek || "")}</span>
          ${w ? `<span class="related-guide-pick">Nuestra elección: <a href="${productUrl(w.choice)}">${escapeHtml(w.choice.title)}</a> (${escapeHtml(w.choice.rating)})</span>` : ""}
        </li>`;
    })
    .join("\n");
  return `<div class="content-section related-guides">
        <h2>¿Ya sabes qué necesitas? Mira las mejores opciones</h2>
        <ul class="related-guide-list">
        ${items}
        </ul>
      </div>`;
}

module.exports = { quickPicks, relatedBlock, relatedGuides, pickWinners };
