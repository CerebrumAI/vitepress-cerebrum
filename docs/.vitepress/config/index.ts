import { defineConfig } from 'vitepress'
import { shared } from './shared'
import { pt } from './pt'

export default defineConfig({
  ...shared,
  locales: {
    root: { label: 'Português', ...pt }
  },
  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.includes('-')
      }
    }
  }
})
