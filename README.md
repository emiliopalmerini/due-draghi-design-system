# Due Draghi Design System

A clean, minimal design system built on Notion-like aesthetics. Designed for simplicity and consistency across applications.

## Features

- **Notion-inspired palette**: Red/Crimson primary colors with Cyan accents
- **Minimalist design**: Clean lines, subtle shadows, and spacious layouts
- **Templ components**: Reusable Go Templ components for rapid UI development
- **Responsive**: Mobile-first approach with responsive utilities
- **Accessibility**: WCAG 2.1 compliant with proper focus states and semantic HTML
- **Dark mode**: Full dark mode support via `prefers-color-scheme`
- **Reduced motion**: Respects user motion preferences

## Quick Start

### Include the CSS

```html
<link rel="stylesheet" href="/static/css/tokens.css"/>
<link rel="stylesheet" href="/static/css/main.css"/>
<link rel="stylesheet" href="/static/css/utilities.css"/>
```

### Use Templ Components

```go
import "due-draghi-design-system/designsystem"

// In your template:
@designsystem.Button("Click me", "primary", templ.Attributes{})
@designsystem.Card(
  designsystem.CardHeader("Title", "Description"),
)
```

## Color Palette

### Primary Colors
- **Primary**: `#EF4444` (Red)
- **Primary Dark**: `#DC2626` (Dark Red)
- **Primary Light**: `#FEE2E2` (Light Red)
- **Secondary**: `#06B6D4` (Cyan)

### Semantic Colors
- **Success**: `#10B981` (Green)
- **Warning**: `#F59E0B` (Amber)
- **Error**: `#EF4444` (Red)

### Grayscale
- Ranges from `--gray-50` (lightest) to `--gray-900` (darkest)
- **Text Primary**: `#37352f` (Notion-inspired dark)
- **Text Light**: `#787774` (Notion-inspired gray)

## Components

### Buttons

```go
@designsystem.Button("Primary", "primary", templ.Attributes{})
@designsystem.Button("Secondary", "secondary", templ.Attributes{})
@designsystem.Button("Ghost", "ghost", templ.Attributes{})
@designsystem.Button("Small", "sm", templ.Attributes{})
@designsystem.ButtonLink("Link Button", "/path", "primary")
```

### Cards

```go
@designsystem.Card(
  designsystem.CardHeader("Card Title", "Optional description"),
)

@designsystem.FormPanel("Form Title",
  // form content
)

@designsystem.ResultCard(
  // result content
)

@designsystem.InfoTile("Tile Title", "Tile description")

@designsystem.CollectionCard("Item", "Subtitle", "/path", "Badge")
```

### Forms

```go
@designsystem.FormGroup("Label", "fieldname", "text", "", templ.Attributes{})
@designsystem.FormSelect("Label", "fieldname", options, selectedValue)
@designsystem.RadioGroup("fieldname", options, selectedValue)
@designsystem.FormHelp("Help text")
@designsystem.FormError("Error message")
@designsystem.FlashMessage("Message", "success") // or "error"
```

### Layout

```go
@designsystem.BaseLayout(pageData)
@designsystem.Header("Page Title", "Optional subtitle")
@designsystem.PageSection("Section Title",
  // content
)
```

## Spacing Scale

- `--space-1`: 0.25rem (4px)
- `--space-2`: 0.5rem (8px)
- `--space-3`: 0.75rem (12px)
- `--space-4`: 1rem (16px)
- `--space-6`: 1.5rem (24px)
- `--space-8`: 2rem (32px)
- `--space-12`: 3rem (48px)

## Typography

- **Font**: System sans-serif (SF Pro Display, Segoe UI, etc.)
- **Monospace**: SFMono-Regular, Consolas, etc.

Font sizes range from `--font-size-xs` (0.75rem) to `--font-size-4xl` (2.25rem).

## Utilities

Use utility classes for quick styling:

- **Display**: `flex`, `flex-col`, `flex-wrap`, `hidden`, `block`, `inline-block`
- **Spacing**: `m-4`, `mb-6`, `p-3`, `px-4`, `py-2`, `gap-4`
- **Text**: `text-center`, `text-sm`, `font-bold`, `text-primary`, `truncate`
- **Colors**: `text-primary`, `bg-white`, `border-primary`
- **Sizing**: `w-full`, `h-full`, `min-h-screen`
- **Border**: `border`, `border-b`, `rounded-lg`, `rounded-full`
- **Shadow**: `shadow-sm`, `shadow-md`, `shadow-lg`

## Responsive Design

Built-in responsive behavior:
- Mobile-first approach
- Touch-friendly sizing (44px minimum tap targets)
- Flexible grid layouts
- Optimized for 640px, 768px, and 1024px+ breakpoints

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties
- `prefers-color-scheme` media query

## License

MIT
