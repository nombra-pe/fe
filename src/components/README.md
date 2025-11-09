# Components Structure

Esta carpeta contiene todos los componentes de la aplicación organizados de manera modular y reutilizable.

## Estructura de Carpetas

### `/ui/` - Componentes UI Básicos
Componentes reutilizables y fundamentales que se pueden usar en cualquier parte de la aplicación:

- **`Button.astro`** - Componente de botón con múltiples variantes (primary, secondary, outline)
- **`Card.astro`** - Componente de tarjeta con diferentes estilos (default, elevated, highlighted)
- **`Section.astro`** - Wrapper de sección con configuraciones de background y padding
- **`SectionHeader.astro`** - Encabezado estándar para secciones con badge, título y descripción

### `/sections/` - Secciones de Página
Componentes específicos que representan secciones completas de la página:

- **`HeroSection.astro`** - Sección hero con video de fondo y CTAs
- **`AboutSection.astro`** - Sección "Nosotros" con animaciones de texto
- **`BenefitsSection.astro`** - Sección de beneficios con tarjetas de características
- **`ServicesSection.astro`** - Sección de servicios con grid de tarjetas
- **`PricingSection.astro`** - Sección de precios con planes y toggle mensual/anual

### `/layout/` - Componentes de Layout
Componentes estructurales que definen el layout de la página:

- **`Header.astro`** - Navegación principal con menú responsive
- **`Footer.astro`** - Pie de página con links organizados

### `/legacy/` - Componentes Antiguos
Componentes anteriores mantenidos para referencia pero ya no en uso.

## Principios de Diseño

### 1. **Modularidad**
Cada componente tiene una responsabilidad específica y bien definida.

### 2. **Reutilización**
Los componentes UI básicos se pueden usar en múltiples contextos.

### 3. **Consistencia**
Todos los componentes siguen las mismas convenciones de props y estilos.

### 4. **Separación de Responsabilidades**
- UI components: Presentación y estilos
- Section components: Lógica específica de secciones
- Layout components: Estructura de página

## Uso

```astro
---
// Importar componentes UI básicos
import Button from '@/components/ui/Button.astro';
import Card from '@/components/ui/Card.astro';

// Importar secciones completas
import HeroSection from '@/components/sections/HeroSection.astro';

// Importar layout
import Header from '@/components/layout/Header.astro';
---

<Header />
<main>
  <HeroSection />

  <Card variant="elevated">
    <h2>Mi Contenido</h2>
    <Button variant="primary" href="#contacto">
      Contactar
    </Button>
  </Card>
</main>
```

## Props y Configuración

Cada componente está documentado con TypeScript interfaces para sus props. Consulta cada archivo individual para ver las opciones disponibles.