module.exports = {
  base:'/Components-practice/',
  title: 'wkcUI',
  description: '学习vue',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      {
        title: '入门',
        children: [
          '/install/',
          '/get-started/',
        ]
      },
      {
        title: '组件',
        children: [
          '/components/button',
          '/components/grid',
          '/components/input',
          '/components/layout'

        ]
      }
    ]
  }
}