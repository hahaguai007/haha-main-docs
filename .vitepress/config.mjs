import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/haha-main-docs/",
  title: "我的文档项目",
  description: "项目文档站点",
  themeConfig: {
    logo:'/icon-note.png',
    outline:[2,6],
    outlineTitle:'目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/java/' },
      { text: 'JavaScript', link: '/js/' },
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
          { text: '计算', link: '/js/index' },
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
      copyright:'Copyright@2024 haha'
    }
  }
})
