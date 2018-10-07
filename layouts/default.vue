<template>
  <div class="layout">
    <nuxt/>
  </div>
</template>
<script>

export default {
//   head: {
//         script: [
//             { src: 'https://unpkg.com/aos@next/dist/aos.js' }
//         ],
//         link: [
//             { rel: 'stylesheet', href: 'https://unpkg.com/aos@next/dist/aos.css' }
//         ]
//     },

  data(){
    return{
    }
  },
  // computed:
  //   mapState(['lang','local','skin','topShow','leftShow'])
  // ,
  // created(){
  //   require(`../static/skin/${this.skin}/style.less`) 
  // },
  mounted(){
    
  },
  methods:{
    init(){
      this.isMobile()
    },
    isMobile() {
      let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
      // this.isMobile = (flag && flag.length) >0 ? true : false
    },
  }
}
</script>

<style lang="less" scoped>
  
</style>

