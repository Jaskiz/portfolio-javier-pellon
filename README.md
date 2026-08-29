# Portfolio — Javier Pellón Valenzuela

Web de una sola página (React + Vite) construida a partir del diseño aprobado en
`Decisiones de diseño freelance.zip` (`design_handoff_portfolio/README.md` documenta cada valor
exacto de color, tipografía y animación por si necesitas comparar).

## Desarrollo

```bash
npm install
npm run dev
```

## Compilar para producción

```bash
npm run build
```

Genera `dist/`, una carpeta 100% estática (sin backend) lista para desplegar en Vercel o Netlify:
solo hay que conectar el repositorio y ambos detectan Vite automáticamente (build command
`npm run build`, output `dist`).

## Estructura

- `src/data/content.js` — todos los textos y datos (trayectoria, proyectos, stack, servicios
  freelance, datos de contacto). Para cambiar cualquier texto de la web, es el único sitio al
  que hace falta tocar.
- `src/components/` — un componente + su CSS por sección de la web.
- `src/tokens.css` — colores, tipografías y animaciones globales (variables CSS).
- `public/assets/` — foto, CV en PDF y capturas de la app del gimnasio.

## Pendiente de rellenar

- **Enlaces a repositorios de GitHub** (opcional): en `src/data/content.js`, cada proyecto de
  `OTROS_PROYECTOS` tiene un campo `repoUrl: null`. Si quieres mostrar un botón "Ver código →" en
  alguno, pon ahí la URL del repositorio; si lo dejas en `null` el botón no aparece.
- **Dominio propio**: cuando lo tengas, solo hace falta configurarlo en Vercel/Netlify — no
  requiere ningún cambio en el código.
- **Precios de los servicios freelance**: deliberadamente no se muestran (según se decidió en el
  diseño). Si en el futuro quieres añadirlos, están en `FREELANCE_SERVICIOS` dentro de
  `src/data/content.js`.

No hay más contenido de relleno: la foto, el CV y las capturas de la app ya son los reales.
