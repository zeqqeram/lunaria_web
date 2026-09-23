# Proyecto web - LUNARIA

MVP de una experiencia web interactiva que comienza como una Landing Page y, mediante el ingreso de un código, habilita una experiencia de Home y nuevas secciones como mapa, perfil y uso de cámara para una experiencia simple de Realidad Aumentada.

## Stack

- React 
- Vite
- JavaScript
- CSS Modules
- Git + GitHub

## Arquitectura

El proyecto utiliza una estructura feature-based dentro de src/:

src/
- assets/
- components/
- features/ 
- hooks/
- layouts/
- lib/
- pages/

## Responsabilidades

* assets/: recursos estaticos como imágenes, sprites y fuentes.
* components/: componentes de UI reutilizables y sin lógica de negocio especifica.
* features/: módulos autocontenidos correspondientes a funcionalidades del proyecto.
* hooks/: custom hooks compartidos entre diferentes features.
* layouts/: estructuras reutilizables que organizan las páginas.
* lib/: utilidades puras y configuración compartida.
* pages/: vistas principales asociadas a las rutas.

## Principios técnicos

- Mobile First: Los estilos se desarrollan primero para dispositivos móviles y se amplían mediante media queries con min-width.

- YAGNI: Las dependencias se incorporan cuando una funcionalidad las necesita. Se evita agregar librerías anticipadamente sin una necesidad concreta. Las dependencias estructurales pueden incorporarse desde el comienzo cuando forman parte de la base de la aplicación.

- Separacion de responsabilidades: Los componentes de UI no deben concentrar la lógica de negocio específica de una feature. Las funcionalidades complejas se mantienen dentro de features/ y los recursos compartidos se colocan en sus respectivas carpetas.

## Estado del proyecto

Actualmente se encunetra en la etapa inicial de preparación de ambiente y scaffolding. 

No se han implementado todavía las funcionalidades del MVP.