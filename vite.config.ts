import react, { reactCompilerPreset } from '@vitejs/plugin-react'
import babel from '@rolldown/plugin-babel'
import { defineConfig } from 'vite'
import path from "path"

// https://vite.dev/config/
export default defineConfig({
  base: "/portfolio/",
  plugins: [
    react(),
    babel({ presets: [reactCompilerPreset()] })
  ],
  resolve: {
    alias: {
      "$utils": path.resolve(__dirname, "./src/lib/utils"),
      "$hooks": path.resolve(__dirname, "./src/lib/hooks"),
      "$components": path.resolve(__dirname, "./src/lib/components"),
      "$types": path.resolve(__dirname, "./src/lib/types"),
     }
   }
})
