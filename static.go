package designsystem

import "embed"

// StaticFiles contains all CSS and JavaScript files embedded in the binary.
// These files can be served directly via http.FileServer.
//
// Usage:
//   import designsystem "github.com/emiliopalmerini/due-draghi-design-system"
//   http.Handle("/design-system/", http.StripPrefix("/design-system/", http.FileServer(http.FS(designsystem.StaticFiles))))
//
//go:embed css/*.css js/*.js
var StaticFiles embed.FS
