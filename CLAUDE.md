# Due Draghi Design System

Shared Go library providing Notion-inspired design system components using templ templates.

## Build Commands

```bash
# Generate templ files and build
templ generate && go build ./...

# Run tests
go test ./...

# Format check
templ fmt --fail templates/
go fmt ./...
```

## Project Structure

- `templates/` - Templ component files (button.templ, card.templ, form.templ, layout.templ)
- `css/` - CSS stylesheets (tokens, main, utilities)
- `js/` - JavaScript files
- `docs/` - Documentation

## Library Usage

This is a library module with no main binary. Import in your Go application:

```go
import "github.com/emiliopalmerini/due-draghi-design-system/templates"
```

## Available Components

- **Button**: Primary, secondary, ghost variants with size options
- **ButtonLink**: Anchor-styled buttons
- **Card**: Container with optional header
- **FormPanel**: Styled form container
- **ResultCard**: Result display component
- **InfoTile**: Information tile with title and description
- **CollectionCard**: Card with title, subtitle, path, and badge
- **FormGroup**: Label + input combination
- **FormSelect**: Dropdown select component
- **RadioGroup**: Radio button group
- **FormHelp/FormError**: Form feedback components
- **FlashMessage**: Success/error notification
- **BaseLayout**: Page wrapper with common structure
- **Header**: Page header with title and subtitle
- **PageSection**: Section container with title
