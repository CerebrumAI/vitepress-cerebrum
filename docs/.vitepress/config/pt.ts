import { createRequire } from 'module'
import { defineConfig, type DefaultTheme } from 'vitepress'

const require = createRequire(import.meta.url)
// const pkg = require('vitepress/package.json')
const pkg = { version: '1.0.0' }

export const pt = defineConfig({
  lang: 'pt-BR',
  description:
    'Descubra como a metodologia “AI” pode impulsionar o seu negócio com “Leads Qualificados” prontos para comprara ✨',

  themeConfig: {
    nav: nav(),

    sidebar: {
      '/guide/': { base: '/guide/', items: sidebarGuide() },
      '/reference/': { base: '/reference/', items: sidebarReference() }
    },

    editLink: {
      pattern:
        'https://github.com/CerebrumAI/vitepress-cerebrum/edit/main/docs/:path',
      text: 'Edite esta página no GitHub'
    },

    footer: {
      message: 'Lançado sob a licença MIT.',
      copyright: 'Copyright © 2005-present 🍀'
    }
  }
})

function nav(): DefaultTheme.NavItem[] {
  return [
    {
      text: 'Guia',
      link: '/guide/what-is-cerebrum',
      activeMatch: '/guide/'
    },
    {
      text: 'Serviços',
      link: '/reference/servicos',
      activeMatch: '/reference/'
    },
    {
      text: 'Portfólio',
      link: '/reference/portfolio',
      activeMatch: '/reference/'
    },
    {
      text: pkg.version,
      items: [
        {
          text: 'Changelog',
          link: 'https://github.com/CerebrumAI/vitepress-cerebrum/blob/main/CHANGELOG.md'
        },
        {
          text: 'Contributing',
          link: 'https://github.com/CerebrumAI/vitepress-cerebrum/blob/main/.github/contributing.md'
        }
      ]
    }
  ]
}

function sidebarGuide(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Introdução',
      collapsed: false,
      items: [
        { text: 'O que é Cerebrum?', link: 'what-is-cerebrum' },
        { text: 'Experimente', link: 'getting-started' }
      ]
    },
    { text: 'Serviços', base: '/reference/', link: 'servicos' },
    { text: 'Portfólio', base: '/reference/', link: 'portfolio' }
  ]
}

function sidebarReference(): DefaultTheme.SidebarItem[] {
  return [
    {
      text: 'Referência',
      items: [
        { text: 'Serviços', link: 'servicos' },
        {
          text: 'Componentes',
          base: '/reference/servicos-',
          items: [
            { text: 'Pagina 1', link: 'sub-pagina-1' },
            { text: 'Pagina 2', link: 'sub-pagina-1' }
          ]
        },
        { text: 'Portfólio', link: 'portfolio' },
        {
          text: 'Apps',
          base: '/reference/portfolio-',
          items: [
            { text: 'Pagina 1', link: 'sub-pagina-1' },
            { text: 'Pagina 2', link: 'sub-pagina-1' }
          ]
        }
      ]
    }
  ]
}
