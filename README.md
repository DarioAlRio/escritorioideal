# EscritorioIdeal — web para el alta en Amazon Afiliados

Web de contenido (guías de compra + blog) sobre accesorios de escritorio y
oficina: sillas, monitores, teclado/ratón, iluminación y organización.
Existe para cumplir el requisito de Amazon de tener un sitio con contenido
real y publicado antes de solicitar el alta en el Programa de Afiliados
(`afiliados.amazon.es`). Ver [`PENDIENTE.md`](PENDIENTE.md) para lo que
falta antes de publicar y solicitar la cuenta.

## Ver en local

```bash
node build.js        # genera las páginas .html + sitemap.xml + robots.txt
node _build/serve.js  # sirve la carpeta en http://localhost:4173
```

o con npm: `npm run build`, `npm run serve`, o `npm start` (las dos cosas
seguidas). El `build.js` verifica que no haya enlaces internos ni
imágenes rotas y termina con código de salida 1 si encuentra alguno.

## Estructura

```
build.js              genera los .html + sitemap.xml + robots.txt y VERIFICA
_build/nav.js          datos del negocio (SITE), menú (NAV) y columnas del pie (FOOT)
_build/data.js         contenido real: GUIDES (guías de compra) y ARTICLES (blog)
_build/layout.js        <head>, cabecera, pie, hero de página, cookies, migas de pan
_build/lib.js           iconos SVG en línea y componentes (tarjetas, checklist, FAQ...)
_build/pages/*.js       una función por página o por plantilla (guía, artículo, legal...)
_build/serve.js         servidor estático de previsualización
assets/css/site.css     único CSS del sitio
assets/js/site.js       único JS del sitio (menú móvil, aviso de cookies, correo ofuscado)
assets/img/             imágenes e iconos (hoy solo el favicon)
```

El HTML de la raíz (`index.html`, `guias/*.html`, `blog/*.html`,
`legal/*.html`, `404.html`) **se genera, no se edita a mano**: para
cambiar cualquier página se toca su fuente en `_build/` y se vuelve a
ejecutar `node build.js`.

## Qué archivo tocar para cambiar cada cosa

| Quiero cambiar... | Archivo |
|---|---|
| Nombre, dominio, tag de afiliado, datos fiscales, menú | `_build/nav.js` |
| El texto de una guía o de un artículo existente | `_build/data.js` |
| Añadir una guía o un artículo nuevo | añadir un objeto al array `GUIDES` o `ARTICLES` en `_build/data.js` — se genera solo, sin tocar `build.js` |
| Cabecera, pie, aviso de cookies, migas de pan | `_build/layout.js` |
| Un icono o un componente (tarjeta, checklist, FAQ) | `_build/lib.js` |
| Colores, tipografía, espaciado | `assets/css/site.css` |
| Menú móvil, aviso de cookies, correo ofuscado | `assets/js/site.js` |
| Aviso legal / privacidad / cookies | `_build/pages/legal.js` |

## Contenido

Ninguna guía inventa datos de producto (ni precios, ni valoraciones, ni
modelos concretos): son guías de criterio, pensadas para que sirvan con
cualquier producto real que se compare, se compre donde se compre. Cuando
exista tag de afiliado (ver `PENDIENTE.md`), cada guía podrá enlazar
productos concretos vía PA-API sin cambiar el texto editorial.

- **5 guías de compra**: silla ergonómica, monitor, teclado y ratón,
  iluminación, organización de cables y espacio.
- **4 artículos de blog**: montar el escritorio de teletrabajo, errores
  de ergonomía comunes, cuánto gastar en una silla, iluminar sin
  deslumbrar en videollamadas.
- **Inicio, Sobre mí, Contacto** y **3 páginas legales** (aviso legal,
  privacidad, cookies) con la estructura y cláusulas de un sitio de
  afiliación en España — pendientes de los datos fiscales reales.

15 páginas de contenido en total, por encima del mínimo de 10 que pide
Amazon para revisar la solicitud.

## Sistema de diseño

- **Paleta**: verde pino (`--color-brand`, confianza/marca) + ámbar
  cálido (`--color-accent`, botones de compra/CTA), sobre un fondo cálido
  casi blanco. Con soporte automático de modo oscuro
  (`prefers-color-scheme: dark`) redefiniendo las mismas variables.
- **Tipografía**: Bitter (titulares, serif con cuerpo) + Work Sans
  (texto), elegidas para evitar las tipografías más repetidas en webs
  generadas con IA (Inter, Roboto, Fraunces, Geist...).
- **Componentes**: tarjetas de guía/artículo, checklist con icono,
  acordeón de preguntas frecuentes con `<details>`, caja de aviso de
  cookies, menú móvil con `<details>/<summary>` nativo (funciona sin
  JavaScript).

## Decisiones técnicas

- **HTML estático generado en Node, sin framework.** Se sube la carpeta
  tal cual a cualquier hosting; no hay `node_modules` en el resultado.
- **Un solo CSS y un solo JS**, sin librerías externas. Los iconos son
  SVG en línea.
- **Navegable sin JavaScript**: el menú móvil es un `<details>` nativo,
  las preguntas frecuentes son `<details>` nativos, el aviso de cookies
  es el único elemento que depende de JS para poder recordar la
  decisión entre visitas.
- **Sin backend ni formularios**: el contacto es un correo ofuscado con
  `data-correo="usuario|dominio"` que el JS ensambla en el navegador,
  para frenar a los robots recolectores sin romper el `mailto:` real.
- **SEO básico**: `title`/`description` únicos, `canonical`, Open Graph,
  JSON-LD (`Organization`, `WebSite`, `BreadcrumbList`, `FAQPage` en las
  guías, `Article` en el blog), `sitemap.xml` y `robots.txt` generados.

## Antes de solicitar el alta en Amazon Afiliados

Ver [`PENDIENTE.md`](PENDIENTE.md): faltan el NIF/domicilio fiscal reales
para el aviso legal y la política de privacidad, un correo real, decidir
si se compra un dominio propio, y publicar el sitio (Vercel) antes del
registro en `afiliados.amazon.es`.
