import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import dts from 'vite-plugin-dts'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react({
      babel: {
        plugins: [['babel-plugin-react-compiler']],
      },
    }),
    dts({
      entryRoot: "src",
  outDir: "dist",
  tsconfigPath: "./tsconfig.json",
  exclude: ["vite.config.ts", "**/*.test.ts", "**/*.stories.tsx"]
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MyLibrary',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format}.js`,
    },
    rollupOptions: {
      external: ['react',
  'react-dom',
  '@mui/material',
  '@mui/system',
  '@mui/icons-material',
  '@emotion/react',
  '@emotion/styled',
  'styled-components'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
          '@mui/material': 'MUI',
          '@emotion/react': 'Emotion',
          '@emotion/styled': 'EmotionStyled',
        },
      },
    },
  },
})
