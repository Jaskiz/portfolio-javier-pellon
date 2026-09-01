// Contenido definitivo de la web. Los textos vienen revisados por Javier: no reescribir.
// Si quieres enlazar un repositorio público de alguno de estos proyectos, rellena su `repoUrl`
// (por defecto es null y el botón "Ver código" no se muestra). [RELLENAR: enlaces a repos, opcional]

export const CATS = {
  spring: { dot: 'var(--cat-spring)', fg: 'var(--cat-spring-fg)', line: 'var(--cat-spring)' },
  front: { dot: 'var(--cat-front)', fg: 'var(--cat-front-fg)', line: 'var(--cat-front)' },
  data: { dot: 'var(--cat-data)', fg: 'var(--cat-data-fg)', line: 'var(--cat-data)' },
  api: { dot: 'var(--cat-api)', fg: 'var(--cat-api-fg)', line: 'var(--cat-api)' },
  infra: { dot: 'var(--cat-infra)', fg: 'var(--cat-infra-fg)', line: 'var(--cat-infra)' },
  otros: { dot: 'var(--cat-otros)', fg: 'var(--cat-otros-fg)', line: 'var(--cat-otros)' },
};

export const CAT_LEGEND = [
  { cat: 'spring', label: 'Java / Spring' },
  { cat: 'front', label: 'Front y móvil' },
  { cat: 'data', label: 'Datos' },
  { cat: 'api', label: 'API y pruebas' },
  { cat: 'infra', label: 'Infra y despliegue' },
  { cat: 'otros', label: 'Otros entornos' },
];

export const SKILLS = [
  { name: 'Java', cat: 'spring', ring: 0 },
  { name: 'Spring Boot', cat: 'spring', ring: 0 },
  { name: 'Spring Security', cat: 'spring', ring: 0 },
  { name: 'Spring Data JPA', cat: 'spring', ring: 0 },
  { name: 'Hibernate', cat: 'spring', ring: 1 },
  { name: 'JUnit 5', cat: 'api', ring: 0 },
  { name: 'APIs REST', cat: 'api', ring: 0 },
  { name: 'JavaScript', cat: 'front', ring: 0 },
  { name: 'React', cat: 'front', ring: 0 },
  { name: 'React Native (Expo)', cat: 'front', ring: 1 },
  { name: 'MySQL', cat: 'data', ring: 1 },
  { name: 'PostgreSQL', cat: 'data', ring: 1 },
  { name: 'Flyway', cat: 'data', ring: 1 },
  { name: 'Docker', cat: 'infra', ring: 1 },
  { name: 'Git / GitHub', cat: 'infra', ring: 1 },
  { name: 'Render', cat: 'infra', ring: 1 },
  { name: 'EAS Build', cat: 'infra', ring: 1 },
  { name: 'Odoo', cat: 'otros', ring: 1 },
  { name: 'DataFlex', cat: 'otros', ring: 1 },
];

export const CMDS = [
  {
    key: 'whoami',
    label: 'whoami',
    out: [
      'Javier Pellón Valenzuela — desarrollador full-stack',
      'Córdoba, Andalucía · español nativo · inglés C1',
      'Titulado en DAM (Java) y en Magisterio de Primaria',
      'Diez años tratando con público antes del primer commit',
    ],
  },
  {
    key: 'stack',
    label: 'cat stack.txt',
    out: [
      'backend    Java 21 · Spring Boot · Spring Security · JPA',
      'frontend   React · React Native (Expo) · JavaScript',
      'datos      PostgreSQL · MySQL · Flyway',
      'infra      Docker · Git · Render · EAS Build',
    ],
  },
  {
    key: 'proyectos',
    label: 'ls proyectos/',
    out: [
      'app-gimnasio     Spring Boot + React Native   en producción',
      'reservas-citas   Spring Boot + React          proyecto final',
      'modulo-odoo      Odoo + Docker                ERP',
      'futbol-webapp    DataFlex                     prácticas',
    ],
  },
  {
    key: 'estado',
    label: 'status',
    out: [
      'jornada completa ........ disponible',
      'proyectos freelance ..... disponible',
      'remoto o híbrido ........ sí',
      'carnet B + coche propio . sí',
    ],
  },
  {
    key: 'contacto',
    label: './contacto.sh',
    out: [
      'email      javierpellonv@gmail.com',
      'teléfono   +34 693 322 449',
      'linkedin   linkedin.com/in/javierpellonvalenzuela',
    ],
  },
];

export const FORMACION = [
  {
    titulo: 'Grado Superior en Desarrollo de Aplicaciones Multiplataforma',
    etiqueta: 'Titulado',
    etiquetaColor: 'spring',
    centro: 'Cesur · 2024 — junio de 2026',
    nota: 'Java, bases de datos, desarrollo multiplataforma y prácticas en empresa.',
    hoverColor: 'rgba(124,92,255,.4)',
  },
  {
    titulo: 'Grado en Magisterio de Educación Primaria (bilingüe)',
    etiqueta: 'Titulado',
    etiquetaColor: 'api',
    centro: 'Universidad de Córdoba · 2019 — 2024',
    nota: 'Mención bilingüe. Incluye tres cursos consecutivos de prácticas docentes en centros educativos.',
    hoverColor: 'rgba(45,212,191,.4)',
  },
];

