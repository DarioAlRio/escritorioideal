"use strict";

const { SITE } = require("../nav");
const { pageHero } = require("../layout");

function sobreMi() {
  const html = `
  ${pageHero({
    eyebrow: "Sobre mí",
    title: "Quién escribe esta web",
  })}
  <section class="section">
    <div class="wrap prose">
      <p>
        Soy quien escribe y mantiene ${SITE.name}. Empecé a apuntar notas sobre qué buscar al
        montar mi propio escritorio de teletrabajo —silla, altura de monitor, iluminación— porque
        me costó encontrar esa información explicada sin depender de un único modelo o marca.
        Esta web es esa nota, ordenada y ampliada para quien esté en el mismo punto.
      </p>
      <p>
        Cada guía se escribe pensando en los criterios que se pueden aplicar a cualquier
        producto del tipo del que habla (cómo elegir, no qué comprar exactamente), y se revisa y
        actualiza cuando cambia algo relevante. Cuando una guía enlaza a Amazon, es porque
        participo en su Programa de Afiliados: ${SITE.amazonDisclaimer.toLowerCase()}
      </p>
      <p>
        Si detectas un error, un enlace roto o algo que crees que falta, la vía más directa es
        escribir a través de la <a href="/contacto.html">página de contacto</a>.
      </p>
    </div>
  </section>
  `;

  return {
    route: "sobre-mi.html",
    path: "/sobre-mi.html",
    title: "Sobre mí",
    description: `Quién escribe y mantiene ${SITE.name} y cómo se financia esta web.`,
    html,
  };
}

module.exports = sobreMi;
