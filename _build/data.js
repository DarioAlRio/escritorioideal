"use strict";

// Contenido real del sitio: guías de compra y artículos de blog.
// Nada de datos de producto inventados (ni precios exactos, ni valoraciones,
// ni modelos): son guías de criterio, no fichas de producto. Cuando haya tag
// de afiliado (ver PENDIENTE.md) cada guía enlazará productos concretos.

const GUIDES = [
  {
    slug: "sillas-ergonomicas",
    title: "Cómo elegir una silla ergonómica para el escritorio",
    dek: "Qué mirar de verdad antes de comprar: regulaciones, apoyo lumbar, malla o tapizado y cuándo compensa pagar más.",
    updated: "2026-09-15",
    intro: [
      "Una silla mala no se nota el primer día: se nota a la tercera semana, cuando empieza el dolor lumbar o de cervicales. Es probablemente la pieza del escritorio donde más merece la pena mirar bien antes de comprar, porque un error aquí se paga en horas de espalda, no solo en dinero.",
      "Esta guía no recomienda un modelo concreto: te da los criterios para que compares cualquier silla con cabeza, incluidas las que encuentres en Amazon.",
    ],
    sections: [
      {
        heading: "Las regulaciones que de verdad importan",
        body: [
          "Altura del asiento: tiene que bajar lo suficiente para que tus pies apoyen en el suelo con las rodillas a 90°. Si tu mesa es fija y baja, esto manda sobre todo lo demás.",
          "Profundidad del asiento: entre el borde del asiento y la parte trasera de la rodilla debe quedar un hueco de 2-4 dedos. Si el asiento es muy profundo y no se regula, la espalda no llega al respaldo.",
          "Reposabrazos en altura y, a ser posible, en anchura: los hombros deben quedar relajados, no encogidos ni caídos. Los reposabrazos fijos son el motivo más habitual de que una silla \"barata\" resulte incómoda para alguien de complexión distinta a la media.",
          "Inclinación del respaldo con bloqueo: poder reclinarse un poco y bloquear la posición ayuda en videollamadas largas; que solo se incline sin bloquear cansa más que no tener inclinación.",
        ],
      },
      {
        heading: "Apoyo lumbar: fijo, regulable o ninguno",
        body: [
          "El apoyo lumbar regulable en altura es el que mejor se adapta si varias personas van a usar la silla o si tu mesa cambia de altura (escritorio eléctrico). Un apoyo lumbar fijo bien colocado también funciona, pero solo si tu estatura encaja con dónde lo puso el fabricante.",
          "Desconfía de sillas que anuncian \"soporte lumbar\" sin ninguna pieza física diferenciada: a veces es solo una curva del tapizado, no un apoyo real.",
        ],
      },
      {
        heading: "Malla o tapizado",
        body: [
          "La malla (mesh) transpira mejor y suele envejecer mejor en climas cálidos, pero el tacto es más rígido. El tapizado acolchado es más cómodo al tacto y mejor para sesiones largas sentado quieto, pero acumula más calor.",
          "Si tu despacho no tiene aire acondicionado en verano, la malla se nota. Si trabajas muchas horas seguidas sin levantarte, el acolchado se agradece.",
        ],
      },
      {
        heading: "Cuándo compensa pagar más",
        body: [
          "El salto de calidad más grande está entre una silla sin ninguna regulación y una con las cuatro regulaciones básicas (altura, profundidad, reposabrazos, inclinación con bloqueo): eso ya soluciona la mayoría de problemas posturales.",
          "A partir de ahí, pagar más suele comprar mejores materiales (malla más duradera, mecanismos más suaves, garantías más largas), no funciones nuevas. Si vas a usar la silla más de 6 horas al día, la garantía y la disponibilidad de recambios (ruedas, gas) importan tanto como el primer precio.",
        ],
      },
    ],
    checklist: [
      "Altura del asiento regulable y compatible con tu mesa",
      "Profundidad del asiento regulable o adecuada a tu estatura",
      "Reposabrazos regulables en altura",
      "Respaldo con inclinación bloqueable",
      "Apoyo lumbar real (pieza física, no solo forma del tapizado)",
      "Garantía de 2 años o más si vas a usarla a diario",
    ],
    faq: [
      {
        q: "¿Necesito una silla \"gaming\" o una de oficina?",
        a: "Para trabajar delante de un ordenador, una silla de oficina bien regulada suele ser más cómoda: el respaldo alto y el acolchado extra de las sillas gaming están pensados para reclinarse, no para mantener una postura de escritura durante horas.",
      },
      {
        q: "¿La malla es siempre mejor que el tapizado?",
        a: "No, depende del clima de tu habitación y de cuánto tiempo pasas sentado sin moverte. Es mejor en ambientes cálidos y para sesiones activas; el tapizado gana en confort estático y en ambientes fríos.",
      },
    ],
  },
  {
    slug: "monitores",
    title: "Cómo elegir un monitor para trabajar (sin gastar de más)",
    dek: "Tamaño, resolución, distancia de trabajo y cuándo un segundo monitor rinde más que uno grande.",
    updated: "2026-09-14",
    intro: [
      "El error más habitual al elegir monitor para trabajar es fijarse solo en el tamaño en pulgadas y olvidar la resolución y la distancia a la que vas a sentarte. Un monitor grande con poca resolución se ve borroso de cerca; uno pequeño con mucha resolución obliga a poner el texto enorme para leerlo.",
    ],
    sections: [
      {
        heading: "Tamaño y resolución van juntos",
        body: [
          "Para trabajar con texto y hojas de cálculo a una distancia de escritorio normal (50-70 cm), la combinación que mejor funciona es 24-27 pulgadas con resolución 1440p (QHD). Con 1080p en 27 pulgadas o más, el texto se ve con menos definición porque los píxeles se estiran.",
          "Si vas a hacer edición de foto o vídeo, 4K en 27-32 pulgadas da mucho más espacio útil, pero exige una tarjeta gráfica capaz de moverlo con soltura y, a veces, escalado en el sistema operativo para que el texto no salga diminuto.",
        ],
      },
      {
        heading: "Panel: IPS, VA o TN",
        body: [
          "IPS es el estándar razonable para trabajo de oficina y diseño: buenos ángulos de visión y color fiel. VA da más contraste (negros más profundos) pero peor respuesta en movimiento. TN es el más barato y el que peor se ve desde el lateral: solo tiene sentido si el presupuesto manda por encima de todo.",
        ],
      },
      {
        heading: "Un monitor grande vs. dos monitores",
        body: [
          "Un monitor ultrawide (34\" o más) sustituye bien a dos monitores si tu trabajo es sobre todo lectura y escritura continua, porque no tienes el marco partiendo la vista. Dos monitores separados son mejores si necesitas mover ventanas completas de un lado a otro (por ejemplo, videollamada en uno y documento en otro) o si tu mesa no tiene espacio para curvar la vista hacia un panel muy ancho.",
          "El soporte importa tanto como el panel: un brazo articulado con ajuste de altura evita tener que elevar el monitor con libros y libera espacio de mesa. Si el monitor solo trae una peana fija baja, casi siempre conviene sumarle un soporte VESA aparte.",
        ],
      },
    ],
    checklist: [
      "Resolución acorde al tamaño (mínimo 1440p a partir de 27\")",
      "Panel IPS si vas a mirarlo desde ángulos o haces trabajo de color",
      "Altura regulable, con brazo VESA si la peana no ajusta bien",
      "Filtro de luz azul / modo lectura para sesiones largas",
      "Al menos una entrada USB-C si tu portátil la tiene (carga + vídeo por un solo cable)",
    ],
    faq: [
      {
        q: "¿Merece la pena un monitor curvo para trabajar?",
        a: "Solo se nota realmente a partir de tamaños ultrawide grandes (34\" o más), donde la curva compensa la distancia extra a los bordes. En tamaños estándar de 24-27\" la curvatura aporta poco para trabajo de oficina.",
      },
      {
        q: "¿Necesito 144Hz para trabajar?",
        a: "No: la frecuencia de refresco alta se nota en juegos y en el movimiento del cursor, pero para texto, hojas de cálculo o navegación 60Hz es suficiente. Es una prioridad de presupuesto solo si también vas a jugar en ese monitor.",
      },
    ],
  },
  {
    slug: "teclados-y-raton",
    title: "Teclado y ratón: guía para elegir sin dejarte el pulso en ello",
    dek: "Mecánico o de membrana, ergonómico o estándar, y cuándo cambiar de verdad mejora la muñeca.",
    updated: "2026-09-13",
    intro: [
      "El teclado y el ratón son los periféricos que más tocas y los que menos tiempo se dedica a elegir bien. La diferencia entre un combo genérico y uno pensado para tu forma de trabajar se nota sobre todo en sesiones largas, no en los primeros cinco minutos probándolo en la tienda.",
    ],
    sections: [
      {
        heading: "Membrana o mecánico",
        body: [
          "Los teclados de membrana son más silenciosos y suelen bastar para escritura y ofimática normal. Los mecánicos dan una pulsación más consistente y son más duraderos a largo plazo, pero el ruido (sobre todo con switches clicky) puede ser un problema en oficina compartida o videollamadas: si es tu caso, busca switches \"silenciosos\" o \"lineales\", no \"clicky\".",
        ],
      },
      {
        heading: "Diseño ergonómico: cuándo tiene sentido",
        body: [
          "Un teclado dividido o con inclinación negativa (split o tenting) ayuda de verdad si ya notas molestia en la muñeca o el antebrazo al escribir mucho rato. Para quien no tiene molestias, el salto de un teclado estándar a uno ergonómico no es imprescindible, aunque tampoco hace daño.",
          "En ratones, la clave no es el tamaño sino el agarre: si usas agarre de palma (toda la mano apoyada), un ratón más grande y alto es más cómodo; si usas agarre de garra o de dedos, uno más bajo y compacto da más control.",
        ],
      },
      {
        heading: "Cable, Bluetooth o USB con receptor",
        body: [
          "Para trabajo diario en un único ordenador, el cable sigue siendo lo más fiable: cero pilas, cero latencia perceptible. Bluetooth gana si necesitas cambiar entre varios dispositivos (portátil y tablet, por ejemplo). Un receptor USB dedicado (no Bluetooth genérico) suele dar la mejor mezcla de comodidad y estabilidad de conexión.",
        ],
      },
    ],
    checklist: [
      "Switches silenciosos o lineales si trabajas en oficina compartida",
      "Reposamuñecas o inclinación negativa si ya notas molestias",
      "Tamaño de ratón acorde a tu tipo de agarre (palma, garra o dedos)",
      "Conexión con cable si la fiabilidad manda; Bluetooth si necesitas multidispositivo",
    ],
    faq: [
      {
        q: "¿Un teclado mecánico dura más que uno de membrana?",
        a: "Por lo general sí: los switches mecánicos suelen estar valorados para decenas de millones de pulsaciones, frente a los millones que aguanta una membrana antes de perder tacto. La diferencia se nota sobre todo después de varios años de uso intensivo.",
      },
    ],
  },
  {
    slug: "iluminacion-escritorio",
    title: "Iluminación de escritorio: cómo evitar el cansancio de vista",
    dek: "Temperatura de color, posición del flexo y por qué la luz del monitor no basta.",
    updated: "2026-09-12",
    intro: [
      "Trabajar solo con la luz del monitor encendido en una habitación oscura es una de las causas más comunes de fatiga visual, aunque casi nadie lo relaciona con eso: el contraste tan fuerte entre la pantalla brillante y el resto a oscuras obliga al ojo a reajustarse constantemente.",
    ],
    sections: [
      {
        heading: "Luz ambiental antes que luz de tarea",
        body: [
          "Lo primero es tener una luz general en la habitación, aunque sea suave, para que el contraste con la pantalla no sea tan brusco. La luz de flexo o de barra sobre el monitor es un complemento para el papel y el teclado, no un sustituto de la luz ambiental.",
        ],
      },
      {
        heading: "Temperatura de color",
        body: [
          "Para trabajo de día, una luz blanca neutra (4000-5000K) mantiene el estado de alerta sin resultar tan fría como la luz de oficina clásica. Por la tarde-noche, bajar a tonos más cálidos (2700-3500K) ayuda a no interferir tanto con el sueño si trabajas hasta tarde.",
          "Las lámparas con temperatura regulable (no solo intensidad) son las que mejor se adaptan a lo largo del día; muchas barras de luz para monitor ya lo incorporan.",
        ],
      },
      {
        heading: "Posición: evitar reflejos, no solo iluminar",
        body: [
          "Un flexo colocado justo delante del monitor genera reflejo en la pantalla. Lo habitual es colocarlo lateral, ligeramente por delante del monitor, o usar una barra de luz que se engancha sobre el propio monitor y apunta hacia el escritorio, no hacia la pantalla.",
        ],
      },
    ],
    checklist: [
      "Luz ambiental en la habitación, no solo la del monitor",
      "Temperatura de color regulable (neutra de día, cálida de noche)",
      "Flexo o barra de luz colocados sin generar reflejo en la pantalla",
      "Intensidad regulable para no deslumbrar en videollamadas",
    ],
    faq: [
      {
        q: "¿Las barras de luz para monitor son mejores que un flexo normal?",
        a: "No son \"mejores\" en general, pero resuelven bien un problema concreto: iluminan el escritorio sin ocupar espacio de mesa ni generar reflejo en la pantalla, porque se enganchan sobre el borde superior del monitor y apuntan hacia abajo.",
      },
    ],
  },
  {
    slug: "organizacion-cables-y-espacio",
    title: "Organización del escritorio: cables, espacio y accesorios que sí sirven",
    dek: "Qué accesorios de orden marcan una diferencia real y cuáles son solo estética.",
    updated: "2026-09-10",
    intro: [
      "Un escritorio despejado no es solo estética: menos cables sueltos significa menos enganchones, menos polvo acumulado y más espacio real para trabajar. Pero no todos los accesorios de \"organización\" que se venden aportan lo mismo.",
    ],
    sections: [
      {
        heading: "Lo que de verdad cambia el día a día",
        body: [
          "Una bandeja pasacables bajo la mesa saca de la vista el nudo de cargadores y regletas, que es normalmente el mayor foco de desorden visual. Un organizador vertical de documentos libera superficie horizontal, que suele ser el recurso más escaso en escritorios pequeños.",
          "Una regleta con USB integrado reduce el número de cargadores independientes sobre la mesa, que es otra fuente habitual de cables cruzados.",
        ],
      },
      {
        heading: "Lo que suele ser más estética que función",
        body: [
          "Los organizadores decorativos de escritorio (portalápices, bandejitas) ayudan poco si el problema real son los cables; conviene resolver primero el cableado y después pensar en estética.",
          "Las alfombrillas XL son cómodas pero no \"organizan\" nada por sí solas: son una mejora de confort, no de orden.",
        ],
      },
    ],
    checklist: [
      "Bandeja pasacables o canaleta bajo la mesa",
      "Regleta con USB para reducir cargadores sueltos",
      "Organizador vertical de documentos si el espacio horizontal escasea",
      "Brazo de monitor si la peana ocupa demasiada mesa",
    ],
    faq: [
      {
        q: "¿Por dónde empiezo si tengo el escritorio muy desordenado?",
        a: "Por los cables: suelen ser la causa visual del desorden aunque no lo parezca. Agrupar y recoger cables con una bandeja o canaleta suele dar más sensación de orden que cualquier accesorio decorativo.",
      },
    ],
  },
];

