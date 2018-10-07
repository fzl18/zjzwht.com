<template>
    <section>        
        <section id="index">
            <div
                data-aos="fade-down"
                data-aos-duration="1000"
                data-aos-delay="1150"
                data-aos-easing="ease-in-out"
                data-aos-anchor-placement="top-center"
                class="txt"
            >
                首页动画
            </div>
        </section>
        <main>
            <section v-for="(item,index) in lang[local].menu" :id="`part-${index + 1}`">
                <Menu v-if="index == 0" />
                <div :is="`part${index +1}`" />
            </section>
        </main>
        <footer>foot</footer>
        <!-- other -->
        <Topblock v-model="topShow" />
        <LeftSide v-model="leftShow"/>
    </section>  
</template>

<script>
import {mapState} from "vuex"
import Menu from '../components/menu'
import LeftSide from '../components/leftSide'
import Topblock from '../components/topblock'
import Part1 from '../components/part/part1'
import Part2 from '../components/part/part2'
import Part3 from '../components/part/part3'
import Part4 from '../components/part/part4'
import Part5 from '../components/part/part5'
import Part6 from '../components/part/part6'
import Part7 from '../components/part/part7'
export default {
    components:{
        Menu,LeftSide,Topblock, Part1, Part2, Part3, Part4, Part5, Part6, Part7
    },
    data () {
        return{
        }
    },
    computed:
        mapState(['lang','local','skin','topShow','leftShow'])
    ,
    created(){
        
    },
    mounted () {
        const AOS = require('aos')
        AOS.init()
        let curSkin
        if(localStorage.skin){
            this.$store.commit('changeSkin',localStorage.skin)
            curSkin = localStorage.skin
        }else{
            curSkin = this.skin
        }         
        require(`../static/skin/${curSkin}/style.less`)
    },
    methods:{

    }
    // render (h) {
    //     return (
    //     )
    // }
}
</script>

<style lang="less" scoped>

</style>

