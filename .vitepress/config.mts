import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "DTI Notes",
  description: "Digital Technology and Innovation Study Notes",
  head: [['link', { rel: 'icon', href: '/favicon.png' }]],
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'DTI', link: '/DTI/terminal' },
      { text: 'Git & GitHub', link: '/DTI/GitHub' }
    ],

    search: {
      provider: 'local'
    },

    sidebar: [
      {
        text: 'DTI',
        items: [
          { text: 'Terminal', link: '/DTI/terminal' },
          { text: 'Git & GitHub', link: '/DTI/GitHub' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/tshewangrinzin/dti-notes' }
    ]
  }
})
