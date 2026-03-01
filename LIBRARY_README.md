# MyLibrary

A React component library built with Material-UI and TypeScript. This library provides reusable, styled components that can be used across multiple projects.

## Features

- 🎨 Built with Material-UI (MUI)
- 📦 Fully typed with TypeScript
- 🚀 Tree-shakeable exports
- 🎯 Customizable theme
- 📱 Responsive components
- 💅 Styled with emotion

## Installation

```bash
npm install @sayya/mylibrary
```

or with yarn:

```bash
yarn add @sayya/mylibrary
```

## Quick Start

### Using the entire library with theme:

```tsx
import { ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import { Button, theme } from '@sayya/mylibrary'

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Button label="Click me" />
    </ThemeProvider>
  )
}
```

### Using individual components:

```tsx
import Button from '@sayya/mylibrary/button'

export default function MyComponent() {
  return <Button label="Submit" />
}
```

### Using the custom theme:

```tsx
import { theme } from '@sayya/mylibrary/theme'
import { ThemeProvider } from '@mui/material/styles'

function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* Your app content */}
    </ThemeProvider>
  )
}
```

## Components

### Button

A customized Material-UI Button component with predefined styling.

**Props:**
- `label?: string` - Button text (alternative to children)
- All standard MUI ButtonProps are supported

**Example:**

```tsx
<Button 
  label="Primary Button" 
  onClick={handleClick}
/>

<Button 
  label="Secondary" 
  color="secondary"
/>

<Button 
  label="Disabled" 
  disabled
/>
```

## Theme

The library includes a customized MUI theme with the following features:

- **Primary Color:** `#1976d2`
- **Secondary Color:** `#dc004e`
- **Button Styling:**
  - Padding: 8px
  - Font Size: 12px
  - Font Weight: 400

To use and extend the theme:

```tsx
import { theme } from '@sayya/mylibrary/theme'
import { createTheme } from '@mui/material/styles'

const customTheme = createTheme({
  ...theme,
  palette: {
    ...theme.palette,
    primary: {
      main: '#your-color',
    },
  },
})
```

## Building

To build the library:

```bash
npm run build
```

This generates:
- ES Module: `dist/index.es.js`
- UMD Module: `dist/index.umd.cjs`
- TypeScript Definitions: `dist/index.d.ts`

## Development

To start the development server:

```bash
npm run dev
```

## Publishing to npm

1. Update the version in `package.json`
2. Build the library: `npm run build`
3. Publish: `npm publish --access public`

Note: Make sure to update the `repository.url` in `package.json` with your actual GitHub repository URL.

## License

MIT

## Author

Your Name