export const SOBRE_MI_PARRAFOS = [
  'Empecé Magisterio porque quería dar clase, y durante la carrera la di: tres cursos de prácticas, con un aula delante y sesiones que preparaba yo. Se me daba bien explicar. El resto del oficio no acabó de encajarme, así que al terminar me puse a buscar otra cosa.',
  'La programación llegó por curiosidad y se quedó por lo mismo que me gustaba de preparar una clase: coger algo grande y partirlo en pasos pequeños hasta que se entiende. Empecé solo, con tutoriales y proyectos que no funcionaban, y en 2024 me matriculé en el grado superior para ordenar lo que había aprendido a trompicones.',
  'Entre medias he sido camarero, cajero y comercial. En un CV parece relleno, pero de ahí sale media parte de lo que aporto: sacar un turno complicado sin perder los nervios, explicarle algo a alguien que no tiene ninguna gana de escucharte y entender que un producto que no se entiende no sirve de nada.',
  'La app de gimnasio salió de una necesidad mía: entrenaba, ninguna de las que probé me servía y decidí hacerme la mía. Cuando la tuve funcionando me puse a auditarla y encontré un fallo de control de acceso que permitía ver datos de otros usuarios. Arreglar eso me enseñó más que cualquier tutorial.',
  'Ahora busco un equipo donde aprender de gente que sepa más que yo, y mientras tanto ayudo a negocios pequeños a montar lo que necesitan. Sigo en Córdoba y sigo trabajando de cara al público, así que estoy acostumbrado a compaginar.',
];

export const TRAYECTORIA = [
  {
    puesto: 'Camarero',
    empresa: 'Restaurante japonés L.San',
    fecha: '06/2024 — 08/2024 · 04/2026 — actualidad',
    color: 'data',
    actual: true,
    borderBase: 'rgba(52,211,153,.3)',
    detalle:
      'Volví en abril de 2026 al sitio donde ya había trabajado dos años antes. Barra, sala y pedidos a domicilio por teléfono: mucha gente, poco espacio y cero margen para improvisar. El mejor entrenamiento que conozco para priorizar bajo presión.',
  },
  {
    puesto: 'Cajero',
    empresa: 'Supermercado Proxi',
    fecha: '05/2025 — 08/2025',
    color: 'front',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'Caja y atención al público, reposición y control de stock, con supervisión del local y de la panadería. Aprendí a ver el descuadre antes de que se convierta en un problema, que es más o menos lo que hago ahora leyendo un log.',
  },
  {
    puesto: 'Comercial · Área Legal',
    empresa: 'Konecta para Legálitas',
    fecha: '11/2024 — 02/2025',
    color: 'infra',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'Llamadas comerciales y asesoramiento jurídico general: facturas, hipotecas, deudas y herencias. Gestión de objeciones y cierre de venta. Cuatro meses traduciendo letra pequeña a lenguaje llano y sosteniendo un «no» sin perder al cliente.',
  },
  {
    puesto: 'Camarero',
    empresa: 'Bodegas Campos',
    fecha: '03/2024 — 06/2024',
    color: 'otros',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'Sala y barra en una casa con más de un siglo de historia y una clientela que lo nota. Servicio de comida, recomendación de carta y trato directo con el cliente de principio a fin.',
  },
  {
    puesto: 'Prácticas docentes · Primaria',
    empresa: 'Colegio Séneca SCA',
    fecha: '2022 y 2023',
    color: 'api',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'Dos cursos seguidos con aula a cargo: programación de sesiones, material propio y evaluación del grupo. Aquí terminé de entender que si algo no se entiende, el problema es de quien lo explica.',
  },
  {
    puesto: 'Prácticas docentes · Primaria',
    empresa: 'Colegio Bética-Mudarra',
    fecha: '2021',
    color: 'api',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'Primer curso de prácticas y primer contacto con el aula: apoyo docente, preparación de material y trabajo con grupos pequeños.',
  },
  {
    puesto: 'Repartidor',
    empresa: 'Restaurante La Alegría',
    fecha: '06/2016 — 09/2016',
    color: 'neutral',
    borderBase: 'rgba(255,255,255,.07)',
    detalle:
      'El primer trabajo, en los veranos del instituto. Reparto a domicilio, rutas y cobros. Desde ese verano no he dejado de tratar con público.',
  },
];

