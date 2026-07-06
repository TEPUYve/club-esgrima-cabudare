# Club Esgrima Cabudare — Landing Page

Landing page oficial del Club Esgrima Cabudare. Sitio estático (HTML + CSS + JS puro, sin frameworks ni build step), listo para publicarse en **GitHub Pages**.

## Estructura del proyecto

```
club-esgrima-cabudare/
├── index.html
├── README.md
└── assets/
    ├── css/
    │   └── styles.css
    ├── js/
    │   └── main.js
    └── img/
        ├── logo-cec.png       (logo original, alta resolución)
        ├── logo-hero.png      (versión optimizada para el hero)
        ├── logo-nav.png       (versión optimizada para el menú/footer)
        ├── favicon-32.png
        ├── favicon-180.png
        └── favicon-512.png
```

## Cómo publicarlo en GitHub Pages

1. Crea un repositorio nuevo en GitHub (por ejemplo `club-esgrima-cabudare`).
2. Sube todo el contenido de esta carpeta a la raíz del repositorio (respetando la estructura de `assets/`).
3. En el repositorio, ve a **Settings → Pages**.
4. En **Source**, selecciona la rama `main` (o `master`) y la carpeta `/ (root)`.
5. Guarda. GitHub te dará una URL del tipo `https://tu-usuario.github.io/club-esgrima-cabudare/`.

### Dominio propio (opcional)

Si quieres usar un dominio propio (por ejemplo `www.clubesgrimacabudare.com`):

1. Crea un archivo llamado `CNAME` (sin extensión) en la raíz del repositorio, con una sola línea: tu dominio.
2. Configura en tu proveedor de DNS un registro `CNAME` apuntando a `tu-usuario.github.io`.
3. Activa "Enforce HTTPS" en Settings → Pages una vez el DNS propague.

## Enlaces externos usados en la página

Estos enlaces ya están cableados en `index.html` y apuntan al subdominio de recursos del club:

- Estimación de tallas → `https://clubesgrimacabudare.tepuy.site/tallas`
- Ficha de inscripción → `https://clubesgrimacabudare.tepuy.site/ficha`
- Mantenimiento básico → `https://clubesgrimacabudare.tepuy.site/mantenimiento`
- Principios básicos de esgrima → `https://clubesgrimacabudare.tepuy.site/basico`
- WhatsApp (único enlace usado en toda la página) → `https://clubesgrimacabudare.tepuy.site/whatsapp`

Si alguno de estos cambia, solo necesitas hacer un buscar-y-reemplazar en `index.html` (aparecen varias veces: nav, hero, sección de recursos, footer y contacto).

## Notas técnicas

- **Tipografías**: Fraunces, Manrope y Space Mono, cargadas desde Google Fonts vía CDN (requiere conexión a internet la primera carga; quedan cacheadas después).
- **Sin dependencias de build**: no requiere `npm install` ni compilación. Es HTML/CSS/JS servido tal cual.
- **Accesibilidad**: navegación por teclado con foco visible, enlace "saltar al contenido", `prefers-reduced-motion` respetado, contraste AA en los textos principales.
- **Responsivo**: mobile-first, con puntos de quiebre en 640px, 760px, 860px, 900px y 960px.
- Para editar colores o tipografía globalmente, todo está centralizado en las variables CSS al inicio de `assets/css/styles.css`.
