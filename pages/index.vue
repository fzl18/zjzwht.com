<template>
    <section>
        <div
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="1150"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
        >
            <Menu />
        </div>
        <section>
            <Topblock v-model="topShow" />
        </section>
        <section>
            <LeftSide />
        </section>
        <section></section>
        <section></section>
        <section></section>
        <section></section>
        <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="50"
            data-aos-easing="ease-in-out"
            data-aos-anchor-placement="top-center"
        >
            <div @click="topShow = !topShow ">{{topShow ? '隐藏':'显示'}}</div> 
        </div>    
    </section>  
</template>

<script>
import Menu from '../components/menu'
import LeftSide from '../components/leftSide'
import Topblock from '../components/topblock'
export default {
    components:{
        Menu,LeftSide,Topblock
    },
    data () {
        return{
            topShow:false
        }
    },    
    mounted () {
        const AOS = require('aos')
        AOS.init()
    },
    // render (h) {
    //     return (
    //     )
    // }
}
</script>

<style lang="less" scoped>

</style>

