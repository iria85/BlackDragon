# Black Dragon · Android e iPhone

App sin conexión con tres perfiles: **Halterofilia**, **CrossFit** y **Clases del box**. Arriba están los botones **Mis RMs** y **Ajustes**. Los RMs son comunes a todos los perfiles, y cada sesión calcula los kg de cada serie y los discos que van a cada lado de la barra.

Es una versión reducida de la app del repo Box, sin archivo, nutrición ni rutina diaria. Se instala como una app aparte (`es.entrenos.blackdragon`), así que puede convivir en el móvil con la otra.

## Cómo sacar el APK

**Con Android Studio:** *File → Open*, eliges esta carpeta y luego *Build → Build App Bundle(s) / APK(s) → Build APK(s)*.

**Con GitHub Actions:** crea un tag con el formato `1.0.0` y haz push del tag. El workflow `.github/workflows/build-apk.yml` genera `BlackDragon-1.0.0.apk` en *Releases*.

## iPhone

La misma app se publica como web instalable con GitHub Pages y el workflow `.github/workflows/pages.yml`, que publica la carpeta `app/src/main/assets/www` en cada push a `main`.

1. En GitHub: **Settings → Pages → Source: GitHub Actions**.
2. Haz push a `main`. La app queda en `https://<tu-usuario>.github.io/BlackDragon/`.
3. En el iPhone, abre esa dirección en **Safari** y pulsa **Compartir → Añadir a pantalla de inicio**.

Funciona sin conexión. En iPhone no está «Leer la pizarra». Para publicar cambios, sube `VERSION` en `sw.js`.

## Dónde está cada cosa

- `app/src/main/assets/www/index.html`: la app (interfaz y cálculos).
- `app/src/main/assets/www/programs/halterofilia.js`: las 42 sesiones de halterofilia.
- `app/src/main/assets/www/programs/crossfit.js`: la programación de CrossFit.
- `app/src/main/assets/www/sw.js`, `manifest.webmanifest` e `icons/`: solo para el iPhone.
- `MainActivity.kt`: la WebView y la lectura de la pizarra con la cámara.

Los RMs, los ajustes, las series marcadas, los resultados y las clases se guardan dentro de la app. Actualizarla con un APK nuevo no borra nada. Si la desinstalas, se borran; antes de hacerlo, haz una copia en Ajustes → Copia de seguridad.