const ARTICLES = [
  {
    slug: "como-montar-tu-escritorio-de-teletrabajo",
    title: "Cómo montar un escritorio de teletrabajo desde cero",
    dek: "El orden en el que conviene decidir cada pieza, y por qué empezar por la silla y no por el monitor.",
    updated: "2026-09-16",
    body: [
      "Cuando se monta un escritorio de teletrabajo desde cero, es fácil empezar por lo más vistoso (el monitor, la mesa bonita) y dejar para el final lo que más impacto tiene en el cuerpo a largo plazo: la silla y la altura de trabajo.",
      "El orden que mejor funciona es este: primero la silla, porque define la altura de tus ojos y tus brazos respecto a la mesa; después la mesa y su altura (fija o eléctrica); después el monitor y su soporte, ajustado a la altura de tus ojos con la silla ya puesta; y por último teclado, ratón e iluminación, que son ajustes finos sobre una base ya correcta.",
      "Si inviertes el orden —comprando primero un monitor grande y bonito y ajustando la silla después a lo que queda— es muy fácil acabar con el cuello inclinado hacia arriba o hacia abajo, porque la altura del monitor debería depender de dónde quedan tus ojos sentado, no al revés.",
      "Un truco simple para comprobar la altura correcta sin instrumentos: sentado con los pies apoyados y las rodillas a 90°, el borde superior del monitor debe quedar a la altura de tus ojos o ligeramente por debajo. Si tienes que levantar la barbilla para ver la parte de arriba de la pantalla, el monitor está demasiado bajo.",
      "En las guías de este sitio (silla, monitor, teclado y ratón, iluminación) desarrollamos cada pieza por separado con más detalle.",
    ],
  },
  {
    slug: "errores-comunes-ergonomia-oficina",
    title: "5 errores de ergonomía que se repiten en casi todos los escritorios",
    dek: "Cosas fáciles de arreglar que no cuestan dinero, antes de pensar en comprar nada nuevo.",
    updated: "2026-09-11",
    body: [
      "Antes de gastar en accesorios nuevos, merece la pena revisar si el problema es de postura y no de equipo: varios de los errores más comunes se arreglan sin comprar nada.",
      "1. Monitor demasiado bajo o demasiado alto. Es el más habitual cuando se trabaja con un portátil sin soporte: la pantalla queda mucho más baja de lo que le conviene al cuello. Un soporte de portátil o, en su defecto, una pila estable de libros, ya corrige buena parte del problema.",
      "2. Sentarse en el borde de la silla sin usar el respaldo. Suele pasar cuando el asiento es demasiado profundo para la estatura de la persona. Si no puedes apoyar la espalda baja en el respaldo sin que las rodillas queden incómodas, el asiento no está bien regulado (o la silla no encaja con tu estatura).",
      "3. Muñecas dobladas hacia arriba al teclear. Pasa cuando el teclado está más alto que los codos. La solución no siempre es un teclado nuevo: a veces basta con bajar la altura de la mesa o de la silla, o usar un reposamuñecas.",
      "4. Ratón demasiado lejos del cuerpo. Si el ratón está fuera del ancho del teclado, obliga a estirar el hombro en cada movimiento. Acercarlo, aunque parezca un detalle menor, reduce mucho la tensión acumulada en sesiones largas.",
      "5. Cero pausas de pie. Ninguna silla, por buena que sea, sustituye a levantarse. Alternar unos minutos de pie cada hora reduce más la fatiga que casi cualquier mejora de equipo.",
    ],
  },
  {
    slug: "cuanto-gastar-en-una-silla-de-oficina",
    title: "¿Cuánto merece la pena gastar en una silla de oficina?",
    dek: "Dónde están los saltos de calidad reales y dónde el precio ya no compra nada nuevo.",
    updated: "2026-09-09",
    body: [
      "No hay una cifra única válida para todo el mundo, pero sí hay tramos de precio donde el salto de calidad es real y tramos donde ya no se nota tanto.",
      "El primer salto importante está entre una silla sin ninguna regulación (solo altura del gas) y una con las regulaciones básicas: altura, profundidad de asiento, reposabrazos e inclinación bloqueable. Ese salto es el que más impacto tiene en la postura, independientemente de la marca.",
      "El segundo salto, más caro, está en materiales y durabilidad: mecanismos más suaves, mallas o tapizados que aguantan mejor el paso de los años, garantías más largas y piezas de recambio disponibles (ruedas, pistón de gas, reposabrazos). Este tramo compensa sobre todo si vas a usar la silla muchas horas al día durante años.",
      "A partir de cierto precio, lo que se paga de más suele ser diseño, marca o acabados, no ergonomía adicional: las regulaciones que de verdad importan (ver la guía de sillas ergonómicas) ya estaban presentes en el tramo anterior.",
      "La pregunta que más ayuda a decidir no es \"¿cuánto cuesta?\" sino \"¿cuántas horas al día la voy a usar?\". A más horas de uso diario, más se justifica invertir en el tramo de regulaciones completas y buena durabilidad.",
    ],
  },
  {
    slug: "ilumina-tu-escritorio-sin-deslumbrar",
    title: "Ilumina tu escritorio sin deslumbrarte en las videollamadas",
    dek: "Cómo colocar la luz para que se vea bien en cámara sin que moleste a la vista al trabajar.",
    updated: "2026-09-08",
    body: [
      "La luz que hace que se te vea bien en una videollamada y la luz que necesitas para trabajar cómodo no siempre son la misma, y ajustarlas a la vez es más sencillo de lo que parece.",
      "Para cámara, la luz debe venir de frente o ligeramente de lado, nunca solo desde atrás (a contraluz te vuelves una silueta) ni solo desde arriba (genera sombras duras bajo los ojos). Una fuente de luz suave situada detrás de la pantalla, apuntando hacia tu cara, suele bastar sin necesidad de un aro de luz dedicado.",
      "Para trabajar, esa misma luz frontal no debe deslumbrarte a ti: si la fuente está muy cerca de tu línea de visión y muy brillante, cansa la vista en sesiones largas. La solución habitual es una luz de intensidad regulable, baja para trabajar y algo más alta justo antes de una videollamada.",
      "Evita colocar cualquier lámpara justo detrás del monitor mirando hacia ti: además de deslumbrar, suele generar un reflejo visible en la pantalla que se nota tanto trabajando como en cámara.",
    ],
  },
];

module.exports = { GUIDES, ARTICLES };
