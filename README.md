# Estudio Jurídico Mendoza & Asociados - Landing Page

Template profesional para una firma de abogados. Construcción rápida con **HTML + Tailwind CSS (CDN) + JS nativo**, sin necesidad de build step.

## Inicio Rápido

```bash
# No requiere dependencias. Solo abrir el archivo principal:
# index.html en cualquier navegador moderno

# Alternativa con servidor local:
python -m http.server 8000
# o
npx serve .
```

## Estructura

```
abogados-03/
├── index.html              # Pantalla de inicio
├── about.html              # Sobre nosotros + equipo
├── services.html           # Nuestros servicios
├── pricing.html            # Precios y planes
├── gallery.html            # Galería
├── contact.html            # Contacto (form + mapa + horarios)
├── privacy.html            # Políticas de privacidad
├── terms.html              # Términos y condiciones
└── assets/
    ├── css/styles.css      # Estilos personalizados
    └── js/
        ├── data.js         # Datos mockeados (clientes, equipo, etc.)
        ├── main.js         # Navbar, móvil, formulario, lightbox
        └── animations.js   # Reveal, contadores, parallax
```

## Stack Técnico

- **HTML5** semántico
- **Tailwind CSS 3** vía CDN (`https://cdn.tailwindcss.com`)
- **JavaScript** nativo (sin frameworks)
- **Google Fonts**: Cormorant Garamond + Inter
- **IntersectionObserver API** para animaciones al scroll
- **Imágenes**: Unsplash (placeholders reales)

## Paleta de Colores

| Color | Hex | Uso |
|-------|-----|-----|
| Navy | `#0a1f44` | Principal (azul marino) |
| Navy Light | `#1e3a8a` | Acento oscuro |
| Navy Dark | `#050f2a` | Fondo oscuro |
| Gold | `#d4af37` | Acento dorado |
| Gold Light | `#f4c430` | Hover |
| Cream | `#f8f5ec` | Fondo claro |

## Funcionalidades

### Animaciones
- Fade-in al hacer scroll (`.reveal`, `.reveal-left`, `.reveal-right`, `.reveal-scale`)
- Contadores numéricos animados
- Hero parallax
- Hover en cards (lift + shadow)
- Pulse en reconocimientos
- Float en iconos de valores

### Componentes Interactivos
- **Navbar sticky** con cambio de estilo al hacer scroll
- **Menú móvil** con animación slide
- **Lightbox** en galería (teclado: Esc, ←, →)
- **Filtros** en galería por categoría
- **Accordion FAQ** con details/summary
- **Formulario** con validación y mensaje de éxito mock

### Responsive
- Mobile-first
- Breakpoints: sm (640), md (768), lg (1024), xl (1280)
- Grid adaptativo
- Menú hamburguesa en mobile

## Personalización Rápida

### Cambiar textos/datos

Edita `assets/js/data.js`. Ejemplos:

```js
firm: {
  name: "Tu Firma",
  email: "tu@email.cl",
  phone: "+56 ..."
}

team: [
  { name: "...", role: "...", photo: "..." }
]

services: [
  { title: "...", description: "...", icon: "scale" }
]
```

### Cambiar colores

Edita `tailwind.config = { theme: { extend: { colors: {...} } } }` dentro de cada HTML (o centraliza con Vite/PostCSS para producción).

### Cambiar imágenes

Reemplaza las URLs de Unsplash por las tuyas en `data.js` o en cada HTML.

## Páginas

| Página | URL | Descripción |
|--------|-----|-------------|
| Inicio | `index.html` | Hero + Stats + Servicios + Valores + Testimonios + CTA |
| Sobre nosotros | `about.html` | Historia + Misión/Visión + Equipo + Timeline |
| Servicios | `services.html` | Grid de 8 áreas + Proceso + FAQ |
| Precios | `pricing.html` | 3 planes + Tabla comparativa + FAQ |
| Galería | `gallery.html` | Grid filtrable + Lightbox |
| Contacto | `contact.html` | Formulario + Mapa + Horarios |
| Privacidad | `privacy.html` | Política legal |
| Términos | `terms.html` | Términos legales |

## Datos Mockeados

Todos los datos están en `assets/js/data.js`. Para conectar a un backend real:

1. Reemplaza las funciones `render*()` en cada HTML con llamadas `fetch()` a tu API
2. O usa Alpine.js /htmx para reactividad mínima

## Licencia

Template de demostración. Adapta libremente a tu proyecto.

## Soporte

Para dudas sobre el template, contacta al autor.
