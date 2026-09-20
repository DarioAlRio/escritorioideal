"use strict";

const { SITE } = require("../nav");
const { paragraphs, checklist, faqBlock, amazonSearchBox, productGrid, productUrl, icon, escapeHtml } = require("../lib");
const { pageHero, formatDate } = require("../layout");

function guiaPage(g) {
  const sections = g.sections
    .map(
      (s) => `<div class="content-section">
        <h2>${s.heading}</h2>
        ${paragraphs(s.body)}
      </div>`
    )
    .join("\n");

  const html = `
  ${pageHero({
    eyebrow: "Guía de compra",
    title: g.title,
    dek: g.dek,
    updated: g.updated,
  })}
  ${
    g.img
      ? `<div class="page-hero-photo-wrap"><div class="wrap"><img class="page-hero-photo" src="${g.img}" alt="${escapeHtml(g.title)}" loading="lazy" width="1200" height="500"></div></div>`
      : ""
  }
  <section class="section">
    <div class="wrap two-col">
      <article class="prose">
        ${paragraphs(g.intro)}
        ${sections}
        ${
          g.checklist
            ? `<div class="content-section">
          <h2>Resumen rápido</h2>
          ${checklist(g.checklist)}
        </div>`
            : ""
        }
        ${
          g.faq && g.faq.length
            ? `<div class="content-section">
          <h2>Preguntas frecuentes</h2>
          ${faqBlock(g.faq)}
        </div>`
            : ""
        }
        ${productGrid(g.products)}
        ${
          g.products && g.products.length > 1
            ? `<p class="see-all"><a href="/comparativas/${g.slug}.html">Ver comparativa: entrada de gama vs. gama alta ${icon("arrow")}</a></p>`
            : ""
        }
        ${
          g.products && g.products.length >= 5
            ? `<p class="see-all"><a href="/comparativas/${g.slug}-entrada-vs-gama-media.html">Ver comparativa: entrada vs. gama media ${icon("arrow")}</a></p>
        <p class="see-all"><a href="/comparativas/${g.slug}-gama-media-vs-alta.html">Ver comparativa: gama media vs. gama alta ${icon("arrow")}</a></p>`
            : ""
        }
      </article>
      <aside class="sidebar">
        ${amazonSearchBox(g.title, "Buscar más opciones")}
      </aside>
    </div>
  </section>
  `;

  return {
    route: `guias/${g.slug}.html`,
    path: `/guias/${g.slug}.html`,
    title: g.title,
    description: g.dek,
    excludeCategory: g.slug,
    breadcrumbsItems: [
      { label: "Inicio", href: "/" },
      { label: "Guías de compra", href: "/guias/" },
      { label: g.title },
    ],
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Inicio", item: SITE.domain + "/" },
          { "@type": "ListItem", position: 2, name: "Guías de compra", item: SITE.domain + "/guias/" },
          { "@type": "ListItem", position: 3, name: g.title, item: SITE.domain + `/guias/${g.slug}.html` },
        ],
      },
      ...(g.products && g.products.length
        ? [
            {
              "@context": "https://schema.org",
              "@type": "ItemList",
              name: g.title,
              itemListElement: g.products.map((p, i) => ({
                "@type": "ListItem",
                position: i + 1,
                name: p.title,
                url: SITE.domain + productUrl(p),
              })),
            },
          ]
        : []),
      ...(g.faq && g.faq.length
        ? [
            {
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: g.faq.map((f) => ({
                "@type": "Question",
                name: f.q,
                acceptedAnswer: { "@type": "Answer", text: f.a },
              })),
            },
          ]
        : []),
    ],
    html,
  };
}

module.exports = guiaPage;
