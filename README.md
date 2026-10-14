# Black Dragon · app Android

App sin conexión con tres perfiles: **Halterofilia**, **CrossFit** y **Clases del box**. Arriba están los botones **Mis RMs** y **Ajustes**. Los RMs son comunes a todos los perfiles, y cada sesión calcula los kg de cada serie y los discos que van a cada lado de la barra.

Es una versión reducida de la app del repo Box, sin archivo, nutrición ni rutina diaria. Se instala como una app aparte (`es.entrenos.blackdragon`), así que puede convivir en el móvil con la otra.

## Cómo sacar el APK

**Con Android Studio:** *File → Open*, eliges esta carpeta y luego *Build → Build App Bundle(s) / APK(s) → Build APK(s)*.

**Con GitHub Actions:** crea un tag con el formato `1.0.0` y haz push del tag. El workflow `.github/workflows/build-apk.yml` genera `BlackDragon-1.0.0.apk` en *Releases*.

## Dónde está cada cosa

- `app/src/main/assets/www/index.html`: la app (interfaz y cálculos).
- `app/src/main/assets/www/programs/halterofilia.js`: las 42 sesiones de halterofilia.
- `app/src/main/assets/www/programs/crossfit.js`: la programación de CrossFit.
- `MainActivity.kt`: la WebView y la lectura de la pizarra con la cámara.

Los RMs, los ajustes, las series marcadas, los resultados y las clases se guardan dentro de la app. Actualizarla con un APK nuevo no borra nada. Si la desinstalas, se borran; antes de hacerlo, haz una copia en Ajustes → Copia de seguridad.
