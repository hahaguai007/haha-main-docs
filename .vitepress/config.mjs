import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/haha-main-docs/",
  title: "我的文档项目",
  description: "项目文档站点",
  themeConfig: {
    logo:'/panda.svg',
    outline:[2,6],
    outlineTitle:'目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'JavaScript', link: '/javaScript/' },
    ],

    sidebar: [
      {
        text: 'Java',
        items: [
          { text: 'lamda表达式', link: '/java/index' },
          { text: 'streams', link: '/java/index1' }
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: '计算', link: '/javaScript/index' },
        ]
      },
      {
        text: 'vue',
        items: [
          { text: '简单', link: '/vue/index' },
        ]
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/hahaguai007' }
    ],
    footer:{
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2017-present Haha'
    }
  }
})
