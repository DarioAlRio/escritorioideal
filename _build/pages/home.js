"use strict";

const { SITE } = require("../nav");
const { GUIDES, ARTICLES } = require("../data");
const { icon, guideCard, articleCard } = require("../lib");
const { pageHero, ctaBand } = require("../layout");

function home() {
  const featuredGuides = GUIDES.slice(0, 4).map(guideCard).join("\n");
  const featuredArticles = ARTICLES.slice(0, 3).map(articleCard).join("\n");

  const html = `
  <section class="hero">
    <div class="wrap hero-inner">
      <div class="hero-copy">
        <p class="eyebrow">Guías de compra independientes</p>
        <h1>${SITE.claim}</h1>
        <p class="hero-dek">
          Comparamos criterios, no marcas: qué mirar antes de comprar una silla, un monitor,
          un teclado o una lámpara de escritorio, explicado sin tecnicismos y sin recomendaciones
          pagadas por ninguna marca.
        </p>
        <div class="hero-actions">
          <a class="btn btn-accent" href="/guias/">Ver guías de compra ${icon("arrow")}</a>
          <a class="btn btn-ghost" href="/blog/">Leer el blog</a>
        </div>
      </div>
      <div class="hero-art" aria-hidden="true">
        <div class="hero-art-card">${icon("chair")}<span>Silla</span></div>
        <div class="hero-art-card">${icon("monitor")}<span>Monitor</span></div>
        <div class="hero-art-card">${icon("keyboard")}<span>Teclado</span></div>
        <div class="hero-art-card">${icon("lamp")}<span>Luz</span></div>
      </div>
    </div>
  </section>

  <section class="section">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Empieza por aquí</p>
        <h2>Guías por tipo de producto</h2>
      </div>
      <div class="card-grid">
        ${featuredGuides}
      </div>
      <a class="see-all" href="/guias/">Ver todas las guías ${icon("arrow")}</a>
    </div>
  </section>

  <section class="section section-alt">
    <div class="wrap">
      <div class="section-head">
        <p class="eyebrow">Del blog</p>
        <h2>Artículos recientes</h2>
      </div>
      <div class="card-grid">
        ${featuredArticles}
      </div>
      <a class="see-all" href="/blog/">Ver todo el blog ${icon("arrow")}</a>
    </div>
  </section>

  <section class="section trust-section">
    <div class="wrap trust-grid">
      <div>
        <h2>¿Por qué esta web?</h2>
        <p>
          Montar un escritorio cómodo implica decidir sobre piezas que no se prueban en cinco
          minutos: una silla, un monitor o un teclado se notan de verdad a la tercera semana de
          uso, no en la tienda. ${SITE.name} reúne los criterios que importan de cada tipo de
          producto para que la decisión no dependa de adivinar.
        </p>
        <p>
          No inventamos comparativas de modelos concretos que no hemos podido revisar con
          criterio: cada guía explica qué características buscar y por qué, de forma que sirva
          para comparar cualquier producto, lo compres donde lo compres.
        </p>
      </div>
      <div class="trust-card">
        <h3>Cómo se financia esta web</h3>
        <p>${SITE.amazonDisclaimer}</p>
        <p class="trust-note">
          Enlazar a un producto no cambia su precio para ti ni implica que sea el único
          recomendable: es una forma de sostener el tiempo que lleva escribir cada guía.
        </p>
      </div>
    </div>
  </section>

  ${ctaBand()}
  `;

  return {
    route: "index.html",
    path: "/",
    title: SITE.name,
    description: SITE.description,
    jsonLd: [
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: SITE.name,
        url: SITE.domain,
        description: SITE.description,
        inLanguage: "es-ES",
      },
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: SITE.name,
        url: SITE.domain,
      },
    ],
    html,
  };
}

module.exports = home;
