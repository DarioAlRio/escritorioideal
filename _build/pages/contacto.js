"use strict";

const { SITE } = require("../nav");
const { icon } = require("../lib");
const { pageHero } = require("../layout");

function contacto() {
  const html = `
  ${pageHero({
    eyebrow: "Contacto",
    title: "Escríbeme",
  })}
  <section class="section">
    <div class="wrap prose">
      <p>
        Esta web no tiene formulario propio porque no usa ningún servidor detrás: es HTML
        estático. Para cualquier duda, corrección o propuesta, escribe directamente por correo.
      </p>
      <p class="contact-line">
        ${icon("mail")}
        <a href="#" class="js-mail" data-correo="hola|escritorioideal.es">activar JavaScript para ver el correo</a>
      </p>
      <p>
        Respondo en persona, así que puede tardar unos días. Si el mensaje es sobre un enlace
        roto o un error en una guía, agradezco que incluyas la URL exacta de la página.
      </p>
    </div>
  </section>
  `;

  return {
    route: "contacto.html",
    path: "/contacto.html",
    title: "Contacto",
    description: `Cómo contactar con ${SITE.name}.`,
    html,
  };
}

module.exports = contacto;
