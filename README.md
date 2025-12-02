# Due Draghi Design System

A unified design system for Due Draghi applications, providing consistent styling, components, and utilities across all projects.

## Structure

```
due-draghi-design-system/
├── css/
│   ├── tokens.css      # Design tokens (colors, spacing, typography)
│   ├── main.css        # Base styles + all components
│   └── utilities.css   # Utility classes
├── templates/          # Reusable Templ components
│   ├── button.templ
│   ├── card.templ
│   └── form.templ
├── js/                 # JavaScript utilities
│   ├── htmx-setup.js
│   └── form-utils.js
└── README.md
```

## Installation

### For Go/Templ Projects

Add as a local module:

```bash
# In your go.mod
replace github.com/emiliopalmerini/due-draghi-design-system => ../due-draghi-design-system

# Then run
go mod tidy
```

Import in your Go code:

```go
import designsystem "github.com/emiliopalmerini/due-draghi-design-system/templates"
```

### CSS Integration

```html
<link rel="stylesheet" href="/path/to/tokens.css"/>
<link rel="stylesheet" href="/path/to/main.css"/>
<link rel="stylesheet" href="/path/to/utilities.css"/>
```

### JavaScript Integration

```html
<script src="/path/to/htmx-setup.js"></script>
<script src="/path/to/form-utils.js"></script>
```

## Design Tokens

### Colors
- `--butterscotch: #E19E43` - Golden orange primary
- `--celestial-blue: #2493D0` - Main blue
- `--bittersweet-shimmer: #CF4C56` - Red accent
- `--earth-yellow: #EFBB77` - Yellow highlights
- `--reseda-green: #766F55` - Olive green

### Semantic Colors
- `--primary-color`, `--secondary-color`, `--accent-color`
- `--success-color`, `--error-color`, `--warning-color`

### Spacing Scale
- `--space-1` (4px) through `--space-32` (128px)

### Typography
- `--font-size-xs` (12px) through `--font-size-4xl` (36px)
- `--font-weight-light` (300) through `--font-weight-extrabold` (800)

## Components

### Buttons
- `.btn`, `.btn-primary`, `.btn-secondary`
- `.btn-small`, `.btn-large`

### Cards
- `.card`, `.form-panel`, `.result-card`
- `.info-tiles`, `.elegant-description`, `.site-banner`

### Forms
- `.form-group`, `.form-label`, `.form-input`, `.form-select`
- `.radio-group`, `.radio-option`
- `.character-level-input`, `.form-help`, `.form-error`

### Calculator
- `.calculator-layout`, `.calculator-results`
- `.difficulty-trivial`, `.difficulty-easy`, `.difficulty-medium`, `.difficulty-hard`, `.difficulty-deadly`

### Loading
- `.loading-spinner`, `.spinner`

## Utility Classes

- Display: `.hidden`, `.block`, `.flex`, `.grid`
- Flexbox: `.flex-col`, `.items-center`, `.justify-between`, `.gap-4`
- Spacing: `.m-0`, `.mt-4`, `.mb-4`, `.p-4`, `.px-4`, `.py-4`
- Text: `.text-center`, `.font-bold`, `.text-sm`, `.text-primary`
- Responsive: `.md\:hidden`, `.md\:block`

## Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## Features

- Dark mode support (system preference)
- Accessibility features (focus states, ARIA labels, touch targets)
- Reduced motion support
- HTMX loading states
- Form validation utilities

## License

Private - Due Draghi Projects