export const APP_SCREENS = [
  { src: '/assets/app/01-inicio.png', alt: 'Pantalla de inicio: entrenamiento en curso y tarjeta de nivel', tab: 'Inicio' },
  { src: '/assets/app/02-sesion.png', alt: 'Sesión activa: registro de series, kg, reps y RIR', tab: 'Sesión' },
  { src: '/assets/app/03-rutinas.png', alt: 'Mis rutinas: listado de rutinas con su desglose', tab: 'Rutinas' },
  { src: '/assets/app/04-agua.png', alt: 'Registro de agua diaria', tab: 'Agua' },
  { src: '/assets/app/05-misiones.png', alt: 'Misiones: nivel, rachas y retos diarios', tab: 'Misiones' },
];

export const PROYECTO_DETALLE = [
  {
    kicker: 'Backend',
    color: 'front',
    hoverColor: 'rgba(59,130,246,.45)',
    texto:
      'Java 21 / Spring Boot en capas, DTOs, Spring Security con JWT, PostgreSQL con migraciones Flyway y despliegue continuo en Render.',
  },
  {
    kicker: 'Frontend',
    color: 'api',
    hoverColor: 'rgba(45,212,191,.45)',
    texto: 'React Native con Expo, distribución mediante EAS Build. Sistema visual propio diseñado e implementado de cero.',
  },
  {
    kicker: 'Auditoría en solitario',
    color: 'infra',
    hoverColor: 'rgba(251,113,133,.6)',
    borderBase: 'rgba(251,113,133,.28)',
    texto:
      'Auditoría de seguridad y rendimiento completa: corrección de una vulnerabilidad de control de acceso (IDOR), protección de secretos e indexado de base de datos.',
  },
];

export const PROYECTO_TAGS = ['Spring Security', 'JWT', 'PostgreSQL', 'Flyway', 'Expo', 'EAS Build', 'Render'];

export const OTROS_PROYECTOS = [
  {
    numero: '01',
    etiqueta: 'TFG',
    color: 'spring',
    titulo: 'Sistema de reservas de citas online',
    texto:
      'App web de gestión de citas para pequeños negocios. Backend Java/Spring Boot, frontend React.js, MySQL. Diseño e implementación completos, desde el modelo de datos hasta la interfaz.',
    tags: ['Spring Boot', 'React', 'MySQL'],
    repoUrl: null, // [RELLENAR: enlace a GitHub, opcional]
  },
  {
    numero: '02',
    etiqueta: 'ERP',
    color: 'front',
    titulo: 'Módulo personalizado para Odoo',
    texto: 'Módulo propio («universidad») ejecutado en contenedores Docker sobre el ERP Odoo.',
    tags: ['Odoo', 'Docker'],
    repoUrl: null,
  },
  {
    numero: '03',
    etiqueta: 'Prácticas',
    color: 'otros',
    titulo: 'FutbolWebApp',
    texto:
      'Aplicación web de gestión deportiva construida con DataFlex durante mis prácticas de empresa, incluyendo configuración y resolución de problemas de entorno con IIS y XAMPP.',
    tags: ['DataFlex', 'IIS', 'XAMPP'],
    repoUrl: null,
  },
];

export const FREELANCE_SERVICIOS = [
  {
    numero: '01',
    color: 'spring',
    titulo: 'Sistema de reservas de citas',
    texto:
      'Tus clientes reservan solos a cualquier hora y tú abres la agenda ya cuadrada. Es exactamente lo que construí como proyecto final.',
  },
  {
    numero: '02',
    color: 'front',
    titulo: 'Tienda online sencilla',
    texto: 'Catálogo, carrito y pagos. Lo justo para empezar a vender, con un panel que se entiende sin manual.',
  },
  {
    numero: '03',
    color: 'api',
    titulo: 'App móvil Android e iOS',
    texto: 'Una sola base de código para Android e iOS con React Native. La app de arriba está hecha así.',
  },
  {
    numero: '04',
    color: 'data',
    titulo: 'Automatizaciones e integraciones',
    texto: 'Conecto tu ERP, tu hoja de cálculo o tu correo para que nadie vuelva a copiar datos a mano.',
  },
  {
    numero: '05',
    color: 'infra',
    titulo: 'Mantenimiento y correcciones',
    texto: 'Algo se rompió, va lento o no es seguro. Lo audito, lo arreglo y te cuento qué pasó en un idioma que se entiende.',
  },
  {
    numero: '06',
    color: 'otros',
    titulo: 'Migración o rediseño de tu web',
    texto: 'Tu web de hace diez años sigue teniendo buenos contenidos. Me los llevo a algo rápido que se vea bien en el móvil.',
  },
];

export const CONTACTO = {
  email: 'javierpellonv@gmail.com',
  telefono: '+34 693 322 449',
  telefonoHref: 'tel:+34693322449',
  linkedin: 'linkedin.com/in/javierpellonvalenzuela',
  linkedinHref: 'https://linkedin.com/in/javierpellonvalenzuela',
  cvHref: '/assets/CV_Javier_Pellon_Valenzuela.pdf',
  cvNombre: 'CV_Javier_Pellon_Valenzuela.pdf',
};
