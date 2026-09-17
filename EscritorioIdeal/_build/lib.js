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
  return `<a class="card guide-card" href="/guias/${g.slug}.html">
    <span class="card-eyebrow">Guía de compra</span>
    <h3>${g.title}</h3>
    <p>${g.dek}</p>
    <span class="card-cta">Leer guía ${icon("arrow")}</span>
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

// Aviso honesto: todavía no hay tag de afiliado activo (cuenta en proceso de
// alta). Enlaza a una búsqueda normal de Amazon, sin parámetros de afiliado.
// En cuanto exista el tag (ver PENDIENTE.md) esto se sustituye por enlaces
// reales generados desde PA-API.
function amazonSearchBox(query, label) {
  const url = `https://www.amazon.es/s?k=${encodeURIComponent(query)}`;
  return `<div class="amzbox">
    <p class="amzbox-label">${label || "Ver opciones en Amazon"}</p>
    <a class="btn btn-accent" href="${url}" target="_blank" rel="nofollow sponsored noopener">
      Buscar en Amazon ${icon("arrow")}
    </a>
  </div>`;
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
};
