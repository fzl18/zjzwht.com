module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: '真家真味',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '真家真味海苔' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
	css: ['~assets/css/main.less','aos/dist/aos.css'],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
	plugins: [
		{ src: '~plugins/iview', ssr: false }
	],
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
//     extend (config, { isDev, isClient }) {
//       if (isDev && isClient) {
//         config.module.rules.push({
//           enforce: 'pre',
//           test: /\.(js|vue)$/,
//           loader: 'eslint-loader',
//           exclude: /(node_modules)/
//         })
//       }
//     }
	vendor: ['aos'],
  }
}

