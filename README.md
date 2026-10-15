# LUNARIA

Experiencia web interactiva con estética del Universo Lunaria. Incluye una landing con
countdown, secciones de descubrimiento, semillas y roadmap de actividades,
autenticación con Supabase, perfil personalizable, mapa interactivo con
zonas geolocalizadas y una experiencia con cámara del dispositivo.

## Stack

- React 18 (JavaScript, sin TypeScript)
- Vite (dev server y build)
- CSS Modules (`.module.css` por componente)
- React Router 8 (API actual, sin `react-router-dom`)
- Leaflet + React Leaflet (mapa interactivo)
- Geolocation API del navegador
- Supabase (autenticación)
- Git + GitHub
- Vercel (deploy conectado al repositorio)

## Requisitos

- Node.js 18+
- Cuenta con acceso al proyecto de Supabase
- Cuenta con acceso al proyecto de Vercel

## Puesta en marcha

1. Clonar el repositorio:
   ```bash
   git clone https://github.com/zeqqeram/lunaria_web.git
   cd lunaria_web

2. Instalar dependencias:
 ```bash
npm install

3. Crear un archivo .env.local en la raíz con las credenciales de Supabase:
   ```bash
   VITE_SUPABASE_URL=<url>
   VITE_SUPABASE_ANON_KEY=<anon-key>
   ```
4. Levantar el entorno de desarrollo:
   ```bash
   npm run dev
   ```
5. Build de producción:
   ```bash
   npm run build
   ```

## Estructura del proyecto

```
src/
├── components/     Componentes de UI reutilizables (Header, Footer, etc.)
├── context/        Contextos de React (autenticación)
├── features/       Módulos autocontenidos por funcionalidad
│   ├── camera/
│   ├── map/
│   ├── roadmap/
│   └── seeds/
├── hooks/          Custom hooks compartidos (ej. useGeolocation)
├── pages/          Vistas asociadas a rutas (Landing, Map, Seeds, Profile, Auth, Camera)
├── services/       Acceso a Supabase (auth, profile)
└── router.jsx      Definición de rutas
```
## Rutas

Ruta Descripción Acceso
/ Landing (countdown, hero, roadmap, seeds) Público
/acceso Iniciar sesión / crear cuenta Público
/map Mapa con zonas geolocalizadas Público
/map/camera Experiencia con cámara del dispositivo Público
/seeds Catálogo de semillas Público
/perfil Perfil del usuario autenticado Protegido

## Autenticación

Gestionada con Supabase Auth. El flujo protegido está envuelto por un
componente ProtectedRoute que redirige a /acceso si no hay sesión activa.

## Mapa y geolocalización

El mapa utiliza Leaflet + React Leaflet. Las zonas se definen en
src/features/map/zones.js con coordenadas, radio y estado de desbloqueo.
La posición del usuario se obtiene con la Geolocation API a través del
hook useGeolocation. Requiere contexto seguro (HTTPS o localhost).

## Cámara

La experiencia con cámara se accede desde el mapa al estar dentro de una
zona activa. Utiliza navigator.mediaDevices.getUserMedia con
facingMode: 'environment'. También requiere contexto seguro.

## Datos locales

Los siguientes conjuntos de datos están hoy como archivos .js dentro de
src/features/:

· map/zones.js — zonas del mapa
· seeds/seeds.js — catálogo de semillas
· roadmap/activities.js — hitos del roadmap

Están aislados de los componentes para facilitar una eventual migración a
Supabase sin tocar JSX ni CSS.

## Deploy

El proyecto se despliega en Vercel conectado al repositorio de GitHub.
Los cambios en la rama principal se despliegan automáticamente.

Estado del proyecto

MVP funcional entregado. Incluye:

· Landing con countdown, hero, roadmap y preview de semillas.
· Autenticación con Supabase.
· Perfil de usuario con avatar editable y nombre de usuario.
· Mapa interactivo con zonas geolocalizadas y overlay al entrar en zona.
· Experiencia con cámara del dispositivo.
· Catálogo de semillas.

## Pendientes conocidos:

· Migración de datos locales (zones.js, seeds.js, activities.js) a Supabase.
· Sumar RA para la experiencia de cámara (actualmente abre la cámara sin más).
· Desbloqueo real de medallas y actividades desde el resultado del tesoro.

## Recursos estáticos

Los assets deben respetar estas rutas:

· public/avatars/ — capas del avatar (skin, hair, clothes, accessories)
· public/seeds/thumbs/ y public/seeds/plants/ — imágenes de semillas
· public/activities/ — imágenes de actividades del roadmap
· public/socials/ — íconos de redes sociales

## CONTACTO

Cuenta de Instagram del proyecto: @lunaria.tdm3

