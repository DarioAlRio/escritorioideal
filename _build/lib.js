"use strict";

// Iconos SVG en línea y componentes reutilizables. Cero librerías de iconos.

function icon(name, cls) {
  const extra = cls ? ` ${cls}` : "";
  const icons = {
    menu: `<svg class="icon${extra}" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M4 6h16M4 12h16M4 18h16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    close: `<svg class="icon${extra}" viewBox="0 0 24 24" width="24" height="24" aria-hidden="true"><path d="M6 6l12 12M18 6L6 18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"/></svg>`,
    check: `<svg class="icon${extra}" viewBox="0 0 24 24" width="20" height="20" aria-hidden="true"><path d="M4 12l5 5L20 6" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    arrow: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chevron: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    mail: `<svg class="icon${extra}" viewBox="0 0 24 24" width="18" height="18" aria-hidden="true"><path d="M4 6h16v12H4z" fill="none" stroke="currentColor" stroke-width="1.8"/><path d="M4 7l8 6 8-6" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg>`,
    chair: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M7 4h10l-1 8H8L7 4z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M8 12l-2 8M16 12l2 8M8 20h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    monitor: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3" y="4" width="18" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M9 20h6M12 16v4" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    keyboard: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><rect x="3" y="6" width="18" height="12" rx="1.5" fill="none" stroke="currentColor" stroke-width="1.6"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M6 14h12" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/></svg>`,
    lamp: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M4 5l8 3 8-3-8 9-8-9z" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linejoin="round"/><path d="M12 14v6M8 20h8" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg>`,
    cable: `<svg class="icon${extra}" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path d="M5 7v4a4 4 0 0 0 4 4h6a4 4 0 0 1 4 4v2" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/><circle cx="5" cy="5" r="2" fill="none" stroke="currentColor" stroke-width="1.6"/><circle cx="19" cy="21" r="2" fill="none" stroke="currentColor" stroke-width="1.6"/></svg>`,
  };
  return icons[name] || "";
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function paragraphs(arr) {
  return arr.map((p) => `<p>${p}</p>`).join("\n");
}

function checklist(items) {
  return `<ul class="checklist">
    ${items.map((it) => `<li>${icon("check", "checklist-icon")}<span>${it}</span></li>`).join("\n")}
  </ul>`;
}

function faqBlock(items) {
  if (!items || !items.length) return "";
  return `<div class="faq">
    ${items
      .map(
        (f, i) => `<details class="faq-item"${i === 0 ? " open" : ""}>
      <summary>${f.q}${icon("chevron", "faq-chevron")}</summary>
      <p>${f.a}</p>
    </details>`
      )
      .join("\n")}
  </div>`;
}

function guideCard(g) {
  const thumb = g.products && g.products[0] ? g.products[0].img : null;
  return `<a class="card guide-card" href="/guias/${g.slug}.html">
    ${thumb ? `<img class="guide-card-img" src="${thumb}" alt="" loading="lazy" width="280" height="175">` : ""}
    <div class="guide-card-body">
      <span class="card-eyebrow">Guía de compra</span>
      <h3>${g.title}</h3>
      <p>${g.dek}</p>
      <span class="card-cta">Leer guía ${icon("arrow")}</span>
    </div>
  </a>`;
}

function articleCard(a) {
  return `<a class="card article-card" href="/blog/${a.slug}.html">
    <span class="card-eyebrow">Blog</span>
    <h3>${a.title}</h3>
    <p>${a.dek}</p>
    <span class="card-cta">Leer artículo ${icon("arrow")}</span>
  </a>`;
}

function amazonSearchBox(query, label) {
  const url = `https://www.amazon.es/s?k=${encodeURIComponent(query)}&tag=escritorioide-21`;
  return `<div class="amzbox">
    <p class="amzbox-label">${label || "Ver opciones en Amazon"}</p>
    <a class="btn btn-accent" href="${url}" target="_blank" rel="nofollow sponsored noopener">
      Buscar en Amazon ${icon("arrow")}
    </a>
  </div>`;
}

// Enlace de afiliado a partir del ASIN. Formato mínimo viable (sin PA-API):
// dominio + /dp/ASIN + tag. Ver PENDIENTE.md para el paso a PA-API.
function amazonProductUrl(asin) {
  return `https://www.amazon.es/dp/${asin}?tag=escritorioide-21`;
}

// Slug único por producto: título + ASIN en minúsculas, así nunca choca aunque
// dos productos de guías distintas tengan un título parecido.
function slugify(str) {
  return String(str)
    .toLowerCase()
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");
}

function productSlug(p) {
  return `${slugify(p.title)}-${p.asin.toLowerCase()}`;
}

// Ficha propia del producto dentro del sitio (no el enlace de afiliado): es
// la página con nuestro veredicto, puntuación y enlaces internos.
function productUrl(p) {
  return `/productos/${productSlug(p)}.html`;
}

// "4,7★" -> 4.7. Devuelve null si no hay valoración parseable.
function ratingNumber(rating) {
  const m = String(rating || "").match(/(\d+)[,.](\d+)/);
  return m ? Number(`${m[1]}.${m[2]}`) : null;
}

// Puntuación propia (0-10): combina la valoración de Amazon con la posición
// de precio dentro de su propia guía. No es una prueba de laboratorio, es una
// forma de resumir de un vistazo si compensa dentro de su categoría — el
// método se explica siempre en la propia ficha de producto.
function ourScore(p, guideProducts) {
  const stars = ratingNumber(p.rating);
  let score = (stars !== null ? stars : 4) / 5 * 7;
  const prices = (guideProducts || []).map((x) => Number(x.price)).filter((n) => !isNaN(n));
  const price = Number(p.price);
  if (prices.length && !isNaN(price)) {
    if (price === Math.min(...prices)) score += 1; // mejor precio de la guía
    if (price === Math.max(...prices)) score += 1; // más prestaciones/gama alta
  }
  return Math.min(10, Math.round(score * 10) / 10);
}

// "Entrada de gama" / "Gama media" / "Gama alta" según el tercio de precio en
// el que cae el producto dentro de su propia guía.
function priceTier(p, guideProducts) {
  const prices = (guideProducts || [])
    .map((x) => Number(x.price))
    .filter((n) => !isNaN(n))
    .sort((a, b) => a - b);
  const price = Number(p.price);
  if (!prices.length || isNaN(price)) return null;
  const idx = prices.indexOf(price);
  const third = Math.max(1, Math.ceil(prices.length / 3));
  if (idx < third) return "Entrada de gama";
  if (idx >= prices.length - third) return "Gama alta";
  return "Gama media";
}

// Una tarjeta de producto individual. `p` es {asin, title, note, price, rating,
// category?, categoryTitle?}. Si trae category/categoryTitle añade un enlace a
// la guía correspondiente (se usa en el bloque de destacados fuera de guías).
// Enlaza a la ficha propia del producto, no directamente a Amazon: el enlace
// de afiliado vive dentro de esa ficha (ver _build/pages/producto.js).
function productCard(p) {
  return `<a class="product-card" href="${productUrl(p)}">
        <img class="product-card-img" src="${p.img}" alt="${escapeHtml(p.title)}" loading="lazy" width="240" height="240">
        <div class="product-card-body">
          <p class="product-card-title">${escapeHtml(p.title)}</p>
          ${p.note ? `<p class="product-card-note">${escapeHtml(p.note)}</p>` : ""}
          <div class="product-card-meta">
            ${p.rating ? `<span class="product-card-rating">${escapeHtml(p.rating)}</span>` : ""}
            ${p.price ? `<span class="product-card-price">desde ${escapeHtml(p.price)} €</span>` : ""}
          </div>
          <span class="btn btn-accent product-card-cta">Ver ficha y opinión ${icon("arrow")}</span>
        </div>
      </a>`;
}

// Grid de productos concretos recomendados dentro de una guía. `products` es
// [{asin, title, note, price, rating}]. El precio se muestra como orientativo
// (capturado al escribir la guía), nunca como precio en vivo: este sitio es
// estático y no consulta PA-API todavía.
function productGrid(products) {
  if (!products || !products.length) return "";
  return `<div class="content-section product-section">
    <h2>Productos que cumplen estos criterios</h2>
    <p class="product-section-note">
      Selección propia a partir de los criterios de esta guía, no un ranking pagado. Precios
      orientativos en la fecha de esta guía: compruébalo siempre en la ficha de Amazon.
    </p>
    <div class="product-grid">
      ${products.map(productCard).join("\n")}
    </div>
  </div>`;
}

// Bloque de "destacados" que se inserta en TODAS las páginas (home, sobre mí,
// contacto, blog, legal, 404...), no solo en las guías. `excludeCategory`
// evita repetir la categoría de la guía en la que ya está este mismo bloque
// específico (ver productGrid) cuando se muestra dentro de esa guía.
function featuredProductsSection(featured, excludeCategory) {
  const list = (featured || []).filter((p) => p.category !== excludeCategory);
  if (!list.length) return "";
  return `<section class="section featured-products">
    <div class="wrap">
      <div class="section-head">
        <h2>Lo más recomendado de EscritorioIdeal</h2>
        <p>Un producto destacado por categoría, sacado directamente de nuestras guías de compra.</p>
      </div>
      <div class="product-grid">
        ${list
          .map(
            (p) => `<div class="product-card-wrap">
          ${productCard(p)}
          ${p.category ? `<a class="product-card-guide-link" href="/guias/${p.category}.html">Ver guía de ${escapeHtml(p.categoryTitle)} ${icon("arrow")}</a>` : ""}
        </div>`
          )
          .join("\n")}
      </div>
    </div>
  </section>`;
}

module.exports = {
  icon,
  escapeHtml,
  paragraphs,
  checklist,
  faqBlock,
  guideCard,
  articleCard,
  amazonSearchBox,
  amazonProductUrl,
  slugify,
  productSlug,
  productUrl,
  ratingNumber,
  ourScore,
  priceTier,
  productCard,
  productGrid,
  featuredProductsSection,
};
