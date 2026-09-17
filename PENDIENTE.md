# Pendiente antes de publicar y solicitar el alta en Amazon Afiliados

## Datos que faltan (obligatorios para legal/privacidad)

- **NIF/NIE y nombre o razón social** del titular: hoy son placeholders
  `[PENDIENTE: ...]` en `_build/nav.js` (`SITE.legal`). Se usan en
  [`legal/aviso-legal.html`](legal/aviso-legal.html) y
  [`legal/politica-privacidad.html`](legal/politica-privacidad.html).
- **Domicilio fiscal completo**: mismo sitio.
- **Correo real**: `hola@escritorioideal.es` es un placeholder — hoy ese
  dominio no existe. Cambiar `SITE.email` en `_build/nav.js` por un correo
  que sí puedas leer (puede ser un Gmail mientras no haya dominio propio).

Después de rellenar `_build/nav.js`, ejecutar `node build.js` para
regenerar las páginas con los datos correctos.

## Dominio

No hay dominio comprado. `SITE.domain` en `_build/nav.js` apunta a un
subdominio provisional de Vercel (`escritorioideal.vercel.app`). Para la
solicitud de afiliados sirve un subdominio de Vercel, pero un dominio
propio (`.es` o `.com`) da más credibilidad en la revisión manual de
Amazon. Si se compra uno, actualizar `SITE.domain` y volver a generar.

## Cuenta de Amazon Afiliados

1. Publicar este sitio (Vercel: `vercel --prod` desde esta carpeta, o
   conectar el repo).
2. Registrarse en `afiliados.amazon.es` con la URL ya publicada.
3. Elegir el **Store ID** (tag de afiliado). Sustituir el placeholder
   `TUTAG-21` en `SITE.amazonTag` (`_build/nav.js`) por el real — aunque
   ahora mismo ningún enlace lo usa todavía (ver siguiente punto).
4. Generar 3 ventas cualificadas en 180 días o la cuenta se cierra sola:
   hace falta tráfico real desde el primer día, no solo tener la web.
5. Una vez aprobada la cuenta, solicitar acceso a **PA-API** (Access Key +
   Secret Key) desde el panel, sección "Herramientas de producto".

## Enlaces de afiliado (por ahora son búsquedas normales)

Cada guía tiene un botón "Buscar en Amazon" que hoy enlaza a
`amazon.es/s?k=...` **sin tag de afiliado**, porque la cuenta todavía no
existe (helper `amazonSearchBox` en `_build/lib.js`). En cuanto haya
cuenta aprobada y tag real:

- Mínimo viable: añadir `&tag=<tu-tag>` a esas URLs de búsqueda.
- Con PA-API ya disponible: sustituir esos botones por productos concretos
  (imagen, precio, enlace) generados automáticamente por categoría/keyword
  — es el pipeline que se monta después, no está construido todavía.

## Contenido para llegar y mantener el mínimo de Amazon

Amazon pide contenido activo, no solo publicado una vez. Hoy hay 15
páginas de contenido real (5 guías + 4 artículos de blog + inicio + sobre
mí + contacto + 3 legales), por encima del mínimo de 10, pero **hay que
seguir publicando** — Amazon valora que el sitio se actualice en los
últimos 60 días. Ideas ya identificadas y no escritas todavía:
- Guía de escritorios eléctricos / regulables en altura.
- Guía de auriculares y micrófono para videollamadas.
- Artículo: cómo adaptar el escritorio a una habitación pequeña.

## Otras cosas menores

- `SITE.social` (Instagram/Pinterest) está vacío: si se crean perfiles,
  enlazarlos en `_build/nav.js` y en el footer.
- No hay fotografías propias: el sitio usa solo iconos SVG a propósito,
  para no mezclar fotos de banco de imágenes con productos reales. Si se
  quieren añadir fotos del propio escritorio/setup, van en
  `assets/img/` y hay que añadir su referencia en la página
  correspondiente (el `build.js` falla si una imagen referenciada no
  existe, así que un enlace roto se detecta solo).
- Analítica: no hay ningún script de analítica instalado todavía. Si se
  añade (Plausible, GA4...), hay que:
  1. Cargarlo solo si `localStorage.ei_cookie_consent === "accepted"`.
  2. Actualizar `legal/politica-cookies.html` con la cookie real.
