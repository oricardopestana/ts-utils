import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "TS-utils",
  description: "Utils for TypeScript",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Utility types', link: '/utility-types' }
    ],

    sidebar: [
      {
        text: 'ts-utils',
        items: [
          { text: 'Utility types', link: '/utility-types' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/oricardopestana/ts-utils' },
      { icon: 'npm', link: 'https://www.npmjs.com/package/@oricardopestana/ts-utils' }
    ]
  }
})
