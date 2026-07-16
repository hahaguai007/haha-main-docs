import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/",
  title: "我的文档项目",
  description: "项目文档站点",
  themeConfig: {
    logo:'/panda.svg',
    outline:[2,6],
    outlineTitle:'目录',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: 'Java', link: '/java/lambda' },
      { text: 'GraalVM', link: '/graalvm/mis' },
      { text: 'JavaScript', link: '/javaScript/compute' },
      { text: 'Electron', link: '/electron/init' },
      { text: '网络', link: '/network/huaiwei' },
    ],

    sidebar: [
      {
        text: 'Java',
        items: [
          { text: 'lambda', link: '/java/lambda' },
          { text: 'stream', link: '/java/stream' },
          { text: 'SpringBoot项目远程调试', link: '/java/debug-jvm' },
        ]
      },
      {
        text: 'graalvm',
        items: [
          { text: '安装', link: '/graalvm/mis' },
          { text: 'Java 打包', link: '/graalvm/java' },
          { text: 'Springboot 打包', link: '/graalvm/springboot' },
        ]
      },
      {
        text: 'JavaScript',
        items: [
          { text: 'Map、Set、数组和对象操作', link: '/javaScript/compute' },
          { text: 'Map集合', link: '/javaScript/map' },
          { text: 'Set集合', link: '/javaScript/set' },
          { text: '数组[]操作', link: '/javaScript/array' },
          { text: '对象Object操作', link: '/javaScript/object' },
          { text: 'reduce函数', link: '/javaScript/reduce' },
        ]
      },
      {
        text: 'vue',
        items: [
          { text: '简单', link: '/vue/index' },
        ]
      },
      {
        text: 'electron',
        items: [
          { text: '创建', link: '/electron/init' },
          { text: '打包', link: '/electron/build' },
          { text: '集成React和AntDesign', link: '/electron/inRect' },
          { text: 'Java + Electron 打包', link: '/electron/jeg' },
          { text: 'Springboot + Electron 打包', link: '/electron/seg' },
          { text: 'Springboot Http调用', link: '/electron/shttp' },
        ]
      },
      {
        text: 'network',
        items: [
          { text: '华为交换机', link: '/network/huaiwei' },
        ]
      },
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
