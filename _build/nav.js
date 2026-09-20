"use strict";

// Datos del negocio y estructura de navegación. Todo lo que cambie de marca
// (nombre, dominio, tag de afiliado, datos fiscales) se toca aquí, no en las páginas.

const SITE = {
  name: "EscritorioIdeal",
  claim: "Guías y comparativas para montar tu puesto de trabajo perfecto",
  description:
    "Guías de compra independientes de escritorios, sillas, monitores, teclados e iluminación para montar un puesto de trabajo cómodo, en casa o en la oficina.",
  // Dominio provisional: no hay dominio propio comprado todavía. Ver PENDIENTE.md.
  domain: "https://escritorioideal.vercel.app",
  locale: "es_ES",
  lang: "es",
  amazonTag: "escritorioide-21",
  amazonDisclaimer:
    "Como Afiliado de Amazon, EscritorioIdeal obtiene ingresos por las compras adscritas que cumplen los requisitos aplicables.",
  social: {
    // PENDIENTE: crear y enlazar los perfiles reales antes de publicar.
    instagram: null,
    pinterest: null,
  },
  // Datos fiscales del titular: pendientes, ver PENDIENTE.md.
  legal: {
    titular: "[PENDIENTE: nombre y apellidos o razón social]",
    nif: "[PENDIENTE: NIF/NIE]",
    domicilio: "[PENDIENTE: domicilio fiscal completo]",
    registro: null,
  },
};

// Menú principal. Cada guía y artículo real vive en _build/data.js; aquí solo
// se listan los grupos y los enlaces fijos.
const NAV = [
  { label: "Guías de compra", href: "/guias/" },
  { label: "Productos", href: "/productos/" },
  { label: "Blog", href: "/blog/" },
];

const FOOT = {
  columnas: [
    {
      titulo: "Guías de compra",
      enlaces: [], // se rellena en build.js a partir de DATA.guides
    },
    {
      titulo: "Blog",
      enlaces: [], // se rellena en build.js a partir de DATA.articles
    },
    {
      titulo: "Legal",
      enlaces: [
        { label: "Aviso legal", href: "/legal/aviso-legal.html" },
        { label: "Política de privacidad", href: "/legal/politica-privacidad.html" },
        { label: "Política de cookies", href: "/legal/politica-cookies.html" },
      ],
    },
  ],
};

module.exports = { SITE, NAV, FOOT };
